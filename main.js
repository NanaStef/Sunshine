"use static";

angular.module("app", [])
       .controller("ctrl", ["$scope", function(scope) {
           scope.content = "Good Morning!";
       }]);