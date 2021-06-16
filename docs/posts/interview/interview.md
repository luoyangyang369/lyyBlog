---
title: 面试题
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

## 常考面试题

- [彻底明白TCP的三次握手与四次挥手](https://blog.csdn.net/qzcsu/article/details/72861891)
- [算法](https://lc.netlify.app/#/)
- [Linux IO模式及 select、poll、epoll详解](https://segmentfault.com/a/1190000003063859)


## 网络

1. OSI 与 TCP/IP 各层的结构与功能,都有哪些协议?为什么网络要分层？
2. 计算机网络的一些常见状态码
3. ping 所使用的协议
4. TCP 的三次握手与四次挥手的内容？ TCP 为什么连接是三次握手而断开是四次握手？
5. TCP 与 UDP 的区别及使用场景
6. TCP 是如何保证传输的可靠性？
7. 一次完整的 HTTP 请求所经的步骤
8. HTTP 协议了解么？HTTP 是基于 TCP 还是 UDP 的？
9.  HTTP 报文的内容简单说一下！ HTTP 请求报文和响应报文中有哪些数据？
10. HTTP 和 HTTPS 的区别了解么？
11. HTTP 请求有哪些常见的状态码？
12. HTTP 长连接和短连接了解么？
13. Cookie 和 Session 的关系
14. URI 和 URL 的区别是什么?

## Redis

1. Redis 和 Memcached 的区别和共同点
2. 为什么要用 Redis/为什么要用缓存？
3. Redis 常见数据结构以及使用场景分析
4. Redis 没有使用多线程？为什么不使用多线程？Redis6.0 之后为何引入了多线程？
5. Redis 给缓存数据设置过期时间有啥用？
6. Redis 是如何判断数据是否过期的呢？
7. 过期的数据的删除策略了解么？
8. Redis 内存淘汰机制了解么？
9. Redis 持久化机制(怎么保证 Redis 挂掉之后再重启数据可以进行恢复)
10. Redis 缓存穿透、缓存雪崩？
11. 如何保证缓存和数据库数据的一致性？

## Java 并发

1. 什么是线程和进程? 线程与进程的关系,区别及优缺点？
2. 说说并发与并行的区别?
3. 为什么要使用多线程呢?
4. 使用多线程可能带来什么问题?（内存泄漏、死锁、线程不安全等等）
5. 创建线程有哪几种方式？（a.继承 Thread 类;b.实现 Runnable 接口;c. 使用 Executor 框架;d.使用 FutureTask）
6. 说说线程的生命周期和状态?
7. 什么是上下文切换?
8. 什么是线程死锁?如何避免死锁?
9. 说说 sleep() 方法和 wait() 方法区别和共同点?
10. Java 内存模型（JMM）、重排序与 happens-before 原则了解吗？s
11. ynchronized 关键字、volatile 关键字
12. ThreadLocal 有啥用（解决了什么问题）？怎么用？原理了解吗？内存泄露问题了解吗？
13. 为什么要用线程池？ThreadPoolExecutor 类的重要参数了解吗？ThreadPoolExecutor 饱和策略了解吗？线程池原理了解吗？几种常见的线程池了解吗？为什么不推荐使用FixedThreadPool？如何设置线程池的大小？
14. AQS 了解么？原理？AQS 常用组件：Semaphore (信号量)、CountDownLatch （倒计时器） CyclicBarrier(循环栅栏)
15. ReentrantLock 、 ReentrantReadWriteLock 、StampedLock（JDK8）
16. CAS 了解么？原理？
17. Atomic 原子类
18. 并发容器：ConcurrentHashMap 、 CopyOnWriteArrayList 、 ConcurrentLinkedQueue BlockingQueue 、ConcurrentSkipListMap
19. Future 和 CompletableFuture


