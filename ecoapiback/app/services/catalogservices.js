'use strict';
myAppModule.factory('catalogServices', function($http,$q) 
{
	var catalog = {};
	catalog.getBrands = function()
	{
		var deferred = $q.defer();
		var url = "http://localhost/sym/ecommerce/web/app_dev.php/api/listbrand";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response.brandlist);
        })
        .error(function()
        {
            deferred.reject(error);
        });

        return deferred.promise;
	}

	catalog.getCategorys = function()
	{
		var deferred = $q.defer();
		var url = "http://localhost/sym/ecommerce/web/app_dev.php/api/listcategory";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response.categorylist);
        })
        .error(function()
        {
            deferred.reject(error);
        });

        return deferred.promise;
	}

	catalog.getColors = function()
	{
		var deferred = $q.defer();
		var url = "http://localhost/sym/ecommerce/web/app_dev.php/api/listcolor";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response.colorlist);
        })
        .error(function()
        {
            deferred.reject(error);
        });

        return deferred.promise;
	}
	catalog.getSizes = function()
	{
		var deferred = $q.defer();
		var url = "http://localhost/sym/ecommerce/web/app_dev.php/api/listsize";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response.sizelist);
        })
        .error(function()
        {
            deferred.reject(error);
        });

        return deferred.promise;
	}

	catalog.getProducts = function()
	{
		var deferred = $q.defer();
		var url = "http://localhost/sym/ecommerce/web/app_dev.php/api/listproduct";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  deferred.resolve(response.productlist);
        })
        .error(function()
        {
            deferred.reject(error);
        });

        return deferred.promise;
	}

	catalog.getVariants = function()
	{
		var deferred = $q.defer();
		var url = "http://localhost/sym/ecommerce/web/app_dev.php/api/listvariant";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  console.log(response.variantlist);
		  deferred.resolve(response.variantlist);
        })
        .error(function()
        {
            deferred.reject(error);
        });

        return deferred.promise;
	}
	catalog.getLazyLoads = function()
	{
		var deferred = $q.defer();
		var url = "http://localhost/sym/ecommerce/web/app_dev.php/api/listlazyproduct";
		var method ="GET";
		$http({method:method, url:url})
        .success(function(response) 
        {
		  console.log(response.lazyload);
		  deferred.resolve(response.lazyload);
        })
        .error(function()
        {
            deferred.reject(error);
        });

        return deferred.promise;
	}
	return catalog;
});