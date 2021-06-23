---
title: python环境搭建
date: 2018-12-7 17:25:25
tags: [Python]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重, 主页那个先显示
copyright : ture  # 授权问题显示
categories: Python
---

<!-- more -->

## python 下载

## pip 常用命令

- 查看pip 的位置           where pip  
- 查看安装                 pip show 库名
- 查看pip的版本            pip-V
- 查看已经安装的第三方库    pip list

## 问题

### 注意Python2 和Python3的 pip

> 下载的时候先使用 where pip
再选择下载至哪个目录下

### 配置下载源
网上有很多可用的源, 例如

豆瓣:http://pypi.douban.com/simple/
清华:https://pypi.tuna.tsinghua.edu.cn/simple

- 临时下载

> pip install -i https://pypi.tuna.tsinghua.edu.cn/simple gevent

- 永久改变

linux下, 修改 ~/.pip/pip.conf (没有就创建一个),  修改 index-url至tuna, 内容如下:
```
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
```

windows下, 直接在user目录中创建一个pip目录, 如:C:\Users\xx\pip, 新建文件pip.ini, 内容如下

```
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
```

### pip3使用异常？ No module named pip?

> python -m ensurepip

在管理员模式的控制台里输入上述命令后即可, python3.6用这个命令救活了

执行 pip install  --upgrade  pip后出现的问题, 似乎是因为路径中有空格

正确的升级方式是  python -m pip install --upgrade pip

### 虚拟环境搭建

#### virtualenv
pip install virtualenv
一般需要安装一个管理工具:pip install virtualenvwrapper-win　　只有它可以使用workon
创建虚拟环境:mkvirtualenv test1
退出:deactivate
删除:rmvirtualenv venv

#### venv

Python3 自带的
python3 -m venv env1(创建路径)
source env1/bin/activate 进入虚拟环境
退出:deactivate

## pycharm
[参考](https://zhuanlan.zhihu.com/p/26066151)

### 下载
[参考](https://blog.csdn.net/pdcfighting/article/details/80297499)

### 常用设置

View --> Toolbar  显示导航栏
设置皮肤: File -> Settings -> IDE Settings -> Appearance -> Theme -> 选择“Alloy.IDEA Theme”
设置脚本头文件---自动生成头文件:File-->Settings-->Editor-->Code Style-->File and Code Templates ,然后选择Python Script 。填写在旁边框框中填写头文件信息即可。
取消自动保存: 
```
去掉 Setting - General - Synchronization - Save files on frame deactivation 以及 Save files automatically if application is idle for XX sec的勾
菜单File -> Settings... -> Editor -> General -> Editor Tabs

选中以下选项 Mark modified tabs with asterisk  这个是显示未保存星号的
```
### 快捷键

双击 shift: 全局查找
shift + enter: 另起一行
Ctrl + alt + l   调整代码格式
Ctrl + d:  复制一行至下一行
Ctrl + shift + 上下:  移动行
CTRL SHIFT -: 折叠所有代码
CTRL SHIFT +: 展开所有代码
CTRY Y: 删除当前行

### 调试

简单介绍一下调试栏的几个重要的按钮作用:

Resume Program:断点调试后, 点击按钮, 继续执行程序;

Step Over :在单步执行时, 在函数内遇到子函数时不会进入子函数内单步执行, 而是将子函数整个执行完再停止, 也就是把子函数整个作为一步。有一点,经过我们简单的调试,在不存在子函数的情况下是和Step Into效果一样的(简而言之, 越过子函数, 但子函数会执行);

Step Into:单步执行, 遇到子函数就进入并且继续单步执行(简而言之, 进入子函数);

Step Out : 当单步执行到子函数内时, 用step out就可以执行完子函数余下部分, 并返回到上一层函数。

### 注意事项

环境变量问题:每次打开新项目, 记得勾选下面已存在的环境, 不然默认创建环境

