app.controller('myCtrl', function ($scope) {
    $scope.users = [];
    $scope.addUser = function(){
        var person = {firstName:$scope.firstName, lastName:$scope.lastName, email: $scope.myAddress};
        $scope.users.push(person);
    }
    $scope.deleteUser = function (x) {
        $scope.users.splice(x, 1);
    } 
});