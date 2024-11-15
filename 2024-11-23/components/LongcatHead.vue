<script setup>
const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

const src = 'https://cdn.jsdelivr.net/gh/mattn/longcat@master/public/themes/longcat/data01.png'
</script>

<template>
  <img :src="src" alt="longcat head" :class="props.class" />
</template>
