myAppModule.controller('angularController',['$scope','ProductDataService', 
function($scope, ProductDataService) 
{ 
    var products = ProductDataService.getSampleData();
    $scope.Fruits = products; //use $scope to expose to the view
    console.log( $scope.Fruits)
    //create checkbox filters on the fly with dynamic data
    var filters = [];

    _.each(products, function(result) 
    {
      _.each(result.properties, function(result) 
      {      
        var existingFilter = _.findWhere(filters, { name: result.name });

        if (existingFilter) 
        {


          var existingOption = _.findWhere(existingFilter.options, { value: result.value });
          if (existingOption) 
          {

            existingOption.count += 1;
          } 
          else 
          {

            existingFilter.options.push({ value: result.value, count: 1 }); 
          }   
        } 

        else 
        {

          var filter = {};
          filter.name = result.name;

          filter.options = [];

          filter.options.push({ value: result.value, count: 1 });

          filters.push(filter);      
        }   
      });
    });

    $scope.adasaja =
                [
                  {
                    name:"Category",
                    options:
                    [
                      {
                        count:1,
                        value:"Laki-Laki",
                      },
                      {
                        count:1,
                        value:"Perempuan",
                      }
                    ],
                  },
                  
                  {
                    name:"Brand",
                    options:
                    [
                      {
                        count:1,
                        value:"Polo",
                      },
                      {
                        count:1,
                        value:"Nike",
                      }
                    ],
                  },
                ];

    // console.log($scope.adasaja);
    $scope.Filters = filters;
    // console.log($scope.Filters);

}]);