var fs = require('fs')

// 第一个参数： 文件路径
// 第二个参数： 文件内容
// 第三个参数： 回调函数
    //  error 写入成功，返回null ，写入失败返回错误对象
fs.writeFile('./data/hai.md', '大家好，我是nodejs', function (error) {
    if (error) {
        console.log("写入失败")
    } else {
        console.log("写入成功")
    }
})