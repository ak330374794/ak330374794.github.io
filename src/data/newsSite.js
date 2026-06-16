export const newsChannels = [
  { slug: 'headline', name: '头条', description: '全站焦点与核心头条' },
  { slug: 'finance', name: '财经', description: '市场、产业、消费与资本趋势' },
  { slug: 'tech', name: '科技', description: 'AI、终端、互联网与前沿创新' },
  { slug: 'ent', name: '娱乐', description: '影视、综艺、人物与社交热议' },
  { slug: 'sports', name: '体育', description: '赛事、人物、战报与深度观察' },
  { slug: 'auto', name: '汽车', description: '新车、智驾、品牌与行业动态' },
]

export const homeHero = {
  title: '今日焦点',
  headline: '平台化推荐正在重塑资讯首页，内容分发从频道时代迈入用户时刻',
  summary:
    '聚焦热点、深度、视频、创作者与平台运营能力，构建一个更接近真实资讯产品的多页面展示案例。首页保留门户站的信息密度与热点节奏，同时打通频道页、详情页、搜索页和后台视角。',
  featured: ['多频道导航 + 热点聚合 + 个性化信息流', '搜索聚合、创作者工作台与运营后台联动', '仿真资讯站布局，适合作品集案例展示'],
}

export const headlineCards = [
  {
    title: '大模型入口继续前移，资讯产品开始把“搜索 + 问答 + 热榜”融合到首页',
    label: '深度观察',
    note: '8 分钟前更新',
  },
  {
    title: '平台把创作者收益面板前置，内容生产与流量分发开始形成闭环',
    label: '平台趋势',
    note: '专题跟进',
  },
  {
    title: '从快讯到短视频卡片，资讯站首页正在变成多媒体信息控制台',
    label: '产品设计',
    note: '编辑精选',
  },
]

export const topStoryBoard = [
  {
    title: '平台改版为什么先动首页焦点区',
    desc: '头条、热榜、专题与个性化推荐正在重新组合，首页首屏成为内容策略最密集的区域。',
    tag: '要闻',
  },
  {
    title: '搜索框正在成为资讯站新的一级入口',
    desc: '热搜、筛选与问答能力前置后，搜索页从工具页升级为内容发现页。',
    tag: '观察',
  },
  {
    title: '创作者平台从发文工具走向经营后台',
    desc: '数据、收益、粉丝和任务被收拢进同一个工作台，平台生态进一步成型。',
    tag: '平台',
  },
  {
    title: '视频资讯成为首页点击效率最高的卡片类型',
    desc: '视频封面与强标题组合在文娱和热点场景中持续提升停留与互动。',
    tag: '视频',
  },
]

export const quickFlashes = [
  { time: '10:24', title: '平台将“热搜 + 问答”组合入口前置到首页第一屏，搜索链路再次前移。', tag: '快讯' },
  { time: '09:58', title: '科技频道新增深读专题聚合，专题页平均停留时长较普通列表高出 24%。', tag: '专题' },
  { time: '09:26', title: '创作者平台本周上线收益预估模块，帮助作者提前判断选题表现。', tag: '作者' },
  { time: '08:47', title: '后台推荐实验进入第 6 组，头条焦点位 CTR 较基线组提升 6.8%。', tag: '实验' },
]

export const videoHighlights = [
  {
    title: '短视频资讯如何嵌入首页信息流',
    duration: '03:28',
    label: '视频解读',
  },
  {
    title: '创作者工作台改版后的三层数据结构',
    duration: '05:12',
    label: '产品复盘',
  },
  {
    title: '新闻首页热榜区为什么要保留强对比视觉',
    duration: '02:54',
    label: '设计拆解',
  },
]

export const rankingLists = [
  {
    title: '实时热榜',
    items: [
      { title: 'AI 搜索产品进入首页一级入口争夺战', heat: '981万', source: '热议' },
      { title: '创作者平台加速升级收益与粉丝经营工具', heat: '842万', source: '平台' },
      { title: '财经频道加码数据图表内容，深读需求持续增长', heat: '716万', source: '财经' },
      { title: '视频资讯卡片点击率继续高于纯图文信息流', heat: '683万', source: '洞察' },
      { title: '内容审核与版权治理成为平台长期核心能力', heat: '621万', source: '治理' },
    ],
  },
  {
    title: '24 小时热文',
    items: [
      { title: '内容平台为什么都在重做首页信息架构', heat: '41万阅读', source: '专栏' },
      { title: '从频道导航到推荐流：门户站的改版方法论', heat: '37万阅读', source: '设计' },
      { title: '搜索页不只是搜索页，而是第二个内容分发入口', heat: '30万阅读', source: '产品' },
      { title: '创作者后台的数据看板，应该先解决什么问题', heat: '26万阅读', source: '运营' },
      { title: '资讯网站的商业化，不只依赖广告位', heat: '21万阅读', source: '商业' },
    ],
  },
]

export const newsFeed = [
  {
    slug: 'ai-homepage-distribution',
    title: 'AI 首页分发时代，资讯站的焦点区如何兼顾效率与品牌感',
    summary: '头条区域正在从单一 Banner 演进为多模块拼接的内容决策区，需要同时承接时效、热点和专题深读。',
    channel: 'tech',
    author: '林岚',
    date: '2026-06-16 09:30',
    tags: ['首页设计', '推荐系统', '信息流'],
    featured: true,
    content: [
      '当资讯站首页承载的内容越来越多，焦点区必须承担更复杂的内容调度任务。',
      '一个成熟的首页需要在热点速度、专题表达与用户停留之间找到平衡。',
      '因此，视觉结构不再只是大图加标题，而是频道推荐、深度内容和趋势榜单的组合。',
    ],
  },
  {
    slug: 'creator-dashboard-economy',
    title: '创作者收益看板为什么应该成为平台增长飞轮的一部分',
    summary: '收益、粉丝增长和内容表现不再是独立数据，它们正在被整合为创作者经营系统。',
    channel: 'finance',
    author: '沈舟',
    date: '2026-06-16 08:12',
    tags: ['创作者', '收益中心', '平台运营'],
    content: [
      '内容平台的长期增长越来越依赖创作者供给质量。',
      '把数据、收益、任务和建议放在同一工作台，才能让创作者形成持续经营动力。',
      '这也是资讯网站从“内容平台”转向“生态平台”的标志之一。',
    ],
  },
  {
    slug: 'channel-architecture-upgrade',
    title: '频道页不应只是列表页，垂直资讯更需要结构化内容编排',
    summary: '垂直频道正在强化专题、排行、图表与专栏内容，让频道页更像独立媒体首页。',
    channel: 'headline',
    author: '周明',
    date: '2026-06-15 20:18',
    tags: ['频道页', '内容编排', '垂直资讯'],
    content: [
      '单纯的列表不能满足用户对深读和快速浏览并存的需求。',
      '频道页应在焦点区之外，强化栏目组织与专题沉淀。',
      '这有助于建立频道辨识度与长期内容资产。',
    ],
  },
  {
    slug: 'search-second-portal',
    title: '搜索页正成为资讯站第二首页，热搜与筛选能力都在前置',
    summary: '搜索页已经不仅用于找内容，更是热点发现与内容聚合的重要入口。',
    channel: 'headline',
    author: '许安',
    date: '2026-06-15 17:05',
    tags: ['搜索页', '热点聚合', '产品设计'],
    content: [
      '很多资讯平台开始让热搜、相关推荐和分类筛选出现在搜索页首屏。',
      '这意味着搜索页从工具页，变成内容发现页。',
      '它需要承担流量承接和内容分发的双重职责。',
    ],
  },
  {
    slug: 'video-card-growth',
    title: '短视频资讯卡片为何能持续提升信息流点击率',
    summary: '在快节奏浏览场景中，视频封面与强标题组合更容易提升停留和互动。',
    channel: 'ent',
    author: '陈黎',
    date: '2026-06-15 14:48',
    tags: ['视频资讯', '互动设计', '内容分发'],
    content: [
      '视频卡片让用户更容易理解内容价值与信息情绪。',
      '尤其在娱乐和热点频道，短视频资讯已经成为标准模块。',
      '但它仍需要与图文内容保持节奏与信息层次上的平衡。',
    ],
  },
  {
    slug: 'sports-live-data-panel',
    title: '赛事频道的数据面板正在成为体育资讯站最强停留入口',
    summary: '比分、赛况、关键事件和评论互动结合后，体育频道开始形成强实时性内容体验。',
    channel: 'sports',
    author: '高策',
    date: '2026-06-15 11:22',
    tags: ['体育频道', '数据面板', '实时资讯'],
    content: [
      '体育频道用户需要的不只是结果，还包括过程和实时反馈。',
      '数据面板和资讯内容的组合，让频道页更接近产品级服务。',
      '这是垂直资讯站的重要差异化方向。',
    ],
  },
]

export const featuredColumns = [
  { name: '深度观察', desc: '围绕推荐、搜索、创作者生态和商业化做专题深读。', count: '128 篇' },
  { name: '数据图谱', desc: '用图表方式解读产业、内容消费和用户增长变化。', count: '64 期' },
  { name: '创作者笔记', desc: '聚焦创作效率、粉丝运营、收益结构与平台策略。', count: '92 条' },
]

export const channelSpecials = {
  headline: [
    { title: '首页改版方法论', desc: '聚焦资讯站首页结构重组、焦点位表达与热点分发。' },
    { title: '搜索页进化', desc: '从热搜到内容聚合，搜索页承担第二首页角色。' },
  ],
  finance: [
    { title: '市场数据图谱', desc: '围绕行情、消费和产业周期做结构化解读。' },
    { title: '公司观察', desc: '追踪平台公司、内容生态与商业化关键动作。' },
  ],
  tech: [
    { title: 'AI 应用进展', desc: '聚焦模型入口、Agent 产品与内容推荐结合。' },
    { title: '产品拆解', desc: '围绕平台产品体验与交互逻辑做深度分析。' },
  ],
  ent: [
    { title: '综艺热议', desc: '跟踪热点内容传播与流量峰值变化。' },
    { title: '人物观察', desc: '围绕艺人、话题与平台舆情形成专题内容。' },
  ],
  sports: [
    { title: '赛事数据面板', desc: '比分、赛况、关键事件与互动评论并行展示。' },
    { title: '焦点战复盘', desc: '从关键节点与战术变化拆解赛事走向。' },
  ],
  auto: [
    { title: '新车速递', desc: '新车上市、智驾升级与品牌动态快速追踪。' },
    { title: '行业深读', desc: '围绕产业链、价格趋势与技术路线展开分析。' },
  ],
}

export const creators = [
  { name: '林岚', role: '主编 / 产品观察', metric: '周均阅读 120万' },
  { name: '沈舟', role: '财经作者', metric: '专栏订阅 8.4万' },
  { name: '陈黎', role: '文娱编辑', metric: '互动量提升 36%' },
  { name: '周明', role: '行业分析师', metric: '深读完读率 48%' },
]

export const articleComments = [
  {
    user: '唐川',
    role: '产品经理',
    content: '首页焦点区不是简单的视觉位，而是整站内容策略最集中的体现，这一点拆得很清楚。',
    time: '2 分钟前',
  },
  {
    user: '赵音',
    role: '内容运营',
    content: '把搜索页当作第二首页来设计非常真实，很多资讯产品现在确实是这么做的。',
    time: '18 分钟前',
  },
  {
    user: '顾原',
    role: '创作者',
    content: '如果再加上评论排序和热评模块，文章详情页会更像真实资讯平台。',
    time: '35 分钟前',
  },
]

export const searchTrends = ['AI 搜索', '创作者收益', '推荐算法', '频道改版', '内容治理', '短视频资讯']

export const creatorDashboard = {
  stats: [
    { label: '总阅读量', value: '186万' },
    { label: '新增粉丝', value: '12,480' },
    { label: '互动率', value: '7.8%' },
    { label: '本月收益', value: '¥28,400' },
  ],
  contents: [
    { title: '为什么搜索页会成为第二首页', status: '已发布', views: '26.4万', comments: 182 },
    { title: '创作者收益看板的三层设计', status: '审核中', views: '8.1万', comments: 46 },
    { title: '资讯站首页的热点区重构思路', status: '草稿', views: '--', comments: 0 },
  ],
}

export const adminDashboard = {
  overview: [
    { label: '待审核内容', value: '148' },
    { label: '敏感预警', value: '12' },
    { label: '推荐实验', value: '6' },
    { label: '广告收入', value: '¥428k' },
  ],
  queues: [
    { title: '科技频道专题稿件', risk: '低风险', owner: '科技编辑部' },
    { title: '娱乐热点混剪视频', risk: '中风险', owner: '文娱内容组' },
    { title: '财经分析长文转载申请', risk: '版权复核', owner: '版权团队' },
  ],
  sidebar: ['总览', '内容审核', '推荐配置', '频道管理', '用户画像', '广告管理', '数据报表'],
  modules: [
    { title: '首页焦点位', detail: '当前 3 组实验并行，深读专题位权重提升中。 ' },
    { title: '热视频池', detail: '娱乐与科技频道视频卡片表现高于图文卡片 18%。' },
    { title: '敏感词策略', detail: '命中后自动进入人工复核队列，支持风险等级分层。' },
  ],
}

export const newsNavSections = [
  { label: '首页', to: '/news/home.html' },
  { label: '频道', to: '/news/channel/headline.html' },
  { label: '搜索', to: '/news/search.html' },
  { label: '创作者', to: '/news/creator.html' },
  { label: '后台', to: '/news/admin.html' },
]

export const getNewsChannel = (slug) => newsChannels.find((item) => item.slug === slug) || newsChannels[0]

export const getNewsArticle = (slug) => newsFeed.find((item) => item.slug === slug)

export const getChannelArticles = (slug) => newsFeed.filter((item) => item.channel === slug || (slug === 'headline' && item.featured))

export const getChannelSpecials = (slug) => channelSpecials[slug] || channelSpecials.headline
