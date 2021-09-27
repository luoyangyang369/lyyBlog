---
title: run code in Docker code-server
date: 2021-01-20 17:25:25  # 建立日期
updated: 2021-01-20 17:25:25  # 更新日期
tags: [Docker, code-server]
categories: 运维

comments: true  # 开启文章的评论功能
copyright : ture  # 授权问题显示
auto_spacing: true  # 在中文和英文之间加入空格
external_link: true  # 在新标签中打开链接
# keys:  # 阅读密码
#  - '123456'
# publish: false  # 文章是否发布
# sticky: 100  # 文章置顶
---

搭建远程 code-server
<!-- more -->

## Docker-compose
使用 `code-server` 镜像构建
```Docker
version: "3"

services:
  xy-code-server:
    container_name: xy-code-server
    image: codercom/code-server  # 拉取 codercom/code-server 镜像
    ports:
      - "8080"
    volumes:
      - "/root/luoyangyang:/home/coder/project"  # 前面的目录即为你远程打开的目录
    environment:
      PASSWORD: 123456  # code-server 首页登录密码
    restart: always
    networks:
      Nginx_net:
        aliases:
        - xy-code-server  # 创建局域网的别名  其他应用可以通过这个名字访问, 比如Nginx

networks:
  Nginx_net:  # 这里与 Nginx_net 做关联与 Nginx 通信
    external: true
```
### 方法一
修改 `Docker-compose.yml` => `ports: - "8081: 8080"`
> Docker-compose up # 启动即可在 localhost:8081 访问到 code-server

### 方法二
配合 `Nginx` 转发

详情见 [Nginx Docker 搭建应用](./Nginx_Docker.md)
