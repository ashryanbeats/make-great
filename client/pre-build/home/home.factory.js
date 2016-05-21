app.factory('HomeFactory', function($http) {
	return {
		getUngreatThings: _getUngreatThings
	}

	function _getUngreatThings () {

		return $http.get('/api/wikipedia')
			.then(function(res) {
				return res.data;
			})
			.catch(function(err) {
				console.error('HomeFactory error: ', err);
			})
	}
})