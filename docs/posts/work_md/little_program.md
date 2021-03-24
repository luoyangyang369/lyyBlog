---
title: 小程序项目记录
date: 2019-8-26 15:25:25
tags: [小程序]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
categories: 小程序
# image: https://www.cnblogs.com/images/cnblogs_com/luoyangyang/1573981/t_index.jpg
---

记录一次小程序开发, 出现的坑以及一些知识
<!-- more -->

## 基本概念
- openID：不同APP不同openID。用户唯一标识, 跟人一一对应, 小程序分配给每个人的ID  OpenID = 用户微信号 & 公众平台APPID(两个数据加密得到的字符串)  不同公众号不同ID

- unionID：即使不同应用, ID一样。通过获取用户基本信息接口, 开发者可通过OpenID来获取用户基本信息

- appID(小程序ID):它其实就是小程序的「身份证号码」

- AppSecret(小程序密钥)

- PV：分享给了多少人

- UV：分享的课程被多少人打开

- openGid：小程序的群唯一标识的id

## 微信内容校验 node 实现

## 利用 puppeteer 可以生成一个网页的图片
[参考文档](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md)

## 问题记录

- node没有原生的取POST请求体
koa中可以利用 koa-body, 如：router.post('/del_room', **koaBody()**, async (ctx)
**但是**取xml koa-body不行, 可以从原生的数据中读取
如：
```
getPostData = function (ctx) {
    return new Promise((resolve, reject) => {
        var data = "";
        ctx.req.on("data", chunk => data += chunk);
        ctx.req.on("end", () => resolve(data))
        ctx.req.on("error", err => reject(err))
        }
    )
}
```
