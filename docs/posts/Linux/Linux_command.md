---
title: Linux常用命令
date: 2019-1-21 09:23:05
tags: [Linux, 命令]  # 标签
index_img: /img/git.png  # 主页图片
banner_img: /img/git.png  # 详情页图片
top: 99  # 设置权重, 主页那个先显示
copyright : ture  # 授权问题显示
---

Linux 工作常用命令
<!-- more -->

## 工作常用
[Linux 在线手册](http://linux.51yip.com/)
[Linux 命令学习](https://www.cnblogs.com/peida/archive/2012/12/05/2803591.html)
[Linux命令大全(手册)](https://www.linuxcool.com/)
```
查看磁盘占用：df -h 查看当前文件夹大小(包含子目录)：du -sh
查看目录下目录多少：ls -l |grep "^d"|wc -l
查看目录下文件多少：ls -l |grep "^-"|wc -l
查看目录剩余磁盘大小：df -hl 目录path

ctrl+r：搜索之前用过的命令
实时查看日志：tail -f /var/log/messages(-f 实时  -n 行数)
du可以查看文件及文件夹的大小。  // du -h file_path
mv file1 file2：移动文件, 若file2不存在则为改名字
查看进程：ps -ef | prep name
解包：tar xvf FileName.tar　　unzip filename.zip
打包：tar cvf FileName.tar DirName
cp -r dir1 dir2
远程传输  
    上传$scp -r local_folder remote_username@remote_ip:remote_folder
    下载$scp remote_username@remote_ip:remote_folder local_folder
curl:用来请求web服务器, == postman。
    get：参数加url后面.
    POST：--data "data",-X 动作, 默认get,
    -d POST自动带上Content-Type : application/x-www-form-urlencoded 
md5sum 计算文件md5值, 对比文件是否一样
```

## 权限相关

```
chmod 755 file
拥有者-属组用户-其他用户
x-可执行r-可读w-可写
rwx = 111 = 7
rw- = 110 = 6
r-x = 101 = 5
r-- = 100 = 4
-wx = 011 = 3
-w- = 010 = 2
--x = 001 = 1
--- = 000 = 0
ll 关于第一位最高位的解释：
    d代表的是目录(directroy)
    -代表的是文件(regular file)
    s代表的是套字文件(socket)
    p代表的管道文件(pipe)或命名管道文件(named pipe)
    l代表的是符号链接文件(symbolic link)
    b代表的是该文件是面向块的设备文件(block-oriented device file)
    c代表的是该文件是面向字符的设备文件(charcter-oriented device file)
```

## 其他命令

```
make PREFIX=/home/lyy/lyy/redis install  指定路径安装
Linux 查看环境变量 echo $PATH 
    临时设置：export env=xxx
    永久设置：# vi /etc/profile 
            export CLASSPATH=./JAVA_HOME/lib;$JAVA_HOME/jre/lib
查看一个文件夹中所有文件的大小(不含子目录中的文件)：du -Sh或du -Ssh
查看一个文件夹中所有文件的大小(包含子目录中的文件)：du -h或者du -sh
S：表示不统计子目录, s：表示不要显示其下子目录和文件占用的磁盘空间大小信息, 只显示总的占用空间大小
查看文件夹中每一个文件的大小：du -ah 或者ls -lRh
```

## 常用目录
```
/bin： bin是Binary的缩写, 这个目录存放着最经常使用的命令。
/boot：这里存放的是启动Linux时使用的一些核心文件, 包括一些连接文件以及镜像文件。
/dev ：dev是Device(设备)的缩写, 该目录下存放的是Linux的外部设备, 在Linux中访问设备的方式和访问文件的方式是相同的。
/opt：这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。
/root：该目录为系统管理员, 也称作超级权限者的用户主目录。
/tmp：这个目录是用来存放一些临时文件的。
/usr： 这是一个非常重要的目录, 用户的很多应用程序和文件都放在这个目录下, 类似于windows下的program files目录。
/etc：这个目录用来存放所有的系统管理所需要的配置文件和子目录。
/home：用户的主目录, 在Linux中, 每个用户都有一个自己的目录, 一般该目录名是以用户的账号命名的。
/lib：这个目录里存放着系统最基本的动态连接共享库, 其作用类似于Windows里的DLL文件。几乎所有的应用程序都需要用到这些共享库。
/media：linux系统会自动识别一些设备, 例如U盘、光驱等等, 当识别后, linux会把识别的设备挂载到这个目录下。
/mnt：让用户临时挂载别的文件系统的, 我们可以将光驱挂载在/mnt/上, 然后进入该目录就可以查看光驱里的内容了。
/usr/bin：系统用户使用的应用程序。
/usr/sbin：超级用户使用的比较高级的管理程序和系统守护程序。
/var：这个目录中存放着在不断扩充着的东西, 我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。
```

## 文件颜色
```
白色：表示普通文件
浅蓝色：表示链接文件； 
灰色：表示其他文件； 
绿色：表示可执行文件； 
红色：表示压缩文件； 
蓝色：表示目录； 
红色闪烁：表示链接的文件有问题了； 
黄色：表示设备文件, 包括block,char,fifo。 
```

## 实现ssh免密登录

```
1、生成自己的公钥：$ ssh-keygen (一路回车)
2、将公钥放到 对方.ssh/authorized_keys 下, 没有则创建文件夹
3、chmod 700 ~/.ssh   chmod 600 ~/.ssh/authorized_keys
4、重启  // ubuntu系统：service ssh restart  // debian系统：/etc/init.d/ssh restart

可能出错：
    目录权限问题：Linux家目录设为700, .ssh为700, authorized_keys为600 即可解决
```
linux .o,.a,.so
    .o,是目标文件,相当于windows中的.obj文件 

    .so 为共享库,是shared object,用于动态连接的,相当于windows下的dll 

    .a为静态库,是好多个.o合在一起,用于静态连接 