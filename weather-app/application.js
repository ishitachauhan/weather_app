
var http = require('http');
const { listenerCount } = require('process');
var url = 'https://api.openweathermap.org/data/2.5/weather?q=BIJNOR,IN&units=metric&appid=e9842d465201d00c9b33464e182e7e66'
var server = http.createServer(function(request,response){
    var request = require('request');
    request(url,function(err,res,body){
        var data = JSON.parse(body);
        response.write("<html><body<div id ='container'>");
        response.write("<h1>"+ 'City name:'+data['name']+'<br>'+"</h1>");
        response.write("<h2>"+ 'Temperature:'+data.main['temp']+'<br>'+"</h2>");
        response.write("<h2>"+'Sunset Time:'+new Date(data.sys['sunset']*1000)+'</br>'+"</h2>");
        response.write("<h2>"+ 'Data:'+JSON.stringify(data)+'<br>'+"</h2>");
        response.write("</div></body></html");
        response.end();

    });

}).listen(3000)