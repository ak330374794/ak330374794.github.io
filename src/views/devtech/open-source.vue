<template>
  <DevtechLayout>
    <div class="shell page">
      <section class="panel hero">
        <div class="hero-copy">
          <span class="badge">开源协作</span>
          <h1>围绕仓库、Issue、PR 和 CI，构建完整的开发协作工作流。</h1>
          <p>支持代码托管、项目管理、文档 Wiki 和社区互动能力，承接开源项目全生命周期。</p>
        </div>
        <article class="repo-card">
          <span>featured repo</span>
          <strong>solo-agent/githubio</strong>
          <p>1.2k stars · 98 issues · 14 pull requests · CI passing</p>
        </article>
      </section>

      <section class="tab-strip">
        <article class="tab-card">Repositories</article>
        <article class="tab-card">Issues</article>
        <article class="tab-card">Pull Requests</article>
        <article class="tab-card">Actions</article>
      </section>

      <section class="grid">
        <article v-for="item in devtechOpenSourcePanels" :key="item.title" class="panel card">
          <strong>{{ item.title }}</strong>
          <p>{{ item.desc }}</p>
        </article>
      </section>
    </div>
  </DevtechLayout>
</template>

<script setup>
import DevtechLayout from '@/components/devtech/DevtechLayout.vue'
import { devtechOpenSourcePanels } from '@/data/devtechSite'
</script>

<style scoped>
.shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.page,
.grid,
.tab-strip {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);
}

.hero,
.card {
  padding: 24px;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) 340px;
  gap: 18px;
}

.badge {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.12);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
}

h1,
.card strong,
.repo-card strong {
  color: #fff;
}

h1 {
  margin-top: 18px;
  font-size: clamp(36px, 4.2vw, 54px);
  line-height: 1.08;
}

p,
.card p,
.repo-card p {
  color: rgba(255, 255, 255, 0.68);
}

.hero p,
.card p,
.repo-card p {
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.85;
}

.repo-card {
  padding: 18px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.94), rgba(8, 47, 73, 0.88));
}

.repo-card span {
  display: inline-flex;
  color: #67e8f9;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.repo-card strong {
  display: block;
  margin-top: 12px;
  font-family: Consolas, 'Courier New', monospace;
  font-size: 24px;
}

.tab-strip {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.tab-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 96px;
  border-radius: 24px;
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
  font-weight: 700;
}

.grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

@media (max-width: 1080px) {
  .hero,
  .tab-strip,
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
