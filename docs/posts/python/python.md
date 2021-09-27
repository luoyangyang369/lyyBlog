---
title: python知识归纳
date: 2018-12-7 17:25:25
tags: [Python]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重, 主页那个先显示
copyright : ture  # 授权问题显示
categories: Python
---

<!-- more -->


## 什么是wsgi,uwsgi,uWSGI?
- WSGI:

web服务器网关接口, 是一套协议。用于接收用户请求并将请求进行初次封装, 然后将请求交给web框架。
实现wsgi协议的模块:wsgiref,本质上就是编写一socket服务端, 用于接收用户请求(django)
werkzeug,本质上就是编写一个socket服务端, 用于接收用户请求(flask)

- uwsgi:
与WSGI一样是一种通信协议, 它是uWSGI服务器的独占协议, 用于定义传输信息的类型。 uWSGI:
是一个web服务器, 实现了WSGI的协议, uWSGI协议, http协议

## Django、Flask、Tornado的对比？
1、 Django走的大而全的方向, 开发效率高。它的MTV框架, 自带的ORM,admin后台管理,自带的sqlite数据库和开发测试用的服务器, 给开发者提高了超高的开发效率。 

重量级web框架, 功能齐全, 提供一站式解决的思路, 能让开发者不用在选择上花费大量时间。
自带ORM和模板引擎, 支持jinja等非官方模板引擎。
自带ORM使Django和关系型数据库耦合度高, 如果要使用非关系型数据库, 需要使用第三方库
自带数据库管理app
成熟, 稳定, 开发效率高, 相对于Flask, Django的整体封闭性比较好, 适合做企业级网站的开发。python web框架的先驱, 第三方库丰富

2、 Flask 是轻量级的框架, 自由, 灵活, 可扩展性强, 核心基于Werkzeug WSGI工具 和jinja2 模板引擎

适用于做小网站以及web服务的API,开发大型网站无压力, 但架构需要自己设计
与关系型数据库的结合不弱于Django, 而与非关系型数据库的结合远远优于Django
3、 Tornado走的是少而精的方向, 性能优越, 它最出名的异步非阻塞的设计方式
Tornado的两大核心模块:
iostraem:对非阻塞的socket进行简单的封装
ioloop: 对I/O 多路复用的封装,它实现一个单例

## CORS 和 CSRF的区别？
CORS是一个W3C标准,全称是“跨域资源共享"(Cross-origin resoure sharing). 它允许浏览器向跨源服务器, 发出XMLHttpRequest请求, 从而客服了AJAX只能同源使用的限制。
CSRF主流防御方式是在后端生成表单的时候生成一串随机token,内置到表单里成为一个字段, 同时, 将此串token置入session中。每次表单提交到后端时都会检查这两个值是否一致, 以此来判断此次表单提交是否是可信的, 提交过一次之后, 如果这个页面没有生成CSRF token,那么token将会被清空,如果有新的需求, 那么token会被更新。 攻击者可以伪造POST表单提交, 但是他没有后端生成的内置于表单的token, session中没有token都无济于事。

## Session,Cookie,JWT的理解

### 为什么要使用会话管理

众所周知, HTTP协议是一个无状态的协议, 也就是说每个请求都是一个独立的请求, 请求与请求之间并无关系。但在实际的应用场景, 这种方式并不能满足我们的需求。举个大家都喜欢用的例子, 把商品加入购物车, 单独考虑这个请求, 服务端并不知道这个商品是谁的, 应该加入谁的购物车？因此这个请求的上下文环境实际上应该包含用户的相关信息, 在每次用户发出请求时把这一小部分额外信息, 也做为请求的一部分, 这样服务端就可以根据上下文中的信息, 针对具体的用户进行操作。所以这几种技术的出现都是对HTTP协议的一个补充, 使得我们可以用HTTP协议+状态管理构建一个的面向用户的WEB应用。

### Session 和Cookie的区别
这里我想先谈谈session与cookies,因为这两个技术是做为开发最为常见的。那么session与cookies的区别是什么？个人认为session与cookies最核心区别在于额外信息由谁来维护。利用cookies来实现会话管理时, 用户的相关信息或者其他我们想要保持在每个请求中的信息, 都是放在cookies中,而cookies是由客户端来保存, 每当客户端发出新请求时, 就会稍带上cookies,服务端会根据其中的信息进行操作。 当利用session来进行会话管理时, 客户端实际上只存了一个由服务端发送的session_id,而由这个session_id,可以在服务端还原出所需要的所有状态信息, 从这里可以看出这部分信息是由服务端来维护的。

除此以外, session与cookies都有一些自己的缺点:
cookies的安全性不好, 攻击者可以通过获取本地cookies进行欺骗或者利用cookies进行CSRF攻击。使用cookies时,在多个域名下, 会存在跨域问题。 session 在一定的时间里, 需要存放在服务端, 因此当拥有大量用户时, 也会大幅度降低服务端的性能, 当有多台机器时, 如何共享session也会是一个问题.(redis集群)也就是说, 用户第一个访问的时候是服务器A, 而第二个请求被转发给了服务器B, 那服务器B如何得知其状态。实际上, session与cookies是有联系的, 比如我们可以把session_id存放在cookies中的。

## JWT是如何工作的

首先用户发出登录请求, 服务端根据用户的登录请求进行匹配, 如果匹配成功, 将相关的信息放入payload中, 利用算法, 加上服务端的密钥生成token, 这里需要注意的是secret_key很重要, 如果这个泄露的话, 客户端就可以随机篡改发送的额外信息, 它是信息完整性的保证。生成token后服务端将其返回给客户端, 客户端可以在下次请求时, 将token一起交给服务端, 一般是说我们可以将其放在Authorization首部中, 这样也就可以避免跨域问题。
简述Django请求生命周期
一般是用户通过浏览器向我们的服务器发起一个请求(request),这个请求会去访问视图函数, 如果不涉及到数据调用, 那么这个时候视图函数返回一个模板也就是一个网页给用户) 视图函数调用模型毛模型去数据库查找数据, 然后逐级返回, 视图函数把返回的数据填充到模板中空格中, 最后返回网页给用户。

1. wsgi ,请求封装后交给web框架(Flask, Django)
2. 中间件, 对请求进行校验或在请求对象中添加其他相关数据, 例如:csrf,request.session
3. 路由匹配 根据浏览器发送的不同url去匹配不同的视图函数
4. 视图函数, 在视图函数中进行业务逻辑的处理, 可能涉及到:orm, templates
5. 中间件, 对响应的数据进行处理
6. wsgi, 将响应的内容发送给浏览器

## Nginx,tomcat,apach到都是什么？
Nginx(engine x)是一个高性能的HTTP和反向代理服务器, 也是 一个IMAP/POP3/SMTP服务器, 工作在OSI七层, 负载的实现方式:轮询, IP_HASH,fair,session_sticky. Apache HTTP Server是一个模块化的服务器, 源于NCSAhttpd服务器 Tomcat 服务器是一个免费的开放源代码的Web应用服务器, 属于轻量级应用服务器, 是开发和调试JSP程序的首选。
