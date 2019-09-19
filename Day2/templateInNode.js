// 在node中使用模板引擎， 模板引擎不仅可以在浏览器中使用，也可以在node中使用 如art-template
// 1. npm install art-template
var template = require('art-template');
var fs = require('fs');
var http = require('http');
var server = http.createServer();

server.on('request', function (req, res) {
    fs.readFile('./tpl.html', function (err, data) {
        if (err) {
            return console.log('读取文件失败了')
        }
        var tplStr = '';
        tplStr = data.toString();
        var ret = template.render(tplStr, {
            name: 'LQ',
            age: 24,
            province: '重庆',
            hobbies: [
                '写代码',
                '看电视',
                '打游戏'
            ]
        })
        res.end(ret)

    })
})

server.listen('3000', function(){
    console.log("服务器启动成功了，可以通过 http://localhost:3000访问");
})



