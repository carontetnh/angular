var app = angular.module('myApp', []);

app.directive("newDirective", function(){
    return{
        template: '<p>First Name: <input type="text" ng-model="firstName"></p>'
    };
});