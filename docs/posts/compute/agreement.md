---
title: 协议相关
date: 2019-5-25 17:25:25
tags: [协议]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重, 主页那个先显示
copyright : ture  # 授权问题显示
categories: 协议
---

<!-- more -->

## HTTP

### Content-type
是什么？

是Http的实体首部字段, 用于说明请求或返回的消息主体是用何种方式编码, 在request header和response header里都存在。

几种类型:

1. application/x-www-form-urlencoded
1) 浏览器的原生form表单
2) 提交的数据按照 key1=val1&key2=val2 的方式进行编码, key和val都进行了URL转码
2. multipart/form-data
常见的 POST 数据提交的方式。我们使用表单上传文件时, 必须让 form 的 enctype 等于这个值。
3. application/json
消息主体是序列化后的 JSON 字符串,这个类型越来越多地被大家所使用
4. text/xml
是一种使用 HTTP 作为传输协议, XML 作为编码方式的远程调用规范

## SSL/TLS协议

### 介绍

SSL:一种协议, 使用通讯双方的客户证书以及CA根证书, 允许客户/服务器应用以一种不能被偷听的方式通讯。

优势:信息加密传播, 具有校验机制, 配备身份证书
TLS是SSL的升级版本

SSL/TLS协议的基本过程是这样的:

(1) 客户端向服务器端索要并验证公钥。
(2) 双方协商生成"对话密钥"。
(3) 双方采用"对话密钥"进行加密通信。

前俩步被称为握手阶段:

1. 客户端发出请求 信息:协议版本、随机数用于生成‘对话密钥’、支持的加密方法/压缩方法
2. 服务器回应 信息:确认版本、随机数同上作用、加密方法、服务器证书
3. 客户端回应 验证证书、证书中取出公钥。向服务器发送:
4. 服务器的最后回应

Telnet是远程连接服务, 它工作于在tcp/ip协议的应用层。telnet命令通常用来远程登录。 是Internet远程登陆服务的标准协议和主要方式。 它为用户提供了在本地计算机上完成远程主机工作的能力。

## 参考资料
[图解SSL/TLS协议](http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html)
[运行机制的概述](http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html)


