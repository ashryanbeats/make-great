app.factory('HomeFactory', function($http) {
	return {
		getUngreatThings: _getUngreatThings,
		appendTweetButtonSync: _appendTweetButtonSync,
		removeOldTwitterWidgetSync: _removeOldTwitterWidgetSync,
		initializeBootstrapTooltipSync: _initializeBootstrapTooltipSync
	}

	function _getUngreatThings(number) {

		return $http.get('/api/wikipedia?num_things=' + number)
			.then(function(res) {

				res.tweets = {};

				Object.keys(res.data).forEach(function(key, index) {
					res.tweets[index] = 'Make ' + res.data[key].title + ' great again!';
				});

				return res;
			})
			.catch(function(err) {
				console.error('HomeFactory error: ', err);
			})
	}

	function _appendTweetButtonSync(tweets) {
		// Generate Tweet button
		setTimeout(cycle);

		function cycle() {
			Object.keys(tweets).forEach(function(key, index) {
				twttr.widgets.createShareButton(
					' ',
					document.querySelector('#tweet-' + key),
					{
						text: tweets[key],
						hashtags: 'MakeGreat'
					}
				);
			});
		}
	}

	function _removeOldTwitterWidgetSync() {
		// Remove any existing Tweet buttons
		angular.element(document.querySelector('[id^="twitter-widget-"]')).remove();
	}

	function _initializeBootstrapTooltipSync(min, max) {
		angular.element(document.querySelector('#numberOfThings')).tooltip({
			container: 'body',
			title: 'Enter a number from ' + min + ' to ' + max
		});
	}
});