app.controller('HomeController', function($scope, $http, HomeFactory) {
  
  $scope.msgFromScope = "...And I'm a message from the HomeController scope, just so you know that I work!";

  $scope.getUngreatThings = function() {
  	HomeFactory.getUngreatThings()
  		.then(function(data) {
  			console.log(data);
  		})
  		.catch(function(err) {
  			console.error(err);
  		});
  }

});