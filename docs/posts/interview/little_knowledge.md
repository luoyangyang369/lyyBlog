---
title: 小知识总结
date: 2019-7-16 17:25:25
tags: [面试]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重, 主页那个先显示
copyright : ture  # 授权问题显示
categories: 面试
---

<!-- more -->

## 工作中
[HTTPS 升级指南](http://www.ruanyifeng.com/blog/2016/08/migrate-from-http-to-https.html)
[MySQL Windows 安装](https://blog.csdn.net/qq_41307443/article/details/79839558)

## 一句话知识

PNG 比 JPEG 格式质量好, 占空间, 同一张图片 PNG 26M, JPEG 为 4 M
可移植性就是可以在多个系统运使用行
request 请求接口时, 发起一个带证书的请求, 用法如下所示:
```
let opt = {
        url:"https://api.mch.weixin.qq.com/mmpaymkttransfers/promotion/transfers",
        body:sendData,
        key: fs.readFileSync('./config/apiclient_key.pem'), // 将微信生成的证书放入 cert目录下
        cert: fs.readFileSync('./config/apiclient_cert.pem'),
        // ca:fs.readFileSync('./config/apiclient_cert.p12')
    }
```

## 回调函数和钩子函数

- 什么是回调函数？

简而言之, 回调函数就是一个通过函数指针调用的函数。如果你把函数的指针(地址)作为参数传递给另一个函数, 当这个指针被用为调用它所指向的函数时, 我们就说这是回调函数。

- 为什么要使用回调函数？

因为可以把调用者与被调用者分开。调用者不关心谁是被调用者, 所有它需知道的, 只是存在一个具有某种特定原型、某些限制条件(如返回值为 int )的被调用函数。

- 什么是钩子函数？

钩子实际上是一个处理消息的程序段, 通过系统调用, 把它挂入系统。每当特定的消息发出, 在没有到达目的窗口前, 钩子程序就先捕获该消息, 亦即钩子函数先得到控制权。这时钩子函数即可以加工处理(改变)该消息, 也可以不作处理而继续传递该消息, 还可以强制结束消息的传递。对每种类型的钩子由系统来维护一个钩子链, 最近安装的钩子放在链的开始, 而最先安装的钩子放在最后, 也就是后加入的先获得控制权。

### 总结
回调函数就好像是一个中断处理函数, 系统在符合你设定的条件时自动调用。为此, 你需要做三件事:

1. 声明;

2. 定义;

3. 设置触发条件, 就是在你的函数中把你的回调函数名称转化为地址作为一个参数, 以便于系统调用。

声明和定义时应注意:回调函数由系统调用, 所以可以认为它属于WINDOWS系统, 不要把它当作你的某个类的成员函数

回调函数是一个程序员不能显式调用的函数;通过将回调函数的地址传给调用者从而实现调用。回调函数使用是必要的, 在我们想通过一个统一接口实现不同的内容, 这时用回掉函数非常合适。比如, 我们为几个不同的设备分别写了不同的显示函数:void TVshow(); void ComputerShow(); void NoteBookShow()...等等。这是我们想用一个统一的显示函数, 我们这时就可以用回掉函数了。void show(void (*ptr)()); 使用时根据所传入的参数不同而调用不同的回调函数。