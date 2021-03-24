---
title: Flask总结
date: 2019-11-21 17:25:25
tags: [Python]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重, 主页那个先显示
copyright : ture  # 授权问题显示
categories: Python
---

<!-- more -->

## 小 demo

```python
from flask import Flask  // 导入flask
app = Flask(__name__)  // 创建类实例
 
@app.route("/")  // 使用 route() 装饰器来告诉 Flask 触发函数的 URL 
def hello():
    return "Hello World!"
 
if __name__ == "__main__":  // 确保服务器只会在使用 Python 解释器运行代码的 情况下运行, 而不会在作为模块导入时运行
    app.run()  //  run() 函数来运行本地服务器和我们的应用
```
运行： python hello.py

## 小知识

### Flask的Context(上下文)

Flask提供了两种上下文, 一种是应用上下文(Application Context), 一种是请求上下文(Request Context)。

- application 指的就是当你调用app = Flask(name)创建的这个对象app；
- request 指的是每次http请求发生时, WSGI server(比如gunicorn)调Flask.call()之后, 在Flask对象内部创建的Request对象；
- application 表示用于响应WSGI请求的应用本身, request 表示每次http请求;
- application的生命周期大于request, 一个application存活期间, 可能发生多次http请求, 所以, 也就会有多个request

application 就是指app = Flask(name)对象
request 就是对应每次http 请求创建的Request对象
Flask通过_RequestContext将App与Request关联起来

### flask 里的函数
- escape 解析路径上的特殊符号
- url_for 看成是路由命名函数, 可以做路由导向, 可以带参数
- redirect 重定向函数
- render_template 模板渲染函数, 自动寻找根目录 templates 里的模板
- make_response 获取响应对象
- request 获取请求对象
- g 是一个特殊对象, 独立于每一个请求。在处理请求过程中, 它可以用于储存 可能多个函数都会用到的数据。

    如：把连接储存于其中, 可以多次使用, 而不用在同一个 请求中每次调用 get_db 时都创建一个新的连接。
- current_app 是另一个特殊对象, 该对象指向处理请求的 Flask 应用。这里 使用了应用工厂, 那么在其余的代码中就不会出现应用对象。

当应用创建后, 在处理 一个请求时,  get_db 会被调用。这样就需要使用 current_app 。


### 一句话
flask在使用session 时要设置一个密钥 app.secret_key  如：app.secret_key = '123456'  一般使用os.urandom(16) 生成

### jsonify && json.dumps

区别：
1. Content-Type有区别

jsonify时响应的Content-Type字段值为application/json, 而使用json.dumps时该字段值为text/html。

2. 接受参数有区别

## blueprints

用于实现单个应用的视图、模板、静态文件的集合。

蓝图就是模块化处理的类。
简单来说, 蓝图就是一个存储操作路由映射方法的容器, 主要用来实现客户端请求和URL相互关联的功能。 在Flask中, 使用蓝图可以帮助我们实现模块化应用的功能。

Flask 中的蓝图为这些情况设计:

- 把一个应用分解为一个蓝图的集合。这对大型应用是理想的。一个项目可以实例化一个应用对象, 初始化几个扩展, 并注册一集合的蓝图。
- 以 URL 前缀和/或子域名, 在应用上注册一个蓝图。 URL 前缀/子域名中的参数即成为这个蓝图下的所有视图函数的共同的视图参数(默认情况下)。
- 在一个应用中用不同的 URL 规则多次注册一个蓝图。
- 通过蓝图提供模板过滤器、静态文件、模板和其它功能。一个蓝图不一定要实现应用或者视图函数。
- 初始化一个 Flask 扩展时, 在这些情况中注册一个蓝图。

## url_for && redirect

反转函数url_for与重定向redirect

url_for, 简单来说, 这个函数接受视图函数的名字(字符串形式)作为参数, 返回视图函数对应的url, 例如：
```
@app.route('/')
def hello_world():
    print(url_for('index'))  # 返回index视图的URL  此处会打印/index/  有参数则以key=value的形式写在后面 print(url_for('hello',name='harp'))
    return 'Hello World'

@app.route('/index/')
def index():
    return 'index'
```
redirect则更简单, 功能就是跳转到指定的url, 大部分情况下, 我们都是和url_for一起使用的, 例如：
```
@app.route('/')
def hello_world():
    return 'Hello World'


@app.route('/<name>/')
def hello(name):
    if name == 'Harp':
        return 'Hello %s' % name
    else:
        return redirect(url_for('hello_world'))
```
在hello这个视图函数中, 如果url传入的参数是Harp(即请求的网址是http://127.0.0.1:5000/Harp/), 则返回'Hello Harp', 其他情况则重定向到hello_world这个视图函数对应的网址'/'。
## Werkzeug

### 是什么

不是一个web服务器, 也不是一个web框架, 而是一个工具包, 官方的介绍说是一个 WSGI 工具包, 它可以作为一个 Web 框架的底层库, 因为它封装好了很多 Web 框架的东西, 例如 Request, Response 等等。

什么又是WSGI呢？WSGI的全称是Web Server Gateway Interface, 它是用来定义web服务器接口的一个规范。简单地讲, 就是定义http服务器应该长什么样子, 能处理哪些事情。

### 包含哪些内容的实现

- HTTP头的解析
- 易用使用的request和response对象
- 基于交互风格的JavaScript脚本语言的浏览器调试器
- 与 WSGI 1.0 规范100%兼容
- 支持Python 2.6, 2.7和3.3
- Unicode支持
- HTTP Session和签名Cookie支持
- URI和IRI处理函数, 包含对Unicode的支持
- 内置兼容一些非标准的WSGI服务器和浏览器
- 集成了URLs路由功能


## flask vs django

> Flask 怎么定位自己的？
将自己定位为微框架。啥叫微框架, 就是毛坯房的意思。给你个毛胚房, 你自己装修去。

> Django 怎么定位标榜自己的？
划重点 The web framework for perfectionists with deadlines. 完美主义者的 Deadline 终结框架