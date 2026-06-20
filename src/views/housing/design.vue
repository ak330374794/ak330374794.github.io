<template>
  <HousingLayout
    ><div class="shell page"
      ><section class="panel hero"
        ><span class="badge">装修家居</span><h1>从量房报价到施工管理与智能家居安装，覆盖完整装修周期。</h1
        ><p>支持装修需求发布、设计方案、资金托管和建材商城，打通装修与智能设备方案。</p></section
      ><section class="grid"
        ><article v-for="item in housingDesignPanels" :key="item.title" class="panel card"
          ><strong>{{ item.title }}</strong
          ><p>{{ item.desc }}</p></article
        ></section
      ></div
    ></HousingLayout
  >
</template>
<script setup>
import HousingLayout from '@/components/housing/HousingLayout.vue'
import { housingDesignPanels } from '@/data/housingSite'
</script>
<style scoped>
.shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}
.page,
.grid {
  display: grid;
  gap: 18px;
}
.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}
.hero,
.card {
  padding: 20px;
}
.hero {
  background: linear-gradient(135deg, #fff7ed, #fff);
}
.badge {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  color: #ea580c;
  background: rgba(234, 88, 12, 0.08);
  font-size: 11px;
  font-weight: 700;
}
h1,
.card strong {
  color: #0f172a;
}
h1 {
  margin-top: 16px;
  font-size: clamp(34px, 4vw, 50px);
  line-height: 1.15;
}
p,
.card p {
  color: #64748b;
}
.hero p,
.card p {
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.85;
}
.grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
@media (max-width: 1080px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero,
  .card {
    padding: 18px;
  }

  h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .hero p,
  .card p {
    font-size: 13px;
    line-height: 1.75;
  }
}

@media (max-width: 640px) {
  .hero,
  .card {
    padding: 16px;
    border-radius: 20px;
  }

  .badge {
    font-size: 10px;
  }
}
</style>
