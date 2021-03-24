---
title: 密码学
date: 2019-5-16 17:25:25
tags: [密码学]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重, 主页那个先显示
copyright : ture  # 授权问题显示
categories: 密码学
---

<!-- more -->

## 基本概念

摘要(digest)：摘要、hash、散列 有时候会混为一谈, 大部分都是一个东西

将长度不固定的消息作为输入, 通过运行hash函数, 生成固定长度的输出, 这段输出就叫做摘要。通常用来验证消息完整、未被篡改。
摘要运算是不可逆的。也就是说, 输入固定的情况下, 产生固定的输出。但知道输出的情况下, 无法反推出输入。

常见的摘要算法 与 对应的输出位数如下：
MD5：128位
SHA-1：160位
SHA256 ：256位
SHA512：512位

MAC(Message Authentication Code)：消息认证码, 用以保证数据的完整性。运算结果取决于消息本身、秘钥。
MAC可以有多种不同的实现方式, 比如HMAC。
HMAC(Hash-based Message Authentication Code)：可以粗略地理解为带秘钥的hash函数。

对称加密：常见的对称加密算法：DES、3DES、AES、Blowfish、RC5、IDEA。
非对称加密：常见的非对称加密算法：RSA、DSA、ElGamal。

签名：

1. 确认信息来源于特定的主体。
2. 确认信息完整、未被篡改。

发送方生成签名：

1. 计算原始信息的摘要。
2. 通过私钥对摘要进行签名, 得到电子签名。
3. 将原始信息、电子签名, 发送给接收方。

伪代码：digest = hash(message); // 计算摘要
digitalSignature = sign(digest, priviteKey); // 计算数字签名

接收方验证签名：

1. 通过公钥解开电子签名, 得到摘要D1。(如果解不开, 信息来源主体校验失败)
2. 计算原始信息的摘要D2。
3. 对比D1、D2, 如果D1等于D2, 说明原始信息完整、未被篡改。

伪代码：digest1 = verify(digitalSignature, publicKey); // 获取摘要
digest2 = hash(message); // 计算原始信息的摘要
digest1 === digest2 // 验证是否相等

## 参考资料
[数字签名](http://www.ruanyifeng.com/blog/2011/08/what_is_a_digital_signature.html)




