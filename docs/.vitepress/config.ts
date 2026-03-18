import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'
import { zh_CN } from './configs/zh_CN'
import { en_US } from './configs/i18n/en_US/en_US'
import { lch } from './configs/i18n/zh-classical/zh_classical'
import { search as zhSearch } from './configs/zh_CN'
// import { search as enSearch } from './configs/i18n/en_US/en_US'
import { search as lzhSearch } from './configs/i18n/zh-classical/zh_classical'
import { head as customHead, socialLinks } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: '/',

  // 核心 SEO 配置：多语言分级
  locales: {
    root: {
      label: '中文',
      lang: 'zh-Hans',
      title: 'MCCOM - 我的世界中文社区',
      description: 'MCCOM是一个专业的我的世界(Minecraft)中文社区门户。提供最新、最全的MC服务器列表、Mod整合包、插件、地图、材质包下载及游戏攻略分享。',
      ...zh_CN
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'MCCOM - Minecraft Chinese Community',
      description: 'MCCOM is a professional Minecraft community portal offering server lists, modpacks, plugins, maps, and guides for all MC players.',
      ...en_US
    },
    lch: {
      label: '文言',
      lang: 'zh-classical',
      title: 'MCCOM - 我的世界文言社區',
      description: 'MCCOM乃《我的世界》之華文社群門戶，備有伺服器名錄、模組、插件、地圖及攻略，共襄盛舉。',
      ...lch
    },
  },

  // 全局头部配置
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }], // 网站图标
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'MCCOM' }],
    // 如需添加百度/Google验证，可在此处继续添加
    ...(customHead || [])
  ],

  lastUpdated: true,
  cleanUrls: true,

  // 站点地图：助力搜索引擎收录
  sitemap: {
    hostname: 'https://mccom.xyz',
  },

  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    },
    // 在 h1 标题下插入自定义元数据组件
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`; 
        return htmlResult;
      }
    },
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: true,
    // 注意：Logo需放在 docs/public/logo.png
    logo: '/logo.png',
    
    socialLinks,

    /* 搜索配置 (Algolia) */
    search: {
      provider: 'algolia',
      options: {
        appId: 'VTCVHVPS1J',
        apiKey: 'c3e9345ef8310ece1bb44e178fe36dbd',
        indexName: 'mccom',
        locales: {
          ...zhSearch,
          // ...enSearch,
          ...lzhSearch,
        },
      },
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
    css: {
      preprocessorOptions: {
        scss: {}
      }
    }
  },
})
