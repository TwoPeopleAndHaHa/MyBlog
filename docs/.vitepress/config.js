import { getThemeConfig, defineConfig } from '@sugarat/theme/node'

const blogTheme = getThemeConfig({
  // 文章默认作者
  author: '二人与黑😎',
  // 控制精选文章
  hotArticle: {
    title: '精选文章',
    nextText: '下一页',
    pageSize: 3,
    // false 时无精选文章不展示此模块 , 或者 "暂无精选文章"
    empty: false
  },
  // 友链
  friend: [
    {
      nickname: 'Symbol wzc',
      des: 'have u left',
      avatar: 'https://avatars.githubusercontent.com/u/87292165?v=4',
      url: 'https://github.com/Wzccccc'
    },
    {
      nickname: '哈哈哈哈密瓜',
      des: '哈哈哈哈密瓜',
      avatar: 'https://www.jamesy.cn/assets/img/avatar.png',
      url: 'https://www.jamesy.cn'
    }
  ],
  recommend: {
    showSelf: true
  },
  // 开启离线的全文搜索支持（如构建报错可注释下面的配置再次尝试）
  // search: 'pagefind',
  search: false,
  // 文章全局相关能力
  article: {
    //是否展示文章的预计阅读时间
    readingTime: true,
    //是否隐藏文章页的封面展示
    hiddenCover: true,
    // 文章是否出现在首页的列表里
    hidden: true
  }
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: blogTheme,
  lang: 'zh-cn',
  base: '/MyBlog/',
  title: '二人与黑',
  description: 'Er人与黑',
  vite: {
    optimizeDeps: {
      include: ['element-plus'],
      exclude: ['@sugarat/theme']
    }
  },
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '上次更新于',
    footer: {
      message: '本博客内容仅供个人学习使用',
      copyright:
        'GitHub | <a target="_blank" href="https://github.com/TwoPeopleAndHaHa"> @TwoPeopleAndHaHa </a>'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/TwoPeopleAndHaHa' }]
  }
})
