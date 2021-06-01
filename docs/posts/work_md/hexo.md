---
title: 记录如何使用hexo搭建博客
date: 2018-12-17 20:23:25
tags: [hexo]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
---

hexo + GitHub pages 搭建博客流程
<!-- more -->
### 一、hexo & node 安装

npm install hexo-cli -g
npm install hexo-deployer-git --save
or 使用yarn

### 二、 Hexo初始化配置

##### 创建Hexo文件夹
安装完成后, 根据自己喜好建立目录(如F:\Blog\Hexo), 直接进入F:\Blog\Hexo文件夹下右键鼠标, 点击Git Bash Here, 进入Git命令框, 执行以下操作。
> $ hexo init

##### 项目文件介绍
![hexo目录](https://www.cnblogs.com/images/cnblogs_com/luoyangyang/1573981/t_hexo_mulu.png)

- deploy:执行hexo deploy命令部署到GitHub上的内容目录
- public:执行hexo generate命令, 输出的静态网页内容目录
- scaffolds:layout模板文件目录, 其中的md文件可以添加编辑
- scripts:扩展脚本目录, 这里可以自定义一些javascript脚本
- source:文章源码目录, 该目录下的markdown和html文件均会被hexo处理。该页面对应repo的根目录, 404文件、favicon.ico文件, CNAME文件等都应该放这里, 该目录下可新建页面目录。 
    - drafts:草稿文章
    - posts:发布文章
- themes:主题文件目录
- _config.yml:全局配置文件, 大多数的设置都在这里
- package.json:应用程序数据, 指明hexo的版本等信息, 类似于一般软件中的关于按钮


##### 本地查看效果
执行下面语句, 执行完即可登录localhost:4000查看效果

>hexo generate
>hexo server

### 三、 将博客部署到Github Pages上

##### 创建项目代码库

1. 注册完登陆后, 我们就创建一个我们自己的Github Pages项目。点击New repository。
2. 创建要点如下:
![如图](https://user-gold-cdn.xitu.io/2018/1/20/161117c7492a1849?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

##### 配置SSH密钥
1. 创建一对新的SSH密钥(keys)

> $ssh-keygen -t rsa -C "your_email@example.com"
> #这将按照你提供的邮箱地址, 创建一对密钥
> Generating public/private rsa key pair.
> Enter file in which to save the key (/c/Users/you/.ssh/id_rsa): [Press enter]

直接回车, 则将密钥按默认文件进行存储。此时也可以输入特定的文件名, 比如/c/Users/you/.ssh/github_rsa

2. 在GitHub账户中添加你的公钥
3. 测试

可以输入下面的命令, 看看设置是否成功, git@github.com的部分不要修改:
> $ ssh -T git@github.com

出现 yes/no ？ 输入yes

4. 设置用户信息

> $ git config --global user.name "username" //用户名

> $ git config --global user.email  "liji.anchang@163.com" //填写自己的邮箱

### 四、 将本地的Hexo文件更新到Github的库中

1. 复制项目 GitHub 地址

![如图](https://user-gold-cdn.xitu.io/2018/1/20/161117c77a882a00?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

2. 打开你一开始创建的Hexo文件夹(如F:\Blog\Hexo), 用记事本打开刚文件夹下的_config.yml文件

3. 在配置文件里作如下修改, 保存

![如图](https://user-gold-cdn.xitu.io/2018/1/20/161117c78dc8dca4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

4. 在Hexo文件夹下执行
> hexo g
> hexo d

或者
> hexo g -d

执行完之后会让你输入github的账号和密码, 输入完后就可以登录我们自己的部署在Github Pages服务器上的博客了。对应的地址是 username.github.io(我的是:luoyangyang369.github.io)。

假如这时候, 报错 ERROR Deployer not found: git, 那么就是你的deployer没有安装成功, 你需要执行如下命令再安装一次:
> npm install hexo-deployer-git --save

这样, 你再执行hexo g -d, 你的博客就部署到Github上了。

5. 在浏览器上输入自己的主页地址即可访问

### 五、美化自己博客

1. 进入[Hexo的官网主题专栏](https://hexo.io/themes/)
2. 克隆主题
再打开Hexo文件夹下的themes目录(F:\Blog\hexo\themes), 右键Git Bash, 在命令行输入:
> git clone https://github.com/iissnan/hexo-theme-next(此处地址替换成你需要使用的主题的地址) 
3. 修改Hexo配置文件

下载完成后, 打开Hexo文件夹下的配置文件_config.yml
修改参数为:theme: hexo-theme-next

4. 部署主题, 本地查看效果
> hexo -g => hexo -s  
> 简写:hexo server -g

5. 如果效果满意, 将它部署到Github上

> hexo clean   (必须要, 不然有时因为缓存问题, 服务器更新不了主题)
> hexo g -d

### 六、 在博客写文章

1. 用hexo发表新文章
> $ hexo n "文章标题"

其中 我的家 为文章标题, 执行命令 hexo n "我的家" 后, 会在项目 \Hexo\source_posts 中生成 我的家.md文件, 用编辑器打开编写即可。

当然, 也可以直接在\Hexo\source_posts中新建一个md文件, 我就是这么做的。
写完后, 推送到服务器上, 执行以下命令即可在我们的站点看到新的文章。

> $ hexo g #生成

> $ hexo d #部署 # 可与hexo g合并为 hexo d -g

2. 用 [Markdown](https://www.jianshu.com/p/191d1e21f7ed) 写文章

我们注意到在 \Hexo\source_posts 文件夹下存放着我们的文章, 它们的格式都是以.md格式结尾的, 没错, Hexo也是支持Markdown语法的, 所以当我们需要写具有格式化的文章时, 我们可以使用支持Markdown语法的编辑器进行文章编译, 然后保存文件到 \Hexo\source_posts 文件夹下即可。

找一篇自己写过的 markdown 文章复制进去之后, 只要执行
> $ hexo d -g

推送至我们的Github仓库即可。

### 七、 将自己的域名关联到Github Pages上
[域名网址](https://www.aliyun.com/)
[域名控制台](https://account.aliyun.com/login/login.htm?oauth_callback=http%3A%2F%2Fdc.console.aliyun.com%2Fnext%2Findex#/domain/list/all-domain)

## 参考资料:
[2018, 你该搭建自己的博客了！](https://juejin.im/entry/5a574864f265da3e3c6c1217)
[使用指南](https://fluid-dev.github.io/hexo-fluid-docs/guide/)