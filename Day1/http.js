// 使用node构建一个服务器
// 核心模块： http
// http是帮助创建服务器的

// 1.引入核心模块
var http = require("http");
// 2.使用http.createServer（）方法创建一个web服务器
// 返回一个server实例
var server = http.createServer();

// 提供数据服务
// 接收请求，处理请求，发送响应

// 注册request请求时间，当客户端请求过来，自动触发服务器的request回调函数
server.on('request', function (request, response) {
    console.log("收到客户端的请求了,请求路径是："+request.url)
    // response有一个方法： write可以用来给客户端发送响应数据
    // write可以使用多次，但是最后一定要end来结束，否则客户端会一直等到
    // response.write("hello");
    // response.write(" node js");
    // response.end();
    // 根据不同的请求路径发送不同的响应
    // 1.获取请求路径
    // request.url获取的是端口号之后的路径，以“/”开头
    var url = request.url;
    if (url === "/products") {
        var products = [
            {
                name: '苹果x',
                price: 8888
            },
            {
                name: '菠萝x',
                price: 5000
            },
            {
                name: '小辣椒x',
                price: 1999
            }
        ]
        // 响应内容只能是二进制数据或者字符串  
        // 在服务器端默认发送的数据，其实是UTF-8编码的内容
        // 浏览器不知道是utf-8的编码格式，就使用当前操作系统默认的编码格式，中文是gbk
        // 解决方法是正确的告诉浏览器发送的编码格式
        response.setHeader('Content-Type','application/json;charset=utf-8')
        response.end(JSON.stringify(products));
    }
})

// 4.绑定端口号，启动服务器
server.listen(3000, function () {
    console.log("服务器启动成功了，可以通过 http://localhost:3000访问");
})