(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{557:function(s,a,n){"use strict";n.r(a);var t=n(6),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("使用 "),n("code",[s._v("vuepress")]),s._v(" 搭建静态网站并部署至云服务器\n")]),s._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://markdown.com.cn/basic-syntax/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Markdown语法"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://www.moyundong.com/frontend/vuepress/5Markdown%E8%AF%A6%E8%A7%A3.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Markdown详解"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("icon选择"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://v0.vuepress.vuejs.org/zh/default-theme-config/#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"}},[s._v("主题配置"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000017055963",target:"_blank",rel:"noopener noreferrer"}},[s._v("搭建vuepress教程"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("使用 "),n("code",[s._v("vuepress")]),s._v(" 搭建静态网站并部署至云服务器")]),s._v(" "),n("h2",{attrs:{id:"搭建-vuepress"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搭建-vuepress"}},[s._v("#")]),s._v(" 搭建 vuepress")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.vuepress.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress 官方文档"),n("OutboundLink")],1)]),s._v(" "),n("h3",{attrs:{id:"新建工程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新建工程"}},[s._v("#")]),s._v(" 新建工程")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" vuepress-blog "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" vuepress-blog\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" init\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D vuepress\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docs/README.md\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs:dev\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs:build\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("code",[s._v("docs")]),s._v(" 下新建 "),n("code",[s._v("docs/.vuepress")]),s._v(" 目录")]),s._v(" "),n("p",[n("code",[s._v("docs/.vuepress/public")]),s._v(" 中放置静态资源")]),s._v(" "),n("p",[s._v("配置 "),n("code",[s._v("config.js")])]),s._v(" "),n("p",[s._v("选用主题后根据主题调整首页和文章的 Front Matter")]),s._v(" "),n("p",[s._v("这里主题选用了 "),n("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-theme-reco"),n("OutboundLink")],1)]),s._v(" "),n("h3",{attrs:{id:"目录结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docs\n├── index.md  # or README.md 博客的首页\n├── .vuepress\n    ├── public  # 静态资源\n    └── config.js  # 网站配置\n└── posts\n    └── database  # 博客分类\n        ├── mysql.md\n        └── redis.md\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"从零用云服务器搭建一个网站"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从零用云服务器搭建一个网站"}},[s._v("#")]),s._v(" 从零用云服务器搭建一个网站")]),s._v(" "),n("h3",{attrs:{id:"创建用户"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建用户"}},[s._v("#")]),s._v(" 创建用户")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个有 root 权限的用户")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" adduser demo\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 并将其加入 sudoers")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root ALL=(ALL) ALL")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# demo ALL=(ALL) ALL")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/sudoers\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"安装依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[s._v("#")]),s._v(" 安装依赖")]),s._v(" "),n("blockquote",[n("p",[s._v("更新依赖")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" upgrade -y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" upgrade -y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" dist-upgrade -y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" autoremove -y\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("安装 docker, 后续的部署全部通过 "),n("a",{attrs:{href:"https://developer.aliyun.com/article/110806",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker"),n("OutboundLink")],1)])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# step 1: 安装必要的一些系统工具")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" apt-transport-https ca-certificates "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" software-properties-common\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# step 2: 安装GPG证书")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Step 3: 写入软件源信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu '),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release -cs"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' stable"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Step 4: 更新并安装 Docker-CE")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" -y update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("blockquote",[n("p",[s._v("使普通用户可以使用 docker")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加到用户组")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gpasswd -a "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v(" docker\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新登录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" docker restart\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("blockquote",[n("p",[s._v("安装 docker-compose (懒人必备)")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/docker/compose/releases/download/1.28.5/docker-compose-'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -s"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("-"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -m"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" -o /usr/local/bin/docker-compose\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\ndocker-compose --version\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h4",{attrs:{id:"编写-dockerfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编写-dockerfile"}},[s._v("#")]),s._v(" 编写 Dockerfile")]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir /app\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" ./docs/.vuepress/dist /app/dist\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" ./docker/conf.d /etc/nginx/conf.d\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 80 443\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("blockquote",[n("p",[s._v("打包镜像")])]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[s._v("docker build "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("f docker/Dockerfile "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("t registry.cn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("shenzhen.aliyuncs.com/luoyangyang/luoyangyang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v1 .\ndocker push registry.cn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("shenzhen.aliyuncs.com/luoyangyang/luoyangyang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("blockquote",[n("p",[s._v("服务器端编写 docker-compose.yml")])]),s._v(" "),n("div",{staticClass:"language-docker line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[s._v("version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v("\nservices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  vuepress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("starter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    container_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" vuepress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("starter\n    image"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" registry.cn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("shenzhen.aliyuncs.com/luoyangyang/luoyangyang"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v1\n    restart"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    ports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'88:80'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("blockquote",[n("p",[s._v("启动, 冲")])]),s._v(" "),n("p",[n("code",[s._v("docker-compose up -d")])]),s._v(" "),n("blockquote",[n("blockquote",[n("blockquote",[n("p",[s._v("开发流程: 本地修改好重新打包 => push 到 docker 仓库 => 服务器重新 pull 镜像 => docker-compose up -d")])])])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("本地执行\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs:build\ndocker build -f docker/Dockerfile -t registry.cn-shenzhen.aliyuncs.com/luoyangyang/luoyangyang:v1 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\ndocker push registry.cn-shenzhen.aliyuncs.com/luoyangyang/luoyangyang:v1\n\n服务器执行\ndocker pull registry.cn-shenzhen.aliyuncs.com/luoyangyang/luoyangyang:v1\ndocker-compose down/up\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("blockquote",[n("p",[s._v("vscode 连接服务器")])]),s._v(" "),n("p",[s._v("使用 ms-vscode-remote.remote-ssh 插件 让操作服务器和在本地一样方便")]),s._v(" "),n("h2",{attrs:{id:"本地博客开发流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本地博客开发流程"}},[s._v("#")]),s._v(" 本地博客开发流程")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs:build\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n\ndocker build -f docker/Dockerfile -t registry.cn-shenzhen.aliyuncs.com/luoyangyang/luoyangyang:v1 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\ndocker push registry.cn-shenzhen.aliyuncs.com/luoyangyang/luoyangyang:v1\ndocker pull registry.cn-shenzhen.aliyuncs.com/luoyangyang/luoyangyang:v1\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、本地写博客 打包 push \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、服务器 pull \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、 docker-compose down up\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);