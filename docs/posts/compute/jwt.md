---
title: jwt&outh2
date: 2021-03-15 17:25:25  # 建立日期
updated: 2021-03-16 17:25:25  # 更新日期
tags: [jwt, outh2]
# categories: jwt

comments: true  # 开启文章的评论功能
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重, 主页那个先显示
copyright : ture  # 授权问题显示
auto_spacing: true  # 在中文和英文之间加入空格
external_link: true  # 在新标签中打开链接
# keys:  # 阅读密码
#  - '123456'
# publish: false  # 文章是否发布
sticky: 100  # 文章置顶
prev: ../interview/learn
# next:
---

使用 `vuepress` 搭建静态网站并部署至云服务器
<!-- more -->

## 参考资料
- [使用JWT实现单点登录](https://blog.csdn.net/weixin_42873937/article/details/82460997)
- [理解OAuth 2.0](https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)
- [什么是单点登录(SSO)](https://mp.weixin.qq.com/s/drPVkRbCsDIlX6Ls2pDmqA)

## 单点登录

单点登录就是在多个系统中，用户只需一次登录，各个系统即可感知该用户已经登录

`如: 在微信里登录公众号或者小程序, 直接授权即可登录`

## JWT
JWT是一个含签名并携带用户相关信息的加密串, 页面请求校验登录接口时, 请求头中携带JWT串到后端服务, 后端通过签名加密串匹配校验, 保证信息未被篡改。 校验通过则认为是可靠的请求, 将正常返回数据。 
### 什么情况下使用JWT比较适合？
- 授权：这是最常见的使用场景, 解决单点登录问题。 因为JWT使用起来轻便, 开销小, 服务端不用记录用户状态信息(无状态), 所以使用比较广泛；
- 信息交换：JWT是在各个服务之间安全传输信息的好方法。 因为JWT可以签名, 例如, 使用公钥/私钥对儿 - 可以确定请求方是合法的。 此外, 由于使用标头和有效负载计算签名, 还可以验证内容是否未被篡改。 


## OAuth2
OAuth 就是一种授权机制。 

举个例子:
客户端 - 某小程序 服务提供商 - 微信 
OAuth在"客户端"与"服务提供商"之间, 设置了一个授权层(authorization layer)。 "客户端"不能直接登录"服务提供商", 只能登录授权层, 以此将用户与客户端区分开来。 "客户端"登录授权层所用的令牌(token), 与用户的密码不同。 用户可以在登录的时候, 指定授权层令牌的权限范围和有效期。 

OAuth 的作用就是让"客户端"安全可控地获取"用户"的授权, 与"服务商提供商"进行互动。 

"客户端"登录授权层以后, "服务提供商"根据令牌的权限范围和有效期, 向"客户端"开放用户储存的资料。 
