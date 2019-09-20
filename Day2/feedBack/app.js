var http = require('http');
var fs = require('fs');
// 简写方式，自动将函数当做监听request的方法
http.createServer(function(req, res) {
   var url = req.url;
   if (url === '/') {
       fs.readFile('./views/index.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found');
            }
            res.end(data);
       })
   } else if (url.indexOf('/public/') === 0)  {
    //    设置public目录为外界可访问目录
       fs.readFile('.' + url, function (err, data) {
            if (err) {
                return res.end('404 Not Found');
            }
            res.end(data);
       })
    } else {
        fs.readFile('./views/404.html', function (err, data) {
            if (err) {
                return res.end('404 Not found');
            }
            return res.end(data)
        })
    }
})
.listen(3000, function () {
    console.log('running...')
})