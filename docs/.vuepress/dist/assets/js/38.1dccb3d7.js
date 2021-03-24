(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{535:function(s,a,n){"use strict";n.r(a);var e=n(6),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("多媒体基本概念及 FFmpeg 常用命令介绍\n")]),s._v(" "),n("h3",{attrs:{id:"多媒体基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多媒体基本概念"}},[s._v("#")]),s._v(" 多媒体基本概念")]),s._v(" "),n("h5",{attrs:{id:"基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[s._v("#")]),s._v(" 基本概念")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("容器(Container)——容器就是一种文件格式, 比如flv, mkv等。包含下面5种流以及文件头信息。\n流(Stream)——是一种视频数据信息的传输方式, 5种流：音频, 视频, 字幕, 附件, 数据。\n帧(Frame)——帧代表一幅静止的图像, 分为I帧, P帧, B帧。\n编解码器(Codec)——是对视频进行压缩或者解压缩, CODEC =COde (编码) +DECode(解码)\n复用/解复用(mux/demux)——把不同的流按照某种容器的规则放入容器, 这种行为叫做复用(mux)\n把不同的流从某种容器中解析出来, 这种行为叫做解复用(demux)\n\n采样率：录音设备在一秒钟内对声音信号的采样次数, 采样频率越高声音的还原就越真实越自然。采样频率一般共分为22.05KHz、44.1KHz、48KHz三个等级。8KHz - 电话所用采样率, 对于人的说话已经足够, 22.05KHz只能达到FM广播的声音品质, 44.1KHz则是理论上的CD音质界限, 48KHz则更加精确一些。\n\n采样位数：记录每次采样值数值大小的位数。采样位数通常有8bits或16bits两种, 采样位数越大, 所能记录声音的变化度就越细腻, 相应的数据量就越大。\n\n声道数：声道数是指支持能不同发声的音响的个数, 它是衡量音响设备的重要指标之一。\n单声道的声道数为1个声道；双声道的声道数为2个声道；立体声道的声道数默认为2个声道；立体声道(4声道)的声道数为4个声道。\n\n码率：码率 = 采样率 * 采样位数 * 声道数\n如果是CD音质, 采样率44.1KHz, 采样位数16bit, 立体声(双声道), 码率 = 44.1 * 16 * 2 = 1411.2Kbps = 176.4KBps, 那么录制一分钟的音乐, 大概10.34MB。\n\n音频帧：音频数据是流式的, 本身没有明确的一帧帧的概念, 在实际的应用中, 为了音频算法处理/传输的方便, 一般约定俗成取2.5ms~60ms为单位的数据量为一帧音频。这个时间被称之为“采样时间”, 其长度没有特别的标准, 它是根据编解码器和具体应用的需求来决定的。\n\n编码：通过一定协议或规则把一段声音或图像转化成计算机数字文件的过程。\n音频编码：将音频采样数据(PCM等)压缩成为音频码流, 从而降低音频的数据量。常见的音频编码方案有AAC、MP3、WMA。 AAC原始码流(又称为“裸流”)是由一个一个的ADTS frame组成的。\n\n解码：编码的逆过程, 把编码过的媒体文件重新转化成声音或图像。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h5",{attrs:{id:"视频基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#视频基本概念"}},[s._v("#")]),s._v(" 视频基本概念")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("视频：静止的画面叫图像(picture)。连续的图像变化每秒超过24帧(frame)画面以上时, 根椐视觉暂留原理, 人眼无法辨别每幅单独的静态画面, 看上去是平滑连续的视觉效果。这样的连续画面叫视频。当连续图像变化每秒低于24帧画面时, 人眼有不连续的感觉叫动画(cartoon)。\n\n帧率：帧/秒(frames per second)的缩写, 也称为帧速率, 测量用于保存、显示动态视频的信息数量。每一帧都是静止的图象, 快速连续地显示帧便形成了运动的假象。每秒钟帧数 (fps) 愈多, 所显示的动作就会愈流畅, 可理解为秒钟时间里刷新的图片的帧数, 也可以理解为图形处理器每秒钟能够刷新几次, 也就是指每秒钟能够播放(或者录制)多少格画面。\n\n分辨率：一个表示平面图像精细程度的概念, 通常它是以横向和纵向点的数量来衡量的, 表示成水平点数垂直点数的形式, 在计算机显示领域我们也表示成“每英寸像素”(ppi)。在一个固定的平面内, 分辨率越高, 意味着可使用的点数越多, 图像越细致。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h5",{attrs:{id:"m3u8-hls"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#m3u8-hls"}},[s._v("#")]),s._v(" M3U8 & HLS")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("M3U8是一种常见的流媒体格式, 主要以文件列表的形式存在, 既支持直播又支持点播\nHLS(全称：Http Live Streaming)是由Apple公司定义的用于实时流传输的协议, HLS基于HTTP协议实现, 传输内容包括两部分：\n        一是M3U8描述文件：是指UTF-8编码格式的M3U文件。M3U文件是记录了一个索引纯文本文件, 打开它时播放软件并不是播放它, 而是根据它的索引找到对应的音视频文件的网络地址进行在线播放。\n        二是TS(Transport Stream)媒体文件：为什么要用 TS 而不是 MP4？这是因为两个 TS 片段可以无缝拼接, 播放器能连续播放, 而 MP4 文件由于编码方式的原因, 两段 MP4 不能无缝拼接, 连续播放会产生破音和画面间断\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h5",{attrs:{id:"mp3-aac-区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mp3-aac-区别"}},[s._v("#")]),s._v(" MP3 & AAC 区别")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("MP3和AAC都是音频格式, 后者是前者的进化版\nMP3：MP3是一种数字音乐格式, 可以将CD轨道减小到其正常大小的十分之一左右, 而不会明显降低质量。, MP3高频数据丢失严重\nAAC：AAC与MP3相似。它实质上可以切出或压缩人耳无法拾取的信息, 从而使数字文件更小, 更易于管理, 因此下载速度更快。AAC的大小约为MP3的一半, 但质量更高。压缩程度更高,提升压缩率, 支持多声道, 更高的解析度, 提升的解码效率。相比MP3音质和占有空间更小\nADTS全称是(Audio Data Transport Stream), 是AAC的一种十分常见的传输格式。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h5",{attrs:{id:"常见音频格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见音频格式"}},[s._v("#")]),s._v(" 常见音频格式")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("有损格式主要有MP3, WMA, OGG, MP3pro, AAC, VQF, ASF等。\n无损：WAV\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"ffmpeg-常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ffmpeg-常用命令"}},[s._v("#")]),s._v(" FFmpeg 常用命令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("-y 覆盖输出文件, 若存在不提示覆盖。\n-f 输出hls格式。\n\nhls协议流媒体网络传输协议：\nhls_list_size 3:HLS播放的列表, FFmpeg默认5。\n-hls_time 1:设置M3U8列表中切片的duration,每一片TS文件时长1秒左右。\n-hls_wrap 10:表示为最大的TS循环数, 10个, 每10个一个循环\n-ar freq 设置音频采样率 \n-ac channels 设置通道 缺省为与输入相同 \n-acodec 使用pcm_s16le编码\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"ffmpeg常用操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ffmpeg常用操作"}},[s._v("#")]),s._v(" FFmpeg常用操作")]),s._v(" "),n("ul",[n("li",[s._v("合并多段音频")])]),s._v(" "),n("p",[n("code",[s._v("ffmpeg -y -i \"concat:${pathList.join('|')}\" -acodec copy part_all.aac")]),s._v(" 注：pathlist为多段音频地址\n参数： -acodec copy表示使用跟原视频一样的音频编解码器")]),s._v(" "),n("ul",[n("li",[s._v("aac => mp3")])]),s._v(" "),n("p",[n("code",[s._v("ffmpeg -y -i '${filePrefix}all${version}.aac' '${filePrefix}all${version}.mp3'")])]),s._v(" "),n("ul",[n("li",[s._v("一段音频剪切中间一段")])]),s._v(" "),n("p",[n("code",[s._v('ffmpeg -i part_all4.mp3 -filter_complex "[0]atrim=duration=start_pos[a];[0]atrim=start=end_pos[b];[a][b]concat=n=2:v=0:a=1" output.mp3')]),s._v("  注：start_pos起始位置 end_pos终止位置")])])}),[],!1,null,null,null);a.default=t.exports}}]);