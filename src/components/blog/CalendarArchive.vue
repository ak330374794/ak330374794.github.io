<template>
  <div class="archive-shell">
    <div class="archive-toolbar">
      <h2 class="archive-month">{{ monthHeading }}</h2>
      <div class="toolbar-actions">
        <button
          type="button"
          class="pagination-button"
          :disabled="!hasPrevious"
          aria-label="查看上个月"
          @click="$emit('update:modelValue', previousMonth)"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" class="pagination-button" :disabled="!hasNext" aria-label="查看下个月" @click="$emit('update:modelValue', nextMonth)">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>

    <div class="calendar-grid calendar-weekdays">
      <span v-for="day in weekDays" :key="day">{{ day }}</span>
    </div>
    <div class="calendar-grid">
      <button
        v-for="day in days"
        :key="day.id"
        type="button"
        class="calendar-cell"
        :class="{
          'is-empty': day.empty,
          'has-entry': day.article,
          'is-active': !day.empty && day.day === selectedDay,
        }"
        :aria-label="getDayLabel(day)"
        :disabled="day.empty"
        @click="selectDay(day)"
      >
        <template v-if="!day.empty">
          <span class="calendar-date">{{ day.day }}</span>
        </template>
      </button>
    </div>

    <div v-if="activeArticle" class="calendar-selected">
      <span class="selected-date">{{ fullSelectedDate }}</span>
      <RouterLink class="selected-link" :to="{ name: 'article', params: { slug: activeArticle.slug } }">
        {{ activeArticle.title }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  months: {
    type: Array,
    default: () => [],
  },
  days: {
    type: Array,
    default: () => [],
  },
})

defineEmits(['update:modelValue'])

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const currentIndex = computed(() => props.months.findIndex((item) => item.key === props.modelValue))

const activeMonth = computed(() => props.months[currentIndex.value] || props.months[0] || { label: '' })
const selectedDay = ref(null)

const monthHeading = computed(() => {
  const [year, month] = (props.modelValue || '').split('-')
  if (!year || !month) {
    return activeMonth.value.label
  }
  return `${year}年 ${Number(month)}月`
})

const articleDays = computed(() => props.days.filter((item) => item.article))
const activeArticle = computed(() => articleDays.value.find((item) => item.day === selectedDay.value)?.article || null)
const hasPrevious = computed(() => currentIndex.value > 0)
const hasNext = computed(() => currentIndex.value < props.months.length - 1)
const fullSelectedDate = computed(() => {
  if (!selectedDay.value) {
    return ''
  }
  const [year, month] = (props.modelValue || '').split('-')
  return `${year}.${month}.${String(selectedDay.value).padStart(2, '0')}`
})

const previousMonth = computed(() => {
  if (currentIndex.value <= 0) {
    return props.months[currentIndex.value]?.key || ''
  }
  return props.months[currentIndex.value - 1].key
})

const nextMonth = computed(() => {
  if (currentIndex.value >= props.months.length - 1) {
    return props.months[currentIndex.value]?.key || ''
  }
  return props.months[currentIndex.value + 1].key
})

const syncSelectedDay = () => {
  selectedDay.value = articleDays.value[0]?.day || props.days.find((item) => !item.empty)?.day || null
}

const selectDay = (day) => {
  if (day.empty) {
    return
  }
  selectedDay.value = day.day
}

const getDayLabel = (day) => {
  if (day.empty) {
    return '空白日期'
  }
  const date = `${props.modelValue}-${String(day.day).padStart(2, '0')}`
  return day.article ? `${date}，有文章：${day.article.title}` : `${date}，暂无文章`
}

watch(() => props.modelValue, syncSelectedDay, { immediate: true })
watch(
  () => props.days,
  () => syncSelectedDay(),
  { deep: true }
)
</script>

<style scoped>
.archive-shell {
  padding: 32px;
  border: 1px solid rgba(23, 32, 51, 0.05);
  border-radius: 32px;
  background: #ffffff;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.04);
}

.archive-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 40px;
}

.archive-month {
  color: #172033;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
}

.toolbar-actions {
  display: flex;
  gap: 8px;
}

.pagination-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(23, 32, 51, 0.06);
  border-radius: 50%;
  color: #94a3b8;
  background: #fff;
  font-size: 18px;
  transition: all 0.2s ease;
}

.pagination-button:hover:not(:disabled) {
  color: #172033;
  background: #f8fafc;
  border-color: rgba(23, 32, 51, 0.08);
}

.pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 8px;
}

.calendar-weekdays {
  margin-bottom: 16px;
}

.calendar-weekdays span {
  text-align: center;
  color: #94a3b8;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.calendar-cell {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  min-height: 48px;
  padding: 0;
  border: 0;
  border-radius: 12px;
  color: #475569;
  background: transparent;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.calendar-cell:not(.is-empty):hover {
  background: #f1f5f9;
  transform: translateY(-1px);
}

.calendar-cell.is-empty {
  cursor: default;
  background: transparent;
}

.calendar-cell.has-entry {
  color: #059669;
  font-weight: 700;
  background: #ecfdf5;
}

.calendar-cell.is-active {
  color: #fff;
  background: #1e293b;
}

.calendar-date {
  font-size: 14px;
}

.calendar-cell.has-entry::after {
  content: '';
  position: absolute;
  bottom: 4px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #10b981;
}

.calendar-selected {
  display: grid;
  gap: 6px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid rgba(23, 32, 51, 0.06);
}

.selected-date {
  color: #94a3b8;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.selected-link {
  color: #172033;
  font-weight: 700;
  color: #172033;
  font-size: 15px;
  line-height: 1.45;
  transition: color 0.2s ease;
}

.selected-link:hover {
  color: #059669;
}

@media (max-width: 768px) {
  .archive-shell {
    padding: 24px;
  }

  .archive-toolbar {
    align-items: stretch;
    flex-direction: column;
  }

  .archive-month {
    font-size: 28px;
  }

  .calendar-grid {
    gap: 8px;
  }

  .calendar-cell {
    min-height: 42px;
  }
}
</style>
