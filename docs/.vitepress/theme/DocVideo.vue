<script setup>
import { useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false
})

defineProps({
  webmSrc: {
    type: String,
    default: ''
  },
  mp4Src: {
    type: String,
    default: ''
  },
  ariaLabel: {
    type: String,
    default: ''
  }
})

const attrs = useAttrs()
</script>

<template>
  <video
    v-bind="attrs"
    autoplay
    loop
    muted
    playsinline
    preload="metadata"
    :aria-label="ariaLabel"
  >
    <source v-if="webmSrc" :src="webmSrc" type="video/webm" />
    <source v-if="mp4Src" :src="mp4Src" type="video/mp4" />
  </video>
</template>
