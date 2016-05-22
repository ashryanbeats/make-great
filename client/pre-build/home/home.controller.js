app.controller('HomeController', function($scope, $http, HomeFactory) {
  
	$scope.numberOfThings = 1;
	$scope.minNumberOfThings = 1;
	$scope.maxNumberOfThings = 10;

  	$scope.init = function() {
		$scope.ungreatThings = {};
		$scope.tweetThings = '';
		$scope.thingsArePresent = false;
		$scope.inputError = false;

		// Remove any existing Tweet buttons
		angular.element(document.querySelector('[id^="twitter-widget-"]')).remove();
	};
	$scope.init();

	$scope.getUngreatThings = function() {

		if (!$scope.inputError) {
			$scope.init();

			HomeFactory.getUngreatThings($scope.numberOfThings)
				.then(function(data) {

					$scope.ungreatThings = data;

					Object.keys(data).forEach(function(key, index) {
						$scope.tweetThings += 'Make ' + data[key].title + ' great again! ';
					});

					$scope.thingsArePresent = true;

					return true;
				})
				.then(function(data) {

					// Generate Tweet button
					twttr.widgets.createShareButton(
						' ',
						document.querySelector('#tweet'),
						{
							text: $scope.tweetThings.trim(),
							hashtags: 'MakeGreat'
						}
					);

				})
				.catch(function(err) {

					console.error(err);

				});
		}
		else {

			// Handle input error
			$scope.inputError = true;
		}

	}

	$scope.validateInput = function() {
		if (
			$scope.numberOfThings >= $scope.minNumberOfThings && 
			$scope.numberOfThings <= $scope.maxNumberOfThings
		) {
			$scope.inputError = false;
			return true;
		}
		else {
			$scope.inputError = true;
			return false;
		}
	}

});