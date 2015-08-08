/**
 * Created by hehuiqi on 15/7/27.
 */

var app = angular.module("myDirective",[]);

app.directive("hqDirective",function(){
    return {
        restrict:'A',
        replace:'true',
        template:"<a href='{{ myUrl }}'>{{ myLinkText }}</a>"
    };
});
app.controller("directiveCtrol",function($scope){

    $scope.pingguo ="iphone1";

});