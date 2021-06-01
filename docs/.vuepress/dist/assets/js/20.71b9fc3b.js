(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{516:function(a,t,s){"use strict";s.r(t);var r=s(6),_=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"简介堆栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介堆栈"}},[a._v("#")]),a._v(" 简介堆栈")]),a._v(" "),s("p",[a._v("内存空间在逻辑上分为三部分:代码区、静态数据区和动态数据区, 动态数据区又分为栈区和堆区。")]),a._v(" "),s("p",[s("strong",[a._v("代码区")]),a._v(":存储方法体的二进制代码。高级调度(作业调度)、中级调度(内存调度)、低级调度(进程调度)控制代码区执行代码的切换。")]),a._v(" "),s("p",[s("strong",[a._v("静态数据区")]),a._v(":存储全局变量、静态变量、常量, 常量包括final修饰的常量和String常量。系统自动分配和回收。")]),a._v(" "),s("p",[a._v("内存中的堆栈和数据结构堆栈不是一个概念, 可以说内存中的堆栈是真实存在的物理区, 数据结构中的堆栈是抽象的数据存储结构。")]),a._v(" "),s("h3",{attrs:{id:"内存中的堆栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存中的堆栈"}},[a._v("#")]),a._v(" 内存中的堆栈")]),a._v(" "),s("h4",{attrs:{id:"堆栈空间分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#堆栈空间分配"}},[a._v("#")]),a._v(" 堆栈空间分配")]),a._v(" "),s("p",[s("strong",[a._v("栈")]),a._v("(操作系统):由操作系统自动分配释放 , 存放函数的参数值, 局部变量的值等。其操作方式类似于数据结构中的栈。")]),a._v(" "),s("p",[s("strong",[a._v("堆")]),a._v("(操作系统): 一般由程序员分配释放,  若程序员不释放, 程序结束时可能由OS回收, 分配方式倒是类似于链表。")]),a._v(" "),s("h4",{attrs:{id:"堆栈缓存方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#堆栈缓存方式"}},[a._v("#")]),a._v(" 堆栈缓存方式")]),a._v(" "),s("p",[a._v("栈使用的是一级缓存,  他们通常都是被调用时处于存储空间中, 调用完毕立即释放。")]),a._v(" "),s("p",[a._v("堆则是存放在二级缓存中, 生命周期由虚拟机的垃圾回收算法来决定(并不是一旦成为孤儿对象就能被回收)。所以调用这些对象的速度要相对来得低一些。")]),a._v(" "),s("p",[a._v("以上概念如下所示:")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('//main.cpp\nint a = 0; //全局初始化区\nint a = 0; //全局初始化区\nchar *p1; //全局未初始化区\nmain() {\n    int b; //栈\n    char s[] = "abc"; //栈\n    char *p2; //栈\n    char *p3 = "123456"; //123456\\0在常量区, p3在栈上。\n    static int c = 0; //全局(静态)初始化区\n    p1 = (char *)malloc(10);\n    p2 = (char *)malloc(20);\n    //分配得来得10和20字节的区域就在堆区。\n    strcpy(p1, "123456"); //123456\\0放在常量区, 编译器可能会将它与p3所指向的"123456"优化成一个地方。\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br")])]),s("h3",{attrs:{id:"数据结构中的堆栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据结构中的堆栈"}},[a._v("#")]),a._v(" 数据结构中的堆栈")]),a._v(" "),s("p",[a._v("栈:是一种连续存储的数据结构, 特点是存储的数据先进后出。")]),a._v(" "),s("p",[a._v("堆:是一棵完全二叉树结构, 特点是父节点的值大于(小于)两个子节点的值(分别称为大顶堆和小顶堆)。它常用于管理算法执行过程中的信息, 应用场景包括堆排序, 优先队列等。")]),a._v(" "),s("h2",{attrs:{id:"栈-stack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#栈-stack"}},[a._v("#")]),a._v(" 栈  stack")]),a._v(" "),s("p",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2013/11/stack.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("参考"),s("OutboundLink")],1),a._v("\n这个词其实有三种含义, 适用于不同的场合")]),a._v(" "),s("h3",{attrs:{id:"_1、-数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、-数据结构"}},[a._v("#")]),a._v(" 1、 数据结构")]),a._v(" "),s("p",[a._v('stack的第一种含义是一组数据的存放方式, 特点为LIFO, 即后进先出(Last in, first out)。\n在这种数据结构中, 数据像积木那样一层层堆起来, 后面加入的数据就放在最上层。使用的时候, 最上层的数据第一个被用掉, 这就叫做"后进先出"。')]),a._v(" "),s("p",[a._v("与这种结构配套的, 是一些特定的方法, 主要为下面这些。")]),a._v(" "),s("ul",[s("li",[a._v("push:在最顶层加入数据。")]),a._v(" "),s("li",[a._v("pop:返回并移除最顶层的数据。")]),a._v(" "),s("li",[a._v("top:返回最顶层数据的值, 但不移除它。")]),a._v(" "),s("li",[a._v("isempty:返回一个布尔值, 表示当前stack是否为空栈。")])]),a._v(" "),s("h3",{attrs:{id:"_2、-代码运行方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、-代码运行方式"}},[a._v("#")]),a._v(" 2、 代码运行方式")]),a._v(" "),s("p",[a._v('stack的第二种含义是"调用栈"(call stack), 表示函数或子例程像堆积木一样存放, 以实现层层调用。')]),a._v(" "),s("p",[a._v("程序运行的时候, 总是先完成最上层的调用, 然后将它的值返回到下一层调用, 直至完成整个调用栈, 返回最后的结果。")]),a._v(" "),s("h3",{attrs:{id:"_3、-内存区域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、-内存区域"}},[a._v("#")]),a._v(" 3、 内存区域")]),a._v(" "),s("p",[a._v("stack的第三种含义是存放数据的一种内存区域。程序运行的时候, 需要内存空间存放数据。一般来说, 系统会划分出两种不同的内存空间:一种叫做stack(栈), 另一种叫做heap(堆)。")]),a._v(" "),s("p",[a._v("它们的主要区别是:stack是有结构的, 每个区块按照一定次序存放, 可以明确知道每个区块的大小;heap是没有结构的, 数据可以任意存放。因此, stack的寻址速度要快于heap。")]),a._v(" "),s("p",[a._v("其他的区别还有, 一般来说, "),s("strong",[a._v("每个线程分配一个stack, 每个进程分配一个heap")]),a._v(", 也就是说, stack是线程独占的, heap是线程共用的。此外, stack创建的时候, 大小是确定的, 数据超过这个大小, 就发生stack overflow错误, 而heap的大小是不确定的, 需要的话可以不断增加。")]),a._v(" "),s("p",[a._v("根据上面这些区别, 数据存放的规则是:只要是局部的、占用空间确定的数据, 一般都存放在stack里面, 否则就放在heap里面。请看下面这段代码(来源)。")]),a._v(" "),s("h2",{attrs:{id:"堆与栈的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#堆与栈的区别"}},[a._v("#")]),a._v(" 堆与栈的区别")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/pt666/article/details/70876410",target:"_blank",rel:"noopener noreferrer"}},[a._v("参考"),s("OutboundLink")],1)]),a._v(" "),s("ol",[s("li",[a._v("栈内存存储的是局部变量而堆内存存储的是实体;")]),a._v(" "),s("li",[a._v("栈内存的更新速度要快于堆内存, 因为局部变量的生命周期很短;")]),a._v(" "),s("li",[a._v("栈内存存放的变量生命周期一旦结束就会被释放, 而堆内存存放的实体会被垃圾回收机制不定时的回收。")]),a._v(" "),s("li",[a._v("管理方式不同。栈由操作系统自动分配释放, 无需我们手动控制;堆的申请和释放工作由程序员控制, 容易产生内存泄漏;")]),a._v(" "),s("li",[a._v("空间大小不同。每个进程拥有的栈的大小要远远小于堆的大小。理论上, 程序员可申请的堆大小为虚拟内存的大小, 进程栈的大小 64bits 的 Windows 默认 1MB, 64bits 的 Linux 默认 10MB;")]),a._v(" "),s("li",[a._v("生长方向不同。堆的生长方向向上, 内存地址由低到高;栈的生长方向向下, 内存地址由高到低。")]),a._v(" "),s("li",[a._v("分配方式不同。堆都是动态分配的, 没有静态分配的堆。栈有2种分配方式:静态分配和动态分配。静态分配是由操作系统完成的, 比如局部变量的分配。动态分配由alloca函数进行分配, 但是栈的动态分配和堆是不同的, 他的动态分配是由操作系统进行释放, 无需我们手工实现。")])])])}),[],!1,null,null,null);t.default=_.exports}}]);