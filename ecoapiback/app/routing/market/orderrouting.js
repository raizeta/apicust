'use strict';
myAppModule.config(function($stateProvider,$urlRouterProvider)
{
	$stateProvider.state('order',{
		url: '/order',
		templateUrl: 'app/partial/market/index.html',
	});
	$stateProvider.state('order.requestorder',{
		url: '/requestorder',
		views: 
		{
			'order': 	
			{
				templateUrl: 'app/partial/market/order/listrequestorder.html',
				controller: 'RequestOrderController'
			}
		}
	});
	$stateProvider.state('order.purchaseorder',{
		url: '/purchaseorder',
		views: 
		{
			'order': 	
			{
				templateUrl: 'app/partial/market/order/listpurchaseorder.html',
				controller: 'PurchaseOrderController'
			}
		}
	});
	$stateProvider.state('order.allorder',{
		url: '/allorder',
		views: 
		{
			'order': 	
			{
				templateUrl: 'app/partial/market/order/listallorder.html',
				controller: 'AllOrderController'
			}
		}
	});
});