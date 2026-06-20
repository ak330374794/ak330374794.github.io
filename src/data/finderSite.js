const finderImage = (prompt, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

export const finderNav = [
  { label: '首页', to: '/finder/home.html' },
  { label: '搜索结果', to: '/finder/results.html' },
  { label: '工具站', to: '/finder/tools.html' },
  { label: '导航站', to: '/finder/navigation.html' },
  { label: '个人中心', to: '/finder/profile.html' },
]

export const finderHero = {
  title: '极搜一下，工具与导航一步直达',
  subtitle: '整合综合搜索、AI 问答、PDF 工具箱、代码工具和热门网址导航，打造上网第一站的入口体验。',
  hotKeywords: ['高考志愿查询', 'PDF 转 Word', '汇率换算', 'JSON 校验', 'AI 摘要'],
}

export const finderStats = [
  { label: '日均搜索量', value: '100万+' },
  { label: '工具完成率', value: '85%' },
  { label: '收录网站', value: '1万+' },
  { label: '日均 PV', value: '200万+' },
]

export const finderKnowledgeCards = [
  {
    title: '今日天气',
    value: '28°C 多云',
    detail: '北京 · 东南风 2 级 · 空气良',
  },
  {
    title: '实时汇率',
    value: 'USD/CNY 7.12',
    detail: '欧元 7.68 · 日元 0.049',
  },
  {
    title: '股票快照',
    value: '沪指 3258.41',
    detail: '+0.68% · 创业板 +1.12%',
  },
]

export const finderSearchResults = [
  {
    title: '高考志愿模拟填报平台 - 2026 最新院校分数线与专业推荐',
    url: 'edu.example.com/gaokao/volunteer',
    summary: '提供院校历年分数线、专业排名、地域偏好和录取概率分析，支持收藏与导出志愿单。',
    tag: '教育',
  },
  {
    title: 'PDF 转 Word 在线工具 - 保留排版、批量转换',
    url: 'tool.example.com/pdf-to-word',
    summary: '支持文档批量上传、OCR 识别和转换进度查看，适合办公与学习场景。',
    tag: '工具',
  },
  {
    title: 'AI 搜索助手：直接生成答案并附来源引用',
    url: 'ai.example.com/answer',
    summary: '通过对话式搜索理解上下文，输出摘要、结论和可追溯信息源，减少重复检索成本。',
    tag: 'AI',
  },
  {
    title: '今日热搜榜 - 新闻、视频、社交平台热点整合',
    url: 'nav.example.com/trending',
    summary: '汇总主流平台热点、实时热度和事件进展，支持一键跳转原始来源。',
    tag: '导航',
  },
]

export const finderTools = [
  {
    slug: 'pdf-toolkit',
    title: 'PDF 工具箱',
    description: '支持合并、拆分、压缩、加水印、OCR 识别和转 Word。',
    category: '办公文档',
    users: '12.4万次/日',
    accent: '#2563eb',
  },
  {
    slug: 'doc-convert',
    title: '文档转换',
    description: 'Word、Excel、CSV、图片格式互转，保持原始版式。',
    category: '办公文档',
    users: '9.6万次/日',
    accent: '#0ea5e9',
  },
  {
    slug: 'calc-suite',
    title: '在线计算',
    description: '科学计算器、房贷、个税、五险一金与单位换算。',
    category: '便民查询',
    users: '5.8万次/日',
    accent: '#7c3aed',
  },
  {
    slug: 'image-studio',
    title: '图片工具',
    description: '在线裁剪、滤镜、调色、压缩、水印和智能抠图。',
    category: '设计处理',
    users: '7.2万次/日',
    accent: '#f97316',
  },
  {
    slug: 'code-lab',
    title: '代码工具',
    description: '在线运行 JS / Python / SQL，支持 JSON 校验和正则测试。',
    category: '开发效率',
    users: '4.1万次/日',
    accent: '#10b981',
  },
  {
    slug: 'query-center',
    title: '查询中心',
    description: 'IP、天气、快递、汇率、手机号归属地等常用查询。',
    category: '生活服务',
    users: '8.7万次/日',
    accent: '#ef4444',
  },
]

export const finderToolPanels = [
  {
    title: 'AI 摘要生成',
    description: '输入长网页链接，一键生成结构化摘要和重点结论。',
    meta: '引用可追溯 · 适合阅读长文',
  },
  {
    title: '站长工具箱',
    description: '网站测速、SEO 查询、域名信息与 IP 检测聚合。',
    meta: '开发者高频使用',
  },
  {
    title: '网盘预览',
    description: '在线上传、下载、分享、预览和回收站管理。',
    meta: '办公文件协作入口',
  },
]

export const finderNavCategories = [
  {
    title: '常用门户',
    sites: ['人民网', '新浪', '知乎', 'B 站', '豆瓣', '腾讯视频'],
  },
  {
    title: '购物消费',
    sites: ['淘宝', '京东', '拼多多', '小红书', '盒马', '唯品会'],
  },
  {
    title: '学习办公',
    sites: ['飞书', 'Notion', '腾讯文档', '学术搜索', '慕课', 'WPS'],
  },
  {
    title: '开发设计',
    sites: ['GitHub', 'Figma', '掘金', 'V2EX', 'MDN', 'CodePen'],
  },
]

export const finderTrendingSites = [
  { title: 'AI 工具导航榜', visits: '46万 PV', rise: '+18%' },
  { title: '高校资料导航', visits: '29万 PV', rise: '+12%' },
  { title: '开发者效率站', visits: '18万 PV', rise: '+9%' },
  { title: '设计素材聚合站', visits: '15万 PV', rise: '+7%' },
]

export const finderProfile = {
  name: '搜索效率控',
  handle: '@fastfinder',
  bio: '高频使用搜索、工具和导航能力，收藏办公工具、学习入口和开发者常用网站。',
  avatar: finderImage('young professional using laptop and search tools, clean portrait, realistic studio photography', 'square_hd'),
}

export const finderFavorites = ['PDF 转 Word', 'JSON 校验', '汇率换算', '学术搜索', '开发者效率导航']

export const finderHistory = ['如何做 AI 搜索结果摘要', '快递查询顺丰单号', '论文查重工具推荐', '北京天气本周']
