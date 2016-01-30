myAppModule.controller('JsonController',['$scope','$http','jsonServices','$timeout',
function($scope,$http,jsonServices,$timeout)
{

    jsonServices.getProducts()
	.then(function(products)
	{	
		var produks =[];
    	_.each(products, function(result) 
	    {
	    	var existingFilter = _.findWhere(produks, { id: result.id });

	        if (existingFilter) 
        	{
      			existingFilter.varian.push
      			({
					variantid:result.variantid,
					variantsize:result.variantsize,
					variantcolor:result.variantcolor,
					variantprice:result.variantprice
				});	          	
        	}
        	else
        	{
				var produk = {};
				produk.varian =[];
	          	produk.id = result.id;
	          	produk.namaproduk 		= result.namaproduct;
	          	produk.brand 	  		= result.productBrand;
	          	produk.productCategory 	= result.productCategory;
	          	produk.varian.push
	          	({
					variantid:result.variantid,
					variantsize:result.variantsize,
					variantcolor:result.variantcolor,
					variantprice:result.variantprice
				});

	          	produks.push(produk); 	
        	}
	          
	    });
	    $scope.produklists = produks;
	    console.log($scope.produklists);
      
  	});
}]);

