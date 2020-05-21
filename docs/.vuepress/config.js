module.exports = {
    title: 'ZT',

    serviceWorker: true,
    head: [
        ['link', { rel: 'icon', href: '/img/logo.jpeg' }]
    ],
    markdown: {
      // 显示代码行号
      lineNumbers: true
    },
    themeConfig: {
        logo:"/img/logo.jpeg",
        nav: [
          { text: '首页', link: '/timeLine/' },
          { text: '技术', link:'/technology/'},
          { text: '生活',link: '/life/' },
          { text: '思考',link: '/ponder/'},
          { text: '标签库', link: '/tags/' },
          { text: '关于', link:'/about/'},
          { text: '留言板', link:'/massage/'},
          { text: '链接',
            items: [
                {text:'学习',link: 'https://www.bilibili.com' },
                {text:'GitHub',link: 'https://github.com/ztscbz/myBlog' },
            ]
          }
        ],
        lastUpdated: 'Last Updated',
      }
  }
