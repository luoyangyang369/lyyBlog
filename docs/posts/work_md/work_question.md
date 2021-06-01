---
title: 工作问题记录
date: 2019-8-15 17:25:25
tags: [工作]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重, 主页那个先显示
copyright : ture  # 授权问题显示
categories: 问题
---

<!-- more -->

URL特殊字符转译问题:
在拼接url的时候, 需将特殊字符转译, [参考](https://blog.csdn.net/p312011150/article/details/78928003)

提取图片里的文字:可以使用OCR 光学字符识别(英語:Optical Character Recognition)

一定不要相信前端传来的东西, 都需要进行校验

node 中 HTTP 接口拿不到 xml 对象
function getPostData (ctx) {
    return new Promise((resolve, reject) => {
        var data = "";
        ctx.req.on("data", chunk => data += chunk);
        ctx.req.on("end", () => resolve(data))
        ctx.req.on("error", err => reject(err))
        }
    )
}

