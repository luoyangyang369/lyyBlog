---
title: git工作常用命令
date: 2019-1-15 21:20:05
tags: [git, 命令]  # 标签
index_img: /img/git.png  # 主页图片
banner_img: /img/git.png  # 详情页图片
top: 100  # 设置权重，主页那个先显示
copyright : ture  # 授权问题显示
# image: https://www.cnblogs.com/images/cnblogs_com/luoyangyang/1573981/t_git.png
---
git  工作常用命令
<!-- more -->

### 工作常用

**后面的命令一定要进入项目目录，即包含 .git 的目录**
```
$ git pull <远程主机名> <远程分支名>:<本地分支名>  # 合并至当前本地分支，则  :和  :后可以省略
$ git push origin dev_lyy(本地):dev_lyy(远程)  # 推送至远程分支，没有则新建远程分支
```

##### 命令


##### 分支合并

当master领先自己本地一个分支时，即其他同事合并了代码，而我本地也做了修改
git:(dev) git rebase master

git 所做操作：首先，git 会把 dev 分支里面的每个 commit 取消掉；
其次，把上面的操作临时保存成 patch 文件，存在 .git/rebase 目录下；
然后，把 dev 分支更新到最新的 master 分支；
最后，把上面保存的 patch 文件应用到 dev 分支上；

**提醒**
```
在 rebase 的过程中，也许会出现冲突 conflict。在这种情况，git 会停止 rebase 并会让你去解决冲突。在解决完冲突后，用 git add 命令去更新这些内容。
[注意]此步骤你无需执行 git-commit，只要执行 continue
git rebase --continue
这样 git 会继续应用余下的 patch 补丁文件。
当然，在任何时候，我们都可以用 --abort 参数来终止 rebase 的行动，并且分支会回到 rebase 开始前的状态。
git rebase —abort
```



### 基本知识

Git 使用 SHA-1 算法计算数据的校验和，通过对文件的内容或目录的结构计算出一个 SHA-1哈希值，作为指纹字符串。
该字串由 40个十六进制字符（0-9及 a-f）组成，看起来就像是：24b9da6552252987aa493b52f8696cd6d3b00373
Git 的工作完全依赖于这类指纹字串，所以你会经常看到这样的哈希值。实际上，所有保存在 Git数据库中的东西都是用此哈希值来作索引的，而不是靠文件名。

Git 管理项目时，文件流转的三个工作区域： 
- Git 的工作目录
- 暂存区域
- 以及本地仓库

基本的 Git 工作流程如下：
1. 在工作目录中修改某些文件。 
2. 对修改后的文件进行快照，然后保存到暂存区域。 
3. 提交更新，将保存在暂存区域的文件快照永久转储到 Git 目录中。

分为俩种情况：

1. 在工作目录中初始化新仓库

\$ git init  # 初始化;产生一个 .git 文件
\$ git remote add origin git地址  # 添加远程仓库;origin-远程仓库名字可自定义

2. 从现有仓库克隆

\$ git clone git://github.com/schacon/grit.git  # 在当前目录下创建一个名为“grit”的目录，其中包含一个 .git 的目录，用于保存下载下来的所有版本记录，然后从中取出最新版本的文件拷贝。

### 分支相关
```
$ git branch --set-upstream-to=origin/test test  与远程分支建立连接
$ git branch：不加参数 列出本地
    -r                      # 列出远程分支
    -a                      # all
    -name                   # 新建分支
    -track                  # 本地/远程（创建分支并且关联远程）
    -v                      # verbose详细信息
    -d/-D name              # 删除指定分支
    -m old_name new_name    # 修改分支名
$ git push origin --delete branch_name # 删除远程分支
$ git checkout -b branch_name [branch/commit] # 创建并切换分支
```

### 其他操作
```
$ git remote add name git_address   # 关联远程库
$ git stash # 储藏当前工作，接着到另一分支处理问题
$ git stash list # 查看储藏栈
$ git stash pop # 提取最新工作并从栈删除
$ git cherry-pick # 可以理解为”挑拣”提交，它会获取某一个分支的单笔提交，
                                    并作为一个新的提交引入到你当前分支上。
$ git diff 具体修改了那些地方 git diff <local branch> <remote>/<remote branch>对比远程分支
$ git remote：管理主机名
    不带参数 -列出所有远程主机
    -v 参看远程主机的网址
    -show <主机名>查看详细信息
忽略文件：创建一个名为 .gitignore的文件，列出要忽略的文件模式。
如：*.a       #忽略所有 .a 结尾的文件    !lib.a    #但 lib.a 除外
```

### 常见误操作处理方法

```
撤销 add：git reset HEAD
合并 commit：
    1. 追加至上一个 commit ：git commit --amend；commit 的时间是不会变的；可加上--no-edit
    2. 合并多个：git rebase -i commit(-i 后参数可写commitHSAH值即你想合并至哪一个commit
        或者-i HEAD~n(HEAD将它看做 你的上一次提交 的别名)HEAD~1 上个版本 HEAD~n 上n个版本)
        - 紧接着进入vim界面：pick为保留，s或者squash为删除commit
        - 又另一个vim界面：commit msg 保留自己需要的或者修改，用#删除别的commit msg

如何重置某个文件到未修改的状态？  # git checkout -- <filepath>
如何重置所有文件到未修改的状态？  # git reset --hard
如何重置到某个 commit？          # git reset <commit SHA>

git reset用于撤销未被提交到remote的改动，即撤销local的修改。除了移动当前分支的HEAD，
还可以更改workspace和index：
git reset --soft HEAD^上一个commit，想撤回俩个用HEAD~2：
    --soft：修改HEAD，不修改index和workspace。
    --mixed：修改HEAD和index，不修改workspace。默认行为。
    --hard：修改HEAD、index、workspace。把index和workspace的修改全部撤销。
```

### 常见错误处理方法

- git pull or push报错：fatal: refusing to merge unrelated histories （拒绝合并不相关的历史）

`则在pull命令后紧接着使用--allow-unrelated-history选项来解决问题（该选项可以合并两个独立启动仓库的历史）。`

## 参考资料
[图解git](https://pic002.cnblogs.com/img/1-2-3/201007/2010072023345292.png)
