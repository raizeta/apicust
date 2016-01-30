myAppModule.controller('BrandController',['$scope','$http','catalogServices','$timeout',
function($scope,$http,catalogServices,$timeout)
{
	$scope.getBrands = function()
    {
        catalogServices.getBrands()
    	.then(function(result)
    	{
    		$scope.brandlists = result;
    	});
    }
    $scope.getBrands();
}]);

myAppModule.controller('ProductController',['$scope','$http','catalogServices','$timeout','ivhTreeviewMgr','ngCart','ProductDataService',
function($scope,$http,catalogServices,$timeout,ivhTreeviewMgr,ngCart,ProductDataService)
{
    $scope.getProducts = function()
    {
        catalogServices.getProducts()
        .then(function(result)
        {
            $scope.productlists = result;

        });
    }
    $scope.getProducts();

    
}]);

myAppModule.controller('NewProductController',['$scope','$http','catalogServices','$timeout',
function($scope,$http,catalogServices,$timeout)
{

    $scope.select2Options = 
    {
        allowClear:true
    };
    $scope.submitForm = function(productbaru)
    {
        $scope.gambars = productbaru;
        console.log($scope.gambars);
    }
}]);

myAppModule.controller('CategoryController',['$scope','$http','catalogServices','$timeout',
function($scope,$http,catalogServices,$timeout)
{
    $scope.getCategorys = function()
    {
        catalogServices.getCategorys()
        .then(function(result)
        {
            $scope.categorylists = result;
        });
    }
    $scope.getCategorys();
}]);

myAppModule.controller('SizeController',['$scope','$http','catalogServices','$timeout',
function($scope,$http,catalogServices,$timeout)
{
    $scope.getSizes = function()
    {
        catalogServices.getSizes()
        .then(function(result)
        {
            $scope.sizelists = result;
        });
    }
    $scope.getSizes();
}]);

myAppModule.controller('ColorController',['$scope','$http','catalogServices','$timeout',
function($scope,$http,catalogServices,$timeout)
{
    $scope.getColors = function()
    {
        catalogServices.getColors()
        .then(function(result)
        {
            $scope.colorlists = result;
        });
    }
    $scope.getColors();
}]);

myAppModule.controller('VariantController',['$scope','$http','catalogServices','$timeout',
function($scope,$http,catalogServices,$timeout)
{
    $scope.getVariants = function()
    {
        catalogServices.getVariants()
        .then(function(result)
        {
            $scope.variantlists = result;
        });
    }
    $scope.getVariants();
}]);

myAppModule.controller('LazyLoadController',['$scope','$http','catalogServices','$timeout',
function($scope,$http,catalogServices,$timeout)
{
    $scope.getLazyLoads = function()
    {
        catalogServices.getLazyLoads()
        .then(function(result)
        {
            $scope.lazyloads = result;
            console.log($scope.lazyloads);
        });
    }
    $scope.getLazyLoads();
}]);

myAppModule.controller('AllCatalogController',['$scope','$http','catalogServices','$timeout',
function($scope,$http,catalogServices,$timeout)
{
    $scope.select2Options = 
    {
        allowClear:true
    };
    $scope.brand="Medan";
    $scope.cat="laki-laki";
    $scope.col=1;
    // setInterval($scope.getData, 10000000);
}]);