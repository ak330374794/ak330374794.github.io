const corporateImage = (prompt, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

export const corporateNav = [
  { label: '首页', to: '/corporate/home.html' },
  { label: '产品服务', to: '/corporate/products.html' },
  { label: '客户案例', to: '/corporate/cases.html' },
  { label: '营销落地页', to: '/corporate/landing.html' },
  { label: '联系我们', to: '/corporate/contact.html' },
]

export const corporateHero = {
  title: '把品牌官网升级为数字营销中枢',
  subtitle: '围绕品牌官网、解决方案、客户案例与营销落地页，构建兼顾品牌展示、内容传播与线索转化的企业数字门户。',
  tags: ['品牌官网', '客户案例', '营销落地页', 'SEO 专题', '表单留资', 'CRM 线索'],
  image: corporateImage(
    'premium corporate website hero, modern enterprise brand portal with large typography, business dashboard and elegant office scene, realistic',
    'landscape_16_9'
  ),
}

export const corporateStats = [
  { label: '官网月均 UV', value: '10万+' },
  { label: '落地页转化率', value: '3%+' },
  { label: 'SEO 关键词', value: '20+' },
  { label: '体验评分', value: '4.5/5' },
]

export const corporateProducts = [
  {
    title: '智能营销云',
    meta: '线索管理 · 自动化营销 · CRM 对接',
    image: corporateImage('enterprise saas product card, business crm dashboard, elegant blue modern ui, realistic', 'portrait_4_3'),
  },
  {
    title: '数据分析平台',
    meta: '漏斗监控 · 热力图 · A/B 测试',
    image: corporateImage('analytics platform product card, marketing data dashboard and charts, premium enterprise visual', 'portrait_4_3'),
  },
  {
    title: '内容管理 CMS',
    meta: '多语言 · 模板库 · SEO 工具',
    image: corporateImage('cms platform product card, website builder and content editing, modern enterprise style', 'portrait_4_3'),
  },
  {
    title: '客户服务门户',
    meta: '知识中心 · 工单 · 在线咨询',
    image: corporateImage('customer service portal product card, enterprise support dashboard, realistic', 'portrait_4_3'),
  },
]

export const corporateHighlights = [
  {
    title: '品牌官网',
    desc: '品牌视频、价值主张、产品入口、新闻动态与客户 Logo 墙统一承接品牌信任背书。',
  },
  {
    title: '客户案例库',
    desc: '按行业展示项目背景、挑战、方案与成果，并补充客户证言与数据结果。',
  },
  {
    title: '营销落地页',
    desc: '活动报名、试用申请、白皮书下载、Demo 预约和价格方案页共同承接投放流量。',
  },
]

export const corporateCaseCards = [
  { title: '零售集团数字化升级', metric: '线索转化率 +36%', desc: '整合品牌官网、行业案例页与预约 Demo 表单，提升高意向线索获取效率。' },
  { title: '制造业官网重构', metric: 'SEO 自然流量 +52%', desc: '基于专题页和多语言策略重构信息架构，提升海外市场搜索可见度。' },
  { title: 'B2B SaaS 营销页矩阵', metric: '获客成本下降 24%', desc: '搭建落地页模板库与自动化线索评分体系，支撑多渠道精准投放。' },
]

export const landingModules = [
  { title: '活动报名页', desc: '活动详情、倒计时、表单收集与分享裂变。' },
  { title: '产品试用申请', desc: '姓名、公司、职位、手机号与需求描述表单收集。' },
  { title: '白皮书下载', desc: '留资后下载 PDF，支持相关推荐与资料包推荐。' },
  { title: '价格方案页', desc: '套餐对比、FAQ、在线咨询与立即签约入口。' },
]

export const investorPanels = [
  { title: '投资者关系', desc: '财报、公告、公示、公司治理与 ESG 报告统一展示。' },
  { title: '新闻动态', desc: '公司新闻、媒体报道、行业洞察和活动预告按栏目聚合。' },
  { title: '联系我们', desc: '多地区联系方式、地图导航、在线留言与社交链接。' },
]

export const corporateProfile = {
  name: '企业官网访客',
  handle: '@brandportal',
  bio: '关注品牌故事、产品能力、成功案例与预约 Demo 入口，希望快速获得可信信息与联系方式。',
  avatar: corporateImage('business professional browsing enterprise website, clean portrait, premium corporate mood, realistic', 'square_hd'),
}

export const corporateBenefits = ['资料下载提醒', '活动报名优先通知', 'Demo 预约状态追踪', '多语言内容订阅', '行业案例更新']

export const corporateHistory = ['浏览页面：智能营销云', '下载白皮书：增长解决方案', '预约 Demo：数据分析平台', '查看案例：零售集团数字化升级']

export const corporateNotices = [
  '你预约的产品演示已确认，明日 15:00 将通过邮件提醒。',
  '《2026 企业增长白皮书》下载链接已发送至邮箱。',
  '新发布专题页《品牌官网 SEO 优化指南》可继续查看。',
]
