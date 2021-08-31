// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章',
        items: [
          { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
          // { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
        ],
      },
      {
        text: 'css',
        link: '/pages/fa408e/',
      },
      {
        text: 'Vue',
        link: '/vue/',
        items: [
          { text: '基础内容', link: '/pages/def58a/',
          },
          {
            text: '组件化', link: '/pages/d199ed/'
          },
          {
            text: "axios网络模块封装", link: '/pages/694454/'
          },
          {
            text: "CLI脚手架", link: '/pages/190e59/'
          },
          {
            text: "Vue-router", link: '/pages/13e7d4/'
          },
          {
            text: "Vuex", link: '/pages/4bea55/'
          },
          {
            text: "webpack相关知识", link: '/pages/0d7a1b/'
          },
          {
            text: "vue进阶", link: '/pages/22713a22713a/'
          },
          {
            text: "Vuex", link: '/pages/4bea55/'
          },
          {
            text: "antv框架", link: '/pages/5df7a3/'
          },
          {
            text: "Uni-app", link: '/pages/fb13a9/'
          },
          {
            text: "常用代码和json文件", link: '/pages/8e80a2/'
          },

          // { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
        ],
      },
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
    link: '/diary/',
    items: [
      { text: '日记', link: '/pages/1663cb/' },
      { text: '碎片', link: '/pages/c40207/' },
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
  { text: '关于', link: '/about/' },
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
