---
title: docker 命令
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

工作中常用的 docker 命令
<!-- more -->

## 参考资料
- [docker-compose 文档](http://www.dockerinfo.net/docker-compose-%E9%A1%B9%E7%9B%AE)

## docker 常用命令

```docker
docker ps       查看启动的容器列表
docker ps -a    查看所有容器列表
docker images   查看所有镜像
docker rm $(docker ps -a -q)            删除所有容器, 需要先停止
docker rmi $(docker images -q)          删除所有镜像
docker exec -it apollo_1 bash           进入容器apollo_1
docker exec -it my_docker sh            进入 apline 构建的镜像
docker exec -it db_mongo_1 mongo        直接以mongo命令进入容器
docker exec -it db_redis_1 redis-cli    直接以redis-cli命令进入容器
docker rmi $(docker images |awk '{if($2=="<none>")  print $3}') 删除标签为none的镜像
docker stats    实时监控容器的信息 
docker stats --no-stream    只输出当前的信息
# 需要进入到包含有 docker-compose.xml的文件目录下执行
docker-compose up           启动
docker-compose down         停止
docker-compose up -d        守护模式启动
# 复制宿主机的 insert.sql文件到 db_mysql_1 容器的目录 /opt/sql/
docker cp /data/insert.sql db_mysql_1:/opt/sql/

# 复制 db_mysql_1 容器的目录 /opt/sql/insert.sql 到 宿主机的 /data
docker cp db_mysql_1:/opt/sql/ /data/
# 查看最后十条记录, 并实时更新
docker logs -f --tail 10 sedirea_weekly_1

# 从某个日期开始, 查看最后一百条记录, 并实时更新
docker logs -f -t --since="2018-11-20T13:50:16.184406342Z" --tail=100 apollo_admin_1
# 安装相关工具  
apt-get update                      (更新源)
apt-get install inetutils-ping      (18.04安装ping)
apt-get install iputils-ping        (旧版安装ping)
apt-get install net-tools           (安装ifconfig)
```

## docker-compose 常用命令
```docker-compose
docker-compose up -d nginx                     构建建启动nignx容器

docker-compose exec nginx bash            登录到nginx容器中

docker-compose down                              删除所有nginx容器,镜像

docker-compose ps                                   显示所有容器

docker-compose restart nginx                   重新启动nginx容器

docker-compose run --no-deps --rm php-fpm php -v  在php-fpm中不启动关联容器, 并容器执行php -v 执行完成后删除容器

docker-compose build nginx                     构建镜像 。        

docker-compose build --no-cache nginx   不带缓存的构建。

docker-compose logs  nginx                     查看nginx的日志 

docker-compose logs -f nginx                   查看nginx的实时日志

 

docker-compose config  -q                        验证(docker-compose.yml)文件配置, 当配置正确时, 不输出任何内容, 当文件配置错误, 输出错误信息。 

docker-compose events --json nginx       以json的形式输出nginx的docker日志

docker-compose pause nginx                 暂停nignx容器

docker-compose unpause nginx             恢复ningx容器

docker-compose rm nginx                       删除容器(删除前必须关闭容器)

docker-compose stop nginx                    停止nignx容器

docker-compose start nginx                    启动nignx容器
```