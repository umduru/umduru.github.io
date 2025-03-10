import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "umdu docs",
  description: "Документация umdu",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Быстрый старт', link: '/quick-start' },
    ],

    sidebar: [
      {
        text: 'umdu k1',
        items: [
          { text: 'Быстрый старт', link: '/quick-start' },
          { text: 'Установка образа системы', link: '/system-image-installation' },
          { text: 'Инструкция по запуску системы с внешнего  USB диска', link: '/usb-disk-docs' }
        ]
      }
    ],

    socialLinks: [
      //из https://simpleicons.org/
      { icon: 'telegram', link: 'https://t.me/dusikasss' }
    ]
  }
})
