---
title: VSCode使用
date: 2019-11-21 17:25:25
tags: [工具]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重，主页那个先显示
copyright : ture  # 授权问题显示
categories: 工具
---

<!-- more -->

## 参考资料
[vscode](https://blog.csdn.net/vinkim/article/details/81546333)

## 下载

[地址](https://code.visualstudio.com/) 破解版

## VSCode 配置 python 环境
[参考](https://www.jianshu.com/p/cbf500c22154)

安装完成后，打开软件会自动提示你安装一些重要插件，如中文语言包，Git等
1. 主要选择安装Python插件(也可以使用Ctrl+Shift+X可以打开扩展商店然后输入Python搜索)。
2. 选取Python解释器  
> 使用Ctrl+Shift+P打开命令板，输入Python: Select Interpreter进行搜索。




## 插件推荐

- Settings Sync

这个插件可以实现同步你的vscode设置，包括setting文件，插件设置等，不过你要先有github的账户，因为它利用了github的token功能，相当于把这样文件上传到了你的github账户中，这样你就可以在其它的电脑上直接下载的配置文件了，不用再配置一次了，相当方便省事了。

- Python

首先当然要推荐这个必备插件python了，提供了代码分析，高亮，规范化等很多基本功能，装好这个就可以开始愉快的写python了。

- Bracket Pair Colorizer

代码颜色高亮一般只会帮你区分不同的变量，这款插件给不同的括号换上了不同的颜色，括号的多的时候非常实用。

- Visual Studio IntelliCode

自动补全配置

- Code Runner

支持多种语言，包括 Python，运行执行一段任意代码。

## 问题

命令行不能执行 python or other

> 打开vs code属性里的兼容性，勾选以管理员身份运行，然后应用

就是找到启动的 .exe文件右键 => 属性