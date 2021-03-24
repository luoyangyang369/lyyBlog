---
title: hexo&markdown常用命令
date: 2018-12-17 21:20:05
tags: [Hexo, 命令]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重, 主页那个先显示
copyright : ture  # 授权问题显示
categories: hexo
---

hexo & markdown 常用命令
<!-- more -->
## hexo常用命令笔记

##### 常用
```
hexo n  # 写文章
hexo clean  # 清除缓存 网页正常情况下可以忽略此条命令
hexo g  # 生成
hexo d  # 部署 # 可与hexo g 合并为 hexo d -g
```


##### hexo
```
npm install hexo -g # 安装  
npm update hexo -g # 升级  
hexo init # 初始化
```

##### 简写
```
hexo n "我的博客" == hexo new "我的博客"  # 新建文章
hexo p == hexo publish
hexo g == hexo generate # 生成
hexo s == hexo server  # 启动服务预览
hexo d == hexo deploy  # 部署
```
##### 服务器
```
hexo server #Hexo 会监视文件变动并自动更新, 您无须重启服务器。
hexo server -s  # 静态模式
hexo server -p 5000  # 更改端口
hexo server -i 192.168.1.1  # 自定义 IP

hexo clean  # 清除缓存 网页正常情况下可以忽略此条命令
hexo g  # 生成静态网页
hexo d  # 开始部署
```
## markdown 基础语法

##### 标题
一个#是一级标题, 二个#是二级标题, 以此类推。支持六级标题。

##### 字体
- 加粗： 要加粗的文字左右分别用两个*号包起来
- 斜体： 要倾斜的文字左右分别用一个*号包起来
- 斜体加粗：  要倾斜和加粗的文字左右分别用三个*号包起来
- 删除线：  要加删除线的文字左右分别用两个~~号包起来

**效果：**
**这是加粗的文字**
*这是倾斜的文字*`
***这是斜体加粗的文字***
~~这是加删除线的文字~~

##### 引用
```
>这是引用的内容
>>这是引用的内容
>>>>>>>>>>这是引用的内容
```
**效果：**
>这是引用的内容

##### 分割线

三个或者三个以上的 - 或者 * 都可以。
**效果：**

---

##### 图片

```
![图片alt](图片地址 ''图片title'')

图片alt就是显示在图片下面的文字, 相当于对图片内容的解释。
图片title是图片的标题, 当鼠标移到图片上时显示的内容。title可加可不加
```
示例：

> ![blockchain](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/ u=702257389,1274025419&fm=27&gp=0.jpg "区块链")

**效果：**
![blockchain](https://upload-images.jianshu.io/upload_images/6860761-fd2f51090a890873.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/550/format/webp "区块链")

##### 超链接
> 语法：[超链接名](超链接地址 "超链接title")
> title可加可不加

**效果：**
[洋洋的博客](luoyangyang.pub)

##### 列表
语法：
- 无序列表：

用 - + * 任何一种都可以
注意：- + * 跟内容之间都要有一个空格
**效果：**
- 列表内容
+ 列表内容
* 列表内容

- 有序列表：

用数字加点
1. 列表内容
2. 列表内容
3. 列表内容

- 列表嵌套

上一级和下一级之间敲三个空格即可

##### 代码
单行代码：代码之间分别用一个反引号包起来
代码块：代码之间分别用三个反引号包起来, 且两边的反引号单独占一行
