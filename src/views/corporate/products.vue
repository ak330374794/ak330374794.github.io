<template>
  <CorporateLayout>
    <div class="corp-shell products-page">
      <section class="hero-panel panel">
        <div class="hero-copy">
          <span class="hero-badge">产品服务</span>
          <h1>用产品矩阵、解决方案与参数亮点，构建专业可信的企业产品页。</h1>
          <p>支持产品分类导航、能力介绍、技术参数、应用场景和客户案例跳转，满足 B2B 决策链路中的信息获取需求。</p>
          <div class="hero-actions">
            <button type="button">预约演示</button>
            <button type="button" class="ghost">下载白皮书</button>
          </div>
        </div>
      </section>

      <section class="tab-strip">
        <article class="tab-card">产品概览</article>
        <article class="tab-card">解决方案</article>
        <article class="tab-card">行业场景</article>
        <article class="tab-card">客户案例</article>
      </section>

      <section class="panel">
        <div class="panel-head">
          <div>
            <h2>产品矩阵</h2>
            <p>产品详情页与方案页的入口集合。</p>
          </div>
        </div>
        <div class="product-grid">
          <CorporateProductCard v-for="item in corporateProducts" :key="item.title" :item="item" />
        </div>
      </section>

      <section class="panel">
        <div class="panel-head">
          <div>
            <h2>能力亮点</h2>
            <p>突出产品特性、实施价值和业务收益。</p>
          </div>
        </div>
        <div class="highlight-grid">
          <article v-for="item in corporateHighlights" :key="item.title" class="highlight-card">
            <strong>{{ item.title }}</strong>
            <p>{{ item.desc }}</p>
          </article>
        </div>
      </section>
    </div>
  </CorporateLayout>
</template>

<script setup>
import CorporateLayout from '@/components/corporate/CorporateLayout.vue'
import CorporateProductCard from '@/components/corporate/CorporateProductCard.vue'
import { corporateHighlights, corporateProducts } from '@/data/corporateSite'
</script>

<style scoped>
.corp-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.products-page,
.product-grid,
.highlight-grid,
.tab-strip {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
  padding: 20px;
}

.hero-panel {
  background: linear-gradient(135deg, #f8fafc, #ffffff);
}

.hero-badge {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  color: #0f172a;
  background: rgba(15, 23, 42, 0.06);
  font-size: 11px;
  font-weight: 700;
}

.hero-panel h1,
.panel-head h2,
.highlight-card strong {
  color: #0f172a;
}

.hero-panel h1 {
  margin-top: 16px;
  max-width: 860px;
  font-size: clamp(34px, 4vw, 50px);
  line-height: 1.15;
}

.hero-panel p,
.panel-head p,
.highlight-card p {
  color: #64748b;
}

.hero-panel p {
  margin-top: 14px;
  max-width: 760px;
  font-size: 14px;
  line-height: 1.9;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
}

.hero-actions button {
  min-height: 42px;
  padding: 0 16px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: #0f172a;
  font-weight: 700;
}

.hero-actions .ghost {
  color: #0f172a;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: #fff;
}

.tab-strip {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.tab-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 88px;
  border-radius: 24px;
  color: #0f172a;
  background: linear-gradient(180deg, #ffffff, #f8fafc);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
  font-weight: 700;
}

.product-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.highlight-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.highlight-card {
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
}

.highlight-card p {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.8;
}

@media (max-width: 1080px) {
  .tab-strip,
  .product-grid,
  .highlight-grid {
    grid-template-columns: 1fr;
  }
}
</style>
