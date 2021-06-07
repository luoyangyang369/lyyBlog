---
title: docker 学习
date: 2021-03-15 17:25:25  # 建立日期
updated: 2021-03-16 17:25:25  # 更新日期
comments: true  # 开启文章的评论功能
tags: [docker]
categories: 运维

copyright : ture  # 授权问题显示
auto_spacing: true  # 在中文和英文之间加入空格
external_link: true  # 在新标签中打开链接
sticky: 100  # 文章置顶
# prev: ../interview/learn
# next:
---

docker 知识总结
<!-- more -->

## 参考资料
- [Docker的三大核心组件:镜像、容器与仓库](http://dockone.io/article/9249)
- [Docker — 从入门到实践](https://vuepress.mirror.docker-practice.com/)

![docker](/img/docker1.png)

## 镜像(images)
```docker
docker images
docker image rm(rmi) 镜像ID
```

## 容器(container) 
> 容器是镜像的实例化
```docker
docker ps(container ls)
    -a 全部
docker stop/rm
```
