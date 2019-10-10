## 1.node js 是什么？
- nodejs 是一个JavaScript运行时环境，让js可以脱离浏览器运行。
- 浏览器中的JavaScript
  - Ecmascript
    - 基本语法
    - if
    - var 
    - function
    - Object
    - Array
  - BOM
  - DOM
  - Node.js中的JavaScript
  - 没有BOM、 DOM
  - EcmaScript
  - 在Node这个js执行环境中为JavaScript提供了一些服务器级别的操作API
    - 如文件读写
    - 网络服务的构建
    - 网络通信
    - http服务器
    - 等处理。。。
- NPM
  - npm是基于nodejs开发的一个包管理工具，是世界上最大的开源库生态系统
  - 绝大多数js相关的包都存放在了npm上，让开发人员更方便的去下载使用
- 构建于chrome的V8引擎之上
  - 代码之上具有特定格式的字符串
  - 引擎可以认识它，引擎可以帮你去解析和执行
  - Google Chrome的V8引擎是目前公认的解析执行js代码最快的
  - Node.js的作者把V8引擎移植了出来，开发了一个独立的js运行环境。
- 模块化编程
  - RequireJS
  - SeaJS
  - @import('文件路径')
  - 以前认知的js只能通过script标签来加载，在node中可以像@import()一样来加载js脚本文件
## 2.Node中的Javascript
- EcmaScript
- 核心模块
  - 文件操作的fs
  - http服务的http
  - url 路径操作模块
  - path 路径处理模块
  - os 操作系统信息
- 第三方模块
  - art-template (主要服务于客户端)
- 用户自定义模块
## Node中的模块系统
  - 在node中，没全局作用域，只有模块作用域 外部访问不到内部，内部也访问不到外部
  - 模块间的通信：
    - 加载与导出
    require 的作用是加载并执行模块
    在被加载的文件里，使用exports导出模块，则引入的文件里就可以拿到模块了

## 代码风格
- 分号问题
  * 当代码以(、[、`这三种开头时，需要在前面加分号，这样使用无分号的代码风格时，就不会报错了
## 服务端渲染和客户端渲染
 - 客户端渲染不利于SEO 搜索
 - 服务端渲染是容易被爬虫爬取
## 什么是模块化
- 文件作用域
- 通信规则
   + 加载require
   + 导出 
## Commonjs模块规范
 在Node中的js还有一个重要的概念：模块系统
  - 模块作用域
  - require方法来加载模块
  - exports接口对象用来导出模块中的成员
  ### 加载 `require`
  语法： 
  ```javascript
  var 自定义变量名称 = require('模块')
  ```
  两个作用：
   - 执行被加载模块中的代码
   - 得到被加载模块中的`exports`导出接口对象
  ### 导出 `exports`
   - Node 中是模块作用域，默认文件中所有的成员只在当前文件模块有效
   - 对于希望可以被其他模块访问的成员， 我们就需要把这些公开的成员都挂载到`exports`接口对象中就可以导出多个成员
   导出多个成员（必须在对象中）：
   ```javascript
   exports.a = 12;
   exports.b = 'hello'
   exports.c = function () {
     console.log('ccc')
   }
   ```
    导出单个成员（拿到的就是函数、字符串):
    ```javascript
    module.exports = 'xxx'
    ```
    并且后写的会覆盖前面写的
    也可以这样来导出多个成员：
    ```javascript
    module.exports = {
      add: function () {
        console.log('xxx')
      },
      str: 'hello'
    }
    ```
  ### 原理解析
  exports 是 `module.exports`的一个引用
  ```javascript
  console.log(exports === module.exports) // true
  exports.foo = 'bar'

  //等价于
  module.exports.foo = 'bar'
  ```
  ```javascript
    //但是exports = 'bar'是不可以被导出的，因为被重新赋值了，不再指向module.exports了
   // 所以如果是这样的写法，结果如下
   exports.a = 123;
   exports = {};
   exports.b = 456;
   //则导出的是a = 123,因为exports后面被重新赋值了，所以只有前面的对象被绑定到了module.exports上
  ```
  所以：给exports或者module.exports赋值，都会断开两者之前的引用
   ## Express
  + 第三方web开发框架
  + 高度封装了http模块
  + 更加专注于业务，而非底层细节
  ### 静态服务
    ```javascript 
    app.use('/public/', express.static('./public/'))
    ```
 
  # 自动重启服务器
   ## nodemon
   + 基础nodejs开发的第三方命令工具，独立安装
   + npm i --global nodemon
   + 安装完成之后，使用nodemon app.js来启动服务器，就可以在更新文件之后自动重启