---
title: Java 面经
date: 2021-05-23 17:25:25  # 建立日期
updated: 2021-05-23 17:25:25  # 更新日期
comments: true  # 开启文章的评论功能
tags: [面试]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重,  主页那个先显示
copyright : ture  # 授权问题显示
categories: 面试
auto_spacing: true  # 在中文和英文之间加入空格
external_link: true  # 在新标签中打开链接
prev: learn
next: mysql
---
<!-- [[toc]]  # 在页面显示目录 -->

[Java基础面试16问](https://mp.weixin.qq.com/s/-xFSHf7Gz3FUcafTJUIGWQ)
[据说看完这篇 JVM 要一小时](https://mp.weixin.qq.com/s/RabFNSMDN7Qv2SBXfYMYNw)
[synchronized 的超多干货！](https://mp.weixin.qq.com/s?__biz=MzI0ODk2NDIyMQ==&mid=2247491370&idx=1&sn=ce05241e534360e8872b8d4d70ca3807&chksm=e999ea38deee632edf4d778dceccbd407ffc3f412d19a74a3ee4b96158d49f8f1ec1835fa4d5&token=426484573&lang=zh_CN&scene=21#wechat_redirect)
[volatile](https://mp.weixin.qq.com/s?__biz=MzI0ODk2NDIyMQ==&mid=2247491103&idx=1&sn=0a8abdd4045ce799be0c241439dc3f3b&chksm=e999eb0ddeee621bca23a2c3787951982187f46dac8cb649419df229ad422e9f3dd9fb260990&cur_album_id=1475842875694301200&scene=190#rd)
[肝完这篇线程池，我咳血了](https://mp.weixin.qq.com/s?__biz=MzI0ODk2NDIyMQ==&mid=2247488182&idx=1&sn=58c058525d66ef8ce78fb8549c989489&chksm=e999e7a4deee6eb2284560e8ae072be520a8b173d02ceae12404db0d968b2658d541f12b5c95&cur_album_id=1475842875694301200&scene=190#rd)
[java十个问题](https://mp.weixin.qq.com/s?__biz=MzI0ODk2NDIyMQ==&mid=2247491923&idx=1&sn=6b5082a70a35dcff6e6adc651bbd8b91&chksm=e99a1441deed9d575b37fea1c8c23615b65c0073c6523f9ed65a7ac18ef79343dcf4c7da0bb3&cur_album_id=1475842875694301200&scene=190#rd)
[Java IO常见面试题](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247484945&idx=1&sn=229be49807e3c2a9621f42c0a6c0aeb6&source=41#wechat_redirect)
[深入 AQS](https://mp.weixin.qq.com/s?__biz=MzI0ODk2NDIyMQ==&mid=2247483718&idx=1&sn=b46b2554382fd5ae922cc7778982539e&chksm=e999f454deee7d428cecca8c2bf5e851155c1f887f51e3ec389f7121e3352119c690e950c694&cur_album_id=1475842875694301200&scene=190#rd)
[Java 并发进阶常见面试题总结](https://mp.weixin.qq.com/s/cdHfTTvMpH60SwG2bjTMBw)

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
11. synchronized 关键字、volatile 关键字
12. ThreadLocal 有啥用（解决了什么问题）？怎么用？原理了解吗？内存泄露问题了解吗？
13. 为什么要用线程池？ThreadPoolExecutor 类的重要参数了解吗？ThreadPoolExecutor 饱和策略了解吗？线程池原理了解吗？几种常见的线程池了解吗？为什么不推荐使用FixedThreadPool？如何设置线程池的大小？
14. AQS 了解么？原理？AQS 常用组件：Semaphore (信号量)、CountDownLatch （倒计时器） CyclicBarrier(循环栅栏)
15. ReentrantLock 、 ReentrantReadWriteLock 、StampedLock（JDK8）
16. CAS 了解么？原理？
17. Atomic 原子类
18. 并发容器：ConcurrentHashMap 、 CopyOnWriteArrayList 、 ConcurrentLinkedQueue BlockingQueue 、ConcurrentSkipListMap
19. Future 和 CompletableFuture

### 小知识

- Java 是值传递
- 多线程之虚假唤醒： 在判断资源量时要用 while(num != 0) 而不是 if(num != 0)。
- 字符串常量池在 JDK7 后就移动到 Java 堆中
- 运行时常量池在方法区中

### 泛型

泛型其实就是一种参数化的集合，它限制了你添加进集合的类型。泛型的本质就是一种参数化类型。多态也可以看作是泛型的机制。一个类继承了父类，那么就能通过它的父类找到对应的子类，但是不能通过其他类来找到具体要找的这个类。泛型的设计之处就是希望对象或方法具有最广泛的表达能力。

- 为了参数化类型，或者说可以将类型当作参数传递给一个类或者是方法。
- 泛型信息只存在于代码编译阶段，在进入 JVM 之前，与泛型相关的信息会被擦除掉，专业术语叫做类型擦除。
- 最显而易见的好处就是它不再需要对取出来的结果进行强制转换了。
- <?>被称作无限定的通配符； <? extends T>被称作有上限的通配符； <? super T>被称作有下限的通配符

### NIO

在NIO中，它们的概念实现分别是(NIO网络核心):
1. Channel, 对非阻塞的支持, Channel可以连接文件，socket等
2. Buffer, 类似数组, 可以直接由Channnel读写, DirectByteBuffer可以分配堆外内存
3. Selector, 就是上面的Reactor, 告知哪些Channel上发生了I/O事件
4. SelectionKey, 代表I/O事件状态和绑定  连接就绪/接收就绪/读就绪/写就绪

> 其中，Selector 就是I/O多路复用在Java里的封装，由内核来完成事件分发和告知，这样即使只有1个Java线程也能处理很多链接。

其他还有些NIO的特性 如:

- 内存映射： 操作系统提供了将一段磁盘文件内容映射到内存的方法，对这段内存数据的修改操作会直接由操作系统保证异步刷盘到硬盘的文件中；在内存映射的过程中可以省略中间的很多IO环节，而这个刷盘过程即使应用程序崩溃也能够完成，这就是内存映射。
- 文件传输, 有个send_file系统调用，可以直接让磁盘文件数据拷贝到socket缓冲区,或者从socket缓冲区拷贝到文件
- 直接内存， Java的socket往外读写数据都要先复制堆内的数据到堆外，然后再调用send(因为堆内的对象地址会变，socket的send用c写的,地址不能变)

### Buffer、Channel 和 Selector 的常见接口。

- Buffer 和数组差不多，它有 position、limit、capacity 几个重要属性。put() 一下数据、flip() 切换到读模式、然后用 get() 获取数据、clear() 一下清空数据、重新回到 put() 写入数据。
- Channel 基本上只和 Buffer 打交道，最重要的接口就是 channel.read(buffer) 和 channel.write(buffer)。
- 要使用Selector的话，我们必须把Channel注册到Selector上，然后就可以调用Selector的select()方法。这个方法会进入阻塞，直到有一个channel的状态符合条件。当方法返回后，线程可以处理这些事件。

### Zero-Copy：

通常一次发送/复制文件读写处理需要经过如下过程：

1. 从磁盘复制到内核态缓存（读数据）
2. 从内核态读到应用所在的用户态缓存
3. 从用户态缓存复制到内核态缓存（写数据）
4. 从内核态缓存复制到真正的写入目标，如硬盘/网络socket缓存

> 可以看到数据在流转过程中读/写都复制了两次，主要问题在于内核态和用户态缓存间的复制。而如果可以合理利用内核提供的能力直接不经过用户态和内核态的来回复制，直接从内核态缓存复制到内核态的目标缓存位置，将会明显减少不必要的复制过程，也就是所谓的Zero-Copy。

### DirectByteBuffer 直接缓冲区

> 指向堆外内存的引用， DirectByteBuffer 是在堆内的。

DirectByteBuffer是一个特殊的ByteBuffer，底层同样需要一块连续的内存，操作模式与普通的ByteBuffer一致，但这块内存是调用unsafe的native方法分配的堆外内存。

### HashMap 

扩容原理

1. 调用put方法存值时，HashMap首先会调用Key的hashCode方法，然后基于此获取Key哈希码，通过哈希码快速找到某个桶，这个位置可以被称之为bucketIndex.
2. 如果两个对象的hashCode不同，那么equals一定为false；否则，如果其hashCode相同，equals也不一定为 true。所以，理论上，hashCode可能存在碰撞的情况，当碰撞发生时，这时会取出bucketIndex桶内已存储的元素，并通过hashCode() 和 equals()来逐个比较以判断Key是否已存在。
3. 如果已存在，则使用新Value值替换旧Value值，并返回旧Value值；如果不存在，则存放新的键值对到桶中。因此，在 HashMap中，equals() 方法只有在哈希码碰撞时才会被用到。

### ConcurrentHashMap

ConcurrentHashmap在JDK1.7和1.8的版本改动比较大，1.7使用Segment+HashEntry分段锁的方式实现，1.8则抛弃了Segment，改为使用CAS+synchronized+Node实现，同样也加入了红黑树，避免链表过长导致性能的问题。

默认的Segment长度是16，也就是支持16个线程的并发写，Segment之间相互不会受到影响。

通过锁分段技术保证并发环境下的写操作； 通过 HashEntry的不变性、Volatile变量的内存可见性和加锁重读机制保证高效、安全的读操作； 通过不加锁和加锁两种方案控制跨段操作的的安全性。

### 垃圾回收

Minor GC： 清理新生代
Major GC： 清理老年代。
Full GC： 清理整个堆空间—包括年轻代和老年代。

- 空间分配担保： 
  - 在发生 MinorGC 之前，虚拟机会先检查老年代最大可用的连续空间是否大于新生代所有对象的总空间，如果大于，那么Minor GC 可以确保是安全的,
  - 如果不大于，那么虚拟机会查看 HandlePromotionFailure 设置值是否允许担保失败。
  - 如果允许，那么会继续检查老年代最大可用连续空间是否大于历次晋升到老年代对象的平均大小，如果大于则进行 Minor GC，否则可能进行一次 Full GC。

### 线程池 java.util.concurrent.ThreadPoolExecutor

线程池做的工作主要是控制运行的线程的数量，**处理过程中将任务放入队列**，然后在线程创建后启动这些任务，**如果线程数量超过了最大数量超出数量的线程排队等候**，等其它线程执行完毕，再从队列中取出任务来执行。

他的**主要特点**为: 线程复用; 控制最大并发数; 管理线程。

1. 降低资源消耗。通过重复利用己创建的线程降低线程创建和销毁造成的消耗。
2. 提高响应速度。当任务到达时，任务可以不需要的等到线程创建就能立即执行。
3. 提高线程的可管理性。线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控

#### 线程池方法

```java
Executors.newFixedThreadPool  // 执行长期任务， 性能好很多
Executors.newSingleThreadExecutor  // 一个任务一个任务执行的场景
Executors.newCachedThreadPool // 动态扩容 执行很多短期异步的小程序或者负载较轻的服务器

底层就是 Executors.ThreadPoolExecutor
```
> 阿里巴巴开发手册， 以上三种都不用， 因为前俩者的阻塞队列都是 LinkedBlockingQueue， 最大队列长度和允许创建的线程数为 Integer.MAX_VALUE， 可能会堆积大量的请求， 从而导致 OOM

#### Executors.ThreadPoolExecutor 七大重要参数

```
1. int corePoolSize： 线程池中的常驻核心线程数
   1. 当线程池中的线程数目达到 corePoolSize 后， 就会把到达的任务放到缓存队列中
2. int maximumPoolSize： 线程池能够容纳同时执行的最大线程数，此值必须大于等于1
3. long keepAliveTime： 
   1. 多余的空闲线程的存活时间。 
   2. 当前线程池数量超过 corePoolSize 时，当空闲时间达到 keepAliveTime 值时， 多余空闲线程会被销毁直到只剩下 corePoolSize 个线程为止
4. TimeUnit unit： keepAliveTime的 单位。
5. BlockingQueue<Runnable> workQueue： 任务队列，被提交但尚未被执行的任务。
6. ThreadFactory threadFactory： 表示生成线程池中工作线程的线程工厂，用于创建线程一般用默认的即可。
7. RejectedExecutionHandler handler： 拒绝策略，表示当队列满了并且工作线程大于等于线程池的最大线程数( maximumPoolsize)时如何拒绝
```

#### Executors.ThreadPoolExecutor 底层原理

```
1.在创建了线程池后，等待提交过来的任务请求。
2.当调用execute()方法添加一个请求任务时，线程池会做如下判断:
    2.1 如果正在运行的线程数量小于 corePoolSize，那么马上创建线程运行这个任务;
    2.2 如果正在运行的线程数量大于或等于 corePoolSize，那么将这个任务放入队列:
    2.3 如果这时候队列满了且正在运行的线程数量还小于 maximumPoolSize，那么还是要创建非核心线程立刻运行这个任务;
    2.4 如果队列满了且正在运行的线程数量大于或等于 maximumPoolSize，那么线程池会启动饱和拒绝策略来执行。
3.当一个线程完成任务时，它会从队列中取下一个任务来执行。
4.当一个线程无事可做超过一定的时间 (keepAliveTime) 时，线程池会判断: 如果当前运行的线程数大于 corePoolSize， 那么这个线程就被停掉。
```
![线程池](/img/线程池执行顺序.webp)

#### 拒绝策略

```
1. AbortPolicy(默认): 直接抛出RejectedExecutionException异常阻止系统正常运行。
2. CallerRunsPolicy: "调用者运行"一种调节机制，该策略既不会拋弃任务，也不会抛出异常，而是将某些任务回退到调用者, 比如是main 调用的， 则交回给main 去处理。
3. DiscardOldestPolicy: 抛弃队列中等待最久的任务，然后把当前任务加入队列中尝试再次提交当前任务。
4. DiscardPolicy: 直接丢弃任务，不予任何处理也不抛出异常。如果允许任务丢失，这是最好的一种方案。
```

#### 如何设置线程池的线程数

- CPU 密集型： 尽可能少的线程数量。 一般为 CPU 核数 + 1 个线程
- IO 密集型：尽可能多的线程数量。
  1. CPU 核数 * 2 
  2. CPU核数/ (1 - 阻塞系数)  阻塞系数在 0.8-0.9

### 如何发现死锁

1. jps： 定位到进程号
2. jstack 进程号： 发现死锁代码

### JVM 内存区域
[据说看完这篇 JVM 要一小时](https://mp.weixin.qq.com/s/RabFNSMDN7Qv2SBXfYMYNw)

![Java内存](/img/Java内存区域.png)

```
1. 为什么 jdk8 变成了元空间： 收购了 jRockit ， 将它和 Hotspot 合并统一。 
2. 如何确定垃圾？ 引用计数 or 可达性算法(GC Roots)
3. GC Roots？： 1、虚拟机栈(栈帧中的局部变量表) 2、方法区中类静态属性 3、方法区常量引用的对象 4、本地方法栈(Native 方法)引用的对象
4. JVM 参数：
    - 参数类型： 1、标配参数； 2、X参数 3、 XX参数(重点)
    - -XX:+PrintFlagsFinal(表示打印出XX选项在运行程序时生效的值， 带冒号说明被修改过)
5. 常用配置 JVM 参数： 
    - -Xms(初始大小内存， 默认是物理内存的1/64) -Xmx(最大分配内存， 默认为物理内存1/4) -Xss(设置单个线程栈的大小， 一般默认为 512k-1024k)
    - -Xmn(设置年轻代大小， 一般不用调) -XX:MetaspaceSize(元空间大小， 默认20+M) -XX:+PrintGCDetails(在发生垃圾回收时打印内存回收详细的日志，并在进程退出时输出当前内存各区域的分配情况)
    - -XX:SurvivorRatio(设置新生代Eden和S0/S1的比例， 默认是8， 即8：1：1， 4就是4：1：1) -XX:NewRatio(年轻代和老年代的占比， 默认是2， 1/3:2/3， 4则是1/5:4/5)
    - -XX:MaxTenuringThreshould(垃圾最大年龄， 默认是15， 范围为0-15之间)
```

### Java 中的类加载机制？

```
1. 加载： 通过类加载器加载
   1. 获取定义此类的二进制字节流
   2. 将这个字节流表示的一种存储结构转换为运行时数据区中方法区的数据结构。
   3. 在内存中生成一个 Class 对象，这个对象就代表了这个数据结构的访问入口。
2. 链接： 下面三个可能会交替执行
   1. 验证： 文件格式验证。 元数据验证。 字节码验证。 符号引用验证。
   2. 准备： 为类中的变量分配内存并设置其初始值的阶段，这些变量所使用的内存都应当在方法区中进行分配
   3. 解析： 是 Java 虚拟机将常量池内的符号引用替换为直接引用的过程。
3. 初始化：
  1. 执行类构造器方法 `<clinit>()` 的过程
  2. 此方法不需要定义，自动将所有类变量和静态代码块的语句合并起来
  3. `不同于类的构造器` 构造器是虚拟机视角下的 `<init>`
```

### 父子类的加载顺序？

1. 父类静态代码块(包括静态初始化块，静态属性，但不包括静态方法)
2. 子类静态代码块(包括静态初始化块，静态属性，但不包括静态方法 )
3. 父类非静态代码块( 包括非静态初始化块，非静态属性 )
4. 父类构造函数
5. 子类非静态代码块 ( 包括非静态初始化块，非静态属性 )
6. 子类构造函数

### 请你说一下对象的内存布局？

在 `hotspot` 虚拟机中，对象在内存中的布局分为三块区域：

1. 对象头(Header)
![对象头](/img/32位虚拟机对象头.webp)
1. 实例数据(Instance Data)
2. 对齐填充(Padding)

### 为什么要用 metaspace 替换 permspace 呢

主要有如下几点：

1. 字符串存在永久代中，容易出现性能问题和内存溢出。
2. 类及方法的信息等比较难确定其大小，因此对于永久代的大小指定比较困难，太小容易出现永久代溢出，太大则容易导致老年代溢出。
3. 永久代会为 GC 带来不必要的复杂度，并且回收效率偏低。 
4. 移除永久代是为融合 HotSpot JVM 与 JRockit VM 而做出的努力，因为 JRockit 没有永久代，不需要配置永久代。

### 强软弱虚

1. 强引用指的就是代码中普遍存在的赋值方式，比如A a = new A()这种。强引用关联的对象，永远不会被GC回收。
2. 软引用可以用SoftReference来描述，指的是那些有用但是不是必须要的对象。系统在发生内存溢出前会对这类引用的对象进行回收。
3. 弱引用可以用WeakReference来描述，他的强度比软引用更低一点，弱引用的对象下一次GC的时候一定会被回收，而不管内存是否足够。
4. 回收会被通知。 虚引用也被称作幻影引用，是最弱的引用关系，可以用PhantomReference来描述，他必须和ReferenceQueue一起使用，同样的当发生GC的时候，虚引用也会被回收。可以用虚引用来管理堆外内存。

### 垃圾回收

[看完这篇垃圾回收，和面试官扯皮没问题了](https://mp.weixin.qq.com/s/_AKQs-xXDHlk84HbwKUzOw)

查看默认的垃圾收集器： java -XX:+PrintCommandLineFlags -version

- 垃圾回收的方式： 
  - Serial(串行)： 单线程环境， 只有一个线程回收垃圾， 会STW
  - Parallel(并行)： 多个垃圾回收线程并行工作， 此时用户线程暂停
  - CMS(conc Mark Sweep 并发)： 用户和垃圾收集线程同时执行(不一定是并行， 可能是交替执行)
  - G1(分区)
- 垃圾收集器的选择：
  - 单 CPU或者小内存： Serial
  - 多 CPU， 大吞吐量， 适用于后台计算： Parallel/Parallel Old
  - 多 CPU， 追求低延迟， 快速响应如互联网： CMS/ParNew

### 跨代引用

如果一个新生代对象跨代引用了一个老年代的对象，那么垃圾回收的时候就不会回收这个新生代对象，更不会回收老年代对象，然后这个新生代对象熬过一次垃圾回收进入到老年代中，这时候跨代引用才会消除。

实际上，可以直接在新生代中维护一个记忆集(Remembered Set)，由这个记忆集把老年代划分称为若干小块，标识出老年代的哪一块会存在跨代引用。

### 什么是记忆集，什么是卡表？记忆集和卡表有什么关系？

为了解决跨代引用问题，提出了记忆集这个概念，记忆集是一个在新生代中使用的数据结构，它相当于是记录了一些指针的集合，指向了老年代中哪些对象存在跨代引用。

### synchronized

synchronized 的代码块是由一组 monitorenter/monitorexit 指令实现的。而Monitor 对象是实现同步的基本单元。

#### Monitor 对象

任何对象都关联了一个管程，管程就是控制对象并发访问的一种机制。管程 是一种同步原语，在 Java 中指的就是 synchronized，可以理解为 synchronized 就是 Java 中对管程的实现。

管程提供了一种排他访问机制，这种机制也就是 互斥。互斥保证了在每个时间点上，最多只有一个线程会执行同步方法。

所以理解了 Monitor 对象其实就是使用管程控制同步访问的一种对象。

### 那锁的优化机制了解吗？

![重量锁的获取过程](/img/重量锁获取过程.webp)

从JDK1.6版本之后，synchronized本身也在不断优化锁的机制，有些情况下他并不会是一个很重量级的锁了。优化机制包括自适应锁、自旋锁、锁消除、锁粗化、轻量级锁和偏向锁。

锁的状态从低到高依次为无锁->偏向锁->轻量级锁->重量级锁，升级的过程就是从低到高，降级在一定条件也是有可能发生的。

- 自旋锁：由于大部分时候，锁被占用的时间很短，共享变量的锁定时间也很短，所有没有必要挂起线程，用户态和内核态的来回上下文切换严重影响性能。自旋的概念就是让线程执行一个忙循环，可以理解为就是啥也不干，防止从用户态转入内核态，自旋锁可以通过设置-XX:+UseSpining来开启，自旋的默认次数是10次，可以使用-XX:PreBlockSpin设置。

- 自适应锁：自适应锁就是自适应的自旋锁，自旋的时间不是固定时间，而是由前一次在同一个锁上的自旋时间和锁的持有者状态来决定。

- 锁消除：锁消除指的是JVM检测到一些同步的代码块，完全不存在数据竞争的场景，也就是不需要加锁，就会进行锁消除。

- 锁粗化：锁粗化指的是有很多操作都是对同一个对象进行加锁，就会把锁的同步范围扩展到整个操作序列之外。

- 偏向锁：当线程访问同步块获取锁时，会在对象头和栈帧中的锁记录里存储偏向锁的线程ID，之后这个线程再次进入同步块时都不需要CAS来加锁和解锁了，偏向锁会永远偏向第一个获得锁的线程，如果后续没有其他线程获得过这个锁，持有锁的线程就永远不需要进行同步，反之，当有其他线程竞争偏向锁时，持有偏向锁的线程就会释放偏向锁。可以用过设置-XX:+UseBiasedLocking开启偏向锁。

- 轻量级锁：JVM的对象的对象头中包含有一些锁的标志位，代码进入同步块的时候，JVM将会使用CAS方式来尝试获取锁，如果更新成功则会把对象头中的状态位标记为轻量级锁，如果更新失败，当前线程就尝试自旋来获得锁。

整个锁升级的过程非常复杂，我尽力去除一些无用的环节，简单来描述整个升级的机制。

简单点说，偏向锁就是通过对象头的偏向线程ID来对比，甚至都不需要CAS了，而轻量级锁主要就是通过CAS修改对象头锁记录和自旋来实现，重量级锁则是除了拥有锁的线程其他全部阻塞。

![锁升级](/img/锁升级.webp)

### synchronized 与 ReentrantLock 区别

1. synchronized 属于关键字， 是 JVM 层面的， 底层(字节码)是通过 monitor 对象完成的， monitorenter 和 monitorexit(有俩个退出， 保证一定会退出， 不会死锁)。 ReentrantLock 是具体类， 是 API 层面的锁
2. 使用方法
   1. synchronized 不需要手动释放锁， 系统会自动让线程释放
   2. ReentrantLock 如果用户手动没释放， 则会死锁。
3. 等待是否可中断
   1. synchronized 不可中断， 除非抛出异常或者正常运行完成
   2. ReentrantLock 可中断
      1. 设置超时方法 tryLock(long timeout, TimeUnit unit)
      2. lockInterruptibly() 放代码块中， 调用 interrupt 方法可中断
4. 加锁是否公平： synchronized 非公平。 ReentrantLock 默认非公平。
5. 锁绑定多个条件 condition(是否能按顺序唤醒)： synchronized 没有。 ReentrantLock 用来实现分组唤醒需要唤醒的线程们， 可以**精确唤醒某一个线程**， 而不是像 synchronized 要么随机唤醒一个要不全部唤醒所有线程

#### 使用选择
除非需要使用 ReentrantLock 的高级功能，否则优先使用 synchronized。这是因为 synchronized 是 JVM 实现的一种锁机制，JVM 原生地支持它，而 ReentrantLock 不是所有的 JDK 版本都支持。并且使用 synchronized 不用担心没有释放锁而导致死锁问题，因为 JVM 会确保锁的释放

### 阻塞队列 BlockingQueue

BlockingQueue 的核心方法
| 方法类型           | 抛出异常                | 特殊值                   | 阻塞    | 超时                  |
| :--------------: | :-------------------: | :----------------------: | :-------: | :---------------------: |
| 插入           | add(e)      | offer(e)     | put(e)    | offer(e,time,unit)                  |
| 移除           | remove()      | poll()     | take()    | poll(time,unit)                  |
|  检查          |  element()   |  peek() | 不可用 |       不可用           |

- 抛出异常
  - 当阻塞队列满时，再往队列里add插入元素会抛llgalStateException: Queue full
  - 当阻塞队列空时，再往队列里remove移除元素会拋NoSuchElementException
- 特殊值
    - 插入方法，成功ture失败false
    - 移除方法，成功返回出队列的元素，队列里面没有就返回null
- 一直阻塞
    - 当阻塞队列满时，生产者线程继续往队列里put元素，队列会一直阻塞 生产线程直到put数据or啊应中断退。
    - 当阻塞队列空时，消费者线程试图从队列里take元素，队列会- - 直阻塞消费者线程直到队列可用。

### 公平锁&非公平锁

> 非公平锁优点在于吞吐量大于公平

关于两者区别:
- 公平锁: 公平锁，就是很公平，在并发环境中，每个线程在获取锁时会先查看此锁维护的等待队列，如果为空，或者当前线程是等待队列的第一个，就占有锁，否则就会加入到等待队列中，以后会按照FIFO的规则从队列中取到自己
- 非公平锁: 非公平锁比较粗鲁，上来就直接尝试占有锁，如果尝试失败，就再采用类似公平锁那种方式。

### 可重入锁(也叫递归锁)

> ReentrantLock 和 synchronized 都是可重入锁

- 指同一线程外层函数获得锁之后， 内层递归函数仍然能获取该锁的代码， 进入内层方法会自动获取锁。即线程可以进入任何一个它已经拥有的锁所同步着的代码块
- 作用： 避免死锁

### CAS( CompareAndSwap )

- 比较当前工作内存中的值和主内存中的值，如果相同则执行规定操作，否则继续比较直到主内存和工作内存中的值一致为止.
- CAS应用: CAS有3个操作数，内存值V，旧的预期值A，要修改的更新值B。当且仅当预期值A和内存值V相同时，将内存值V修改为B，否则什么都不做。
- 缺点： 
  - 循环时间长开销大： 自旋CAS的方式如果长时间不成功，会给CPU带来很大的开销。
  - 只能保证一个共享变量的操作： 只对一个共享变量操作可以保证原子性，但是多个则不行，多个可以通过AtomicReference来处理或者使用锁synchronized实现。
  - ABA 问题， 通过版本号和时间戳。 Java 有 AtomicStampedReference 来解决

### AQS(AbstractQueuedSynchronizer) 实现原理

![AQS](/img/AQS.png)

AQS中 维护了一个volatile int state（代表共享资源）和一个FIFO线程等待、（多线程争用资源被阻塞时会进入此队列）。

这里volatile能够保证多线程下的可见性，当state=1则代表当前对象锁已经被占有，其他线程来加锁时则会失败，加锁失败的线程会被放入一个FIFO的等待队列中，比列会被UNSAFE.park()操作挂起，等待其他获取锁的线程释放锁才能够被唤醒。

另外state的操作都是通过CAS来保证其并发修改的安全性。

具体原理我们可以用一张图来简单概括：
![AQS](/img/AQS2.jpg)

### Spring AOP顺序

![AQS](/img/AOP执行顺序.jpg)

### Spring 循环依赖

场景： A 依赖 B， B 依赖 A

1. A 创建过程中需要 B ，于是 A 将自己放到三级缓里面，去实例化B
2. B 实例化的时候发现需要 A，于是 B 先查一级缓存，没有，再查二级缓存，还是没有，再查三级缓存，找到了 A 然后把三级缓存里面的这个 A 放到二级缓存里面，并删除三级缓存里面的 A
3. B顺利初始化完毕工将自己放到一级缓存里面(此时 B 里面的 A 依然是创建中状态) 然后回来接着创建 A，此时 B 已经创建结束，直接从一级缓存里面拿到 B，然后完成创建，并将A自己放到一级缓存里面。

- Spring解决循环依赖依靠的是Bean的“中间态”这个概念，而这个中间态指的是已经实例化但还没初始化的状态(半成品)。
- 实例化的过程又是通过构造器创建的，如果A还没创建好出来怎么可能提前曝光，所以构造器的循环依赖无法解决。
- Spring为了解决单例的循环依赖问题，使用了三级缓存。
  - 一级缓存为单例池( singletonObjects)
  - 二级缓存为提前曝光对象( earlySingletonObjects )
  - 三级缓存为提前曝光对象工厂( singletonFactories)。
- 假设A、B循环引用，实例化A的时候就将其放入三级缓存，接着填充属性的时候，发现依赖了B，同样的流程也是实例化后放入三级缓存，接着去填充属性时又发现自己依赖A，这时候从缓存中查找到早期暴露的A，没有AOP代理的话，直接将A的原始对象注入B，完成B的初始化后，进行属性填充和初始化，这时候B完成后，就去完成剩下的A的步骤，如果有AOP代理，就进行AOP处理获取代理后的对象A，注入B，走剩下的流程。

#### 总结

1. 调用 doGetBean() 方法， 想要获取beanA， 于是调用 getSingleton() 方法从缓存中查找beanA
2. 在 getSingleton() 方法中，从一级缓存中查找，没有，返回null
3. doGetBean() 方法中获取到的 beanA 为 null，于是走对应的处理逻辑，调用 getSingleton() 的重载方法(参数为ObjectFactory的)
4. 在 getSingleton() 方法中， 先将 beanA_name 添加到一个集合中，用于标记该 bean 在创建中。然后回调匿名内部类的 creatBean 方法
5. 进入 AbstractAutowireCapableBeanFactory#doCreateBean，先反射调用构造器创建出 beanA 的实例，然后判断:
  - 是否为单例
  - 是否允许提前暴露引用(对于单例一-般为true)
  - 是否正在创建中(即是否在第四步的集合中)
  - 判断为true则将 beanA 添加到[三级缓存]中
6. 对 beanA 进行属性填充，此时检测到beanA依赖于 beanB,于是开始查找 beanB
7. 调用doGetBean()方法，和上面beanA的过程一样， 到缓存中查找beanB，没有则创建，然后给beanB填充属性
8. 此时 beanB 依赖于 beanA，调用 getSingleton() 获取 beanA， 依次从一级、二级、三级缓存中找，此时从三级缓存中获取到beanA的创建工厂，通过创建工厂获取到singletonObject,此时这个 singletonObject 指向的就是上面在 doCreateBean()方法中实例化的 beanA
9.  这样 beanB 就获取到了 beanA 的依赖，于 是 beanB 顺利完成实例化，并将beanA从 三级缓存移动到二级缓存中
10. 随后 beanA 继续他的属性填充工作，此时也获取到了 beanB, beanA 也随之完成了创建，回到 getSingleton()方法中继续向 下执行，将 beanA 从二级缓存移动到一级缓存中

### String 的基本特性

String:代表不可变的字符序列。简称:不可变性。

- 当对字符串重新赋值时，需要重写指定内存区域赋值，不能使用原有的value进行赋值。
- 当对现有的字符串进行连接操作时， 也需要重新指定内存区域赋值， 不能使用原有的value进行赋值。
- 当调用 String 的 replace() 方法修改指定字符或字符串时，也需要重新指定内存区域赋值，不能使用原有的 value 进行赋值。
- 通过字面量的方式(区别于new)给-一个字符串赋值，此时的字符串值声明在字符串常量池中。

String Pool 是一个固定大小的 Hashtable。 字符串不可重复

String 底层 7以前是 Char[] 7以后为 Byte[]

#### String 的内存分配

- Java 6及以前，字符串常量池存放在永久代。
- Java 7中Oracle的工程师对字符串池的逻辑做了很大的改变，即将**字符串常量池的位置调整到Java堆内**。
    - 所有的字符串都保存在堆(Heap)中，和其他普通对象- -样，这样可以让你在进行调优应用时仅需要调整堆大小就可以了。
    - 字符串常量池概念原本使用得比较多，但是这个改动使得我们有足够的理由让我们重新考虑在 Java 7 中使用String. intern()。
- Java8元空间，字符串常量在堆

> StringTable为什么要调整? ①permSize默认比较小 ②永久代垃圾回收频率低

#### 字符串拼接操作

1. 常量与常量的拼接结果在常量池，原理是编译期优化
2. 常量池中不会存在相同内容的常量。
3. 只要其中有一个是变量，结果就在堆中。变量拼接的原理是StringBuilder
4. 如果拼接的结果调用intern()方法，则主动将常量池中还没有的字符串对象放入池中，并返回此对象地址。

### String 相关问题

```
String s1 = "abc";  // 字面量的定义方式， 会在常量池放入
String s2 = new String (hello") ;  // 堆空间分配对象 并 会在常量池放入


string s1 = new String("ab");
// 创建了俩个对象： 1、 堆空间 new 的对象 2、字符串常量池中的一个常量 "ab"
String s1 = new string("a") + new string("b");
// 创建对象： 1、 StringBuilder 对象 2、new "a" 3、 常量池"a" 4、new "b" 5、常量池"b" 6、toString() (new String) 这个地方的toString() 在字符串常量池没有生成

string s1 = new String("ab"); // 会往字符串常量池放入 "ab"
String s1 = new string("a") + new string("b"); // 不会往字符串常量池放入 "ab"
```

### 总结String的intern()的使用

- jdk1.6中，将这个字符串对象尝试放入串池。
    - 如果串池中有，则并不会放入。返回已有的串池中的对象的地址
    - 如果没有，会把此对象复制一份，放入串池，并返回串池中的对象地址

- Jdk1.7起，将这个字符串对象尝试放入串池。
    - 如果串池中有，则并不会放入。返回已有的串池中的对象的地址
    - 如果没有，则会把对象的引用地址复制一一份，放入串池，并返回串池中的引用地址

##### 使用intern()测试执行效率: 空间使用上

> 结论:对于程序中大量存在存在的字符串，尤其其中存在很多重复字符串时，使用intern() 可以节省内存空间。

### JMM(Java 内存模型 | Java Memory Model)

> 工作内存和主内存是什么？ 主内存可以认为就是物理内存，Java内存模型中实际就是虚拟机内存的一部分。而工作内存就是CPU缓存，他有可能是寄存器也有可能是L1\L2\L3缓存，都是有可能的。

- 原子性：Java内存模型通过read、load、assign、use、store、write来保证原子性操作，此外还有lock和unlock，直接对应着synchronized关键字的monitorenter和monitorexit字节码指令。
- 可见性：可见性的问题在上面的回答已经说过，Java保证可见性可以认为通过volatile、synchronized、final来实现。
- 有序性：由于处理器和编译器的重排序导致的有序性问题，Java通过volatile、synchronized来保证。

JMM 关于同步的规定：
- 线程解锁前，必须把共享变量的值刷新回主内存
- 线程加锁前，必须读取主内存的最新值，到自己的工作内存
- 加锁和解锁是同一把锁

### 谈谈对 Volatile 的理解
[Volatile](https://mp.weixin.qq.com/s/Oa3tcfAFO9IgsbE22C5TEg)

原子性： 不可分割，完整性，也即某个线程正在做某个具体业务时，中间不可以被加塞或者被分割。需要整体完整， 要么同时成功，要么同时失败。

- Volatile 不能保证原子性， 当t1线程访问到变量a=0， 此时线程t2进来也访问到为a=0， 并+1写会主内存， 但此时t1由于CPU调度被挂起来， 没有收到 t2 的更新通知， 接着 t1 会将1 把 t2 的 1 覆盖掉
- 保证可见性： 多个线程读取主内存的数据后会放到自己的工作线程， 如果一个线程修改并同步到主内存顺便会通知其他线程数据已修改
- volatile 使用内存屏障来保证不会发生指令重排。 下面是 volatile 禁用重排序的规则
  - 只要第二个操作（这个操作就指的是代码执行指令）是 volatile 修饰的写操作，那么无论第一个操作是什么，都不能被重排序。
  - 当第一个操作是 volatile 读时，不管第二个操作是什么，都不能进行重排序。
  - 当第一个操作是 volatile 写之后，第二个操作是 volatile 读/写都不能重排序。

![volatile禁用重排序的规则](/img/volatile禁用重排序的规则.webp)

### 内存屏障是什么

- 硬件层的内存屏障分为两种：Load Barrier 和 Store Barrier即读屏障和写屏障。
- 内存屏障有两个作用：
  - 阻止屏障两侧的指令重排序；
  - 强制把写缓冲区/高速缓存中的脏数据等写回主内存，让缓存中相应的数据失效。
- 对于Load Barrier来说，在指令前插入Load Barrier，可以让高速缓存中的数据失效，强制从新从主内存加载数据；
- 对于Store Barrier来说，在指令后插入Store Barrier，能让写入缓存中的最新数据更新写入主内存，让其他线程可见。

### volatile语义中的内存屏障

- volatile的内存屏障策略非常严格保守，非常悲观且毫无安全感的心态：
  - 在每个volatile写操作前插入StoreStore屏障，在写操作后插入StoreLoad屏障；
  - 在每个volatile读操作前插入LoadLoad屏障，在读操作后插入LoadStore屏障；

- 由于内存屏障的作用，避免了volatile变量和其它指令重排序、线程之间实现了通信，使得volatile表现出了锁的特性。

### 集合不安全问题

集合类中的fail-fast： 默认指的是Java集合的一种错误检测机制。当多个线程对部分集合进行结构上的改变的操作时，有可能会产生fail-fast机制，这个时候就会抛出 `java.util.ConcurrentModificationException`。当当方法检测到对象的并发修改，但不允许这种修改时就抛出该异常。

1. vector 是加了 sync 锁了， 安全， 但是并发就慢很多
2. Collections.synchronizedList(new ArrayList<>())
3. new CopyOnWriteArrayList<>() 读写分离(写加锁， 读不加)， 写的时候复制一份 list， 加到最后。

### sleep()、wait()、 join、 yield

- sleep() 是 Thread 的静态方法； wait() 是 Object 的方法
- wait() 会释放锁， sleep() 不会
- wait 要依赖 synchronized， sleep 不需要
- sleep 后不需要被唤醒， wait 需要
- sleep 一般用于当前线程休眠， wait 则用于多线程通信
- sleep 会让出 CPU 执行时间且强制切换上下文， wait 不一定， wait 后还有机会重新竞争到锁

- yield 让出 CPU， 执行后线程进入就绪状态， 还有可能再次抢到 CPU
- join： 在线程中调用另一个线程的 join() 方法，是让主线程会等待子线程结束之后才能继续运行

### 对象访问定位的方式有哪些？

- 句柄访问方式： 如果使用句柄访问方式的话，Java 堆中可能会划分出一块内存作为句柄池，引用（reference）中存储的是对象的句柄地址，而句柄中包含了对象的实例数据与类型数据各自具体的地址信息。
- 直接指针： 如果使用直接指针访问的话，Java 堆中对象的内存布局就会有所区别，栈区引用指示的是堆中的实例数据的地址，如果只是访问对象本身的话，就不会多一次直接访问的开销，而对象类型数据的指针是存在于方法区中，如果定位的话，需要多一次直接定位开销。
