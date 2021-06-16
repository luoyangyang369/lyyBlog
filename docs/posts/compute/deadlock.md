---
title: 死锁
date: 2021-03-15 17:25:25  # 建立日期
updated: 2021-03-16 17:25:25  # 更新日期
comments: true  # 开启文章的评论功能
tags: [计算机]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重,  主页那个先显示
# sticky: 2  # 文章置顶
copyright : ture  # 授权问题显示
categories: 计算机
auto_spacing: true  # 在中文和英文之间加入空格
external_link: true  # 在新标签中打开链接
# prev: ../java/learn
# next: general2
---
<!-- [[toc]]  # 在页面显示目录 -->

## 参考资料
- [死锁](http://www.cyc2018.xyz/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%9F%BA%E7%A1%80/%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%20-%20%E6%AD%BB%E9%94%81.html)

## 必要条件

1. 互斥：每个资源要么已经分配给了一个进程，要么就是可用的。
2. 占有和等待：已经得到了某个资源的进程可以再请求新的资源。
3. 不可抢占：已经分配给一个进程的资源不能强制性地被抢占，它只能被占有它的进程显式地释放。
4. 环路等待：有两个或者两个以上的进程组成一条环路，该环路中的每个进程都在等待下一个进程所占有的资源。

## 处理方法
主要有以下四种方法：

- 鸵鸟策略
大多数操作系统，包括 Unix，Linux 和 Windows，处理死锁问题的办法仅仅是忽略它。

死锁检测与死锁恢复
死锁预防
死锁避免
