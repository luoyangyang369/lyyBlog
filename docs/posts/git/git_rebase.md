---
title: git rebase
date: 2021-03-15 17:25:25  # 建立日期
updated: 2021-03-16 17:25:25  # 更新日期
tags: [git]
categories: 其他

comments: true  # 开启文章的评论功能
# top: 9  # 设置权重, 主页那个先显示
copyright : ture  # 授权问题显示
auto_spacing: true  # 在中文和英文之间加入空格
external_link: true  # 在新标签中打开链接
# keys:  # 阅读密码
#  - '123456'
# publish: false  # 文章是否发布
# next:
---

git在工作中正确的使用方式----git rebase篇
<!-- more -->

- [git rebase](https://blog.csdn.net/nrsc272420199/article/details/85555911)
- [rebase 用法小结](https://www.jianshu.com/p/4a8f4af4e803)
- [git rebase VS git merge？ 更优雅的 git 合并方式值得拥有](https://zhuanlan.zhihu.com/p/73767731)

git rebase master---->解决冲突--->git rebase --continue


## 本地开发分支可以灵活管理
```git
git checkout master
git pull
git checkout local
git rebase -i HEAD~2  //合并提交 --- 2表示合并两个
git rebase master---->解决冲突--->git rebase --continue
git checkout master
git merge local
git push
```

```git
git checkout 13.0
git pull
git checkout studio-dev-lyy
# 切换到 studio-dev-lyy 分支后,  就是修改代码
# 修改完了,  就正常提交代码 ------- git commit
# 如果有多次 studio-dev-lyy 分支的提交, 就合并, 只有一次可以不合并
git rebase -i HEAD~2  // 合并提交 --- 2表示合并两个

# 将 13.0 内容合并到 studio-dev-lyy
git rebase 13.0---->解决冲突--->git rebase --continue
# 再起切换到 13.0 或其他目标分支
git checkout 13.0
# 将 studio-dev-lyy 合并到 13.0
git merge studio-dev-lyy
# 推送到远程仓库
git push
```