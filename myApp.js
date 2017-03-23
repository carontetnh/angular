var app = angular.module('myApp', []);

app.directive("newDirective", function(){
    return{
        template: '<p>First Name: <input type="text" ng-model="firstName"></p>'
    };
});

app.directive("customDataTable", function(){
    return{
        template:'<p><input type="text" ng-model="userFilter"></p>'+
        '<table>' +
            '<tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Delete User</th></tr>' +
            '<tr ng-repeat="x in users | filter: userFilter">' +
                '<td>{{x.firstName}}</td><td>{{x.lastName}}</td><td>{{x.email}}</td><td><input type="button" ng-click="deleteUser($index)" value ="Delete">' +
            '</tr>' +
        '</table>'
    }
});