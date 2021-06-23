---
title: 面试题总结
date: 2021-03-15 17:25:25  # 建立日期
updated: 2021-03-16 17:25:25  # 更新日期
comments: true  # 开启文章的评论功能
tags: [面试]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重,  主页那个先显示
sticky: 2  # 文章置顶
copyright : ture  # 授权问题显示
categories: 面试
auto_spacing: true  # 在中文和英文之间加入空格
external_link: true  # 在新标签中打开链接
# prev: ../java/learn
# next: general2
---
<!-- [[toc]]  # 在页面显示目录 -->

## 简历

- [Markdown简历排版工具](https://resume.mdnice.com/)
- [超级简历](https://www.wondercv.com/)
- [best-resume-ever 基于Vue和LESS快速生成简历模板](https://github.com/salomonelli/best-resume-ever)
- [极简简历](https://www.polebrief.com/index)
- [typora+markdown+css 自定义简历模板](https://github.com/Snailclimb/typora-markdown-resume)

## 常考面试题

### 聚集索引和辅助索引
数据库中的 B+ 树索引可以分为聚集索引（clustered index）和辅助索引（secondary index），它们之间的最大区别就是，聚集索引中存放着一条行记录的全部信息，而辅助索引中只包含索引列和一个用于查找对应行记录的『书签』。

#### 聚集索引
InnoDB 存储引擎中的表都是使用索引组织的，也就是按照键的顺序存放；聚集索引就是按照表中主键的顺序构建一颗 B+ 树，并在叶节点中存放表中的行记录数据。

```SQL
CREATE TABLE users(
    id INT NOT NULL,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    age INT NOT NULL,
    PRIMARY KEY(id),
    KEY(last_name, first_name, age)
    KEY(first_name)
);
```
如果使用上面的 SQL 在数据库中创建一张表，B+ 树就会使用 id 作为索引的键，并在叶子节点中存储一条记录中的所有信息。
![聚集索引](/img/Clustered-Index.jpg)
图中对 B+ 树的描述与真实情况下 B+ 树中的数据结构有一些差别，不过这里想要表达的主要意思是：聚集索引叶节点中保存的是整条行记录，而不是其中的一部分。

聚集索引与表的物理存储方式有着非常密切的关系，所有正常的表应该有且仅有一个聚集索引（绝大多数情况下都是主键），表中的所有行记录数据都是按照聚集索引的顺序存放的。

当我们使用聚集索引对表中的数据进行检索时，可以直接获得聚集索引所对应的整条行记录数据所在的页，不需要进行第二次操作。

#### 辅助索引
数据库将所有的非聚集索引都划分为辅助索引，但是这个概念对我们理解辅助索引并没有什么帮助；辅助索引也是通过 B+ 树实现的，但是它的叶节点并不包含行记录的全部数据，仅包含索引中的所有键和一个用于查找对应行记录的『书签』，在 InnoDB 中这个书签就是当前记录的主键。

辅助索引的存在并不会影响聚集索引，因为聚集索引构成的 B+ 树是数据实际存储的形式，而辅助索引只用于加速数据的查找，所以一张表上往往有多个辅助索引以此来提升数据库的性能。

一张表一定包含一个聚集索引构成的 B+ 树以及若干辅助索引的构成的 B+ 树。

### 隔离级别

- RAED UNCOMMITED：使用查询语句不会加锁，可能会读到未提交的行（Dirty Read）；

**脏读** - 在一个事务中，读取了其他事务未提交的数据。
- READ COMMITED：只对记录加记录锁，而不会在记录之间加间隙锁，所以允许新的记录插入到被锁定记录的附近，所以再多次使用查询语句时，可能得到不同的结果（Non-Repeatable Read）；

**不可重复读** - 在一个事务中，同一行记录被访问了两次却得到了不同的结果。
- REPEATABLE READ：多次读取同一范围的数据会返回第一次查询的快照，不会返回不同的数据行，但是可能发生幻读（Phantom Read）；

**幻读** - 在一个事务中，同一个范围内的记录被读取时，其他事务向这个范围**添加了新的记录**(**重点是插入**)。
- SERIALIZABLE：InnoDB 隐式地将全部的查询语句加上共享锁，解决了幻读的问题；

> MySQL 中默认的事务隔离级别就是 REPEATABLE READ，但是它通过 Next-Key 锁也能够在某种程度上解决幻读的问题。

### Redis 问题

[《吊打面试官》系列-缓存雪崩、击穿、穿透](https://mp.weixin.qq.com/s?__biz=MzAwNDA2OTM1Ng==&mid=2453140871&idx=3&sn=0ad5fc9d0474089a4271b16bf47b7cb0&chksm=8cf2d704bb855e1208ee8fead319c27204a00c64b484a950014527379d022623350e83e9353d&scene=21#wechat_redirect)

- 缓存雪崩

描述： 大量 key 失效， 大面积的缓存失效，打崩了DB
解决方案： 过期时间增加随机数

- 缓存穿透

描述： 缓存和数据库中都没有的数据，而用户不断发起请求
解决方案： 没有的key也缓存下来，值为null。我会在接口层增加校验，比如用户鉴权校验，参数做校验，不合法的参数直接代码Return，如id 做基础校验，id <=0的直接拦截等

- 缓存击穿

描述： 指一个Key非常热点，在不停的扛着大并发，大并发集中对这一个点进行访问，当这个Key在失效的瞬间，持续的大并发就穿破缓存，直接请求数据库
解决方案： 设置热点数据永远不过期。或者加上互斥锁就能搞定了

- Redis分布式锁

先拿setnx来争抢锁，抢到之后，再用expire给锁加一个过期时间防止锁忘记了释放。

- 假如Redis里面有1亿个key，其中有10w个key是以某个固定的已知的前缀开头的，如何将它们全部找出来？

使用keys指令可以扫出指定模式的key列表。 Redis单线程会导致阻塞。scan指令可以无阻塞的提取出指定模式的key列表，但是会有一定的重复概率，在客户端做一次去重就可以了，但是整体所花费的时间会比直接用keys指令长。

