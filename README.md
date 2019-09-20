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
- 第三方模块
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
 