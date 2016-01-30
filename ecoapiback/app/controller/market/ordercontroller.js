myAppModule.controller('RequestOrderController',['$scope','$http','orderServices','$timeout',
function($scope,$http,orderServices,$timeout)
{
	$scope.getRequestOrder = function()
    {
        orderServices.getRequestOrder()
    	.then(function(result)
    	{
    		$scope.requestlists = result.requestlist;
            console.log($scope.requestlists);
    	});
    }
    $scope.getRequestOrder();
}]);

myAppModule.controller('PurchaseOrderController',['$scope','$http','orderServices','$timeout',
function($scope,$http,orderServices,$timeout)
{
    $scope.getPurchaseOrder = function()
    {
        orderServices.getPurchaseOrder()
        .then(function(result)
        {
            $scope.purchaselists = result.purchaselist;
            console.log($scope.purchaselists);
        });
    }
    $scope.getPurchaseOrder();
}]);

myAppModule.controller('AllOrderController',['$scope','$http','orderServices','$timeout',
function($scope,$http,orderServices,$timeout)
{
    $scope.getAllOrder = function()
    {
        orderServices.getAllOrder()
        .then(function(result)
        {
            $scope.orderlists = result.orderlist;
            console.log($scope.orderlists);
        });
    }
    $scope.getAllOrder();
}]);
