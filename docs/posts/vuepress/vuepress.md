---
title: vuepress blog
date: 2021-03-15 17:25:25  # 建立日期
updated: 2021-03-16 17:25:25  # 更新日期
tags: [vuepress]
categories: vuepress

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

## 参考
- [Markdown详解](https://www.moyundong.com/frontend/vuepress/5Markdown%E8%AF%A6%E8%A7%A3.html)
- [icon选择](https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html)
- [主题配置](https://v0.vuepress.vuejs.org/zh/default-theme-config/#%E9%A6%96%E9%A1%B5)
- [搭建vuepress教程](https://segmentfault.com/a/1190000017055963)

## 前言
使用 `vuepress` 搭建静态网站并部署至云服务器

## 搭建 vuepress
[vuepress 官方文档](https://www.vuepress.cn/)

### 新建工程
```sh
mkdir vuepress-blog && cd vuepress-blog
yarn init
yarn add -D vuepress
mkdir docs && echo '# Hello VuePress' > docs/README.md
yarn docs:dev
yarn docs:build
```
`docs` 下新建 `docs/.vuepress` 目录

`docs/.vuepress/public` 中放置静态资源

配置 `config.js`

选用主题后根据主题调整首页和文章的 Front Matter

这里主题选用了 [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)
### 目录结构
```
docs
├── index.md  # or README.md 博客的首页
├── .vuepress
    ├── public  # 静态资源
    └── config.js  # 网站配置
└── posts
    └── database  # 博客分类
        ├── mysql.md
        └── redis.md
```

## 从零用云服务器搭建一个网站

### 创建用户

```sh
# 创建一个有 root 权限的用户
sudo adduser demo
# 并将其加入 sudoers
# root ALL=(ALL) ALL
# demo ALL=(ALL) ALL
sudo nano /etc/sudoers
```

### 安装依赖

> 更新依赖 

```sh
sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get upgrade -y && sudo apt-get dist-upgrade -y && sudo apt-get autoremove -y
```

> 安装 docker, 后续的部署全部通过 [docker](https://developer.aliyun.com/article/110806)
```sh
# step 1: 安装必要的一些系统工具
sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
# step 2: 安装GPG证书
curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
# Step 3: 写入软件源信息
sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
# Step 4: 更新并安装 Docker-CE
sudo apt-get -y update
sudo apt-get -y install docker-ce
```

> 使普通用户可以使用 docker
```sh
# 添加到用户组
sudo gpasswd -a $USER docker
# 重新登录
# 重启
service docker restart
```

> 安装 docker-compose (懒人必备)
```sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

#### 编写 Dockerfile

```docker
FROM nginx:latest

RUN mkdir /app
COPY ./docs/.vuepress/dist /app/dist
COPY ./docker/conf.d /etc/nginx/conf.d

EXPOSE 80 443
```

> 打包镜像
```docker
docker build -f docker/Dockerfile -t registry.cn-shenzhen.aliyuncs.com/luoyangyang/luoyangyang:v1 .
docker push registry.cn-shenzhen.aliyuncs.com/luoyangyang/luoyangyang:v1
```

> 服务器端编写 docker-compose.yml
```docker
version: '2'
services:
  vuepress-starter:
    container_name: vuepress-starter
    image: registry.cn-shenzhen.aliyuncs.com/luoyangyang/luoyangyang:v1
    restart: always
    ports:
      - '88:80'
```

> 启动, 冲

`docker-compose up -d`

>>> 开发流程: 本地修改好重新打包 => push 到 docker 仓库 => 服务器重新 pull 镜像 => docker-compose up -d
```sh
本地执行
yarn docs:build
docker build -f docker/Dockerfile -t registry.cn-shenzhen.aliyuncs.com/luoyangyang/luoyangyang:v1 .
docker push registry.cn-shenzhen.aliyuncs.com/luoyangyang/luoyangyang:v1

服务器执行
docker pull registry.cn-shenzhen.aliyuncs.com/luoyangyang/luoyangyang:v1
docker-compose down/up
```

> vscode 连接服务器

使用 ms-vscode-remote.remote-ssh 插件 让操作服务器和在本地一样方便
