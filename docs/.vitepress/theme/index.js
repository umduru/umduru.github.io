import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import AsideAd from './AsideAd.vue'
import DocImage from './DocImage.vue'
import DocVideo from './DocVideo.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'aside-ads-after': () => h(AsideAd)
    })
  },
  enhanceApp({ app }) {
    app.component('DocImage', DocImage)
    app.component('DocVideo', DocVideo)
  }
}
