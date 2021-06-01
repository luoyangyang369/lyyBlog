---
title: git 常用命令
date: 2019-1-15 21:20:05  # 建立日期
updated: 2021-03-16 17:25:25  # 更新日期
tags: [git, 命令]
categories: git

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
# prev: ../interview/learn
# next:
---

git  工作常用命令
<!-- more -->

## 参考资料
[图解git](https://pic002.cnblogs.com/img/1-2-3/201007/2010072023345292.png)

## 初始化项目

### 方法1 
> 先将仓库 clone 到本地, 修改后再 push 到 git 仓库

`$ git clone https://github.com/用户个性地址/helloWorld.git # 将远程仓库克隆到本地`

在克隆过程中, 如果仓库是一个私有仓库, 将会要求用户输入 git 的账号和密码。按照提示输入即可。

当然, 用户也可以通过配置本地的git配置信息, 执行git config命令预先配置好相关的用户信息, 配置执行如下:

```bash
$ git config --global user.name "你的名字或昵称"
$ git config --global user.email "你的邮箱"
```

修改代码后, 在仓库目录下执行下面命令
```bash
$ git add . # 将当前目录所有文件添加到git暂存区
$ git commit -m "my first commit" # 提交并备注提交信息
$ git push origin master # 将本地提交推送到远程仓库
```
### 方法2 
> 本地初始化一个仓库, 设置远程仓库地址后再做push
和方法1的差别, 在于先创建仓库。

```bash
$ git init 
$ git remote add origin https://github.com/用户个性地址/helloWorld.git
```
这样就完成了版本的一次初始化。
接下去, 进入你已经初始化好的或者克隆仓库的目录,然后执行:

`$ git pull origin master`
修改/添加文件, 否则与原文件相比就没有变动。
```bash
$ git add .
$ git commit -m "第一次提交"
$ git push origin master -f # -f 表示强制覆盖 需要保留线上文件则需要 pull 下代码
$ git pull origin master # 可能需要在上一步之前执行
```
然后如果需要账号密码的话就输入账号密码, 这样就完成了一次提交。此时, 你可以在你的个人面板、仓库主页查看到你的提交记录。

## 工作常用

**后面的命令一定要进入项目目录, 即包含 .git 的目录**
```
$ git pull <远程主机名> <远程分支名>:<本地分支名>  # 合并至当前本地分支, 则  :和  :后可以省略
$ git push origin dev_lyy(本地):dev_lyy(远程)  # 推送至远程分支, 没有则新建远程分支
```

## 命令

### 分支合并

当master领先自己本地一个分支时, 即其他同事合并了代码, 而我本地也做了修改
git:(dev) git rebase master

git 所做操作:首先, git 会把 dev 分支里面的每个 commit 取消掉;
其次, 把上面的操作临时保存成 patch 文件, 存在 .git/rebase 目录下;
然后, 把 dev 分支更新到最新的 master 分支;
最后, 把上面保存的 patch 文件应用到 dev 分支上;

**提醒**
```
在 rebase 的过程中, 也许会出现冲突 conflict。在这种情况, git 会停止 rebase 并会让你去解决冲突。在解决完冲突后, 用 git add 命令去更新这些内容。
[注意]此步骤你无需执行 git-commit, 只要执行 continue
git rebase --continue
这样 git 会继续应用余下的 patch 补丁文件。
当然, 在任何时候, 我们都可以用 --abort 参数来终止 rebase 的行动, 并且分支会回到 rebase 开始前的状态。
git rebase —abort
```

### 基本知识

Git 使用 SHA-1 算法计算数据的校验和, 通过对文件的内容或目录的结构计算出一个 SHA-1哈希值, 作为指纹字符串。
该字串由 40个十六进制字符(0-9及 a-f)组成, 看起来就像是:24b9da6552252987aa493b52f8696cd6d3b00373
Git 的工作完全依赖于这类指纹字串, 所以你会经常看到这样的哈希值。实际上, 所有保存在 Git数据库中的东西都是用此哈希值来作索引的, 而不是靠文件名。

Git 管理项目时, 文件流转的三个工作区域: 
- Git 的工作目录
- 暂存区域
- 以及本地仓库

### 分支相关
```bash
$ git branch --set-upstream-to=origin/test test  与远程分支建立连接
$ git branch:不加参数 列出本地
    -r                      # 列出远程分支
    -a                      # all
    -name                   # 新建分支
    -track                  # 本地/远程(创建分支并且关联远程)
    -v                      # verbose详细信息
    -d/-D name              # 删除指定分支
    -m old_name new_name    # 修改分支名
$ git push origin --delete branch_name # 删除远程分支
$ git checkout -b branch_name [branch/commit] # 创建并切换分支
```

### 其他操作
```bash
$ git remote add name git_address   # 关联远程库
$ git stash # 储藏当前工作, 接着到另一分支处理问题
$ git stash list # 查看储藏栈
$ git stash pop # 提取最新工作并从栈删除
$ git cherry-pick # 可以理解为”挑拣”提交, 它会获取某一个分支的单笔提交, 并作为一个新的提交引入到你当前分支上。
$ git diff 具体修改了那些地方 git diff <local branch> <remote>/<remote branch>对比远程分支
$ git remote:管理主机名
    不带参数 -列出所有远程主机
    -v 参看远程主机的网址
    -show <主机名>查看详细信息
忽略文件:创建一个名为 .gitignore的文件, 列出要忽略的文件模式。
如:*.a       #忽略所有 .a 结尾的文件    !lib.a    #但 lib.a 除外
```

### 常见误操作处理方法

```bash
撤销 add:git reset HEAD
合并 commit:
    1. 追加至上一个 commit :git commit --amend;commit 的时间是不会变的;可加上--no-edit
    2. 合并多个:git rebase -i commit(-i 后参数可写commitHSAH值即你想合并至哪一个commit
        或者-i HEAD~n(HEAD将它看做 你的上一次提交 的别名)HEAD~1 上个版本 HEAD~n 上n个版本)
        - 紧接着进入vim界面:pick为保留, s或者squash为删除commit
        - 又另一个vim界面:commit msg 保留自己需要的或者修改, 用#删除别的commit msg

如何重置某个文件到未修改的状态？  # git checkout -- <filepath>
如何重置所有文件到未修改的状态？  # git reset --hard
如何重置到某个 commit？          # git reset <commit SHA>

git reset用于撤销未被提交到remote的改动, 即撤销local的修改。除了移动当前分支的HEAD, 
还可以更改workspace和index:
git reset --soft HEAD^上一个commit, 想撤回俩个用HEAD~2:
    --soft:修改HEAD, 不修改index和workspace。
    --mixed:修改HEAD和index, 不修改workspace。默认行为。
    --hard:修改HEAD、index、workspace。把index和workspace的修改全部撤销。
```

## 常见错误处理方法

> git pull or push报错:fatal: refusing to merge unrelated histories (拒绝合并不相关的历史)

则在 pull 命令后紧接着使用 `--allow-unrelated-history` 选项来解决问题(该选项可以合并两个独立启动仓库的历史)
