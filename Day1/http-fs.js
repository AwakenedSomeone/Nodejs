var http = require("http");
var fs = require("fs");

var server = http.createServer();
server.on("request",function (req, res) {
    var url = req.url;
    if (url === "/") {
        fs.readFile("./resource/index.html", function (error, data) {
            if (error) {
                res.setHeader("Content-Type", "text/plain;charset=utf-8");
                res.end("文件读取失败，请稍后重试！");
            } else {
                res.setHeader("Content-Type", "text/html;charset=utf-8");
                res.end(data);
            }
        })
    } else if (url === "/img") {
        fs.readFile("./resource/person.jpeg", function (error, data) {
            if (error) {
                res.setHeader("Content-Type", "text/plain;charset=utf-8");
                res.end("文件读取失败，请稍后重试！");
            } else {
                // 图片不需要设置charset
                res.setHeader("Content-Type", "image/jpeg;");
                res.end(data);
            }
        })
    }
})
server.listen("5000", function () {
    console.log("服务器已经启动，访问：http://localhost:5000");
})