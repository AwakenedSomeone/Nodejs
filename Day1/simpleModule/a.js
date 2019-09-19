
// require是一个方法，用来加载模块的，
// 在Node中，模块有三种：
//      具名的核心模块： fs、http等
//      用户自己编写的文件模块
//       第三方模块
// 相对路径，必须加“./”，可以省略后缀名
// 在node中，没全局作用域，只有模块作用域 外部访问不到内部，内部也访问不到外部  可以避免变量命名冲突的问题
console.log("a start")
var bExports = require("./b.js")
console.log(bExports.foo)