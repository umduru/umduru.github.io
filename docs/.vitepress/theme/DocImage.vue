<script setup>
import { useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  webpSrc: {
    type: String,
    default: ''
  }
})

const attrs = useAttrs()

const hasWebpSource = !!props.webpSrc
</script>

<template>
  <picture v-if="hasWebpSource">
    <source :srcset="webpSrc" type="image/webp" />
    <img v-bind="attrs" :src="src" :alt="alt" />
  </picture>
  <img v-else v-bind="attrs" :src="src" :alt="alt" />
</template>
