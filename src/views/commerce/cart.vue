<template>
  <CommerceLayout>
    <div class="commerce-shell cart-page">
      <section class="panel">
        <div class="panel-head">
          <h1>购物车</h1>
          <span>{{ cartRows.length }} 件商品</span>
        </div>

        <div class="cart-list">
          <article v-for="item in cartRows" :key="item.slug" class="cart-row">
            <img :src="item.image" :alt="item.title" class="cart-image" />
            <div class="cart-copy">
              <h2>{{ item.title }}</h2>
              <p>{{ item.shopName }}</p>
            </div>
            <div class="cart-price">¥{{ item.price }}</div>
            <div class="cart-qty">x{{ item.quantity }}</div>
          </article>
        </div>
      </section>

      <aside class="panel settle-panel">
        <h2>结算信息</h2>
        <div class="settle-row">
          <span>商品总额</span>
          <strong>¥{{ totalPrice }}</strong>
        </div>
        <div class="settle-row">
          <span>已优惠</span>
          <strong class="discount">-¥120</strong>
        </div>
        <RouterLink class="settle-button" to="/commerce/checkout.html">去结算</RouterLink>
      </aside>
    </div>
  </CommerceLayout>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import CommerceLayout from '@/components/commerce/CommerceLayout.vue'
import { commerceCart, getCommerceProduct } from '@/data/commerceSite'

const cartRows = computed(() =>
  commerceCart
    .map((item) => {
      const product = getCommerceProduct(item.productSlug)
      return product ? { ...product, ...item } : null
    })
    .filter(Boolean)
)

const totalPrice = computed(() => cartRows.value.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0))
</script>

<style scoped>
.commerce-shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.cart-page {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 18px;
}

.panel {
  padding: 20px;
  border-radius: 14px;
  background: #fff;
}

.panel-head,
.settle-row,
.cart-row {
  display: grid;
  gap: 14px;
}

.panel-head {
  grid-template-columns: 1fr auto;
  align-items: center;
}

.panel-head h1,
.settle-panel h2,
.cart-copy h2 {
  color: #222;
}

.panel-head span,
.cart-copy p {
  color: #999;
  font-size: 12px;
}

.cart-list {
  display: grid;
  gap: 16px;
  margin-top: 18px;
}

.cart-row {
  grid-template-columns: 96px 1fr 100px 60px;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #efefef;
}

.cart-image {
  width: 96px;
  height: 96px;
  border-radius: 10px;
  object-fit: cover;
}

.cart-price {
  color: #df1f26;
  font-size: 24px;
  font-weight: 700;
}

.cart-qty {
  color: #555;
  text-align: center;
}

.settle-panel h2 {
  font-size: 24px;
}

.settle-row {
  grid-template-columns: 1fr auto;
  margin-top: 16px;
  color: #666;
}

.settle-row strong {
  color: #222;
}

.discount {
  color: #df1f26 !important;
}

.settle-button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  margin-top: 20px;
  border-radius: 24px;
  color: #fff;
  background: #df1f26;
  font-weight: 700;
}

@media (max-width: 960px) {
  .cart-page,
  .cart-row {
    grid-template-columns: 1fr;
  }

  .cart-qty {
    text-align: left;
  }
}
</style>
