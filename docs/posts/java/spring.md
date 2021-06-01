---
title: spring 学习
date: 2021-03-15 17:25:25  # 建立日期
updated: 2021-03-16 17:25:25  # 更新日期
tags: [Java, spring]
categories: Java

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
sticky: 100  # 文章置顶
prev: ../interview/learn
# next:
---

使用 `vuepress` 搭建静态网站并部署至云服务器
<!-- more -->

## 参考资料

- [Spring Boot 指南](https://snailclimb.gitee.io/springboot-guide/#/)

## 新建 Spring Boot 项目常用的两种方式

你可以通过 [https://start.spring.io/](https://start.spring.io/) 这个网站来生成一个 Spring Boot 的项目。

## Spring Boot 项目结构分析

![项目目录](/img/springboot-hellowold-structure.png)
> 调用关系: controller=>service(接口)=>impl(实现)
```
com
  +- example
    +- myproject
      +- Application.java
      |
      +- domain
      |  +- Customer.java
      |  +- CustomerRepository.java
      |
      +- service
      |  +- CustomerService.java
      |
      +- controller
      |  +- CustomerController.java
      |  
      +- config
      |  +- swagerConfig.java
      |
```
- Application.java是项目的启动类 以 Application为后缀名的 Java 类一般就是 Spring Boot 的启动类
- domain目录主要用于实体(Entity)与数据访问层(Repository)
- service 层主要是业务类代码
- controller 负责页面访问控制
- config 目录主要放一些配置类

## 装饰器
### @SpringBootApplication 
以下三种装饰器的集合
- @EnableAutoConfiguration:启用 SpringBoot 的自动配置机制
- @ComponentScan: 扫描被@Component (@Service,@Controller)注解的bean, 注解默认会扫描该类所在的包下所有的类。
- @Configuration:允许在上下文中注册额外的bean或导入其他配置类。

### @RequestMapping @GetMapping @PostMapping
- @RestController 将返回的对象数据直接以 JSON 或 XML 形式写入 HTTP 响应(Response)中。绝大部分情况下都是直接以 JSON 形式返回给客户端, 很少的情况下才会以 XML 形式返回。转换成 XML 形式还需要额为的工作, 上面代码中演示的直接就是将对象数据直接以 JSON 形式写入 HTTP 响应(Response)中。

- @RequestMapping :上面的示例中没有指定 GET 与 PUT、POST 等, 因为**@RequestMapping默认映射所有HTTP Action**, 你可以使用@RequestMapping(method=ActionType)来缩小这个映射。
- @PostMapping实际上就等价于 @RequestMapping(method = RequestMethod.POST), 同样的  @DeleteMapping ,@GetMapping也都一样, 常用的 HTTP Action 都有一个这种形式的注解所对应。
- @PathVariable :取url地址中的参数。@RequestParam  url的查询参数值。
- @RequestBody:可以将 HttpRequest body 中的 JSON 类型数据反序列化为合适的 Java 类型。
- @ResponseEntity: 表示整个HTTP Response:状态码, 标头和正文内容。我们可以使用它来自定义HTTP Response 的内容。