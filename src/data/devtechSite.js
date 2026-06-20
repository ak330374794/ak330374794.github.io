const devtechImage = (prompt, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

export const devtechNav = [
  { label: '首页', to: '/devtech/home.html' },
  { label: '开源社区', to: '/devtech/open-source.html' },
  { label: 'API 服务', to: '/devtech/api.html' },
  { label: '开发工具', to: '/devtech/tools.html' },
  { label: '开发者中心', to: '/devtech/profile.html' },
]

export const devtechHero = {
  title: '围绕代码、API 与工具，构建开发者生态',
  subtitle: '覆盖开源社区、API marketplace、技术内容与在线开发工具场景，服务开发者协作、学习和企业技术采购。',
  tags: ['代码托管', 'PR 审查', 'API 市场', '在线 IDE', '技术博客', '开发者主页'],
  image: devtechImage(
    'developer platform hero, code hosting api marketplace and online ide dashboard, modern dark tech style, realistic',
    'landscape_16_9'
  ),
}

export const devtechStats = [
  { label: '注册开发者', value: '100万+' },
  { label: '开源项目', value: '10万+' },
  { label: 'API 数量', value: '5000+' },
  { label: '日均调用量', value: '1亿+' },
]

export const devtechOpenSourcePanels = [
  { title: '代码托管', desc: 'Git 仓库、Git LFS、大文件存储和跨仓库代码搜索。' },
  { title: '项目管理', desc: 'Issue、Milestone、Project 看板、标签与 Release 管理。' },
  { title: '代码审查', desc: 'Pull Request、行级评论、CI 检查和自动化流水线。' },
]

export const devtechApiPanels = [
  { title: 'API 市场', desc: '按支付、地图、AI、短信等分类浏览 API，支持评分与调用量排序。' },
  { title: '开发者控制台', desc: 'API Key、配额监控、流量分析、错误日志和告警设置。' },
  { title: '交互式文档', desc: 'OpenAPI 文档、Try it out、SDK 下载和版本迁移指南。' },
]

export const devtechToolCards = [
  {
    title: '在线 IDE',
    meta: '多语言编辑器 · 终端 · 调试器',
    image: devtechImage('web ide card, code editor terminal and debugger, realistic dark ui', 'portrait_4_3'),
  },
  {
    title: '代码运行器',
    meta: '50+ 语言 · 短链接分享 · 嵌入博客',
    image: devtechImage('online code runner card, multiple language execution dashboard, realistic', 'portrait_4_3'),
  },
  {
    title: 'JSON 工具',
    meta: '格式化 · 校验 · 路径提取 · 对比',
    image: devtechImage('json yaml tool card, developer utility dashboard, realistic', 'portrait_4_3'),
  },
  {
    title: '性能测试',
    meta: 'API 压测 · SSL 检测 · DNS 查询',
    image: devtechImage('performance testing tool card, api monitoring charts, realistic', 'portrait_4_3'),
  },
]

export const devtechProfile = {
  name: '全栈开发者',
  handle: '@buildwithcode',
  bio: '同时使用开源协作、API 控制台、技术博客和在线 IDE，希望把知识获取、开发协同与工具效率集中在一个平台。',
  avatar: devtechImage('full stack developer portrait, modern dark tech environment, realistic', 'square_hd'),
}

export const devtechBenefits = ['开发者主页', '组织管理', 'API 告警通知', '贡献积分与等级', '构建失败提醒']
export const devtechHistory = [
  'PR 评论：feature/auth-review',
  'API 调用：地图服务沙箱测试',
  '工具使用：JSON 格式化',
  '阅读文章：Node.js 性能优化实战',
]
export const devtechNotices = ['你关注的仓库有新的 Release 发布。', 'API Key 流量已达到 80%，建议关注配额。', 'CI 构建失败，请查看最新流水线日志。']
