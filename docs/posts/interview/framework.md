---
title: 架构 面经
date: 2021-05-29 17:25:25  # 建立日期
updated: 2021-05-29 17:25:25  # 更新日期
comments: true  # 开启文章的评论功能
tags: [面试]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重,  主页那个先显示
copyright : ture  # 授权问题显示
categories: 面试
auto_spacing: true  # 在中文和英文之间加入空格
external_link: true  # 在新标签中打开链接
prev: network
# next: general3
---
<!-- [[toc]]  # 在页面显示目录 -->

[互联网 Java 工程师进阶知识完全扫盲](https://adjava.netlify.app/#/)
[一个面试题引起的SpringBoot启动解析](https://juejin.cn/post/6844903652201594887#heading-0)
[图说设计模式](https://design-patterns.readthedocs.io/zh_CN/latest/index.html)

### spring 设计模式有哪些

1. 简单工厂(非23种设计模式中的一种)： 
   - 实现方式： BeanFactory。Spring中的BeanFactory就是简单工厂模式的体现，根据传入一个唯一的标识来获得Bean对象，但是否是在传入参数后创建还是传入参数前创建这个要根据具体情况来定。
   - 实质： 由一个工厂类根据传入的参数，动态决定应该创建哪一个产品类。
2. 工厂方法
   - 实现方式： FactoryBean接口。
   - 实现原理： 实现了FactoryBean接口的bean是一类叫做factory的bean。其特点是，spring会在使用getBean()调用获得该bean时，会自动调用该bean的getObject()方法，所以返回的不是factory这个bean，而是这个bean.getOjbect()方法的返回值。
3. 单例模式： 默认 bean
4. 适配器模式
    - 实现方式： SpringMVC中的适配器HandlerAdatper。
    - 实现原理： HandlerAdatper根据Handler规则执行不同的Handler。
    - 实现意义：HandlerAdatper使得Handler的扩展变得容易，只需要增加一个新的Handler和一个对应的HandlerAdapter即可。 因此Spring定义了一个适配接口，使得每一种Controller有一种对应的适配器实现类，让适配器代替controller执行相应的方法。这样在扩展Controller时，只需要增加一个适配器类就完成了SpringMVC的扩展了。
5. 装饰器模式
   - 实现方式： Spring中用到的包装器模式在类名上有两种表现：一种是类名中含有Wrapper，另一种是类名中含有Decorator。
   - 实质： 动态地给一个对象添加一些额外的职责。
6. 代理模式： AOP底层，就是动态代理模式的实现。
7. 观察者模式 又叫做发布-订阅
   - 实现方式： spring的事件驱动模型使用的是 观察者模式 ，Spring中Observer模式常用的地方是listener的实现。
   - 具体实现： 事件机制的实现需要三个部分,事件源,事件,事件监听器

### 接口保证幂等性

1. 对于每个请求必须有一个唯一的标识，举个栗子：订单支付请求，肯定得包含订单 id，一个订单 id 最多支付一次，对吧。
2. 每次处理完请求之后，必须有一个记录标识这个请求处理过了。常见的方案是在 mysql 中记录个状态啥的，比如支付之前记录一条这个订单的支付流水。
3. 每次接收请求需要进行判断，判断之前是否处理过。比如说，如果有一个订单已经支付了，就已经有了一条支付流水，那么如果重复发送这个请求，则此时先插入支付流水，orderId 已经存在了，唯一键约束生效，报错插入不进去的。然后你就不用再扣款了。

### 分布式服务接口请求的顺序性如何保证？

将任务放进队列里， 按照顺序处理， 具体就是一个队列对应一个消费者

### Kafka、ActiveMQ、RabbitMQ、RocketMQ 有什么优缺点？

特性|	ActiveMQ|	RabbitMQ|	RocketMQ|	Kafka
:---:|:--:|:---:|:---:|:---:
单机吞吐量|	万级，比 RocketMQ、Kafka 低一个数量级|	同 ActiveMQ|	10 万级，支撑高吞吐	10 万级，高吞吐，一般配合大|数据类的系统来进行实时数据计算、日志采集等场景|
topic 数量对吞吐量的影响|||			topic 可以达到几百/几千的级别，吞吐量会有较小幅度的下降，这是 RocketMQ 的一大优势，在同等机器下，可以支撑大量的 topic|	topic 从几十到几百个时候，吞吐量会大幅度下降，在同等机器下，Kafka 尽量保证 topic 数量不要过多，如果要支撑大规模的 topic，需要增加更多的机器资源
时效性|	ms 级|	微秒级，这是 RabbitMQ 的一大特点，延迟最低|	ms 级|	延迟在 ms 级以内
可用性|	高，基于主从架构实现高可用|	同 ActiveMQ|	非常高，分布式架构|	非常高，分布式，一个数据多个副本，少数机器宕机，不会丢失数据，不会导致不可用
消息可靠性|	有较低的概率丢失数据|	基本不丢|	经过参数优化配置，可以做到 0 丢失|	同 RocketMQ
功能支持|	MQ 领域的功能极其完备|	基于 erlang 开发，并发能力很强，性能极好，延时很低|	MQ 功能较为完善，还是分布式的，扩展性好|	功能较为简单，主要支持简单的 MQ 功能，在大数据领域的实时计算以及日志采集被大规模使用

### 如何保证消息不被重复消费？或者说，如何保证消息消费的幂等性？

- 比如你拿个数据要写库，你先根据主键查一下，如果这数据都有了，你就别插入了，update 一下好吧。
- 比如你是写 Redis，那没问题了，反正每次都是 set，天然幂等性。
- 比如你不是上面两个场景，那做的稍微复杂一点，你需要让生产者发送每条数据的时候，里面加一个全局唯一的 id，类似订单 id 之类的东西，然后你这里消费到了之后，先根据这个 id 去比如 Redis 里查一下，之前消费过吗？如果没有消费过，你就处理，然后这个 id 写 Redis。如果消费过了，那你就别处理了，保证别重复处理相同的消息即可。
- 比如基于数据库的唯一键来保证重复数据不会重复插入多条。因为有唯一键约束了，重复数据插入只会报错，不会导致数据库中出现脏数据。

### 如何保证消息的可靠性传输？或者说，如何处理消息丢失的问题？

1. 生产者弄丢了数据: 
   -  RabbitMQ 提供的事务功能： 就是生产者发送数据之前开启 RabbitMQ 事务 channel.txSelect ，然后发送消息，如果消息没有成功被 RabbitMQ 接收到，那么生产者会收到异常报错，此时就可以回滚事务 channel.txRollback ，然后重试发送消息；如果收到了消息，那么可以提交事务 channel.txCommit 。
   - confirm 机制： 你每次写的消息都会分配一个唯一的 id，然后如果写入了 RabbitMQ 中，RabbitMQ 会给你回传一个 ack 消息，告诉你说这个消息 ok 了。如果 RabbitMQ 没能处理这个消息，会回调你的一个 nack 接口，告诉你这个消息接收失败，你可以重试。而且你可以结合这个机制自己在内存里维护每个消息 id 的状态，如果超过一定时间还没接收到这个消息的回调，那么你可以重发。
2. RabbitMQ 弄丢了数据
   - 开启 RabbitMQ 的持久化
3. 消费端弄丢了数据
   - 就是你必须关闭 RabbitMQ 的自动 ack ，可以通过一个 api 来调用就行，然后每次你自己代码里确保处理完的时候，再在程序里 ack 一把。这样的话，如果你还没处理完，不就没有 ack 了？那 RabbitMQ 就认为你还没处理完，这个时候 RabbitMQ 会把这个消费分配给别的 consumer 去处理，消息是不会丢的。

![rabbit消息丢失](/img/rabbit消息丢失.jpg)

### Mybatis #{}和${}的区别是什么？

```
#{}是预编译处理，${}是字符串替换。
Mybatis 在处理#{}时，会将 sql 中的#{}替换为?号，调用 PreparedStatement 的
set 方法来赋值；
Mybatis 在处理${}时，就是把${}替换成变量的值。
使用#{}可以有效的防止 SQL 注入，提高系统安全性。
```

### Spring Boot、Spring MVC 和 Spring 有什么区别？

- Spring 是一个“引擎”;
- Spring MVC 是基于Spring的一个 MVC 框架;
  - 它是Spring的一个模块，是一个web框架。通过Dispatcher Servlet, ModelAndView 和 View Resolver，开发web应用变得很容易。
- Spring Boot 是基于Spring4的条件注册的一套快速开发整合包。
  - 实现了自动配置，降低了项目搭建的复杂度。它主要是为了解决使用Spring框架需要进行大量的配置太麻烦的问题

### @SpringBootApplication 注解

- @EnableAutoConfiguration：启用 SpringBoot 的自动配置机制
- @ComponentScan： 扫描被@Component (@Service,@Controller)注解的 bean，注解默认会扫描该类所在的包下所有的类。
- @Configuration：允许在上下文中注册额外的 bean 或导入其他配置类

### 常用的注解有哪些？

```
Spring Bean 相关：

@Autowired : 自动导入对象到类中，被注入进的类同样要被 Spring 容器管理。
@RestController : @RestController注解是@Controller和@ResponseBody的合集,表示这是个控制器 bean,并且是将函数的返回值直 接填入 HTTP 响应体中,是 REST 风格的控制器。
@Component ：通用的注解，可标注任意类为 Spring 组件。如果一个 Bean 不知道属于哪个层，可以使用@Component 注解标注。
@Repository : 对应持久层即 Dao 层，主要用于数据库相关操作。
@Service : 对应服务层，主要涉及一些复杂的逻辑，需要用到 Dao 层。
@Controller : 对应 Spring MVC 控制层，主要用于接受用户请求并调用 Service 层返回数据给前端页面。
```

### Spring Bean生命周期

BeanFactory和ApplicationContext是Spring两种很重要的容器,前者提供了最基本的依赖注入的支持，而后者在继承前者的基础进行了功能的拓展，例如增加了事件传播，资源访问和国际化的消息访问等功能。

### 什么是 CAP 定理（CAP theorem）
在理论计算机科学中，CAP 定理（CAP theorem），又被称作布鲁尔定理（Brewer's theorem），它指出对于一个分布式计算系统来说，不可能同时满足以下三点：

- 一致性（Consistency） （等同于所有节点访问同一份最新的数据副本）
- 可用性（Availability）（每次请求都能获取到非错的响应——但是不保证获取的数据为最新数据）
- 分区容错性（Partition tolerance）（以实际效果而言，分区相当于对通信的时限要求。系统如果不能在时限内达成数据一致性，就意味着发生了分区的情况，必须就当前操作在 C 和 A 之间做出选择。）
