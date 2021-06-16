---
title: nginx + docker 搭建应用
date: 2021-03-15 17:25:25  # 建立日期
updated: 2021-03-16 17:25:25  # 更新日期
tags: [docker, nginx]
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

使用 `docker nginx` 搭建应用记录
<!-- more -->

## 项目目录结构

![目录结构](/img/docker_nginx.png)
- 应用1是 [罗洋洋的博客](../vuepress/vuepress.md)
- 应用2是 [code-server](./code_server.md)

## nginx docker-compose

```nginx
version: '2'
services:

  my_nginx:
    container_name: my_nginx
    image: nginx
    restart: always
    ports:
      - 80:80
      - 443:443
    privileged: true
    volumes:
        - ./conf.d:/etc/nginx/conf.d
        - ./cert:/etc/nginx/cert
    networks:
      nginx_net:
        aliases:
        - my_nginx  # 如果有人需要访问当前应用则可以通过 my_nginx 别名。否则不需要配置此参数

networks:
  nginx_net:  # 将各个应用用此网络关联起来
    external: true
```

## nginx.conf
应用2的 nginx 配置

```nginx
server {
    listen 80;
    server_name xcode.lxy-home.cn;  # 监听此域名和80端口

    proxy_http_version 1.1;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Host $host;

    # 下面俩条是在启动后报错 WebSocket close with status code 1006
    # 找不到 vscode-remote:/home/coder/.local/share/code-server/User/setting.json 
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection upgrade;  # 处理 websocket 连接

    location / {
        proxy_pass      http://xy-code-server:8080;  # 对应 docker-compose 里 networks-aliases
    }
}
```

## 启动项目

1、首先启动应用1和应用2(会提示你没有网络)

2、在 nginx 目录下启动 nginx, `docker-compose up`
