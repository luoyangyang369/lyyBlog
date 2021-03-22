---
title: python学习
date: 2018-12-7 17:25:25
tags: [Python, 学习]
index_img: /img/avatar.png
banner_img: /img/avatar.png  # 详情页图片
top: 9  # 设置权重，主页那个先显示
copyright : ture  # 授权问题显示
categories: Python
---

<!-- more -->

## 参考资料
[深入理解Python异步编程](https://www.jianshu.com/p/fe146f9781d2)

## 关键字解释

- __name__: 

通俗的理解__name__ == '__main__'：假如你叫小明.py，在朋友眼中，你是小明(__name__ == '小明')；在你自己眼中，你是你自己(__name__ == '__main__')。

if __name__ == '__main__'的意思是：当.py文件被直接运行时，if __name__ == '__main__'之下的代码块将被运行；当.py文件以模块形式被导入时，if __name__ == '__main__'之下的代码块不被运行。

被运行的时候，__name__是__main__;  当作为模块导入的时候为 当前文件名称

- assert

在开发一个程序时候，与其让它运行时崩溃，不如在它出现错误条件时就崩溃（返回错误）。这时候断言assert 就显得非常有用。

assert的语法格式：  assert expression

它的等价语句为：

if not expression:
    raise AssertionError

也可为assert添加异常参数，其实就是在断言表达式后添加字符串信息，用来解释断言并更好的知道是哪里出了问题。格式如下：

assert expression [, arguments]

- __init__

定义类的时候，若是添加__init__方法，那么在创建类的实例的时候，实例会自动调用这个方法，一般用来对实例的属性进行初使化。

__init__.py 文件的作用是将文件夹变为一个Python模块,Python 中的每个模块的包中，都有__init__.py 文件。

通常__init__.py 文件为空，但是我们还可以为它增加其他的功能。我们在导入一个包时，实际上是导入了它的__init__.py文件。

这样我们可以在__init__.py文件中批量导入我们所需要的模块，而不再需要一个一个的导入。

- 关于.pyc 文件 与 .pyo 文件

.py文件的汇编,只有在import语句执行时进行，当.py文件第一次被导入时，它会被汇编为字节代码，并将字节码写入同名的.pyc文件中。后来每次导入操作都会直接执行.pyc 文件（当.py文件的修改时间发生改变，这样会生成新的.pyc文件），在解释器使用-O选项时，将使用同名的.pyo文件，这个文件去掉了断言（assert）、断行号以及其他调试信息，体积更小，运行更快。（使用-OO选项，生成的.pyo文件会忽略文档信息）
