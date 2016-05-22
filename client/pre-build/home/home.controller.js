app.controller('HomeController', function($scope, $http, HomeFactory) {
  
	$scope.numberOfThings = 1;

  	$scope.init = function() {
		$scope.ungreatThings = {};
		$scope.tweetThings = '';
		$scope.thingsArePresent = false;
		angular.element(document.querySelector('[id^="twitter-widget-"]')).remove();
	};
	$scope.init();

	$scope.getUngreatThings = function() {

		$scope.init();

		if ($scope.numberOfThings > 0 && $scope.numberOfThings <= 10) {
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
		}

	}

});