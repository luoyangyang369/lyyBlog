---
title: Java 基础知识(一)
date: 2021-03-15 17:25:25  # 建立日期
updated: 2021-03-16 17:25:25  # 更新日期
comments: true  # 开启文章的评论功能
tags: [Java]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重,  主页那个先显示
sticky: 2  # 文章置顶
copyright : ture  # 授权问题显示
categories: Java
auto_spacing: true  # 在中文和英文之间加入空格
external_link: true  # 在新标签中打开链接
# prev: ../java/learn
next: general2
---
<!-- [[toc]]  # 在页面显示目录 -->

## 参考资料

- [Java教程](http://c.biancheng.net/java/)
- [Java 到底是值传递还是引用传递？](https://www.zhihu.com/question/31203609)
- [《On Java 8》中文版](https://lingcoder.github.io/OnJava8/#/)
- [Java 编程思想](https://wizardforcel.gitbooks.io/thinking-in-java/content/)
- [Spring Boot 指南](https://snailclimb.gitee.io/springboot-guide/#/)
- [Java工程师进阶知识](https://adjava.netlify.app/#/)
- [标准版的API规范](http://jdk8_api.dev.jcstaff.club/)
- [可能是把Java内存区域讲的最清楚的一篇文章](https://github.com/Snailclimb/JavaGuide/blob/3965c02cc0f294b0bd3580df4868d5e396959e2e/Java%E7%9B%B8%E5%85%B3/%E5%8F%AF%E8%83%BD%E6%98%AF%E6%8A%8AJava%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F%E8%AE%B2%E7%9A%84%E6%9C%80%E6%B8%85%E6%A5%9A%E7%9A%84%E4%B8%80%E7%AF%87%E6%96%87%E7%AB%A0.md)
- [Java泛型详解](https://www.cnblogs.com/Blue-Keroro/p/8875898.html)
- [泛型面试题](https://cloud.tencent.com/developer/article/1033693)

#### Java 到底是值传递还是引用传递？

首先回顾一下在程序设计语言中有关将参数传递给方法(或函数)的一些专业术语。按值调用(call by value)表示方法接收的是调用者提供的值, 而按引用调用(call by reference)表示方法接收的是调用者提供的变量地址。一个方法可以修改传递引用所对应的变量值, 而不能修改传递值调用所对应的变量值。 它用来描述各种程序设计语言(不只是 Java)中方法参数传递方式。

Java 程序设计语言总是采用按值调用。也就是说, 方法得到的是所有参数值的一个拷贝, 也就是说, 方法不能修改传递给它的任何参数变量的内容。

java都是“值传递”即可,  关键看这个值是什么, 简单变量就是复制了具值, 引用变量就是复制了地址呗。字符串是不可变的

## 修饰符

![修饰符](/img/xiushifu.png)

关键字|用处|含义|备注
:---|:--:|:---:|:---:
void|方法前|函数无返回值|

## 规范

每个 java 源文件中允许有多个类。同时,  *源文件的名称必须要和其中一个类名相同*, , 否则编译器将会报错。每个独立的程序应该包含一个 `main()` 方法作为程序运行的入口。其方法签名和返回类型如下。代码示例:
```java
public static void main(String[] args) {
}
```

> 运行 Java 程序
```java
javac hello.java
java hello
```

## 语法

- equals() 的默认行为是比较对象的引用而非具体内容
- 布尔表达式 ? 值 1 : 值 2
若表达式计算为 true,  则返回结果 值 1 ;如果表达式的计算为 fals, , 则返回结果 值 2。

## 重写与重载

>> 重载就是同样的一个方法能够根据输入数据的不同, 做出不同的处理

>> 重写就是当子类继承自父类的相同方法, 输入数据一样, 但要做出有别于父类的响应时, 你就要覆盖父类方法

区别点	|重载方法	|重写方法
:--:|:--:|:--:
发生范围	|同一个类	|子类
参数列表	|必须修改	|一定不能修改
返回类型	|可修改	|子类方法返回值类型应比父类方法返回值类型更小或相等
异常	|可修改	|子类方法声明抛出的异常类应比父类方法声明抛出的异常类更小或相等;
访问修饰符	|可修改	|一定不能做更严格的限制(可以降低限制)
发生阶段	|编译期	|运行期

### 重写(Override)

方法的重写要遵循“两同两小一大”

- “两同”即方法名相同、形参列表相同;
- “两小”指的是子类方法返回值类型应比父类方法返回值类型更小或相等, 子类方法声明抛出的异常类应比父类方法声明抛出的异常类更小或相等;
- “一大”指的是子类方法的访问权限应比父类方法的访问权限更大或相等。

⭐️ 关于 重写的返回值类型 这里需要额外多说明一下, 上面的表述不太清晰准确:如果方法的返回类型是void和基本数据类型, 则返回值重写时不可修改。但是如果方法的返回值是引用类型, 重写时是可以返回该引用类型的子类的。

使用 `@Override` 注解, 可以让编译器帮忙检查是否满足上面的三个限制条件。

### 重载
> 每个被重载的方法必须有独一无二的参数列表

发生在同一个类中, 方法名必须相同, 参数类型不同、个数不同、顺序不同, 方法返回值和访问修饰符可以不同。

应该 **注意** 的是, `返回值不同, 其它都相同不算是重载。`

## 垃圾回收
- 标记-清扫

"标记-清扫"所依据的思路仍然是从栈和静态存储区出发,  遍历所有的引, , 找出所有存活的对象。, 是, 每当找到一个存, 对象, 就给对象设, 个标记, 并不回收它。只有当标记, 程完成后, 清理动作才开始。, 清理过程中, 没有标记, 对象将被释放, 不会发生任何复制动作。"标记-清扫"后剩下的, 空间是不连续的, 垃圾回收器要是希, 得到连续空间的话, 就需要重新整理剩下的对象。

## 类型强转

```java
List<Object> objBaseDataInfoFields = baseDataInfoFields.stream().map( it -> (Object)it).collect(Collectors.toList());
```