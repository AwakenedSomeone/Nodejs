// 仿Apache读取文件目录的功能
var http = require('http');
var fs = require('fs');
var server = http.createServer();
var dir = "./www"
server.on('request', function (req, res) {
    var url = req.url;
    var filePath = "/index.html";
    if (url !== '/') {
        filePath = url;
    }
    fs.readFile(dir + filePath, function (error, data) {
        if (error) {
            return res.end('404 not found.');
        } else {
            res.end(data);
        }
    })
})

server.listen('3000', function () {
    console.log('服务器已经启动，访问: http:localhost:3000');
})