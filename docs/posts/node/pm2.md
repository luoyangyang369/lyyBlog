---
title: pm2工作使用
date: 2019-9-13 17:25:25
tags: [node]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重，主页那个先显示
copyright : ture  # 授权问题显示
categories: node
---

pm2 基本知识及常用命令
<!-- more -->
### 基本知识
PM2是node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单。

##### 配置文件
```
配置文件里的设置项，跟命令行参数基本是一一对应的。
可以选择yaml或者json文件，就看个人洗好了。
json格式的配置文件，pm2当作普通的js文件来处理，所以可以在里面添加注释或者编写代码，这对于动态调整配置很有好处。
如果启动的时候指定了配置文件，那么命令行参数会被忽略。（个别参数除外，比如--env）

PM2配置文件夹结构    一旦PM2启动，自动创建这些文件夹：
$HOME/.pm2 将包含所有与PM2相关的文件
$HOME/.pm2/logs 将包含所有应用程序日志  // out标准输出  error 错误输出
$HOME/.pm2/pids 将包含所有应用程序pid
$HOME/.pm2/pm2.log PM2日志  // pm2自身日志，如谁用了那个命令
$HOME/.pm2/pm2.pid PM2 pid
$HOME/.pm2/rpc.sock 远程命令的套接字文件
$HOME/.pm2/pub.sock 用于可发布事件的套接字文件
$HOME/.pm2/conf.js PM2配置
```
##### 启动文件
```
配置pm2启动文件  
生成示例生态系统.json文件，其中列出了进程和部署环境
$ pm2 ecosystem；这将生成一个示例ecosystem.config.js
根据需要再次编辑文件
{
  "apps": [  // json结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用
    {
      "name": "mywork",  // 应用程序名称
      "cwd": "/srv/node-app/current",  // 应用程序所在的目录
      "script": "bin/www",  // 应用程序的脚本路径
      "log_date_format": "YYYY-MM-DD HH:mm Z",  
      "error_file": "/var/log/node-app/node-app.stderr.log",  // 错误日志
      "out_file": "log/node-app.stdout.log",  //  自定义应用程序日志文件
      "pid_file": "pids/node-geo-api.pid",  // 自定义应用程序的pid文件
      "instances": 6,
      "min_uptime": "200s",  // 最小运行时间，这里设置的是60s即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启max_restarts设置数量
      "max_restarts": 10,    // 设置应用程序异常退出重启的次数，默认15次（从0开始计数）
      "max_memory_restart": "1M",  // 服务内存超过1M，会自动重启
      "cron_restart": "1 0 * * *",  // 定时启动，解决重启能解决的问题
      "watch": false,  // 监听重启，启用情况下，文件夹或子文件夹下变化应用自动重启；
      "merge_logs": true,
      "exec_interpreter": "node",
      "exec_mode": "fork",  // 应用启动模式，支持fork和cluster模式；
      "autorestart": false,  // 默认为true, 发生异常的情况下自动重启；
      "vizion": false
    }
  ]
}
```
### 工作常用命令
```
启动项目：pm2 start ecosystem.config.js--env development
实时日志打印：pm2 logs youke
查看项目状态：pm2 show youke
停止项目：pm2 stop youke
```
### 其他命令
```
重启：pm2 restart ecosystem.config.js
pm2 reload；与restart杀死并重新启动进程的相对，reload实现了0秒的停机时间重载。
pm2 [list|ls|l|status]
查看启动程序的详细信息：pm2 describe id
pm2 monit：可以得到进程(以及集群)的CPU的使用率和内存占用(ctrl +c 退出)

启动项目：pm2 start ecosystem.config.js --watch
--watch：监听应用目录的变化，一旦发生变化，自动重启。如果要精确监听、不见听的目录，最好通过配置文件。
-i --instances：启用多少个实例，可用于负载均衡。如果-i 0或者-i max，则根据当前机器核数确定实例数目。
--ignore-watch：排除监听的目录/文件，可以是特定的文件名，也可以是正则。
        比如--ignore-watch="test node_modules "some scripts""
-n --name：应用的名称。查看应用信息的时候可以用到。
-o --output <path>：标准输出日志文件的路径。
-e --error <path>：错误输出日志文件的路径。
```


### 参考资料
[pm2教程](https://wohugb.gitbooks.io/pm2/content/bu_shu.html)