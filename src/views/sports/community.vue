<template>
  <SportsLayout>
    <div class="shell page">
      <section class="panel hero">
        <div class="hero-copy">
          <span class="badge">运动社区</span>
          <h1>跑团、挑战赛、达人动态和装备讨论整合成更像真实运动社区的内容流。</h1>
          <p>页面参考运动 App 的社区频道，先展示热门挑战和同城组织，再承接动态流和话题内容。</p>
          <div class="hero-toolbar">
            <span>跑步</span>
            <span>骑行</span>
            <span>健身</span>
            <span>球类</span>
            <button type="button">发布动态</button>
          </div>
        </div>
        <article class="challenge-card">
          <span>本周挑战</span>
          <strong>7 天 30 公里打卡</strong>
          <p>已加入 18,240 人，支持步数同步、奖牌徽章和排行榜展示。</p>
          <div class="challenge-meta">
            <span>同城榜</span>
            <span>好友榜</span>
            <span>奖牌解锁</span>
          </div>
        </article>
      </section>

      <section class="community-strip">
        <article class="community-card">同城跑团</article>
        <article class="community-card">挑战赛</article>
        <article class="community-card">装备测评</article>
        <article class="community-card">训练笔记</article>
      </section>

      <section class="content-grid">
        <section class="panel feed-panel">
          <div class="panel-head">
            <div>
              <h2>社区动态流</h2>
              <p>围绕分享、互动和话题展开，更像内容社区的主内容区。</p>
            </div>
          </div>
          <div class="feed-list">
            <article class="feed-item">
              <strong>@晨跑阿哲</strong>
              <p>今天完成 12km LSD，后半程配速稳定在 5'12''，准备下月半马。</p>
              <span># 城市跑步 # 半马备战</span>
            </article>
            <article class="feed-item">
              <strong>@力量教练Vera</strong>
              <p>更新了一组臀腿训练动作对比，深蹲下蹲时注意膝盖朝向与核心稳定。</p>
              <span># 力量训练 # 动作纠正</span>
            </article>
          </div>
        </section>

        <section class="grid">
          <article v-for="item in sportsCommunityPanels" :key="item.title" class="panel card">
            <strong>{{ item.title }}</strong>
            <p>{{ item.desc }}</p>
          </article>
        </section>

        <aside class="side-stack">
          <section class="panel side-card">
            <div class="panel-head compact">
              <div>
                <h2>热门圈子</h2>
                <p>承接运动社区常见的圈子与俱乐部入口。</p>
              </div>
            </div>
            <div class="club-list">
              <article class="club-item">
                <strong>杭州滨江夜跑团</strong>
                <span>1,286 人 · 今晚 20:00 集合</span>
              </article>
              <article class="club-item">
                <strong>周末羽毛球局</strong>
                <span>428 人 · 体育馆约战中</span>
              </article>
            </div>
          </section>

          <section class="panel side-card">
            <div class="panel-head compact">
              <div>
                <h2>装备热议</h2>
                <p>鞋服、手表和器械讨论沉淀在右侧。</p>
              </div>
            </div>
            <div class="club-list">
              <article class="club-item">
                <strong>碳板跑鞋横评</strong>
                <span>3.2 万阅读 · 126 条讨论</span>
              </article>
              <article class="club-item">
                <strong>心率带实测</strong>
                <span>8,420 阅读 · 数据同步经验</span>
              </article>
            </div>
          </section>
        </aside>
      </section>
    </div>
  </SportsLayout>
</template>

<script setup>
import SportsLayout from '@/components/sports/SportsLayout.vue'
import { sportsCommunityPanels } from '@/data/sportsSite'
</script>

<style scoped>
.shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.page,
.content-grid,
.grid,
.side-stack,
.feed-list,
.club-list,
.community-strip,
.challenge-meta {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.82fr);
  gap: 18px;
  padding: 24px;
  background: linear-gradient(135deg, #f0fdf4, #fff);
}

.badge {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  color: #15803d;
  background: rgba(21, 128, 61, 0.08);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

h1,
h2,
.card strong,
.challenge-card strong,
.feed-item strong,
.club-item strong {
  color: #0f172a;
}

h1 {
  margin-top: 18px;
  font-size: clamp(36px, 4.2vw, 54px);
  line-height: 1.08;
}

p,
.card p,
.challenge-card p,
.feed-item span,
.club-item span,
.panel-head p {
  color: #64748b;
}

.hero-copy p,
.card p,
.challenge-card p,
.panel-head p,
.feed-item p {
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.85;
}

.hero-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
}

.hero-toolbar span,
.challenge-meta span {
  padding: 8px 12px;
  border-radius: 999px;
  color: #166534;
  background: #dcfce7;
  font-size: 12px;
  font-weight: 700;
}

button {
  min-height: 42px;
  padding: 0 18px;
  border: 0;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(90deg, #16a34a, #22c55e);
  font-weight: 700;
}

.challenge-card,
.feed-panel,
.side-card {
  padding: 22px;
}

.challenge-card strong {
  display: block;
  margin-top: 12px;
  font-size: 30px;
  line-height: 1.12;
}

.challenge-meta {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 18px;
}

.community-strip {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.community-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 84px;
  border-radius: 24px;
  color: #0f172a;
  background: linear-gradient(180deg, #ffffff, #f0fdf4);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
  font-weight: 700;
}

.content-grid {
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr) minmax(320px, 0.78fr);
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}

.panel-head h2 {
  font-size: 24px;
}

.feed-item,
.club-item,
.card {
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
}

.feed-item span {
  display: inline-flex;
  margin-top: 12px;
  color: #16a34a;
  font-size: 12px;
  font-weight: 700;
}

.grid {
  grid-template-columns: 1fr;
}

@media (max-width: 1200px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 1080px) {
  .hero,
  .community-strip,
  .challenge-meta {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero,
  .challenge-card,
  .feed-panel,
  .side-card {
    padding: 18px;
  }

  h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .hero-toolbar {
    flex-direction: column;
    align-items: stretch;
  }

  button {
    width: 100%;
  }

  .challenge-card strong {
    font-size: 24px;
  }

  .feed-item,
  .club-item,
  .card {
    padding: 16px;
  }

  .panel-head {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
}

@media (max-width: 640px) {
  .hero,
  .challenge-card,
  .feed-panel,
  .side-card {
    padding: 16px;
  }
}
</style>
