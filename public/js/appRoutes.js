angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/guides', {
			templateUrl: 'views/guide.html',
			controller: 'GuideController'
		});

	$locationProvider.html5Mode(true);

}]);
