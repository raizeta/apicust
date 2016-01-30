myappmodule.controller('HomeController',['$scope','ProductDataService', 
function($scope, ProductDataService) 
{ 
    var products = ProductDataService.getSampleData();

    $scope.Fruits = products; //use $scope to expose to the view
    
    //create checkbox filters on the fly with dynamic data
    var filters = [];

    _.each(products, function(product) 
    {
      _.each(product.properties, function(property) 
      {      
        var existingFilter = _.findWhere(filters, { name: property.name });

        if (existingFilter) 
        {
          var existingOption = _.findWhere(existingFilter.options, { value: property.value });
          if (existingOption) 
          {
            existingOption.count += 1;
          } 
          else 
          {
            existingFilter.options.push({ value: property.value, count: 1 }); 
          }   
        } 
        else 
        {
          var filter = {};
          filter.name = property.name;
          filter.options = [];
          filter.options.push({ value: property.value, count: 1 });
          filters.push(filter);      
        }   
      });
    });

    $scope.Filters = filters;


    this.toggleAll = function($event, includeAll) 
    {       
      _.each(filters, function(filterCategory) 
      {      
        _.each(filterCategory.options, function(option) 
        {
          option.IsIncluded = includeAll;
        });
      });    
    };
}]);
