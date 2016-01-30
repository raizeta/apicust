'use strict';
myappmodule.factory('ProductDataService', function() {
    var service = {};

    //sample data
    var products = [
      {
        name: 'apple',
        properties: 
        [
          { name:'category', value:'medium' }, 
          { name:'brand', value:'weird' }
        ]
      },

      {
        name: 'apple',
        properties: 
        [
          { name:'category', value:'small' }, 
          { name:'brand', value:'sphere'}
        ]
      },   
    ];


    service.getSampleData = function() 
    {
      return products;
    };

    return service;
  });