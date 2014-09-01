define(['angularAMD', 'angular-route'], function (angularAMD) {
  var app = angular.module("webapp", ['ngRoute']);
  app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/home", angularAMD.route({
        templateUrl: 'views/main.html', controller: 'HomeCtrl', controllerUrl: 'controller/ctrl1'
    }))
    .when("/view1", angularAMD.route({
        templateUrl: 'views/view1.html', controller: 'View1Ctrl', controllerUrl: 'controller/ctrl2'
    }))
    .otherwise({redirectTo: "/home"});
  });  
  angularAMD.bootstrap(app);  
  return app;
});
