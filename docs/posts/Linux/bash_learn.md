---
title: bash学习
date: 2019-1-20 17:25:25
tags: [Linux]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重，主页那个先显示
copyright : ture  # 授权问题显示
categories: bash
---

<!-- more -->

## profile、bashrc、bash_profile之间的区别和联系

- **/etc/profile**

系统的每个用户设置环境信息,当用户第一次登录时,该文件被执行并从/etc/profile.d目录的配置文件中搜集shell的设置.
所以如果你有对/etc/profile有修改的话必须得重启你的修改才会生效，此修改对每个用户都生效。

- **/etc/bashrc**

为每一个运行bash shell的用户执行此文件.当bash shell被打开时,该文件被读取.
如果你想对所有的使用bash的用户修改某个配置并在以后打开的bash都生效的话可以修改这个文件，修改这个文件不用重启，重新打开一个bash即可生效。

- **~/.bash_profile**

每个用户都可使用该文件输入专用于自己使用的shell信息,当用户登录时,该文件仅仅执行一次!默认情况下,他设置一些环境变量,执行用户的.bashrc文件.

此文件类似于/etc/profile，也是需要需要重启才会生效，/etc/profile对所有用户生效，~/.bash_profile只对当前用户生效。

- **~/.bashrc**

该文件包含专用于你的bash shell的bash信息,当登录时以及每次打开新的shell时,该文件被读取.（每个用户都有一个.bashrc文件，在用户目录下）

此文件类似于/etc/bashrc，不需要重启生效，重新打开一个bash即可生效，  /etc/bashrc对所有用户新打开的bash都生效，但~/.bashrc只对当前用户新打开的bash生效。

- **~/.bash_logout**

当每次退出系统(退出bash shell)时,执行该文件. 

另外,/etc/profile中设定的变量(全局)的可以作用于任何用户,而~/.bashrc等中设定的变量(局部)只能继承/etc/profile中的变量,他们是"父子"关系.

### 总结
~/.bash_profile 是交互式、login 方式进入bash 运行的；
~/.bashrc 是交互式 non-login 方式进入bash 运行的；
通常二者设置大致相同，所以通常前者会调用后者。

**执行顺序**为：/etc/profile -> (~/.bash_profile | ~/.bash_login | ~/.profile) -> ~/.bashrc -> /etc/bashrc -> ~/.bash_logout


## SHELL的交互式和非交互式、登录和非登录的区别

交互式shell和非交互式shell、登录shell和非登录shell的区别。
首先，这是两个不同的维度来划分的，一个是是否交互式，另一个是是否登录。

### 交互式和非交互式

- 交互式

交互式模式就是在终端上执行，shell等待你的输入，并且立即执行你提交的命令。这种模式被称作交互式是因为shell与用户进行交互。这种模式也是大多数用户非常熟悉的：登录、执行一些命令、退出。当你退出后，shell也终止了。

- 非交互式

以shell script(非交互)方式执行。在这种模式 下，shell不与你进行交互，而是读取存放在文件中的命令,并且执行它们。当它读到文件的结尾EOF，shell也就终止了。

1.3 测试逻辑表达式
基本格式
-a : 逻辑与,操作符两边均为真,结果为真,否则为假。
-o : 逻辑或,操作符两边一边为真,结果为真,否则为假。
! : 逻辑否,条件为假,结果为真。




