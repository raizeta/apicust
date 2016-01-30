'use strict';
myAppModule.config(function($stateProvider,$urlRouterProvider)
{
	$stateProvider.state('catalog.newproduct.information',{
		url: '/information',
		templateUrl: 'app/partial/market/catalog/newproduct/information.html',
		controller:'NewProductController'
	});	
	$stateProvider.state('catalog.newproduct.prices',{
		url: '/prices',
		templateUrl: 'app/partial/market/catalog/newproduct/information.html',
		controller:'NewProductController'
	});	
	$stateProvider.state('catalog.newproduct.seo',{
		url: '/seo',
		templateUrl: 'app/partial/market/catalog/newproduct/information.html',
		controller:'NewProductController'
	});
	$stateProvider.state('catalog.newproduct.association',{
		url: '/association',
		templateUrl: 'app/partial/market/catalog/newproduct/information.html',
		controller:'NewProductController'
	});	
	$stateProvider.state('catalog.newproduct.shipping',{
		url: '/shipping',
		templateUrl: 'app/partial/market/catalog/newproduct/information.html',
		controller:'NewProductController'
	});	
	$stateProvider.state('catalog.newproduct.combination',{
		url: '/combination',
		templateUrl: 'app/partial/market/catalog/newproduct/combination.html',
		controller:'NewProductController'
	});
	$stateProvider.state('catalog.newproduct.quantities',{
		url: '/quantities',
		templateUrl: 'app/partial/market/catalog/newproduct/information.html',
		controller:'NewProductController'
	});
	$stateProvider.state('catalog.newproduct.images',{
		url: '/images',
		templateUrl: 'app/partial/market/catalog/newproduct/information.html',
		controller:'NewProductController'
	});
	$stateProvider.state('catalog.newproduct.features',{
		url: '/features',
		templateUrl: 'app/partial/market/catalog/newproduct/information.html',
		controller:'NewProductController'
	});
	$stateProvider.state('catalog.newproduct.customization',{
		url: '/customization',
		templateUrl: 'app/partial/market/catalog/newproduct/information.html',
		controller:'NewProductController'
	});
});