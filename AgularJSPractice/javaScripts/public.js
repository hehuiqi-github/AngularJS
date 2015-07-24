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
    $http.get("../javaScripts/person.json")
        .success(function(response)
        {
            $scope.peoples = response;
        })
        .error(function(error){

        }

    )
    ;

}
//网络请求
function httpClient()
{
    var xmlobj;
    if(window.ActiveXObject)
    {
        try
        {
            xmlobj = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
            try
            {
                xmlobj = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (E)
            {
                xmlobj = false;
            }
        }
    }
    else if(window.XMLHttpRequest)
    {
        xmlobj = new XMLHttpRequest();
    }

    return xmlobj;

}

function SubmitArticle(act,cityname,antique)

{

    var xmlobj = httpClient(); //创建对象
    //var parm = "act=firstweather" ;//构造URL参数
    //antique = escape(antique);
    var parm = "act=" + act + "&cityname=" + cityname + "&antique=" + antique;//构造URL参数
    //调用weather.php
    xmlobj.open("POST", "/weather/include/weather.php", true);  //调用weather.php
    xmlobj.setRequestHeader("cache-control","no-cache");
    xmlobj.setRequestHeader("contentType","text/html;charset=uft-8") //指定发送的编码
    xmlobj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");   //设置请求头信息

    xmlobj.onreadystatechange = StatHandler;    //判断URL调用的状态值并处理

    xmlobj.send(parm); //设置为发送给服务器数据

}

function post(URL, PARAMS)
{
    var temp = document.createElement("form");
    temp.action = URL;
    temp.method = "post";
    temp.style.display = "none";
    for (var x in PARAMS) {
        var opt = document.createElement("textarea");
        opt.name = x;
        opt.value = PARAMS[x];
        // alert(opt.name)
        temp.appendChild(opt);
    }
    document.body.appendChild(temp);
    temp.submit();
    return temp;
}

//调用方法 如
//post('pages/statisticsJsp/excel.action', {html :prnhtml,cm1:'sdsddsd',cm2:'haha'});

//自定义过滤器




