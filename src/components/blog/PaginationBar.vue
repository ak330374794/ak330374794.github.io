<template>
  <div class="pagination" v-if="pageCount > 1">
    <button type="button" class="pagination-button" :disabled="page <= 1" @click="$emit('update:page', page - 1)">上一页</button>
    <button
      v-for="pageNumber in pageCount"
      :key="pageNumber"
      type="button"
      class="pagination-button"
      :class="{ 'is-active': pageNumber === page }"
      @click="$emit('update:page', pageNumber)"
    >
      {{ pageNumber }}
    </button>
    <button type="button" class="pagination-button" :disabled="page >= pageCount" @click="$emit('update:page', page + 1)">下一页</button>
  </div>
</template>

<script setup>
defineProps({
  page: {
    type: Number,
    default: 1,
  },
  pageCount: {
    type: Number,
    default: 1,
  },
})

defineEmits(['update:page'])
</script>
