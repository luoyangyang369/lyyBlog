(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{521:function(s,n,a){"use strict";a.r(n);var t=a(6),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("工作中常用的 docker 命令\n")]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.dockerinfo.net/docker-compose-%E9%A1%B9%E7%9B%AE",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker-compose 文档"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"docker-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-常用命令"}},[s._v("#")]),s._v(" docker 常用命令")]),s._v(" "),a("div",{staticClass:"language-docker line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[s._v("docker ps       查看启动的容器列表\ndocker ps "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("a    查看所有容器列表\ndocker images   查看所有镜像\ndocker rm $(docker ps "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("q)            删除所有容器"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 需要先停止\ndocker rmi $(docker images "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("q)          删除所有镜像\ndocker exec "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("it apollo_1 bash           进入容器apollo_1\ndocker exec "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("it my_docker sh            进入 apline 构建的镜像\ndocker exec "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("it db_mongo_1 mongo        直接以mongo命令进入容器\ndocker exec "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("it db_redis_1 redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cli    直接以redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cli命令进入容器\ndocker rmi $(docker images "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v("awk "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{if($2==\"<none>\")  print $3}'")]),s._v(") 删除标签为none的镜像\ndocker stats    实时监控容器的信息 \ndocker stats "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("stream    只输出当前的信息\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要进入到包含有 docker-compose.xml的文件目录下执行")]),s._v("\ndocker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("compose up           启动\ndocker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("compose down         停止\ndocker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("compose up "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("d        守护模式启动\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制宿主机的 insert.sql文件到 db_mysql_1 容器的目录 /opt/sql/")]),s._v("\ndocker cp /data/insert.sql db_mysql_1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/opt/sql/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制 db_mysql_1 容器的目录 /opt/sql/insert.sql 到 宿主机的 /data")]),s._v("\ndocker cp db_mysql_1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/opt/sql/ /data/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看最后十条记录, 并实时更新")]),s._v("\ndocker logs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("f "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("tail 10 sedirea_weekly_1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从某个日期开始, 查看最后一百条记录, 并实时更新")]),s._v("\ndocker logs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("f "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("since="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2018-11-20T13:50:16.184406342Z"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("tail=100 apollo_admin_1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装相关工具  ")]),s._v("\napt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get update                      (更新源)\napt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get install inetutils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ping      (18.04安装ping)\napt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get install iputils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ping        (旧版安装ping)\napt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get install net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("tools           (安装ifconfig)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("h2",{attrs:{id:"docker-compose-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-常用命令"}},[s._v("#")]),s._v(" docker-compose 常用命令")]),s._v(" "),a("div",{staticClass:"language-docker-compose line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker-compose up -d nginx                     构建建启动nignx容器\n\ndocker-compose exec nginx bash            登录到nginx容器中\n\ndocker-compose down                              删除所有nginx容器,镜像\n\ndocker-compose ps                                   显示所有容器\n\ndocker-compose restart nginx                   重新启动nginx容器\n\ndocker-compose run --no-deps --rm php-fpm php -v  在php-fpm中不启动关联容器, 并容器执行php -v 执行完成后删除容器\n\ndocker-compose build nginx                     构建镜像 。        \n\ndocker-compose build --no-cache nginx   不带缓存的构建。\n\ndocker-compose logs  nginx                     查看nginx的日志 \n\ndocker-compose logs -f nginx                   查看nginx的实时日志\n\n \n\ndocker-compose config  -q                        验证(docker-compose.yml)文件配置, 当配置正确时, 不输出任何内容, 当文件配置错误, 输出错误信息。 \n\ndocker-compose events --json nginx       以json的形式输出nginx的docker日志\n\ndocker-compose pause nginx                 暂停nignx容器\n\ndocker-compose unpause nginx             恢复ningx容器\n\ndocker-compose rm nginx                       删除容器(删除前必须关闭容器)\n\ndocker-compose stop nginx                    停止nignx容器\n\ndocker-compose start nginx                    启动nignx容器\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);