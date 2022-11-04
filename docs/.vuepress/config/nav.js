// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: 'Js',
        link: '/js/',
        items: [
          { text: 'DOM介绍', link: '/pages/6162c3/' },
          { text: 'ES6特性', link: '/pages/832aba/' },
          { text: 'Canvas', link: '/pages/3cc84b/' },
        ],
      },
      {
        text: 'Css',
        link: '/pages/fa408e/',
      },
      {
        text: 'Vue3',
        link: '/vue3/',
        items: [
          { text: '项目搭建', link: '/pages/0a8623/' },
        ],
      },
      {
        text: 'Ts',
        link: '/ts/',
        items: [
          { text: '泛型', link: '/pages/c06fb2/' },
        ],
      },
      {
        text: 'Node',
        link: '/node/',
        items: [
          { text: 'fs模块', link: '/pages/1c64c6/' },
        ],
      }
    ],
  },
  {
    text: '后端',
    link: '/webappframework/',
    items: [
      { text: 'Django', link: '/pages/1bbb46/' },
    ],
  },
  {
    text: '日记',
    link: '/diarydata/',
    items: [
      { text: '汇总', link: '/pages/4f1b74/' },
      { text: '碎片', link: '/pages/13896c/' },
      { text: '个人组件', link: '/pages/8d4e6a/' },

      // { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
      // { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '学习', link: '/pages/f2a556/' },
      { text: '面试', link: '/pages/aea6571b7a8bae86/' },
      { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
      { text: '实用技巧', link: '/pages/baaa02/' },
      { text: '友情链接', link: '/friends/' },
    ],
  },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
