'use strict';
myAppModule.factory('ProductDataService', function() {
    var service = {};

    //sample data
    var products = [
      {
        id: 1,
        name: 'Polo Satu',
        price: 15000,
        properties: 
        [
          { 
            name:'Category', 
            value:'Laki-Laki' 
          }, 
          { 
            name:'Brand', 
            value:'Polo' 
          },
          {
            name:"Color",
            value:"Red"
          },
          {
            name:"Size",
            value:"Small"
          }
        ]
      },

      {
        id: 2,
        name: 'Polo Dua',
        price: 12000,
        properties: 
        [
          { 
            name:'Category', 
            value:'Laki-Laki' 
          },

          { 
            name:'Brand', 
            value:'Polo'
          },
          {
            name:"Color",
            value:"Red"
          },
          {
            name:"Size",
            value:"Small"
          }
        ]
      },
      {
        id: 3,
        name: 'Polo Tiga',
        price: 12000,
        properties: 
        [
          { 
            name:'Category', 
            value:'Perempuan' 
          },
           
          { 
            name:'Brand', 
            value:'Polo'
          },
          {
            name:"Color",
            value:"Black"
          },
          {
            name:"Size",
            value:"Large"
          }
        ]
      },   
    ];


    service.getSampleData = function() 
    {

      return products;
    };

    return service;
  });