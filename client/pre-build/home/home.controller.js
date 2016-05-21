app.controller('HomeController', function($scope, $http, HomeFactory) {
  
	$scope.ungreatThings;

	$scope.getUngreatThings = function() {
		HomeFactory.getUngreatThings()
			.then(function(data) {

				$scope.ungreatThings = data;
				console.log($scope.ungreatThings);

			})
			.catch(function(err) {
				console.error(err);
			});
	}

});