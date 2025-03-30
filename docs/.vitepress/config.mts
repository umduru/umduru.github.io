import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "docs",
  description: "Документация umdu",
  // Изображения можно хранить в public/images и обращаться к ним через /images/имя_файла.расширение
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/images/logo.png',
      dark: '/images/logo.png',
      alt: 'UMDU Logo'
    },
    nav: [
      { text: 'umdu k1', link: '/quick-start' },
      { text: 'umdu aux', link: '/quick-start-aux' },
    ],

    sidebar: [
      {
        text: 'umdu k1',
        items: [
          {
            text: 'Начало работы',
            items: [
              { text: 'Быстрый старт', link: '/quick-start' }
            ]
          },
          {
            text: 'Инструкции',
            items: [
              { text: 'Установка образа системы', link: '/system-image-installation' },
              { text: 'Запуск с внешнего USB диска', link: '/usb-disk-docs' }
            ]
          }
        ]
      },
      {
        text: 'umdu aux',
        items: [
          {
            text: 'Начало работы',
            items: [
              { text: 'Быстрый старт', link: '/quick-start-aux' }
            ]
          },
          {
            text: 'Инструкции',
            items: [
              { text: 'Варианты подключений umdu aux к кондиционеру', link: '/connect-to-air-conditioner' },

            ]
          }
        ]
      }
    ],

    socialLinks: [
      //из https://simpleicons.org/
      { icon: 'telegram', link: 'https://t.me/homeassistant_russia' }
    ]
  },
  
  // Подключаем пользовательские CSS стили
  head: [
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ]
})
