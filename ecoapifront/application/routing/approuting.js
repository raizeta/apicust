myappmodule.config(function($stateProvider,$urlRouterProvider)
{
	$stateProvider.state('home',
	{
		url: '/',
		templateUrl: 'application/partial/app/home.html',
		controller: 'HomeController'
	});
});