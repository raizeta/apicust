'use strict';
myAppModule.config(function($stateProvider,$urlRouterProvider)
{
	$stateProvider.state('catalog',{
		url: '/catalog',
		templateUrl: 'app/partial/market/index.html'
	});

	$stateProvider.state('catalog.product',{
		url: '/product',
		views: 
		{
			'listproduct': 	
			{
				templateUrl: "app/partial/market/catalog/listproduct.html",
				controller: "ProductController"
			}	
		}

	});

	$stateProvider.state('catalog.lazyload',{
		url: '/lazyload',
		views: 
		{
			'listproduct': 	
			{
				templateUrl: "app/partial/market/catalog/lazyload.html",
				controller: "LazyLoadController"
			}	
		}

	});

	$urlRouterProvider.when('/catalog/newproduct', '/catalog/newproduct/information');
	$stateProvider.state('catalog.newproduct',{
		url: '/newproduct',
		views:
		{
			'newproduct':
			{
				templateUrl: "app/partial/market/catalog/newproduct.html",
			}
		}
		
	});
	
	$stateProvider.state('catalog.brand',{
		url: '/brand',
		views: 
		{
			'listproduct': 	
			{
				templateUrl: 'app/partial/market/catalog/listbrand.html',
				controller: 'BrandController'
			}
		}
	});
	$stateProvider.state('catalog.category',{
		url: '/category',
		views: 
		{
			'listproduct': 	
			{
				templateUrl: 'app/partial/market/catalog/listcategory.html',
				controller: 'CategoryController'
			}
		}
	});
	$stateProvider.state('catalog.size',{
		url: '/size',
		views: 
		{
			'listproduct': 	
			{
				templateUrl: 'app/partial/market/catalog/listsize.html',
				controller: 'SizeController'
			}
		}
	});
	$stateProvider.state('catalog.color',{
		url: '/color',
		views: 
		{
			'listproduct': 	
			{
				templateUrl: 'app/partial/market/catalog/listcolor.html',
				controller: 'ColorController'
			}
		}
	});
	$stateProvider.state('catalog.variant',{
		url: '/variant',
		views: 
		{
			'listproduct': 	
			{
				templateUrl: 'app/partial/market/catalog/listvariant.html',
				controller: 'VariantController'
			}
		}
	});
});