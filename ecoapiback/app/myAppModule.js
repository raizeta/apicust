'use strict';

var myAppModule = angular.module('myAppModule',
                  ['ui.router','ui.bootstrap','chieffancypants.loadingBar',
                    'ngAnimate','ui.select2','naif.base64','ivh.treeview','ngCart']);

myAppModule.config(function(cfpLoadingBarProvider)
 {
    cfpLoadingBarProvider.includeSpinner = true;
});

myAppModule.config(function(ivhTreeviewOptionsProvider) {
 ivhTreeviewOptionsProvider.set({
   defaultSelectedState: false,
   validate: true,
   labelAttribute: 'label',
    childrenAttribute: 'children',
    selectedAttribute: 'selected',
    twistieExpandedTpl: '',
    twistieCollapsedTpl: '',
    twistieLeafTpl: '',
    useCheckboxes: true
 });
});

myAppModule.run(['$rootScope', '$state', '$stateParams','$window','uiSelect2Config',
function ($rootScope,   $state,   $stateParams,$window,uiSelect2Config)
{
    //Global Configuration For Select2
    uiSelect2Config.placeholder = "Placeholder text";

    //Global Configuration For Animation While Route Change
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    //Global Configuration For Check Internet Connection
    $rootScope.online = navigator.onLine;
      $window.addEventListener("offline", function () 
      {
        $rootScope.$apply(function() 
        {
          $rootScope.online = false;
        });
      }, false);

      $window.addEventListener("online", function () 
      {
        $rootScope.$apply(function() 
        {
          $rootScope.online = true;
        });
      }, false);

    $rootScope.$on('$routeChangeStart', function() 
    {

    });

    $rootScope.$on('$routeChangeSuccess', function() 
    {

    });

}]);