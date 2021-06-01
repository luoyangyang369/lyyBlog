---
title: Java 基础知识(三)
date: 2021-03-15 17:25:25  # 建立日期
updated: 2021-03-16 17:25:25  # 更新日期
comments: true  # 开启文章的评论功能
tags: [Java]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重,  主页那个先显示
copyright : ture  # 授权问题显示
categories: Java
auto_spacing: true  # 在中文和英文之间加入空格
external_link: true  # 在新标签中打开链接
---
<!-- [[toc]]  # 在页面显示目录 -->

## 说说List,Set,Map三者的区别？

- List(对付顺序的好帮手): 存储的元素是有序的、可重复的.
- Set(注重独一无二的性质): 存储的元素是无序的、不可重复的.
- Map(用 Key 来搜索的专家): 使用键值对(kye-value)存储, 类似于数学上的函数 y=f(x), “x”代表 key, "y"代表 value, Key 是无序的、不可重复的, value 是无序的、可重复的, 每个键最多映射到一个值.

## Arraylist 与 LinkedList 区别?

1、 **是否保证线程安全**: ArrayList 和 LinkedList 都是不同步的, 也就是不保证线程安全;

2、 **底层数据结构**: Arraylist 底层使用的是 Object 数组;LinkedList 底层使用的是 双向链表 数据结构(JDK1.6 之前为循环链表, JDK1.7 取消了循环.注意双向链表和双向循环链表的区别, 下面有介绍到！)

3、 **插入和删除是否受元素位置的影响**: 

① ArrayList 采用数组存储, 所以插入和删除元素的时间复杂度受元素位置的影响. 比如:执行add(E e)方法的时候,  ArrayList 会默认在将指定的元素追加到此列表的末尾, 这种情况时间复杂度就是 O(1).但是如果要在指定位置 i 插入和删除元素的话(add(int index, E element))时间复杂度就为 O(n-i).因为在进行上述操作的时候集合中第 i 和第 i 个元素之后的(n-i)个元素都要执行向后位/向前移一位的操作. 

② LinkedList 采用链表存储, 所以对于add(E e)方法的插入, 删除元素时间复杂度不受元素位置的影响, 近似 O(1), 如果是要在指定位置i插入和删除元素的话((add(int index, E element)) 时间复杂度近似为o(n))因为需要先移动到指定位置再插入.

4、 **是否支持快速随机访问**: LinkedList 不支持高效的随机元素访问, 而 ArrayList 支持.快速随机访问就是通过元素的序号快速获取元素对象(对应于get(int index)方法).

5、 **内存空间占用**: ArrayList 的空 间浪费主要体现在在 list 列表的结尾会预留一定的容量空间, 而 LinkedList 的空间花费则体现在它的每一个元素都需要消耗比 ArrayList 更多的空间(因为要存放直接后继和直接前驱以及数据).

## 常用集合分类
![常用集合分类](/img/jihemap.png)

### HashMap 和 HashTable 的区别
- HashMap

简单来说, HashMap由数组+链表组成的, 数组是HashMap的主体, 链表则是主要为了解决哈希冲突而存在的, 如果定位到的数组位置不含链表(当前entry的next指向null),那么查找, 添加等操作很快, 仅需一次寻址即可;如果定位到的数组包含链表, 对于添加操作, 其时间复杂度为O(n), 首先遍历链表, 存在即覆盖, 否则新增;对于查找操作来讲, 仍需遍历链表, 然后通过key对象的equals方法逐一比对查找.所以, 性能考虑, HashMap中的链表出现越少, 性能才会越好.

HashTable|HashMap
:---:|:--:
基于Dictionany类|基于AbstractMap类|
key和value都不允许为null, Hashtable遇到null,  直接返回NullPointerException|key和value都允许为nill, HashMap遇到key为nl的时候, 调用putForNullkey方法进行处理.|
线程安全几乎所有的public的方法都是synchronized的|非线程安全|
速度慢|速度快|

### HashMap 和 LinkedHashMap 的区别
HashMap|LinkedHashMap
:---:|:--:
无序存储|有序存储, 以双向链表实现|
读取速度与容量有关|读取速度与容量无关|
线程不安全|线程不安全|
key-value都允许null|key-value都允许null|

### HashMap 和 TreeMap 的区别
HashMap|TreeMap
:---:|:--:
遍历出来数据无序|自然排序或者创建映射提供的Comparator进行排序|
基于散列表|红黑树|
取值速度快|取值速度慢|
适用于在Map中插入、删除和定位元素|适用于按自然顺序或自定义顺序遍历键(key)|



