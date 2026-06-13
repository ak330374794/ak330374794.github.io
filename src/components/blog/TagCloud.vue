<template>
  <div class="tag-cloud">
    <button v-if="showAll" type="button" class="tag-pill" :class="{ 'is-active': !modelValue }" @click="$emit('update:modelValue', '')">
      全部
    </button>
    <button
      v-for="tag in tags"
      :key="tag"
      type="button"
      class="tag-pill"
      :class="{ 'is-active': modelValue === tag }"
      @click="$emit('update:modelValue', tag)"
    >
      {{ tag }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: String,
    default: '',
  },
  showAll: {
    type: Boolean,
    default: true,
  },
})

defineEmits(['update:modelValue'])
</script>
