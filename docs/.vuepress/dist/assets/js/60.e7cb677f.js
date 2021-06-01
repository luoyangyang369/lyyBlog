(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{556:function(e,t,o){"use strict";o.r(t);var a=o(6),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("hexo + GitHub pages 搭建博客流程\n")]),e._v(" "),o("h3",{attrs:{id:"一、hexo-node-安装"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#一、hexo-node-安装"}},[e._v("#")]),e._v(" 一、hexo & node 安装")]),e._v(" "),o("p",[e._v("npm install hexo-cli -g\nnpm install hexo-deployer-git --save\nor 使用yarn")]),e._v(" "),o("h3",{attrs:{id:"二、-hexo初始化配置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#二、-hexo初始化配置"}},[e._v("#")]),e._v(" 二、 Hexo初始化配置")]),e._v(" "),o("h5",{attrs:{id:"创建hexo文件夹"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#创建hexo文件夹"}},[e._v("#")]),e._v(" 创建Hexo文件夹")]),e._v(" "),o("p",[e._v("安装完成后, 根据自己喜好建立目录(如F:\\Blog\\Hexo), 直接进入F:\\Blog\\Hexo文件夹下右键鼠标, 点击Git Bash Here, 进入Git命令框, 执行以下操作。")]),e._v(" "),o("blockquote",[o("p",[e._v("$ hexo init")])]),e._v(" "),o("h5",{attrs:{id:"项目文件介绍"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#项目文件介绍"}},[e._v("#")]),e._v(" 项目文件介绍")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://www.cnblogs.com/images/cnblogs_com/luoyangyang/1573981/t_hexo_mulu.png",alt:"hexo目录"}})]),e._v(" "),o("ul",[o("li",[e._v("deploy:执行hexo deploy命令部署到GitHub上的内容目录")]),e._v(" "),o("li",[e._v("public:执行hexo generate命令, 输出的静态网页内容目录")]),e._v(" "),o("li",[e._v("scaffolds:layout模板文件目录, 其中的md文件可以添加编辑")]),e._v(" "),o("li",[e._v("scripts:扩展脚本目录, 这里可以自定义一些javascript脚本")]),e._v(" "),o("li",[e._v("source:文章源码目录, 该目录下的markdown和html文件均会被hexo处理。该页面对应repo的根目录, 404文件、favicon.ico文件, CNAME文件等都应该放这里, 该目录下可新建页面目录。\n"),o("ul",[o("li",[e._v("drafts:草稿文章")]),e._v(" "),o("li",[e._v("posts:发布文章")])])]),e._v(" "),o("li",[e._v("themes:主题文件目录")]),e._v(" "),o("li",[e._v("_config.yml:全局配置文件, 大多数的设置都在这里")]),e._v(" "),o("li",[e._v("package.json:应用程序数据, 指明hexo的版本等信息, 类似于一般软件中的关于按钮")])]),e._v(" "),o("h5",{attrs:{id:"本地查看效果"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#本地查看效果"}},[e._v("#")]),e._v(" 本地查看效果")]),e._v(" "),o("p",[e._v("执行下面语句, 执行完即可登录localhost:4000查看效果")]),e._v(" "),o("blockquote",[o("p",[e._v("hexo generate\nhexo server")])]),e._v(" "),o("h3",{attrs:{id:"三、-将博客部署到github-pages上"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#三、-将博客部署到github-pages上"}},[e._v("#")]),e._v(" 三、 将博客部署到Github Pages上")]),e._v(" "),o("h5",{attrs:{id:"创建项目代码库"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#创建项目代码库"}},[e._v("#")]),e._v(" 创建项目代码库")]),e._v(" "),o("ol",[o("li",[e._v("注册完登陆后, 我们就创建一个我们自己的Github Pages项目。点击New repository。")]),e._v(" "),o("li",[e._v("创建要点如下:\n"),o("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/20/161117c7492a1849?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"如图"}})])]),e._v(" "),o("h5",{attrs:{id:"配置ssh密钥"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#配置ssh密钥"}},[e._v("#")]),e._v(" 配置SSH密钥")]),e._v(" "),o("ol",[o("li",[e._v("创建一对新的SSH密钥(keys)")])]),e._v(" "),o("blockquote",[o("p",[e._v('$ssh-keygen -t rsa -C "your_email@example.com"\n#这将按照你提供的邮箱地址, 创建一对密钥\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/c/Users/you/.ssh/id_rsa): [Press enter]')])]),e._v(" "),o("p",[e._v("直接回车, 则将密钥按默认文件进行存储。此时也可以输入特定的文件名, 比如/c/Users/you/.ssh/github_rsa")]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v("在GitHub账户中添加你的公钥")]),e._v(" "),o("li",[e._v("测试")])]),e._v(" "),o("p",[e._v("可以输入下面的命令, 看看设置是否成功, git@github.com的部分不要修改:")]),e._v(" "),o("blockquote",[o("p",[e._v("$ ssh -T git@github.com")])]),e._v(" "),o("p",[e._v("出现 yes/no ？ 输入yes")]),e._v(" "),o("ol",{attrs:{start:"4"}},[o("li",[e._v("设置用户信息")])]),e._v(" "),o("blockquote",[o("p",[e._v('$ git config --global user.name "username" //用户名')])]),e._v(" "),o("blockquote",[o("p",[e._v('$ git config --global user.email  "liji.anchang@163.com" //填写自己的邮箱')])]),e._v(" "),o("h3",{attrs:{id:"四、-将本地的hexo文件更新到github的库中"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#四、-将本地的hexo文件更新到github的库中"}},[e._v("#")]),e._v(" 四、 将本地的Hexo文件更新到Github的库中")]),e._v(" "),o("ol",[o("li",[e._v("复制项目 GitHub 地址")])]),e._v(" "),o("p",[o("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/20/161117c77a882a00?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"如图"}})]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[o("p",[e._v("打开你一开始创建的Hexo文件夹(如F:\\Blog\\Hexo), 用记事本打开刚文件夹下的_config.yml文件")])]),e._v(" "),o("li",[o("p",[e._v("在配置文件里作如下修改, 保存")])])]),e._v(" "),o("p",[o("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/20/161117c78dc8dca4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"如图"}})]),e._v(" "),o("ol",{attrs:{start:"4"}},[o("li",[e._v("在Hexo文件夹下执行")])]),e._v(" "),o("blockquote",[o("p",[e._v("hexo g\nhexo d")])]),e._v(" "),o("p",[e._v("或者")]),e._v(" "),o("blockquote",[o("p",[e._v("hexo g -d")])]),e._v(" "),o("p",[e._v("执行完之后会让你输入github的账号和密码, 输入完后就可以登录我们自己的部署在Github Pages服务器上的博客了。对应的地址是 username.github.io(我的是:luoyangyang369.github.io)。")]),e._v(" "),o("p",[e._v("假如这时候, 报错 ERROR Deployer not found: git, 那么就是你的deployer没有安装成功, 你需要执行如下命令再安装一次:")]),e._v(" "),o("blockquote",[o("p",[e._v("npm install hexo-deployer-git --save")])]),e._v(" "),o("p",[e._v("这样, 你再执行hexo g -d, 你的博客就部署到Github上了。")]),e._v(" "),o("ol",{attrs:{start:"5"}},[o("li",[e._v("在浏览器上输入自己的主页地址即可访问")])]),e._v(" "),o("h3",{attrs:{id:"五、美化自己博客"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#五、美化自己博客"}},[e._v("#")]),e._v(" 五、美化自己博客")]),e._v(" "),o("ol",[o("li",[e._v("进入"),o("a",{attrs:{href:"https://hexo.io/themes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hexo的官网主题专栏"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("克隆主题\n再打开Hexo文件夹下的themes目录(F:\\Blog\\hexo\\themes), 右键Git Bash, 在命令行输入:")])]),e._v(" "),o("blockquote",[o("p",[e._v("git clone https://github.com/iissnan/hexo-theme-next(此处地址替换成你需要使用的主题的地址)")])]),e._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[e._v("修改Hexo配置文件")])]),e._v(" "),o("p",[e._v("下载完成后, 打开Hexo文件夹下的配置文件_config.yml\n修改参数为:theme: hexo-theme-next")]),e._v(" "),o("ol",{attrs:{start:"4"}},[o("li",[e._v("部署主题, 本地查看效果")])]),e._v(" "),o("blockquote",[o("p",[e._v("hexo -g => hexo -s"),o("br"),e._v("\n简写:hexo server -g")])]),e._v(" "),o("ol",{attrs:{start:"5"}},[o("li",[e._v("如果效果满意, 将它部署到Github上")])]),e._v(" "),o("blockquote",[o("p",[e._v("hexo clean   (必须要, 不然有时因为缓存问题, 服务器更新不了主题)\nhexo g -d")])]),e._v(" "),o("h3",{attrs:{id:"六、-在博客写文章"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#六、-在博客写文章"}},[e._v("#")]),e._v(" 六、 在博客写文章")]),e._v(" "),o("ol",[o("li",[e._v("用hexo发表新文章")])]),e._v(" "),o("blockquote",[o("p",[e._v('$ hexo n "文章标题"')])]),e._v(" "),o("p",[e._v('其中 我的家 为文章标题, 执行命令 hexo n "我的家" 后, 会在项目 \\Hexo\\source_posts 中生成 我的家.md文件, 用编辑器打开编写即可。')]),e._v(" "),o("p",[e._v("当然, 也可以直接在\\Hexo\\source_posts中新建一个md文件, 我就是这么做的。\n写完后, 推送到服务器上, 执行以下命令即可在我们的站点看到新的文章。")]),e._v(" "),o("blockquote",[o("p",[e._v("$ hexo g #生成")])]),e._v(" "),o("blockquote",[o("p",[e._v("$ hexo d #部署 # 可与hexo g合并为 hexo d -g")])]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v("用 "),o("a",{attrs:{href:"https://www.jianshu.com/p/191d1e21f7ed",target:"_blank",rel:"noopener noreferrer"}},[e._v("Markdown"),o("OutboundLink")],1),e._v(" 写文章")])]),e._v(" "),o("p",[e._v("我们注意到在 \\Hexo\\source_posts 文件夹下存放着我们的文章, 它们的格式都是以.md格式结尾的, 没错, Hexo也是支持Markdown语法的, 所以当我们需要写具有格式化的文章时, 我们可以使用支持Markdown语法的编辑器进行文章编译, 然后保存文件到 \\Hexo\\source_posts 文件夹下即可。")]),e._v(" "),o("p",[e._v("找一篇自己写过的 markdown 文章复制进去之后, 只要执行")]),e._v(" "),o("blockquote",[o("p",[e._v("$ hexo d -g")])]),e._v(" "),o("p",[e._v("推送至我们的Github仓库即可。")]),e._v(" "),o("h3",{attrs:{id:"七、-将自己的域名关联到github-pages上"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#七、-将自己的域名关联到github-pages上"}},[e._v("#")]),e._v(" 七、 将自己的域名关联到Github Pages上")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("域名网址"),o("OutboundLink")],1),e._v(" "),o("a",{attrs:{href:"https://account.aliyun.com/login/login.htm?oauth_callback=http%3A%2F%2Fdc.console.aliyun.com%2Fnext%2Findex#/domain/list/all-domain",target:"_blank",rel:"noopener noreferrer"}},[e._v("域名控制台"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"参考资料"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://juejin.im/entry/5a574864f265da3e3c6c1217",target:"_blank",rel:"noopener noreferrer"}},[e._v("2018, 你该搭建自己的博客了！"),o("OutboundLink")],1),e._v(" "),o("a",{attrs:{href:"https://fluid-dev.github.io/hexo-fluid-docs/guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用指南"),o("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);