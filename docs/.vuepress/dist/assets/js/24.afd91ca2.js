(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{523:function(e,s,n){"use strict";n.r(s);var t=n(6),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"连接查询-联合查询-子查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#连接查询-联合查询-子查询"}},[e._v("#")]),e._v(" 连接查询 联合查询 子查询")]),e._v(" "),n("ul",[n("li",[e._v("连接查询")])]),e._v(" "),n("p",[e._v("连接查询就是将多个表联合起来查询, 连接查询方式有内连接、外连接、自然连接、交叉连接。连接查询使得可以同时查看多张表中数据。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("- 内连接：有条件连接, 多个表之间依据指定条件连接, 匹配结果是保留符合匹配结果的记录。\n- 外连接：与内连接不同的是不管匹配符不符合都保留, 根据外连接连接方式来决定保留哪张表, 比如保留左表的话, 那么左表无法匹配右表时, 保留左表数据, 然后置右表字段数据为null.\n- 自然连接：有条件连接, 自动依据“同名字段”连接(多个同名字段就都作为条件)。\n- 交叉连接cross join：无条件连接, 将每一条记录与另外一个表的每一条记录连接(笛卡尔积), 结果是字段数等于原来字段数之和, 记录数等于之前各个表记录数之乘积。\n")])])]),n("p",[e._v("补充：在多个表中, 为了区分每个表, 以及简便使用, 可以使用表别名。")]),e._v(" "),n("ul",[n("li",[e._v("联合查询")])]),e._v(" "),n("p",[e._v("联合查询是将多个查询结果在记录上进行拼接。(相当于将其他表的查询记录结果连接到第一个表的后面)【因为是拼接, 所以"),n("strong",[e._v("多个查询结果的字段数必须相同")]),e._v("】【拼接不在意数据类型, 比如第一个表的第一个字段是int,但后面的表中的varchar依然可以拼接到第一列中】")]),e._v(" "),n("p",[e._v("语法：select语句 union select语句…;")]),e._v(" "),n("p",[e._v("补充：union可以有选项, 加在union 后面, all选项是不对相同去重, distinct是去重。")]),e._v(" "),n("ul",[n("li",[e._v("子查询")])]),e._v(" "),n("p",[e._v("子查询是嵌套在查询语句中的查询。\n可以分为三类：")]),e._v(" "),n("p",[e._v('from子查询：子查询跟在from之后的；一般用在“先查出二维表, 再处理”的情况。\n如：select cid,cname from (select * from class where cname="python") as c;')]),e._v(" "),n("p",[e._v('where子查询：子查询跟在where条件中；一般用在“先查询出指定条件再查询”的情况\n如：select * from student where cid=(select cid from class where cname="python");')]),e._v(" "),n("p",[e._v("exist子查询：子查询在exist语句里面；一般用作“存在才做”的情况\n如：select * from class where exists(select * from  student where cid=1) and cid=1;")]),e._v(" "),n("h2",{attrs:{id:"explain-优化神器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#explain-优化神器"}},[e._v("#")]),e._v(" explain 优化神器")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000008131735",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"explain-输出格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#explain-输出格式"}},[e._v("#")]),e._v(" EXPLAIN 输出格式")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("mysql> explain select * from user_info where id = 2\\G\n*************************** 1. row ***************************\n           id: 1\n  select_type: SIMPLE\n        table: user_info\n   partitions: NULL\n         type: const\npossible_keys: PRIMARY\n          key: PRIMARY\n      key_len: 8\n          ref: const\n         rows: 1\n     filtered: 100.00\n        Extra: NULL\n1 row in set, 1 warning (0.00 sec)\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br")])]),n("p",[e._v("各列的含义如下:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("id: SELECT 查询的标识符. 每个 SELECT 都会自动分配一个唯一的标识符.")])]),e._v(" "),n("li",[n("strong",[e._v("select_type: SELECT 查询的类型.")])]),e._v(" "),n("li",[n("strong",[e._v("table: 查询涉及的表或衍生表")])]),e._v(" "),n("li",[n("strong",[e._v("partitions: 匹配的分区")])]),e._v(" "),n("li",[n("strong",[e._v("type: join 类型")])]),e._v(" "),n("li",[n("strong",[e._v("possible_keys: 此次查询中可能选用的索引")])]),e._v(" "),n("li",[n("strong",[e._v("key: 此次查询中确切使用到的索引.")])]),e._v(" "),n("li",[n("strong",[e._v("ref: 哪个字段或常数与 key 一起被使用")])]),e._v(" "),n("li",[n("strong",[e._v("key_len：表示查询优化器使用了索引的字节数. 这个字段可以评估组合索引是否完全被使用, 或只有最左部分字段被使用到.")])]),e._v(" "),n("li",[n("strong",[e._v("rows: 显示此查询一共扫描了多少行. 这个是一个估计值.直观显示 SQL 的效率好坏, 原则上 rows 越少越好")])]),e._v(" "),n("li",[n("strong",[e._v("filtered: 表示此查询条件所过滤的数据的百分比")])]),e._v(" "),n("li",[n("strong",[e._v("extra: 额外的信息")])])]),e._v(" "),n("p",[e._v("下面是几个重要字段")]),e._v(" "),n("h4",{attrs:{id:"type"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[e._v("#")]),e._v(" type")]),e._v(" "),n("p",[e._v("type 字段比较重要, 它提供了判断查询是否高效的重要依据依据. 通过 type 字段, 我们判断此次查询是 全表扫描 还是 索引扫描 等.")]),e._v(" "),n("p",[e._v("常见取值：")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("const:")]),e._v(" 针对主键或唯一索引的等值查询扫描, 最多只返回一行数据. const 查询速度非常快, 因为它仅仅读取一次即可")]),e._v(" "),n("li",[n("strong",[e._v("eq_ref:")]),e._v(" 此类型通常出现在多表的 join 查询, 表示对于前表的每一个结果, 都只能匹配到后表的一行结果. 并且查询的比较操作通常是 =, 查询效率较高.")]),e._v(" "),n("li",[n("strong",[e._v("ref:")]),e._v(" 此类型通常出现在多表的 join 查询, 针对于非唯一或非主键索引, 或者是使用了 最左前缀 规则索引的查询.")]),e._v(" "),n("li",[n("strong",[e._v("range:")]),e._v(" 表示使用索引范围查询, 通过索引字段范围获取表中部分数据记录. 这个类型通常出现在 =, <>, >, >=, <, <=, IS NULL, <=>, BETWEEN, IN() 操作中.\n当 type 是 range 时, 那么 EXPLAIN 输出的 ref 字段为 NULL, 并且 key_len 字段是此次查询中使用到的索引的最长的那个.")]),e._v(" "),n("li",[n("strong",[e._v("index:")]),e._v(" 表示全索引扫描(full index scan), 和 ALL 类型类似, 只不过 ALL 类型是全表扫描, 而 index 类型则仅仅扫描所有的索引, 而不扫描数据.\nindex 类型通常出现在: 所要查询的数据直接在索引树中就可以获取到, 而不需要扫描数据. 当是这种情况时, Extra 字段 会显示 Using index.")]),e._v(" "),n("li",[n("strong",[e._v("ALL:")]),e._v(" 表示全表扫描, 这个类型的查询是性能最差的查询之一. 通常来说, 我们的查询不应该出现 ALL 类型的查询, 因为这样的查询在数据量大的情况下, 对数据库的性能是巨大的灾难. 如一个查询是 ALL 类型查询, 那么一般来说可以对相应的字段添加索引来避免.")])]),e._v(" "),n("p",[e._v("通常来说, 不同的 type 类型的"),n("strong",[e._v("性能关系")]),e._v("如下:")]),e._v(" "),n("blockquote",[n("blockquote",[n("blockquote",[n("p",[e._v("ALL < index < range ~ index_merge < ref < eq_ref < const < system")])])])]),e._v(" "),n("h4",{attrs:{id:"extra"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#extra"}},[e._v("#")]),e._v(" Extra")]),e._v(" "),n("p",[e._v("EXplain 中的很多额外的信息会在 Extra 字段显示, 常见的有以下几种内容:")]),e._v(" "),n("ul",[n("li",[e._v("Using filesort")])]),e._v(" "),n("p",[e._v("当 Extra 中有 Using filesort 时, 表示 MySQL 需额外的排序操作, 不能通过索引顺序达到排序效果. 一般有 Using filesort, 都建议优化去掉, 因为这样的查询 CPU 资源消耗大.")]),e._v(" "),n("ul",[n("li",[e._v("Using index")])]),e._v(" "),n("p",[e._v('"覆盖索引扫描", 表示查询在索引树中就可查找所需数据, 不用扫描表数据文件, 往往说明性能不错')]),e._v(" "),n("ul",[n("li",[e._v("Using temporary")])]),e._v(" "),n("p",[e._v("查询有使用临时表, 一般出现于排序, 分组和多表 join 的情况, 查询效率不高, 建议优化.")])])}),[],!1,null,null,null);s.default=r.exports}}]);