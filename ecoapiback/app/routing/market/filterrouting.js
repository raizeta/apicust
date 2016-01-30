'use strict';
myAppModule.config(function($stateProvider,$urlRouterProvider)
{
	$stateProvider.state('filter',{
		url: '/filter',
		templateUrl: 'app/partial/filter/checkboxfilter.html',
		controller: 'angularController'
	});
});