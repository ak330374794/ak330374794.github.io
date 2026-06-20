<template>
  <SportsLayout
    ><div class="shell page"
      ><section class="panel profile"
        ><img :src="sportsProfile.avatar" :alt="sportsProfile.name" class="avatar" /><div
          ><span class="handle">{{ sportsProfile.handle }}</span
          ><h1>{{ sportsProfile.name }}</h1
          ><p>{{ sportsProfile.bio }}</p
          ><div class="tags"
            ><em v-for="item in sportsBenefits" :key="item">{{ item }}</em></div
          ></div
        ></section
      ><section class="grid"
        ><section class="panel block"
          ><h2>运动记录</h2
          ><div class="list"
            ><article v-for="item in sportsHistory" :key="item" class="info-card"
              ><strong>{{ item }}</strong
              ><span>最近记录</span></article
            ></div
          ></section
        ><section class="panel block"
          ><h2>消息中心</h2
          ><div class="list"
            ><article v-for="item in sportsNotices" :key="item" class="info-card"
              ><strong>{{ item }}</strong
              ><span>系统消息</span></article
            ></div
          ></section
        ></section
      ></div
    ></SportsLayout
  >
</template>
<script setup>
import SportsLayout from '@/components/sports/SportsLayout.vue'
import { sportsBenefits, sportsHistory, sportsNotices, sportsProfile } from '@/data/sportsSite'
</script>
<style scoped>
.shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}
.page,
.grid,
.list {
  display: grid;
  gap: 18px;
}
.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}
.profile {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 24px;
  align-items: center;
  padding: 24px;
}
.avatar {
  width: 150px;
  height: 150px;
  border-radius: 32px;
  object-fit: cover;
}
.handle,
p,
.info-card span {
  color: #64748b;
}
h1,
h2,
.info-card strong {
  color: #0f172a;
}
h1 {
  margin-top: 8px;
  font-size: clamp(34px, 4vw, 46px);
}
p {
  margin-top: 12px;
  max-width: 720px;
  font-size: 14px;
  line-height: 1.9;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}
.tags em {
  padding: 8px 12px;
  border-radius: 999px;
  color: #15803d;
  background: rgba(21, 128, 61, 0.08);
  font-size: 12px;
  font-style: normal;
}
.grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.block {
  padding: 20px;
}
.list {
  margin-top: 18px;
}
.info-card {
  padding: 16px;
  border-radius: 18px;
  background: #f8fafc;
}
.info-card span {
  display: block;
  margin-top: 8px;
  font-size: 12px;
}
@media (max-width: 1080px) {
  .profile,
  .grid {
    grid-template-columns: 1fr;
  }
  .avatar {
    width: 120px;
    height: 120px;
  }
}
</style>
