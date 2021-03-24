#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -

# 部署流程
yarn docs:build
docker build -f docker/Dockerfile -t registry.cn-shenzhen.aliyuncs.com/luoyangyang/luoyangyang:v1 .
docker push registry.cn-shenzhen.aliyuncs.com/luoyangyang/luoyangyang:v1

# 服务器执行
docker pull registry.cn-shenzhen.aliyuncs.com/luoyangyang/luoyangyang:v1
docker-compose down/up
