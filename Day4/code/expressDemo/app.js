var express = require('express')
// 1.创建app
var app = express();
// 暴露静态资源  如果不写第一个参数，则是从根路径上返回
app.use('/public/', express.static('./public/'))
app.get('/', function(req, res) {
    res.send('hello');
})
app.listen(3000, function(){
    console.log('express app is running')
})