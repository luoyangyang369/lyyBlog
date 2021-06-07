---
title: MySQL常用命令
date: 2019-1-22 17:25:25
tags: [MySQL, 命令]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重, 主页那个先显示
copyright : ture  # 授权问题显示
categories: database
---

工作中常用的 MySQL 命令
<!-- more -->

## 工作常用
![sql查询过程](https://images.cnblogs.com/cnblogs_com/luoyangyang/1573981/t_191202083121SQL%E6%9F%A5%E8%AF%A2%E8%BF%87%E7%A8%8B.jpg)
### 基本命令
```
登录:mysql -h -uroot -p
show databases;  use youke;  show tables;  desc 表名;  exit;
查看MySQL版本, 进到MySQL命令行执行:select @@version;
order by:排序 默认升序即A-Z 降序需指定DESC。且order by可指定多个值, 先排一次序再排一次
limit:限制输出, 可指定n, 也可为n,m  从n开始取m个

MySQL语法顺序:SELECT[DISTINCT] => FROM => WHERE => GROUP BY => HAVING => UNION => 
ORDER BY => limit

执行顺序:FROM => JOIN => ON => WHERE => GROUP BY(开始使用select中的别名, 后面的语句中都可以使用) =>
avg,sum... => HAVING => SELECT => DISTINCT => UNION => ORDER BY => LIMIT
从from开始
```

### 针对表
创建表 node这个数据库里面创建一个user表
```
创建:
CREATE TABLE `node`.`nodeuser`(
    `id` INT(11) NOT NULL AUTO_INCREMENT,  # id字段 int(11)数据类型, 最大的值为11位 id自动增长
    `username` varchar(64) NOT NULL,
    `pass` varchar(64) NOT NULL,
    PRIMARY KEY(`id`)  # 重要 主键
)
ENGINE = InnoDB CHARSET = utf8;
增加字段:ALTER TABLE account ADD status int(11) NOT NULL DEFAULT 0;
删除字段:ALTER TABLE <表名> DROP <字段名称>
修改表名称:ALTER TABLE <表名> RENAME <新表名>
字段增加长度:alter table 表名 modify column 列名 类型(要修改的长度);
```

### 针对数据
```
INSERT INTO 'user' (`id`, 'username', 'pass') values (1, 'goudan', '123');  # 增 固定代码 哪个表
DELETE FROM user where id = 0  # 删 删article表的数据 因为id是唯一的
update `xxx` set `username`=`1234` where `id`=6666;  # 改
SELECT * FORM `shuoshuo` WHERE `id`=?  # 查
查询:
    过滤:加 distinct, 如 select distinct roomid from audio_pos;
    区间查找:between and, 如:select * from audio_pos where id between 2600 and 2650;
```

### 针对索引 约束
```
查询:show index from table_name
新增索引:ALTER TABLE table_name ADD INDEX index_name (column_list)
删除索引:DROP INDEX index_name ON talbe_name
增加唯一约束:alter table change_reward add unique key(orderid);(**注意**:一定要将表里的orderid先改为不一样的, 不然添加失败)

```

## 常用操作总结

- 让别人访问自己的MySQL
```
登录MySQL:mysql -u root -pvmwaremysql>use mysql;
mysql>update user set host = '%' where user = 'root';
mysql>select host, user from user;
重启MySQL服务:Windows可从服务重启
```
- 存在既更新, 不存在就添加
```
INSERT 语句的一部分,如果指定 ON DUPLICATE KEY UPDATE , 并且插入行后会导致在一个**UNIQUE索引或PRIMARY KEY中出现重复值**, 则在出现重复值的行执行UPDATE, 如果不会导致唯一值列重复的问题, 则插入新行
sql 语句原型:
insert into audio_favor(openid, audioid, status) values(?, ?, ?) on duplicate key update status=status+?
```
- if 判断

语法:IF(expr1,expr2,expr3)  expr1 是TRUE则返回2 否则返回3
update audio_pos set favor_cnt=if(favor_cnt=0, 0, favor_cnt-1) where id=?

- 导入导出表数据
mysqldunp  参数:-d 不导出任何数据, 只导出数据库表结构。-t 只导出数据, 而不添加CREATE TABLE 语句。

导出整个数据库结构和数据(-p 密码一般不输入, 后面再输入)
mysqldump -h localhost -uroot -p123456 database > dump.sql
mysqldump -h localhost -uroot -p123456  -d database > dump.sql(不包含数据)

导出单个数据表结构和数据
mysqldump -h localhost -uroot -p123456  database table > dump.sql
mysqldump -h localhost -uroot -p123456  -d database table > dump.sql(不包含数据)

导入数据
mysql -uroot -p123456 -d database < database.sql

### 其他操作
```
$ ./mysqldump -uyouke_write -p -h 10.66.92.228 -d youke > /home/lyy/db.sql  # 导出表结构
导入表结构, 进入数据库, 进入某一库, 执行 source xxx.sql
查看索引:show index from tblname; 等同于show keys from tblname;
select version();  查看MySQL版本
show create table audio_pos;查看创建table的SQL

当更新某一字段状态, 位操作:如何将一个变量其中一位清0, 置1
MySQL:
    第一位为1 val=(val |= (1<<0))  取消 val=(val & ~(1<<0))
    第二位为1 val=(val |= (1<<1))  取消 val=(val & ~(1<<1))
JS:
    第一位为1 val |= (1<<0)  取消 val &= ~(1<<0)
    第二位为1 val |= (1<<1)  取消 val &= ~(1<<1)
```
## 相关知识

笛卡尔积:由没有联结条件的表关系返回的结果为笛卡尔积。检索出来的数目将是第一个表中的行数乘以第二个表的行数

### 关键字

- where & having

where 用来过滤数据 而having用来过滤分组 即where=>group by=>having。where过滤的值不包括在分组中

- group by & order by

1. group by为分组行, 但输出可能不是分组的顺序。
2. 只可能使用选择列或表达式列, 而且必须使用每个选择列表达式。
3. 如果与聚集函数一起使用列(或表达式), 则必须使用

1. order by为排序产生的输出
2. 任意列都可以使用(甚至非选择列也可以使用)
3. 不一定需要


### 字段类型

- int
int代表整型, 11代表字段的长度。
int(M) M指示最大显示宽度。最大有效显示宽度是255。显示宽度与存储大小或类型包含的值的范围无关

```
MySQL字段类型:-2 147 483 648 ～ 2 147 483 647,  INT UNSIGNED的范围类型就是0 ～ 4 294 967 295。
insert on duplicate key update 比 replace快, 原因是索引方面

1. 如果Key是空的, 那么该列值的可以重复, 表示该列没有索引, 或者是一个非唯一的复合索引的非前导列
2. 如果Key是PRI,  那么该列是主键的组成部分
3. 如果Key是UNI,  那么该列是一个唯一值索引的第一列(前导列),并别不能含有空值(NULL)
4. 如果Key是MUL,  那么该列的值可以重复, 该列是一个非唯一索引的前导列(第一列)
或者是一个唯一性索引的组成部分但是可以含有空值NULL
如果对于一个列的定义, 同时满足上述4种情况的多种, 比如一个列既是PRI,又是UNI
那么"desc 表名"的时候, 显示的Key值按照优先级来显示 PRI->UNI->MUL
那么此时, 显示PRI
```
### mysql之触发器
触发器用来在某些操作之后, “自动”执行一些操作。(比如插入了新的学生信息, 那么在班级表中应该修改学生数)。

当insert delete update设置触发器之后, 执行insert delete update操作就会自动触发设置的内容。
### mysql之视图
- 视图是一种基于查询结果的虚拟表, 数据来源的表称为基本表。
- 视图的建立和删除不影响基本表。
- 视图的插入, 修改操作会影响基本表。
- 如果视图来自多个基本表, 那么不可以修改基本表。
- 视图的用处:

1.视图基于查询结果, 使得视图可以隐藏基本表一些不该展示给用户的数据信息(比如某个开发人员需要用户信息表, 但不应该展示给他用户的密码信息。)
2.视图是一个虚拟表, 可以将查询信息存储到视图中, 这样可以便于操作。
### mysql之存储过程
- 存储过程存储了一系列sql语句, 使得简化了操作, 不要求重复执行一系列操作。只需要在需要的时候调用一下存储过程就行了。
- 一般来说, 可以认为存储过程的功能与函数的功能类似(应该都学过函数吧), 但只是要注意存储过程没有返回值, 所以可以依据函数可用场景来理解存储过程。
- 调用存储过程:call 存储过程名();

#### 补充
**存储过程与触发器的区别**:触发器触发事件就执行一系列语句;而存储过程是调用, 而且存储过程还要根据情况考虑执行“另外一系列语句”。

**存储过程与函数的区别**:函数有返回值,而存储过程没有【所以不能使用在select语句中】

### mysql之自定义函数

- 函数存储着一系列sql语句, 调用函数就是一次性执行这些语句。所以函数可以降低语句重复。【但注意的是函数注重返回值, 不注重执行过程, 所以一些语句无法执行。所以函数并不是单纯的sql语句集合。】
- mysql函数有自己的自定义函数(已经定义好了的函数), 详情参考:[mysql之常用函数](https://www.cnblogs.com/progor/p/8832663.html)

**函数与存储过程的区别**:函数只会返回一个值, 不允许返回一个结果集。函数强调返回值, 所以函数不允许返回多个值的情况, 即使是查询语句。

## 重点链接
[MySQL总览图](https://static001.geekbang.org/resource/image/0d/d9/0d2070e8f84c4801adbfa03bda1f98d9.png)
[MySQL Windows安装](https://blog.csdn.net/qq_41307443/article/details/79839558)
[MySQL安装问题](https://www.cnblogs.com/RayWang/p/9347874.html)
[MySQL explain详解](https://segmentfault.com/a/1190000008131735)
[MySQL相关知识](https://cyc2018.github.io/CS-Notes/#/notes/MySQL)
[SQL优化方案](https://mp.weixin.qq.com/s/YMxLYbVuF_7rfaawp8flOA)

