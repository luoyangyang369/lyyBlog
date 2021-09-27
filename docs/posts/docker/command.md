---
title: Docker 命令
date: 2021-01-06 17:25:25  # 建立日期
updated: 2021-01-06 17:25:25  # 更新日期
comments: true  # 开启文章的评论功能
tags: [Docker]
categories: 运维

copyright : ture  # 授权问题显示
auto_spacing: true  # 在中文和英文之间加入空格
external_link: true  # 在新标签中打开链接
# sticky: 100  # 文章置顶
# prev: ../interview/learn
# next:
---

工作中常用的 Docker 命令
<!-- more -->

## 参考资料
- [Docker-compose 文档](http://www.Dockerinfo.net/Docker-compose-%E9%A1%B9%E7%9B%AE)

## Docker 常用命令

```Docker
Docker ps       查看启动的容器列表
Docker ps -a    查看所有容器列表
Docker images   查看所有镜像
Docker rm $(Docker ps -a -q)            删除所有容器, 需要先停止
Docker rmi $(Docker images -q)          删除所有镜像
Docker exec -it apollo_1 bash           进入容器apollo_1
Docker exec -it my_Docker sh            进入 apline 构建的镜像
Docker exec -it db_mongo_1 mongo        直接以mongo命令进入容器
Docker exec -it db_redis_1 redis-cli    直接以redis-cli命令进入容器
Docker rmi $(Docker images |awk '{if($2=="<none>")  print $3}') 删除标签为none的镜像
Docker stats    实时监控容器的信息 
Docker stats --no-stream    只输出当前的信息
# 需要进入到包含有 Docker-compose.xml的文件目录下执行
Docker-compose up           启动
Docker-compose down         停止
Docker-compose up -d        守护模式启动
# 复制宿主机的 insert.sql文件到 db_mysql_1 容器的目录 /opt/sql/
Docker cp /data/insert.sql db_mysql_1:/opt/sql/

# 复制 db_mysql_1 容器的目录 /opt/sql/insert.sql 到 宿主机的 /data
Docker cp db_mysql_1:/opt/sql/ /data/
# 查看最后十条记录, 并实时更新
Docker logs -f --tail 10 sedirea_weekly_1

# 从某个日期开始, 查看最后一百条记录, 并实时更新
Docker logs -f -t --since="2018-11-20T13:50:16.184406342Z" --tail=100 apollo_admin_1
# 安装相关工具  
apt-get update                      (更新源)
apt-get install inetutils-ping      (18.04安装ping)
apt-get install iputils-ping        (旧版安装ping)
apt-get install net-tools           (安装ifconfig)
```

## Docker-compose 常用命令
```Docker-compose
Docker-compose up -d Nginx                     构建建启动nignx容器

Docker-compose exec Nginx bash            登录到Nginx容器中

Docker-compose down                              删除所有Nginx容器,镜像

Docker-compose ps                                   显示所有容器

Docker-compose restart Nginx                   重新启动Nginx容器

Docker-compose run --no-deps --rm php-fpm php -v  在php-fpm中不启动关联容器, 并容器执行php -v 执行完成后删除容器

Docker-compose build Nginx                     构建镜像 。        

Docker-compose build --no-cache Nginx   不带缓存的构建。

Docker-compose logs  Nginx                     查看Nginx的日志 

Docker-compose logs -f Nginx                   查看Nginx的实时日志

 

Docker-compose config  -q                        验证(Docker-compose.yml)文件配置, 当配置正确时, 不输出任何内容, 当文件配置错误, 输出错误信息。 

Docker-compose events --json Nginx       以json的形式输出Nginx的Docker日志

Docker-compose pause Nginx                 暂停nignx容器

Docker-compose unpause Nginx             恢复ningx容器

Docker-compose rm Nginx                       删除容器(删除前必须关闭容器)

Docker-compose stop Nginx                    停止nignx容器

Docker-compose start Nginx                    启动nignx容器
```