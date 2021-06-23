module.exports = {
	title: '罗洋洋的博客',
	description: '罗洋洋的博客',
	// 网页 header
	head: [
		['link', { rel: 'icon', href: '' }],
		['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]  // 移动端优化
	],
	logo: '/imgs/header.jpeg',
	// 博客主题 选用 reco
	theme: 'reco',
	// 每个代码块显示行号
	markdown: {
		lineNumbers: true
	},
	// 主题配置 参考官方文档和选用主题的文档
	themeConfig: {
		type: 'blog',
		smoothScroll: true,
		author: 'luoyangyang',
		authorAvatar: '/img/header.jpeg',
		// 备案
		record: '陕ICP备2021003358号',  // ICP 备案文案
		recordLink: 'ICP 备案指向链接', // ICP 备案指向链接
		cyberSecurityRecord: '公安部备案文案',  // 公安部备案文案
		cyberSecurityLink: '公安部备案指向链接',  // 公安部备案指向链接
		startYear: '2018',  // 项目开始时间，只填写年份
		codeTheme: 'funky',  // 代码主题 default funky okaidia solarizedlight tomorrow(default)
		blogConfig: {  // 博客配置
			category: {
				location: 2,     // 在导航栏菜单中所占的位置，默认2
				text: '分类' // 默认文案 “分类”
			},
			tag: {
				location: 3,     // 在导航栏菜单中所占的位置，默认3
				text: '标签'      // 默认文案 “标签”
			},
			socialLinks: [     // 信息栏展示社交信息
				{ icon: 'reco-github', link: 'https://github.com/luoyangyang369' },
				{ icon: 'reco-sf', link: 'https://segmentfault.com/u/luoyangyang/articles' },
			]
		},
		// 顶部导航
		nav: [
			{ text: '首页', link: '/', icon: 'reco-home' },
			{ text: '归档', link: '/timeline/', icon: 'reco-date' },
			{ text: '学习', link: '/posts/interview/learn' }, // 外部链接
			{ text: '参考资料', items: [
				{text: 'doccs', link:'https://doocs.github.io/#/README_CN'},
				{text: 'CS-Notes', link:'http://www.cyc2018.xyz/'},
			] }, // 外部链接
			// 下拉列表显示分组
			{
				text: '高级',
				items: [
					{
						text: '博客',
						items: [
							{ text: 'vuepress', link: '/posts/vuepress/vuepress.md' },
						]
					},
					{
						text: 'Java',
						items: [
							{ text: '基础知识', link: '/posts/java/general' },
							{ text: 'spring', link: '/posts/java/spring' }
						]
					},
					{
						text: '面试',
						items: [
							{ text: '面试题', link: '/posts/interview/interview' },
							{ text: '面试题总结', link: '/posts/interview/interview2' },
						]
					},
				]
			}
		],
		// 评论系统使用的是 Valine 注册拿到下面的 AppID
		valineConfig: {
			appId: 'qy7MtQJd4BUopY6z89YuVDBQ-gzGzoHsz',
			appKey: '7N4v1FxQguTyrV8IK7fVSQgc'
		},
		subSidebar: 'auto',
		sidebar: 'auto',
		// Git 仓库和编辑链接
		repo: 'https://github.com/luoyangyang369', // 你的仓库
		repoLabel: 'GitHub', // 导航栏上的文本
		lastUpdated: '上次更新',
	},
	plugins: [
		['vuepress-plugin-code-copy', true],  // 代码块复制功能
		// pwa 插件
		['@vuepress/pwa', {
			serviceWorker: true,
			updatePopup: true
		}],
		// 自动生成 sitemap
		['sitemap', {
			hostname: ''
		}],
		// 自动生成侧边栏
		["vuepress-plugin-auto-sidebar", {}],
		// live2d
		['vuepress-plugin-helper-live2d', {
			// 是否开启控制台日志打印(default: false)
			log: false,
			live2d: {
				// 是否启用(关闭请设置为false)(default: true)
				enable: true,
				// 模型名称(default: hibiki)>>>取值请参考：
				// https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
				model: 'koharu',
				display: {
					position: "left", // 显示位置：left/right(default: 'right')
					width: 135, // 模型的长度(default: 135)
					height: 300, // 模型的高度(default: 300)
					hOffset: 10, //  水平偏移(default: 65)
					vOffset: 0, //  垂直偏移(default: 0)
				},
				mobile: {
					show: false // 是否在移动设备上显示(default: false)
				},
				react: {
					opacity: 1 // 模型透明度(default: 0.8)
				}
			}
		}]
	]
}
