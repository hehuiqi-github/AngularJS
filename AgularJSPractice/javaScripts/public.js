/**
 * Created by hehuiqi on 15/7/23.
 */

var firstController = function($scope){

    // $scope 我们叫做作用域
    // 申明一个Model
    $scope.name = '';

    $scope.age = 20;

}

var secondController = function($scope)
{
    $scope.sex  ='男';
}


function namesContrroller($scope){

    $scope.names = [
        {name:'小明',country:'中国'},
        {name:'小花',country:'外国'},
    ];

}
function httpController($scope,$http)
{
    $http.get("http://www.runoob.com/try/angularjs/data/Customers_JSON.php")
        .success(function(response)
        {
            $scope.peoples = response;
        });

}
