import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['link', { rel: 'apple-touch-icon', href: 'https://github.com/ZhuYuLinSheng/MCCOM/blob/main/docs/public/logo.png' }],
  ['link', { rel: 'mask-icon', href: 'https://github.com/ZhuYuLinSheng/MCCOM/blob/main/docs/public/logo.png', color: '#3eaf7c' }],
  ['meta', { name: 'msapplication-TileImage', content: 'https://github.com/ZhuYuLinSheng/MCCOM/blob/main/docs/public/logo.png' }],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
]
