app.factory('HomeFactory', function($http) {
	return {
		getUngreatThings: _getUngreatThings
	}

	function _getUngreatThings (number) {

		return $http.get('/api/wikipedia?num_things=' + number)
			.then(function(res) {
				return res.data;
			})
			.catch(function(err) {
				console.error('HomeFactory error: ', err);
			})
	}
})