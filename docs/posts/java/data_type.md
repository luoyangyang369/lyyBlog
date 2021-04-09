---
title: 集合类、接口、抽象类
date: 2021-03-15 17:25:25  # 建立日期
updated: 2021-03-16 17:25:25  # 更新日期
tags: [java]
categories: java

comments: true  # 开启文章的评论功能
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重, 主页那个先显示
copyright : ture  # 授权问题显示
auto_spacing: true  # 在中文和英文之间加入空格
external_link: true  # 在新标签中打开链接
# keys:  # 阅读密码
#  - '123456'
# publish: false  # 文章是否发布
# sticky: 100  # 文章置顶
# prev: ../interview/learn
# next:
---

Java 集合类、接口、抽象类介绍
<!-- more -->

## 常用集合分类
![常用集合分类](/img/jihemap.png)

### HashMap 和 HashTable 的区别
HashTable|HashMap
:---:|:--:
基于Dictionany类|基于AbstractMap类|
key和value都不允许为null, Hashtable遇到null， 直接返回NullPointerException|key和value都允许为nill, HashMap遇到key为nl的时候，调用putForNullkey方法进行处理。|
线程安全几乎所有的public的方法都是synchronized的|非线程安全|
速度慢|速度快|

### HashMap 和 LinkedHashMap 的区别
HashMap|LinkedHashMap
:---:|:--:
无序存储|有序存储，以双向链表实现|
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

## interface(接口)
### 接口定义
接口就是一个规范和抽象类比较相似。它只管做什么,不管怎么做。通俗的讲,接口就是某个事物对外提供的一
些功能的声明,其定义和类比较相似,只不过是通过interface关键字来完成
### 知识点
- 接口中的所有属性默认为: public static final *** (属性不能够被更改) ;
- 接口中的所有方法默认为: public abstract **** (方法默认为抽象方法,实现类必须去重写接口中的方法) ;
- 接口不再像类-样用关键字extends去“继承”, 而是用implements去“实现”, 也就是说类和接口的关系
叫做实现

### 接口实现的注意点

- 实现一个接口就是要实现该接口的所有的方法(抽象类除外)。
- 接口中的方法都是抽象的。
- 多个无关的类可以实现同一个接口，一个类可以实现多个无关的接口。

### extends与implements的区别

extends 是继承父类，只要那个类不是声明为final或者那个类定义为abstract的就能继承，JAVA中不支持多重继承，但是可以用接口来实现，这样就用到了implements，继承只能继承一个类，但implements可以实现多个接口，用逗号分开就行了。

## 抽象类
### 抽象类定义
- abstract修饰的类为抽象类,此类不能有对象，(无法对此类进行实例化,说白了就是不能new)
- abstract修饰的方法为抽象方法,此方法不能有方法体
### 知识点
- 抽象类不能有对象,不能用new此关键字来创建抽象类的对象;
- 有抽象方法的类一定是抽象类,但是抽象类中不一定有抽象方法 ;
- 抽象类中的抽象方法必须在子类中被重写。

## 接口与抽象类对比

类型 |abstract class|interface
:--:|:--:|:--:
定义|关键字abstract 修饰的类|关键字interface修饰
继承|抽象类可以继承一个类和实现多个接口(单继承，多实现), 子类只可以继承一个抽象类|接口只可以继承接口(-个或者多个) ;子类可以实现多个接口
访问修饰符|抽象类可以有public. protected 和default 这些修饰符(要保证子类可以继承父类)|接口只能是public (要保证类的实现)
方法实现|可以定义构造方法，可以有抽象方法和具体方法|接口是抽象的，没有构造方法，且方法都默认是抽象方法，但在jdk1.8,接口中的方法可以具体实现，用default关键字。
实现方法|子类使用extends关键字来继承抽象类。如果子类不是抽象类的话，它需要提供抽象类中所有声明的方法的实现|子类使用implements来实现接口，子类需要提供接口中所有声明的方法的实现
作用|把相同的东西提取出来，即重用|把程序模块进行固化的契约，降低耦合
