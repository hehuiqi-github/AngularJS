/**
 * Created by hehuiqi on 15/7/23.
 */

var app =angular.module('MyApp', []);
app.controller("homePage",function($scope){
    $scope.title = "首页精选";
    $scope.content = "你喜欢的商品";
});
app.controller("detailController",function($scope){
    $scope.goodsName = "牛奶";
    $scope.price = 10;
});
//拖动
app.directive('draggable', function($document) {
    var startX=0, startY=0, x = 0, y = 0;
    return function(scope, element, attr) {
        element.css({
            position: 'relative',
            border: '1px solid blue',
            backgroundColor: 'red',
            cursor: 'pointer'
        });
        element.bind('mousedown', function(event) {
            startX = event.screenX - x;
            startY = event.screenY - y;
            $document.bind('mousemove', mousemove);
            $document.bind('mouseup', mouseup);
        });

        function mousemove(event) {
            y = event.screenY - startY;
            x = event.screenX - startX;
            element.css({
                top: y + 'px',
                left:  x + 'px'
            });
        }

        function mouseup() {
            $document.unbind('mousemove', mousemove);
            $document.unbind('mouseup', mouseup);
        }
    }
});

//加减
app.controller('AddSubtract',function($scope){

    $scope.counter = 0;
    $scope.plus = plus;
    function plus (amount)
    {
        $scope.counter += amount;
    };

    $scope.subtract = subtract;
    function subtract (amount)
    {
        $scope.counter -= amount;
    };

});

//插值字符串
app.controller("strInsert",function($scope,$interpolate){
     //设置监听
    $scope.$watch('emailBody',function(body)
    {
        if(body)
        {
            var template = $interpolate(body);
            $scope.previewText = template({to:$scope.to});
        }
    });
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
