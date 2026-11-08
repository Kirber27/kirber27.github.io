<script setup>
defineProps({
  index: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  idPrefix: { type: String, required: true }
})
</script>

<template>
  <div class="section-head" v-reveal>
    <span class="section-index">{{ index }}.</span>
    <h2 :id="`${idPrefix}-title`" class="section-title">{{ title }}</h2>
    <p v-if="subtitle" class="section-sub">{{ subtitle }}</p>
  </div>
</template>
