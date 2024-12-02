<script setup lang="ts">
const props = defineProps<{
  text: string
  link: string
  icon?: string
}>()
</script>
<template>
  <font-awesome-icon class="text-xl mr-4" :icon="`/${props.icon}`" /><a
    class="text-lg"
    :href="props.link"
    >{{ text }}</a
  >
</template>
