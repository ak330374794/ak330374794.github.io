<template>
  <CommerceLayout>
    <div class="commerce-shell checkout-page">
      <section class="panel">
        <div class="panel-head">
          <h1>确认订单</h1>
          <span>提交订单前请确认地址与商品信息</span>
        </div>

        <section class="checkout-block">
          <h2>收货地址</h2>
          <div class="address-card">
            <strong>张女士 138****1024</strong>
            <p>北京市朝阳区望京街道阜通东大街 6 号院 2 号楼 1203</p>
          </div>
        </section>

        <section class="checkout-block">
          <h2>商品清单</h2>
          <div class="item-list">
            <article v-for="item in checkoutRows" :key="item.slug" class="item-row">
              <img :src="item.image" :alt="item.title" />
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.shopName }}</p>
              </div>
              <strong>¥{{ item.price }}</strong>
              <span>x{{ item.quantity }}</span>
            </article>
          </div>
        </section>

        <section class="checkout-block">
          <h2>支付方式</h2>
          <div class="pay-list">
            <article class="pay-card active">支付宝</article>
            <article class="pay-card">微信支付</article>
            <article class="pay-card">企业账期</article>
          </div>
        </section>
      </section>

      <aside class="panel summary-panel">
        <h2>金额明细</h2>
        <div class="summary-row">
          <span>商品金额</span>
          <strong>¥{{ totalPrice }}</strong>
        </div>
        <div class="summary-row">
          <span>运费</span>
          <strong>¥0</strong>
        </div>
        <div class="summary-row">
          <span>平台优惠</span>
          <strong class="discount">-¥120</strong>
        </div>
        <div class="summary-total">
          <span>应付总额</span>
          <strong>¥{{ payablePrice }}</strong>
        </div>
        <RouterLink class="submit-button" to="/commerce/home.html">提交订单</RouterLink>
      </aside>
    </div>
  </CommerceLayout>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import CommerceLayout from '@/components/commerce/CommerceLayout.vue'
import { commerceCart, getCommerceProduct } from '@/data/commerceSite'

const checkoutRows = computed(() =>
  commerceCart
    .map((item) => {
      const product = getCommerceProduct(item.productSlug)
      return product ? { ...product, ...item } : null
    })
    .filter(Boolean)
)

const totalPrice = computed(() => checkoutRows.value.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0))
const payablePrice = computed(() => Math.max(totalPrice.value - 120, 0))
</script>

<style scoped>
.commerce-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.checkout-page {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 18px;
}

.panel,
.address-card,
.pay-card {
  padding: 20px;
  border-radius: 14px;
  background: #fff;
}

.panel-head,
.summary-row,
.summary-total,
.item-row,
.pay-list {
  display: grid;
  gap: 14px;
}

.panel-head {
  grid-template-columns: 1fr auto;
  align-items: center;
}

.panel-head h1,
.checkout-block h2,
.summary-panel h2,
.item-row h3 {
  color: #222;
}

.panel-head span,
.item-row p {
  color: #999;
  font-size: 12px;
}

.checkout-block {
  margin-top: 24px;
}

.address-card,
.item-row,
.pay-card {
  margin-top: 14px;
}

.address-card p {
  margin-top: 10px;
  color: #666;
  font-size: 14px;
  line-height: 1.8;
}

.item-list {
  display: grid;
  gap: 14px;
}

.item-row {
  grid-template-columns: 88px 1fr auto auto;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px solid #efefef;
}

.item-row img {
  width: 88px;
  height: 88px;
  border-radius: 10px;
  object-fit: cover;
}

.item-row strong {
  color: #df1f26;
  font-size: 22px;
}

.item-row span {
  color: #666;
}

.pay-list {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 14px;
}

.pay-card {
  border: 1px solid #efefef;
  text-align: center;
  font-weight: 600;
}

.pay-card.active {
  border-color: #df1f26;
  color: #df1f26;
  background: #fff8f7;
}

.summary-panel h2 {
  font-size: 24px;
}

.summary-row {
  grid-template-columns: 1fr auto;
  margin-top: 16px;
  color: #666;
}

.summary-total {
  grid-template-columns: 1fr auto;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #efefef;
}

.summary-total strong {
  color: #df1f26;
  font-size: 32px;
}

.discount {
  color: #df1f26;
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  margin-top: 20px;
  border-radius: 24px;
  color: #fff;
  background: #df1f26;
  font-weight: 700;
}

@media (max-width: 960px) {
  .checkout-page,
  .item-row,
  .pay-list {
    grid-template-columns: 1fr;
  }
}
</style>
