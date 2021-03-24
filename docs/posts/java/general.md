---
title: Java 基础知识
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

## 参考资料
- [Java 到底是值传递还是引用传递？](https://www.zhihu.com/question/31203609)
- [《On Java 8》中文版](https://lingcoder.github.io/OnJava8/#/)
- [Java 编程思想](https://wizardforcel.gitbooks.io/thinking-in-java/content/)
- [Spring Boot 指南](https://snailclimb.gitee.io/springboot-guide/#/)
- [Java工程师进阶知识](https://adjava.netlify.app/#/)

## 万物皆对象
### 方法
在 Java 中,  方法决定对象能接收哪些消息。方法的基本组成部分包括名称、参数、返回类型、方法体。格式如:
```java
[函数返回类型] [方法名](/*参数列表*/){
    // 方法体
}
```
#### 返回类型
方法的返回类型表明了当你调用它时会返回的结果类型。参数列表则显示了可被传递到方法内部的参数类型及名称。方法名和参数列表统称为方法签名(signature of the method)。签名作为方法的唯一标识。

#### Java 到底是值传递还是引用传递？
java都是“值传递”即可,  关键看这个值是什, , 简单变量就是复制了具, 值, 引用变量就是复制了地址呗。字符串是不可变的

## 关键字

关键字|用处|含义|备注
:---|:--:|:---:|:---:
void|方法前|函数无返回值|
static|变量方法前|字段或方法不依赖于任何特定的对象实例|
abstract|变量方法前|表明类或者成员方法具有抽象属性|

## 规范

每个 java 源文件中允许有多个类。同时,  **源文件的名称必须要和其中一个类名相同*, , 否则编译器将会报错。每个独立的程序应该包含一个 `main()` 方法作为程序运行的入口。其方法签名和返回类型如下。代码示例:
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
若表达式计算为 true,  则返回结果 值 1 ；如果表达式的计算为 fals, , 则返回结果 值 2。

### 重载
> 每个被重载的方法必须有独一无二的参数列表
```java
// housekeeping/Overloading.java
// Both constructor and ordinary method overloading
class Tree {
    int height;
    Tree() {
        System.out.println("Planting a seedling");
        height = 0;
    }
    Tree(int initialHeight) {
        height = initialHeight;
        System.out.println("Creating new Tree that is " + height + " feet tall");
    }
    void info() {
        System.out.println("Tree is " + height + " feet tall");
    }
    void info(String s) {
        System.out.println(s + ": Tree is " + height + " feet tall");
    }
}
```

## 垃圾回收
- 标记-清扫

"标记-清扫"所依据的思路仍然是从栈和静态存储区出发,  遍历所有的引, , 找出所有存活的对象。, 是, 每当找到一个存, 对象, 就给对象设, 个标记, 并不回收它。只有当标记, 程完成后, 清理动作才开始。, 清理过程中, 没有标记, 对象将被释放, 不会发生任何复制动作。"标记-清扫"后剩下的, 空间是不连续的, 垃圾回收器要是希, 得到连续空间的话, 就需要重新整理剩下的对象。

