(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{514:function(t,a,s){"use strict";s.r(a);var r=s(6),_=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1、进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、进程"}},[t._v("#")]),t._v(" 1、进程")]),t._v(" "),s("p",[t._v("进程是具有一定独立功能的程序关于某个数据集合上的一次运行活动,进程是系统进行资源分配和调度的一个独立单位。每个进程都有自己的独立内存空间，不同进程通过进程间通信来通信。由于进程比较重量，占据独立的内存，所以上下文进程间的切换开销（栈、寄存器、虚拟内存、文件句柄等）比较大，但相对比较稳定安全。")]),t._v(" "),s("h2",{attrs:{id:"_2、线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、线程"}},[t._v("#")]),t._v(" 2、线程")]),t._v(" "),s("p",[t._v("线程是进程的一个实体,是CPU调度和分派的基本单位,它是比进程更小的能独立运行的基本单位.线程自己基本上不拥有系统资源,只拥有一点在运行中必不可少的资源(如程序计数器,一组寄存器和栈),但是它可与同属一个进程的其他的线程共享进程所拥有的全部资源。线程间通信主要通过共享内存，上下文切换很快，资源开销较少，但相比进程不够稳定容易丢失数据。")]),t._v(" "),s("h2",{attrs:{id:"_3、协程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、协程"}},[t._v("#")]),t._v(" 3、协程")]),t._v(" "),s("p",[t._v("协程是一种用户态的轻量级线程，协程的调度完全由用户控制。协程拥有自己的寄存器上下文和栈。协程调度切换时，将寄存器上下文和栈保存到其他地方，在切回来的时候，恢复先前保存的寄存器上下文和栈，直接操作栈则基本没有内核切换的开销，可以不加锁的访问全局变量，所以上下文的切换非常快。")]),t._v(" "),s("h2",{attrs:{id:"调度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调度"}},[t._v("#")]),t._v(" 调度")]),t._v(" "),s("p",[s("strong",[t._v("进程调度")]),t._v("，切换进程上下文，包括分配的内存，包括数据段，附加段，堆栈段，代码段，以及一些表格。\n"),s("strong",[t._v("线程调度")]),t._v("，切换线程上下文，主要切换堆栈，以及各寄存器，因为同一个进程里的线程除了堆栈不同。")]),t._v(" "),s("p",[t._v("协程又称为轻量级线程，每个协程都自带了一个栈，可以认为一个协程就是一个函数和这个存放这个函数运行时数据的栈，这个栈非常小，一般只有几十kb。")])])}),[],!1,null,null,null);a.default=_.exports}}]);