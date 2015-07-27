/**
 * Created by hehuiqi on 15/7/24.
 */
var app =angular.module('MyApp1', []);

app.controller("formModel",function($scope)
{
    $scope.book =
    {
        bookName:"javaScript",
        price:20
    };
});
//自定义过滤器
app.filter('capitalize',function()
{
    return function(input)
    {
        if(input)
        {
            return input[0].toUpperCase()+input.slice(1);
        }
    };
});