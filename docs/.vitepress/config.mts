import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "umdu docs",
  description: "Официальная документация umdu: настройка и использование устройств umdu k1 и umdu ac, подключение, инструкции и список поддерживаемых кондиционеров.",
  cleanUrls: true,
  // Изображения можно хранить в public/images и обращаться к ним через /images/имя_файла.расширение
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    logo: {
      light: '/images/logo.png',
      dark: '/images/logo.png',
      alt: 'UMDU Logo'
    },
    nav: [
      { text: 'umdu k1', link: '/quick-start' },
      { text: 'umdu ac', link: '/quick-start-ac' },
      { text: 'Бесплатная виртуальная машина', link: '/free-virtual-machine' },
      { text: 'umdu.ru', link: 'https://umdu.ru' }
    ],

    sidebar: [
      {
        text: 'umdu k1',
        collapsed: false,
        items: [
          {
            text: 'Начало работы',
            collapsed: false,
            items: [
              { text: 'Быстрый старт', link: '/quick-start' },
              { text: 'Установка HACS', link: '/hacs-installation' }
            ]
          },
          {
            text: 'HAOS (Home Assistant OS)',
            collapsed: false,
            items: [
              { text: 'Переход на HAOS', link: '/haos-migration' },
              { text: 'Запуск с внешнего USB диска', link: '/haos-usb-disk' }
            ]
          },
          {
            text: 'HA Supervised',
            collapsed: false,
            items: [
              { text: 'Установка образа системы', link: '/system-image-installation' },
              { text: 'Запуск с внешнего USB диска', link: '/usb-disk-docs' }
            ]
          }
        ]
      },
      {
        text: 'umdu ac',
        collapsed: false,
        items: [
          {
            text: 'Начало работы',
            collapsed: false,
            items: [
              { text: 'Быстрый старт', link: '/quick-start-ac' },
              { text: 'Список поддерживаемых кондиционеров', link: '/models-ac' }
            ]
          },
          {
            text: 'Инструкции',
            collapsed: false,
            items: [
              { text: 'Варианты подключений umdu ac к кондиционеру', link: '/connect-to-air-conditioner' },

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
  
  // Подключаем favicon и пользовательские CSS стили
  head: [
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }],
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ]
})
