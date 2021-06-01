---
title: sentos相关
date: 2019-7-8 17:25:25
tags: [Linux]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重, 主页那个先显示
copyright : ture  # 授权问题显示
categories: Linux
---

<!-- more -->

## 相关命令
查看位数:getconf LONG_BIT
查看版本:cat /etc/redhat-release

## rpm和yum的关系以及基本用法

### rpm
RPM是RedHat Package Manager(RedHat软件包管理工具)类似Windows里面的“添加/删除程序”
rpm 执行安装包
二进制包(Binary)以及源代码包(Source)两种。二进制包可以直接安装在计算机中, 而源代码包将会由RPM自动编译、安装。源代码包经常以src.rpm作为后缀名。


#### 解压 rpm 包

RPM包括是使用cpio格式打包的, 因此可以先转成cpio然后解压, 如下所示:
rpm2cpio xxx.rpm | cpio -div
解压后 里面会有 .spec 文件, 是该包的描述文件

### Yum
Yum(全称为 Yellow dog Updater, Modified)是一个在Fedora中的Shell前端软件包管理器。基於RPM包管理, 能够从指定的服务器自动下载RPM包并且安装, 可以自动处理 依赖性关系, 并且一次安装所有依赖的软体包, 无须繁琐地一次次下载、安装。

yum会查询数据库, 有无这一软件包, 如果有, 则检查其依赖冲突关系, 如果没有依赖冲突, 下载安装;如果有, 则会给出提示, 询问是否要同时安装依赖, 或删除冲突的包, 你可以自己作出判断。

## 软件安装

- 源码安装
源码的安装一般由3个步骤组成:配置(configure)、编译(make)、安装(make install)。

```
$ tar zxvf XXXX.tar.gz (or tar jxvf XXXX.tar.bz2)
$ cd XXXX
$ ./configure
$ make
$ make install
```

清理安装后的临时文件:
> $ make clean

卸载软件
> make uninstall

#### 步骤如下
1、 下载源码包
2、 解压包
3、 设置软件的安装目录:$ ./configure --prefix=/opt/XXX
检查configure返回结果, 为0代表运行成功:
> $ echo $?
> 0

## 参考资料
[linux笔记](https://www.kancloud.cn/chandler/bc-linux/55602)
[RPM 打包技术与典型 SPEC 文件分析](https://www.ibm.com/developerworks/cn/linux/l-rpm/index.html)
[添加环境变量](https://blog.csdn.net/huangfei711/article/details/53044539)