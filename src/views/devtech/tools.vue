<template>
  <DevtechLayout>
    <div class="shell page">
      <section class="panel hero">
        <div class="hero-copy">
          <span class="badge">Developer Toolkit</span>
          <h1>在线 IDE、代码运行、JSON 校验和性能测试，组织成更像开发者工具平台的入口页。</h1>
          <p>页面从单纯卡片列表升级为开发工具市场结构，突出搜索、热门套件、在线工作台和实用工具分发。</p>
          <div class="search-strip">
            <span>搜索 IDE / JSON / Regex / cURL / DNS / Benchmark</span>
            <button type="button">打开工作台</button>
          </div>
        </div>
        <article class="workspace-card">
          <span>workspace</span>
          <strong>Web IDE 已就绪</strong>
          <p>支持多语言编辑、终端调试、片段保存与团队分享，模拟工具站首页右侧的主工作台入口。</p>
          <div class="workspace-metrics">
            <span>56 个模板</span>
            <span>18 个运行环境</span>
            <span>实时保存</span>
          </div>
        </article>
      </section>

      <section class="suite-strip">
        <article class="suite-card">在线 IDE</article>
        <article class="suite-card">代码调试</article>
        <article class="suite-card">数据处理</article>
        <article class="suite-card">网络测试</article>
      </section>

      <section class="content-grid">
        <section class="panel section-panel">
          <div class="panel-head">
            <div>
              <h2>工具市场</h2>
              <p>围绕开发工作流组织工具，比统一网格更接近真实开发者平台。</p>
            </div>
          </div>
          <div class="grid">
            <DevtechCard v-for="item in devtechToolCards" :key="item.title" :item="item" />
          </div>
        </section>

        <aside class="side-stack">
          <section class="panel section-panel">
            <div class="panel-head compact">
              <div>
                <h2>常用场景</h2>
                <p>承接开发者来到工具站的高频需求。</p>
              </div>
            </div>
            <div class="scene-list">
              <article class="scene-item">
                <strong>接口联调</strong>
                <span>cURL、Webhook、JSON 格式化、状态码排查</span>
              </article>
              <article class="scene-item">
                <strong>上线排障</strong>
                <span>DNS 查询、SSL 检测、性能压测与日志分析</span>
              </article>
              <article class="scene-item">
                <strong>代码分享</strong>
                <span>片段运行、短链接、嵌入博客和导出 Gist</span>
              </article>
            </div>
          </section>

          <section class="panel section-panel">
            <div class="panel-head compact">
              <div>
                <h2>最近更新</h2>
                <p>突出版本迭代和新增能力。</p>
              </div>
            </div>
            <div class="scene-list">
              <article class="scene-item">
                <strong>新增 SQL Runner</strong>
                <span>支持本地模拟库与结果导出 CSV</span>
              </article>
              <article class="scene-item">
                <strong>Benchmark 2.0</strong>
                <span>支持多节点压测和可视化报告</span>
              </article>
            </div>
          </section>
        </aside>
      </section>
    </div>
  </DevtechLayout>
</template>

<script setup>
import DevtechCard from '@/components/devtech/DevtechCard.vue'
import DevtechLayout from '@/components/devtech/DevtechLayout.vue'
import { devtechToolCards } from '@/data/devtechSite'
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
.suite-strip,
.workspace-metrics,
.scene-list {
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
.section-panel {
  padding: 22px;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.82fr);
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
h2,
.workspace-card strong,
.scene-item strong {
  color: #fff;
}

h1 {
  margin-top: 18px;
  color: #fff;
  font-size: clamp(36px, 4.2vw, 54px);
  line-height: 1.08;
}

p,
.panel-head p,
.workspace-card p,
.scene-item span,
.search-strip span {
  color: rgba(255, 255, 255, 0.68);
}

.hero-copy p,
.workspace-card p,
.panel-head p {
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.85;
}

.search-strip {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 24px;
  padding: 12px 12px 12px 16px;
  border-radius: 999px;
  background: rgba(10, 15, 30, 0.72);
  box-shadow: inset 0 0 0 1px rgba(56, 189, 248, 0.18);
}

.search-strip span {
  font-size: 14px;
}

button {
  min-height: 42px;
  padding: 0 18px;
  border: 0;
  border-radius: 999px;
  color: #0f172a;
  background: linear-gradient(90deg, #38bdf8, #67e8f9);
  font-weight: 700;
}

.workspace-card strong {
  display: block;
  margin-top: 10px;
  font-size: 30px;
}

.workspace-metrics {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 18px;
}

.workspace-metrics span {
  display: inline-flex;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 14px;
  color: #7dd3fc;
  background: rgba(56, 189, 248, 0.12);
  font-size: 12px;
  font-weight: 700;
}

.suite-strip {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.suite-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 84px;
  border-radius: 24px;
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.18);
  font-weight: 700;
}

.content-grid {
  grid-template-columns: minmax(0, 1.45fr) minmax(320px, 0.82fr);
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

.grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.scene-list {
  gap: 12px;
}

.scene-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
}

@media (max-width: 1080px) {
  .hero,
  .suite-strip,
  .content-grid,
  .grid,
  .workspace-metrics {
    grid-template-columns: 1fr;
  }

  .search-strip {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 768px) {
  .hero,
  .section-panel {
    padding: 18px;
  }

  .hero-copy h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .workspace-card strong {
    font-size: 24px;
  }

  .suite-card,
  .scene-item {
    min-height: auto;
    padding: 14px 16px;
  }

  .grid {
    gap: 14px;
  }
}

@media (max-width: 640px) {
  .hero,
  .section-panel {
    padding: 16px;
  }

  .search-strip {
    padding: 10px 10px 10px 14px;
  }

  .workspace-metrics span {
    width: 100%;
  }
}
</style>
