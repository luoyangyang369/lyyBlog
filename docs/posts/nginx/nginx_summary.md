---
title: nginx总结
date: 2019-11-21 17:25:25
tags: [nginx]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重, 主页那个先显示
copyright : ture  # 授权问题显示
categories: 运维
---

<!-- more -->

## 参考资料

- [8分钟带你深入浅出搞懂Nginx](https://zhuanlan.zhihu.com/p/34943332)
- [连前端都看得懂的《Nginx 入门指南》](https://juejin.cn/post/6844904129987526663)
- [nginx 这一篇就够了](https://juejin.im/post/5d81906c518825300a3ec7ca)
- [Nginx中文文档](https://www.nginx.cn/doc/)

## 前言

Nginx是一款轻量级的Web服务器、反向代理服务器, 由于它的内存占用少, 启动极快, 高并发能力强, 在互联网项目中广泛应用。

## nginx 服务架构

> nginx 服务器的开发完全遵循模块化设计思想

### 模块化开发
- 单一职责原则, 一个模块只负责一个功能
- 将程序分解, 自顶向下, 逐步求精
- 高内聚, 低耦合

### nginx 的模块化结构 

- 核心模块:nginx 最基本最核心的服务, 如进程管理、权限控制、日志记录;
- 标准 HTTP 模块:nginx 服务器的标准 HTTP 功能;
- 可选 HTTP 模块:处理特殊的 HTTP 请求
- 邮件服务模块:邮件服务
- 第三方模块:作为扩展, 完成特殊功能

