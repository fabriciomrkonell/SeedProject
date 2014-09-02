define(['js/app'], function (app) {
    app.register.controller('HomeCtrl', function ($scope, $location) {
        $scope.message = "Message from HomeCtrl"; 
    });
}); 
