#!/usr/bin/env sh

cd /Users/luoyangyang/Documents/my_work/lyyblog
yarn docs:build

git add .
git commit -m "更新博客"
git push

# 部署流程
yarn docs:build
docker build -f docker/Dockerfile -t registry.cn-shenzhen.aliyuncs.com/luoyangyang/luoyangyang:v1 .
docker push registry.cn-shenzhen.aliyuncs.com/luoyangyang/luoyangyang:v1
