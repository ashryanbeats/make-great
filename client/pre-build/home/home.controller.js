app.controller('HomeController', function($scope, $http, HomeFactory) {
  
	$scope.numberOfThings = 1;
	$scope.minNumberOfThings = 1;
	$scope.maxNumberOfThings = 10;

  	$scope.init = function() {
		$scope.ungreatThings = {};
		$scope.tweetThings = '';
		$scope.thingsArePresent = false;
		$scope.inputError = false;

		HomeFactory.removeOldTwitterWidgetSync();
		HomeFactory.initializeBootstrapTooltipSync($scope.minNumberOfThings, $scope.maxNumberOfThings);
	};
	$scope.init();

	$scope.getUngreatThings = function() {

		if (!$scope.inputError) {
			$scope.init();

			HomeFactory.getUngreatThings($scope.numberOfThings)
				.then(function(res) {

					$scope.ungreatThings = res.data;
					$scope.tweetThings = res.tweets;
					$scope.thingsArePresent = true;

					HomeFactory.appendTweetButtonSync($scope.tweetThings);

					return true;
				})
				.catch(function(err) {

					console.error(err);

				});
		}
	}

	$scope.validateInput = function() {
		if (
			$scope.numberOfThings >= $scope.minNumberOfThings && 
			$scope.numberOfThings <= $scope.maxNumberOfThings
		) {
			$scope.inputError = false;
		}
		else {
			$scope.inputError = true;
		}
	}

});