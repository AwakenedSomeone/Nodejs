// 浏览器中的js是没有文件操作能力的
// node就是中的js具有文件操作的能力

// fs 是file-system的简写，文件系统的意思
// 在node中进行文件操作，必须引入fs这个核心模块
// fs这个核心模块中提供了所有的文件操作相关的api
//  例如 fs.readFile 读文件

// 1.使用require方法加载fs核心模块
var fs = require('fs');

// 2. 读取文件
//  第一个参数是要读取文件的路径
//  第二个参数是一个回调函数
//      读取成功 data为数据对象   error为null
//      读取失败  data为undefined  error为错误对象
fs.readFile('./data/hello.txt', function (error, data) {
    // <Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 6a 73>
    // 文件中存储的是二进制数据，展示为二进制转为的十六进制的格式
    // 通过他toString转换为文本
    console.log(error)
})