'use strict';
myAppModule.config(function($stateProvider,$urlRouterProvider)
{
	$stateProvider.state('json',{
		url: '/json',
		templateUrl: 'app/partial/json/json.html',
		controller: 'JsonController'
	});
});