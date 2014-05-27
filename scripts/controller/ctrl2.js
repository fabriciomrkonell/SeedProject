define(['js/app'], function (app) {
    app.register.controller('View1Ctrl', function ($scope) {
        $scope.message = "Message from View1Ctrl"; 
        alert();
    });
}); 
