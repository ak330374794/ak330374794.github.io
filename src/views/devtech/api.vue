<template>
  <DevtechLayout>
    <div class="shell page">
      <section class="panel hero">
        <div class="hero-copy">
          <span class="badge">API Platform</span>
          <h1>API 市场、交互式文档、配额监控与密钥管理，集中在一个开发者控制台。</h1>
          <p>页面结构向 Stripe、腾讯云、阿里云 API 控制台靠拢，先展示接入入口，再承接调试、文档和订阅能力。</p>
          <div class="search-strip">
            <span>搜索 API / SDK / Webhook / Rate Limit</span>
            <button type="button">进入控制台</button>
          </div>
        </div>
        <article class="console-card">
          <div class="console-head">
            <span>live request</span>
            <strong>POST /v1/payment_intents</strong>
          </div>
          <pre class="code-block">
{
  "status": "200 OK",
  "latency": "142ms",
  "request_id": "req_4T8Q9L",
  "quota": "1,284 / 10,000"
}</pre
          >
          <div class="console-metrics">
            <span>成功率 99.98%</span>
            <span>QPS 182</span>
            <span>错误率 0.12%</span>
          </div>
        </article>
      </section>

      <section class="product-strip">
        <article class="product-card">支付 API</article>
        <article class="product-card">地图 API</article>
        <article class="product-card">短信 API</article>
        <article class="product-card">AI 推理 API</article>
      </section>

      <section class="content-grid">
        <section class="panel section-panel">
          <div class="panel-head">
            <div>
              <h2>平台能力</h2>
              <p>从市场、文档到控制台，形成完整 API 产品工作流。</p>
            </div>
          </div>
          <div class="capability-grid">
            <article v-for="item in devtechApiPanels" :key="item.title" class="capability-card">
              <strong>{{ item.title }}</strong>
              <p>{{ item.desc }}</p>
              <span>查看详情</span>
            </article>
          </div>
        </section>

        <aside class="side-stack">
          <section class="panel section-panel">
            <div class="panel-head compact">
              <div>
                <h2>接入流程</h2>
                <p>更像 API 平台右侧的上手路径导航。</p>
              </div>
            </div>
            <div class="flow-list">
              <article class="flow-item">
                <strong>1. 创建应用</strong>
                <span>生成 API Key 与回调域名</span>
              </article>
              <article class="flow-item">
                <strong>2. 在线调试</strong>
                <span>Try it out、示例代码和 SDK 下载</span>
              </article>
              <article class="flow-item">
                <strong>3. 监控计费</strong>
                <span>查看配额、账单和错误日志</span>
              </article>
            </div>
          </section>

          <section class="panel section-panel">
            <div class="panel-head compact">
              <div>
                <h2>版本公告</h2>
                <p>承接版本升级和废弃通知。</p>
              </div>
            </div>
            <div class="release-list">
              <article class="release-item">
                <strong>v2 Webhook 签名验证</strong>
                <span>新增重放保护和时间戳校验</span>
              </article>
              <article class="release-item">
                <strong>OpenAPI 3.1</strong>
                <span>支持导出最新 Schema 与 SDK</span>
              </article>
            </div>
          </section>
        </aside>
      </section>
    </div>
  </DevtechLayout>
</template>

<script setup>
import DevtechLayout from '@/components/devtech/DevtechLayout.vue'
import { devtechApiPanels } from '@/data/devtechSite'
</script>

<style scoped>
.shell {
  width: min(1280px, calc(100vw - 32px));
  margin: 0 auto;
}

.page,
.content-grid,
.capability-grid,
.side-stack,
.product-strip,
.console-metrics,
.flow-list,
.release-list {
  display: grid;
  gap: 18px;
}

.panel {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.82fr);
  gap: 18px;
  padding: 24px;
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
.capability-card strong,
.console-head strong,
.flow-item strong,
.release-item strong {
  color: #fff;
}

h1 {
  margin-top: 18px;
  font-size: clamp(36px, 4.2vw, 54px);
  line-height: 1.08;
}

p,
.panel-head p,
.capability-card p,
.flow-item span,
.release-item span,
.code-block,
.console-head span {
  color: rgba(255, 255, 255, 0.68);
}

.hero-copy p,
.panel-head p,
.capability-card p {
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
  color: rgba(255, 255, 255, 0.45);
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

.console-card,
.section-panel {
  padding: 22px;
}

.console-head strong {
  display: block;
  margin-top: 10px;
  font-size: 26px;
}

.code-block {
  margin-top: 16px;
  padding: 18px;
  border-radius: 20px;
  background: rgba(8, 11, 22, 0.92);
  font-family: 'Consolas', 'SFMono-Regular', monospace;
  font-size: 13px;
  line-height: 1.7;
  white-space: pre-wrap;
}

.console-metrics {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 16px;
}

.console-metrics span,
.capability-card span {
  display: inline-flex;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 14px;
  color: #7dd3fc;
  background: rgba(56, 189, 248, 0.12);
  font-size: 12px;
  font-weight: 700;
}

.product-strip {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.product-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 88px;
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

.capability-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.capability-card,
.flow-item,
.release-item {
  padding: 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
}

.capability-card span {
  margin-top: 12px;
}

.flow-item,
.release-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

@media (max-width: 1080px) {
  .hero,
  .content-grid,
  .capability-grid,
  .product-strip,
  .console-metrics {
    grid-template-columns: 1fr;
  }

  .search-strip {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 768px) {
  .hero,
  .console-card,
  .section-panel {
    padding: 18px;
  }

  .hero-copy h1 {
    font-size: clamp(28px, 8vw, 38px);
  }

  .console-head strong {
    font-size: 22px;
  }

  .code-block {
    padding: 14px;
    font-size: 12px;
  }

  .capability-card,
  .flow-item,
  .release-item {
    padding: 16px;
  }
}

@media (max-width: 640px) {
  .hero,
  .console-card,
  .section-panel {
    padding: 16px;
  }

  .search-strip {
    padding: 10px 10px 10px 14px;
  }

  .product-card {
    min-height: 68px;
  }
}
</style>
