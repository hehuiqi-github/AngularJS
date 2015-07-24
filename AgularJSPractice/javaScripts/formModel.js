/**
 * Created by hehuiqi on 15/7/24.
 */
var app =angular.module('MyApp2',[]);
//自定义过滤器

//app.controller = function($scope)
//{
//    $scope.book =
//    {
//        name:"javaScript",
//        price:20
//    };
//}
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