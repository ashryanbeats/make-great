app.controller('HomeController', function($scope, $http, HomeFactory) {
  
	$scope.ungreatThings;
	$scope.numberOfThings = 1;

	$scope.getUngreatThings = function() {

		if ($scope.numberOfThings > 0 && $scope.numberOfThings <= 10)
			HomeFactory.getUngreatThings($scope.numberOfThings)
				.then(function(data) {

					$scope.ungreatThings = data;
					console.log($scope.ungreatThings);

				})
				.catch(function(err) {
					console.error(err);
				});
		else {
			// Handle input error
		}
	}

});