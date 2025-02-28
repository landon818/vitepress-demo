import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '前端猫咖',
  description: '今天又敲了个寂寞, 老板都愁死了',
  base: '/vitepress-demo/',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/vitepress-demo/favicon.png' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.png',

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            /* ... */
          },
          searchOptions: {
            /* ... */
          },
        },
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除搜索条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'vue',
        items: [{ text: 'vben5问题集合', link: '/vben-admin-v5-常见问题集合.md' }],
      },
      {
        text: 'uniapp',
        items: [],
      },
      {
        text: '小游戏',
        items: [],
      },
      {
        text: 'react',
        items: [{ text: 'react+umi问题集合', link: '/react+umi问题集合.md' }],
      },
      {
        text: '日常随笔',
        items: [
          { text: 'git', link: '/git-github操作仓库失败.md' },
          { text: 'nvm', link: '/nvm自动切换.md' },
          { text: 'fnm', link: '/Windows使用NodeJS版本管理工具fnm.md' },
        ],
      },
    ],
    aside: true, // 设置右侧侧边栏在左侧显示

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} 前端猫咖`,
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      level: [2, 3],
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // full
        timeStyle: 'short', // medium
      },
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
