var TimeCtrl = function TimeCtrl($scope) {
    var currentDate = new Date();
    $scope.timeString = currentDate.toTimeString();
}

var app = angular.module("clockApp");
app.controller("TimeCtrl", TimeCtrl);
