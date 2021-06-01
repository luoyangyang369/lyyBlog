---
title: node学习
date: 2019-9-5 15:25:25
tags: [node]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
categories: node
top: 9  # 设置权重, 主页那个先显示
copyright : ture  # 授权问题显示
# image: https://www.cnblogs.com/images/cnblogs_com/luoyangyang/1573981/t_index.jpg
---

<!-- more -->
## 参考资料
- [饿了么面试](https://elemefe.github.io/node-interview/#/sections/zh-cn/)
- [node流的概念](https://juejin.im/post/5940a9c3128fe1006a0ab176)
- [Node.js 简介](http://nodejs.cn/learn)

## 基本语法

- for 或者 foreach 进行循环获取数组值
var array = ['a', 'b', 'c', 'd'];
for (var i = 0; i < array.length; i++)
array.forEach(function (element)

- for..in 遍历对象属性(或索引)
for (var key in array)

## npm
[查看包版本](https://blog.csdn.net/cvper/article/details/79543262)
假设现在我们已经成功下载了jquery, 过了一段时间, 我忘记了下载的jquery的版本信息

第一种方式:npm ls jquery 即可(查看本地安装的jQuery), 下面我的本地没有安装jquery, 
第二种方式:npm ls jquery -g    (查看全局安装的jquery)

npm install packageName --save //安装到项目目录下, 并在package.json文件的dependencies中写入依赖, 简写为-S
## Promise对象
参考: 
[bluebird与原生Promise对象及bluebird模块的中文API文档](https://itbilu.com/nodejs/npm/VJHw6ScNb.html)
[Promise迷你书](http://liubin.org/promises-book/)

### 简介
简单说就是一个容器, 里面保存着某个未来才会结束的事件(通常是一个异步操作)的结果

从语法上说, Promise 是一个对象, 从它可以获取异步操作的消息。Promise 提供统一的 API, 各种异步操作都可以用同样的方法进行处理。

俩个特点:
- 对象的状态不受外界影响, 只有异步操作的结果可决定状态, pending(进行中)、fulfilled(已成功)和rejected(已失败)。
- 一旦状态改变, 就不会再变, 任何时候都可以得到这个结果。

在NodeJS中用于替代回调函数, 在使用NodeJS的KOA框架时可使用Promise来代替回调函数。
### 用法
new Promise - 创建实例
new Promise(function(function resolve, function reject) resolver) -> Promise

### 注意

在一个promise链中, 只要任何一个promise被reject, promise链就被破坏了, reject之后的promise都不会再执行, 而是直接调用.catch方法。

## async&await
### 简介

await:表示等待 Promise 返回结果, 在继续执行。
async:由于nodejs是异步编程模型, 有一些在同步编程中很容易做到的事情, 现在却变得很麻烦。async的流程控制就是为了简化这些操作。

返回值是一个Promise对象, 使用then方法添加回调函数
当函数执行的时候, 一旦遇到await就会先返回, 等到异步操作完成, 再接着执行函数体内后面的语句。
async表示函数里有异步操作, await表示紧跟在后面的表达式需要等待结果。
async函数完全可以看作多个异步操作, 包装成的一个 Promise 对象, 而await命令就是内部then命令的语法糖。

- 在函数体前通过关键字async可以将函数变为async函数
- 在async函数中对需要异步执行的函数前需加await关键字
- await后的函数必须使用Promise对象封装
- async函数执行后返回的是一个Promise对象

## node 的单线程

node.js单线程只是一个js主线程, 本质上的异步操作还是由线程池完成的, node将所有的阻塞操作都交给了内部的线程池去实现, 本身只负责不断的往返调度, 

并没有进行真正的I/O操作, 从而实现异步非阻塞I/O。

重点在主线程为单线程, 主线程执行代码形成一个执行栈

主线程之外维护一个事件队列, 当IO或异步操作, 会将事件放到Event queue中, 并不会执行且继续执行主线程代码, 不会阻塞, 直到主线程代码完毕。

主线程执行完毕, 循环去取事件, 用线程池线程去执行事件。当有事件执行完毕后, 会通知主线程, 主线程执行回调, 线程归还给线程池。

一定注意异步问题, 可使用promise, 实现代码如下
```
// 遇到需要同步执行的代码, promise化, await执行, 外层一定要有async
function formImage() {
    return new Promise((resolve, reject) => {
        form((opt, {fields, files})=> {
            console.log(files)
            let filename = files.file.name
            console.log(files.file.path)
            let uploadDir = config.ROOTPATH + `/tmp/${roomId}/`
            let relativePath =  `/tmp/${roomId}/` + Date.now() + '_' + filename
            mkdirs(uploadDir, () => {
                fs.renameSync(files.file.path, config.ROOTPATH + relativePath) //重命名
                resolve(relativePath)
            })
        })
    })
}
let p = await formImage();
```
Node.js等则规定在JavaScript的回调函数的第一个参数为 Error 对象, 这也是它的一个惯例。

class:constructor方法是类的默认方法, 通过new命令生成对象实例时, 自动调用该方法。一个类必须有constructor方法, 如果没有显式定义, 一个空的constructor方法会被默认添加。
调用要用 new Class()

## 事件驱动的过程

所有的东西包装成一个对象, 执行了一个事件循环

​事件驱动, 把所有的东西都当成一个事件

while(true){
  // 无限循环
}
不同的异步, 不同的优先级

while(true){
    第一步: 执行script(全部的代码)
    先去清空micor-task队列的事件, 去把这里面的全部执行完
    再去找 setInterval 执行 再去清空micor-task队列
    再去找 setImmediate 执行, 再去清空micor-task队列
    再去 I/O 操作  再去清空micro-task队列
}
虽然都是异步, 但是是有优先级的

macro-task:队列 script(全部的代码)

script(全部的代码) setInterval()  setTimeout() setImmediate() I/O操作(读写, 查询数据库)
他们都是同步的, 但是他们的回调函数是异步的
micro-task:队列

process.nextTick()  Promise().then()
注意 setInterval()和setTimeout()优先级是一样的

异步事件的优先级

nextTick > Promise.then > setTimeout > setImmediate

## 常见用法

### Node.js时间戳和日期互相转换
- 日期转时间戳
var date = new Date("2018-11-20 18:08:00");
var time = date.getTime()/1000;//转换成秒;  getTime() => 转化为时间戳

- 时间戳转日期
var time = 1542708681;
// 也可以获取当前的毫秒级时间戳
var time2 = Date.now();
var date = new Date(time * 1000);
var dt = date.getFullYear() + "-" + (date.getMonth() < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)) + "-" + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) ;


## 常用模块

### request
[node-request模块](https://www.jianshu.com/p/b240051784ab)
```
request({
    url: url,
    type: 'post'
    encoding: 'utf-8',  // utf-8则 body为string, 为null则为buffer, 
}, async function(error, response, body) {
    resolve(body)
})
```

### xml2js - xml json 相互转化

安装:npm install xml2js

使用:

  var xml2js = require('xml2js');

  var builder = new xml2js.Builder();  // JSON->xml
  var parser = new xml2js.Parser();   //xml -> json

  var json =  parser.parseString(xml);

  。。。。。

  xml =  builder.buildObject(json);

### koa2

web框架。koa中间件, 中间件的通过next函数联系,执行next()后会将控制权交给下一个中间件,如果没有中间件没有执行next后将会沿路折返,将控制权交换给前一个中间件。
ctx封装了request 和response对象
ctx.state  推荐的命名空间, 用于通过中间件传递信息和你的前端视图

- get请求参数获取:

1.是从上下文中直接获取
请求对象ctx.query, 返回如 { a:1, b:2 }
请求字符串 ctx.querystring, 返回如 a=1&b=2
2.是从上下文的request对象中获取
请求对象ctx.request.query, 返回如 { a:1, b:2 }
请求字符串 ctx.request.querystring, 返回如 a=1&b=2

- POST请求参数获取:

注意:ctx.request是context经过封装的请求对象, ctx.req是context提供的node.js原生HTTP请求对象, 
同理ctx.response是context经过封装的响应对象, ctx.res是context提供的node.js原生HTTP请求对象。

### buffer
Buffer是node的核心模块, 开发者可以利用它来处理二进制数据, 比如文件流的读写、网络请求数据的处理等。

创建:
new Buffer(array)
Buffer.alloc(length)
Buffer.allocUnsafe(length)
Buffer.from(array)

### bluebird
Bluebird 的 Promise.promisifyAll 方法可以为一个对象的属性中的所有方法创建一个对应的使用 Promise 的版本。这些新创建方法的名称在已有方法的名称后加上"Async"后缀。
- 用法:
const bluebird = require('bluebird')
bluebird.promisifyAll(fs)

如果不希望把一个对象的所有方法都自动转换成使用 Promise 的形式, 可以使用 Promise.promisify 来转换单个方法, 如 Promise.promisify(require("fs").readFile)。
