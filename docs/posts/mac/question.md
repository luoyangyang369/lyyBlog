---
title: Mac 常见问题
date: 2021-03-15 17:25:25  # 建立日期
updated: 2021-03-16 17:25:25  # 更新日期
tags: [Mac]
categories: 其他
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
sticky: 1  # 文章置顶
prev: ../interview/learn
# next:
---

记录 Mac 相关问题
<!-- more -->

## brew

`brew search xxx` 先搜索想要下载的东西
==> casks 属于分类, 这种类型下载 brew install --cask 软件名
其他类型直接下载
brew tap 可以为 brew 的软件的跟踪,更新,安装添加更多的的tap formulae
`brew cleanup --prune=all` 清理缓存

#### 更新系统后 Python/git 失效
报错信息: 
`xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun`

> 解决
执行 `xcode-select --install`

## Brew cask install software
```sh
brew cask install cheatsheet
brew cask install clipy
brew cask install sourcetree
brew cask install iina
brew cask install thunder
brew cask install tencent-lemon
brew cask install visual-studio-code
brew cask install google-chrome
brew cask install microsoft-edge
brew cask install onedrive
brew cask install baidunetdisk
brew cask install imageoptim
brew cask install clashx
brew cask install shadowsocksx-ng-r
brew cask install ezip
brew cask install keka
brew cask install snipaste
brew cask install postman
brew cask install pycharm-ce
brew cask install intellij-idea-ce
```