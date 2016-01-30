'use strict';
myAppModule.factory('orderServices', function($http,$q) 
{
	var getRequestOrder = function()
	{
		var deferred = $q.defer();
		var url = "http://localhost/sym/ecommerce/web/app_dev.php/api/requestorder";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response);
        })
        .error(function()
        {
            deferred.reject(error);
        });

        return deferred.promise;
	}

	var getPurchaseOrder = function()
	{
		var deferred = $q.defer();
		var url = "http://localhost/sym/ecommerce/web/app_dev.php/api/purchaseorder";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response);
        })
        .error(function()
        {
            deferred.reject(error);
        });

        return deferred.promise;
	}

	var getAllOrder = function()
	{
		var deferred = $q.defer();
		var url = "http://localhost/sym/ecommerce/web/app_dev.php/api/allorder";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response);
        })
        .error(function()
        {
            deferred.reject(error);
        });

        return deferred.promise;
	}

	return{
		getPurchaseOrder:getPurchaseOrder,
		getRequestOrder:getRequestOrder,
		getAllOrder:getAllOrder
	}
});