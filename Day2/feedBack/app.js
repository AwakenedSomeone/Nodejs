var http = require('http');
var fs = require('fs');
var url = require('url')
var template = require('art-template');
var comments = [
    {
        name: '张三',
        message: 'Hello nodejs',
        dateTime: '2019-09-24 11:28'
    },
    {
        name: '李四',
        message: 'Hello nodejs',
        dateTime: '2019-09-24 11:28'
    },
    {
        name: '王麻子',
        message: 'Hello nodejs',
        dateTime: '2019-09-24 11:28'
    }
]
// 简写方式，自动将函数当做监听request的方法
http.createServer(function(req, res) {
    var parseObj = url.parse(req.url, true);
    var pathname = parseObj.pathname;
    if (pathname === '/') {
       fs.readFile('./views/index.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found');
            }
            var ret = template.render(data.toString(), {comments})
            res.end(ret);
       })
    } else if (pathname === '/post') {
       fs.readFile('./views/post.html', function (err, data) {
           if (err) {
               return res.end('404 Not Found');
           }
           res.end(data);
       })
    } else if (pathname.indexOf('/public/') === 0)  {
    //    设置public目录为外界可访问目录
        fs.readFile('.' + pathname, function (err, data) {
            if (err) {
                return res.end('404 Not Found');
            }
            res.end(data);
       })
    } else if (pathname === '/submitMessage') {
        var comment = parseObj.query;
        comment.dateTime = new Date().Format('yyyy-MM-dd HH:mm');
        comments.unshift(comment);
        // 重定向到首页，重新拿数据
        res.statusCode = 302;
        res.setHeader('location', '/');
        res.end();
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

Date.prototype.Format = function (fmt) {
    var o = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'H+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'S+': this.getMilliseconds()
    };
    //因为date.getFullYear()出来的结果是number类型的,所以为了让结果变成字符串型，下面有两种方法：
    if (/(y+)/.test(fmt)) {
        //第一种：利用字符串连接符“+”给date.getFullYear()+''，加一个空字符串便可以将number类型转换成字符串。
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            //第二种：使用String()类型进行强制数据类型转换String(date.getFullYear())，这种更容易理解。
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(String(o[k]).length)));
        }
    }
    return fmt;
};