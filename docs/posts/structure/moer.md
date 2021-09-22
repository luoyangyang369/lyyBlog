---
title: leetCode 刷题
date: 2021-03-15 17:25:25  # 建立日期
updated: 2021-03-16 17:25:25  # 更新日期
comments: true  # 开启文章的评论功能
tags: [算法]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重,  主页那个先显示
sticky: 2  # 文章置顶
copyright : ture  # 授权问题显示
categories: 算法
auto_spacing: true  # 在中文和英文之间加入空格
external_link: true  # 在新标签中打开链接
# prev: ../java/learn
# next: general2
---
<!-- [[toc]]  # 在页面显示目录 -->

## leetcode 面试题 17.10. 主要元素

### 概念

核心就是对拼消耗。

玩一个诸侯争霸的游戏，假设你方人口超过总人口一半以上，并且能保证每个人口出去干仗都能一对一同归于尽。最后还有人活下来的国家就是胜利。

那就大混战呗，最差所有人都联合起来对付你（对应你每次选择作为计数器的数都是众数），或者其他国家也会相互攻击（会选择其他数作为计数器的数），但是只要你们不要内斗，最后肯定你赢。

最后能剩下的必定是自己人。

### 代码

```python
def majorityElement(nums):
    count = 0
    value = None

    for num in nums:
        if count = 0:
            value = num
            count = 1
        elif num != value:
            count -= 1
        else:
            count += 1

    count = sum([1 for n in nums if n == value])
    return value if count > len(nums) / 2 else -1
```
