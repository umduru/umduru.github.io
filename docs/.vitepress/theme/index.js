// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import AsideAd from './AsideAd.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'aside-ads-after': () => h(AsideAd)
    })
  }
}
