const socialImage = (prompt, size = 'portrait_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

export const socialNav = [
  { label: '首页', to: '/social/home.html' },
  { label: '兴趣圈', to: '/social/circle/city-hiking.html' },
  { label: '种草笔记', to: '/social/post/mountain-cafe-vlog.html' },
  { label: '消息', to: '/social/messages.html' },
  { label: '我的', to: '/social/profile.html' },
]

export const socialHero = {
  title: '和同好一起分享生活灵感',
  subtitle: '覆盖综合社交、兴趣社区与短视频图文种草场景，打通关注、发布、讨论、私信和内容消费链路。',
  tags: ['好友动态', '兴趣小组', '图文种草', '短视频推荐', '即时互动'],
  image: socialImage(
    'social community app homepage, chinese lifestyle community, young people sharing notes and short videos, warm modern interface, realistic mobile ui scene',
    'landscape_16_9'
  ),
}

export const socialStories = [
  { name: '阿澈', badge: '摄影', image: socialImage('young female travel photographer portrait, natural light, clean background', 'square_hd') },
  { name: '知野', badge: '徒步', image: socialImage('young male outdoor hiking creator portrait, warm smile, realistic', 'square_hd') },
  { name: 'Momo', badge: '美妆', image: socialImage('beauty content creator portrait, soft light, lifestyle photography', 'square_hd') },
  { name: 'Echo', badge: '咖啡', image: socialImage('coffee blogger portrait, cozy cafe background, realistic', 'square_hd') },
  { name: '小舟', badge: '露营', image: socialImage('camping lifestyle creator portrait, outdoor sunset light, realistic', 'square_hd') },
]

export const socialTopics = [
  { label: '#周末徒步地图', heat: '12.6万讨论' },
  { label: '#通勤穿搭公式', heat: '8.4万讨论' },
  { label: '#城市咖啡馆合集', heat: '6.9万讨论' },
  { label: '#租房软装清单', heat: '5.8万讨论' },
]

export const socialCircles = [
  {
    slug: 'city-hiking',
    name: '城市徒步研究所',
    description: '分享城市周边轻徒步路线、装备清单和周末拼车计划。',
    members: '12.4万',
    todayPosts: '1,286',
    tags: ['路线攻略', '装备测评', '活动组队'],
    cover: socialImage(
      'young people urban hiking community cover, mountains and city edge trail, sunny outdoor scene, realistic lifestyle photography',
      'landscape_16_9'
    ),
    announcement: '本周发起「城市边缘日落线」打卡挑战，发帖带话题可领取圈子勋章。',
  },
  {
    slug: 'coffee-lab',
    name: '咖啡实验室',
    description: '交流手冲配方、城市咖啡馆探店和咖啡器具选购体验。',
    members: '9.8万',
    todayPosts: '986',
    tags: ['手冲参数', '探店地图', '器具开箱'],
    cover: socialImage('specialty coffee community cover, cozy cafe counter, coffee brewing tools, lifestyle photography', 'landscape_16_9'),
    announcement: '新一期「100 元入门手冲套装」投票帖已上线，欢迎参与评分。',
  },
  {
    slug: 'rental-makeover',
    name: '租房改造俱乐部',
    description: '围绕小户型改造、平价软装和收纳方案分享经验。',
    members: '15.1万',
    todayPosts: '1,942',
    tags: ['小空间收纳', '平价软装', '租房清单'],
    cover: socialImage('rental room makeover community cover, cozy small apartment, modern decor, realistic interior photography', 'landscape_16_9'),
    announcement: '本月征文主题是「300 元提升出租屋幸福感」，优质笔记将进入首页推荐。',
  },
]

export const socialNotes = [
  {
    slug: 'mountain-cafe-vlog',
    title: '周末去山里的咖啡馆，一天拍完徒步 + 探店 vlog',
    type: 'video',
    author: '阿澈',
    authorRole: '旅行摄影博主',
    authorAvatar: socialStories[0].image,
    circle: 'city-hiking',
    topic: '#周末徒步地图',
    summary: '整理了路线难度、交通方式和咖啡馆人流时间，顺手把拍 vlog 的镜头脚本也附上了。',
    content: [
      '这条线路很适合周末半日徒步，整体强度不高，但沿途视野非常好，适合拍风景和人物空镜。',
      '我把路线拆成了三个打卡点：山脚车站、半山观景台和终点咖啡馆。每个点位都适合拍不同风格的内容。',
      '如果是第一次去，建议上午 9 点前出发，终点咖啡馆 11 点前到店几乎不用排队，下午人会明显增多。',
    ],
    image: socialImage(
      'young woman hiking to mountain cafe, chinese lifestyle vlog cover, warm sunlight, realistic outdoor travel photography',
      'portrait_16_9'
    ),
    likes: '2.8万',
    comments: '1,426',
    saves: '9,812',
    shares: '2,106',
    product: {
      title: '轻量徒步双肩包 18L',
      price: '269',
      image: socialImage('lightweight hiking backpack product card, outdoor gear, clean ecommerce photo', 'square_hd'),
    },
  },
  {
    slug: 'desk-makeup-checklist',
    title: '打工人 10 分钟通勤妆，我把桌面常驻化妆包精简到了 6 件',
    type: 'note',
    author: 'Momo',
    authorRole: '美妆种草达人',
    authorAvatar: socialStories[2].image,
    circle: 'rental-makeover',
    topic: '#通勤穿搭公式',
    summary: '适合早高峰通勤，重点是轻薄、快速、补妆方便，附色号和替代清单。',
    content: [
      '我的需求是 10 分钟内完成底妆和提气色，所以这套化妆包只保留了最常用的 6 件。',
      '底妆尽量选轻薄的气垫或带润色效果的防晒，眼妆和修容可以都做减法，整体会更利落。',
      '如果你和我一样是黄皮通勤党，可以优先看我整理的显气色色号，踩雷概率会低很多。',
    ],
    image: socialImage(
      'beauty note flatlay with commuting makeup products, clean desk, chinese lifestyle community style, realistic',
      'portrait_4_3'
    ),
    likes: '1.9万',
    comments: '862',
    saves: '1.3万',
    shares: '618',
  },
  {
    slug: 'rental-room-lighting-plan',
    title: '出租屋灯光改造清单，300 元把夜晚氛围感拉满',
    type: 'note',
    author: '小舟',
    authorRole: '家居生活分享者',
    authorAvatar: socialStories[4].image,
    circle: 'rental-makeover',
    topic: '#租房软装清单',
    summary: '从顶灯补光到落地灯氛围布置，适合预算有限但又想提升居住体验的人。',
    content: [
      '租房改造里最容易出效果的是灯光，不一定要换硬装，靠局部光源和色温搭配就能改善很多。',
      '我把预算分成了工作区照明、休息区氛围灯和床头夜灯三部分，优先满足日常使用。',
      '如果房间本身采光差，建议先把主灯色温调整到 4000K 左右，再用暖色落地灯补氛围。',
    ],
    image: socialImage('small rental room lighting makeover, cozy apartment interior, warm ambient lights, realistic photography', 'portrait_4_3'),
    likes: '2.3万',
    comments: '1,108',
    saves: '1.8万',
    shares: '734',
  },
  {
    slug: 'espresso-machine-buying-guide',
    title: '第一台家用咖啡机怎么选，我整理了入门机型避坑表',
    type: 'note',
    author: 'Echo',
    authorRole: '咖啡馆探店博主',
    authorAvatar: socialStories[3].image,
    circle: 'coffee-lab',
    topic: '#城市咖啡馆合集',
    summary: '从预算、操作门槛到稳定性，帮你快速筛出适合自己的一台。',
    content: [
      '如果你只是日常喝奶咖，优先看稳定性和出杯效率，不一定非要追求太复杂的参数可调。',
      '新手最容易忽略的是清洁成本和台面空间，所以我把这两个维度都放进了表格里。',
      '文末附了三档预算推荐和我的个人体验，适合第一次入门参考。',
    ],
    image: socialImage(
      'home espresso machine buying guide note cover, coffee tools on kitchen counter, realistic lifestyle photography',
      'portrait_4_3'
    ),
    likes: '8,642',
    comments: '386',
    saves: '6,203',
    shares: '194',
  },
  {
    slug: 'friends-camp-night-chat',
    title: '朋友露营夜聊记录：为什么大家开始重新认真经营线下关系',
    type: 'video',
    author: '知野',
    authorRole: '户外社群主理人',
    authorAvatar: socialStories[1].image,
    circle: 'city-hiking',
    topic: '#周末徒步地图',
    summary: '一次露营夜聊引发的关系观察，视频里也记录了我们的装备和菜单。',
    content: [
      '大家都在说线上联系很方便，但真正让关系升温的，还是一起出门、一起做点什么。',
      '这条视频想记录的不是露营技巧，而是朋友之间重新建立连接的那种松弛感。',
      '如果你也想组织一场轻量的周末活动，可以直接参考我放在评论区的物资清单。',
    ],
    image: socialImage(
      'friends camping night talk, warm campfire, young people outdoor social scene, realistic cinematic photography',
      'portrait_16_9'
    ),
    likes: '1.1万',
    comments: '529',
    saves: '3,108',
    shares: '421',
  },
]

export const socialCreators = [
  {
    name: '阿澈',
    role: '旅行摄影博主',
    fans: '32.8万',
    posts: '428',
    avatar: socialStories[0].image,
  },
  {
    name: 'Momo',
    role: '美妆种草达人',
    fans: '28.6万',
    posts: '512',
    avatar: socialStories[2].image,
  },
  {
    name: 'Echo',
    role: '咖啡馆探店博主',
    fans: '14.2万',
    posts: '219',
    avatar: socialStories[3].image,
  },
]

export const socialMessages = [
  {
    id: 1,
    user: '徒步搭子群',
    avatar: socialImage('group chat icon for hiking friends, soft green minimal avatar', 'square_hd'),
    preview: '本周六 7:30 地铁站集合，我把天气和路线发群公告了。',
    time: '09:42',
    unread: 12,
  },
  {
    id: 2,
    user: 'Echo',
    avatar: socialStories[3].image,
    preview: '你上次问的手冲壶我放进清单了，晚点把链接发你。',
    time: '昨天',
    unread: 2,
  },
  {
    id: 3,
    user: '平台通知',
    avatar: socialImage('system notification app avatar, minimal gradient icon', 'square_hd'),
    preview: '你的笔记《出租屋灯光改造清单》进入首页推荐流。',
    time: '昨天',
    unread: 1,
  },
]

export const socialChatMessages = [
  { from: 'other', text: '本周路线我看了一下，坡度不大，摄影机位很多。', time: '09:18' },
  { from: 'me', text: '太好了，我想顺便拍一条探店 vlog，有没有推荐的停留点？', time: '09:21' },
  { from: 'other', text: '半山观景台和终点咖啡馆都不错，我待会把地图标注发你。', time: '09:22' },
  { from: 'other', text: '另外记得带一件薄外套，山里风比较大。', time: '09:23' },
]

export const socialBadges = [
  { label: '连续签到 12 天', tone: '#ff6b6b' },
  { label: '精选创作者', tone: '#7c3aed' },
  { label: '城市探店官', tone: '#0ea5e9' },
]

export const socialProfile = {
  name: '林夏',
  handle: '@linxia',
  bio: '记录城市徒步、租房改造和咖啡馆日常，希望和同频的人一起把生活过得更有意思。',
  avatar: socialImage('young chinese woman lifestyle creator profile portrait, natural light, realistic', 'square_hd'),
  following: '286',
  followers: '4.8万',
  likes: '82万',
}

export const getSocialCircleBySlug = (slug) => socialCircles.find((item) => item.slug === slug) || socialCircles[0]

export const getSocialPostBySlug = (slug) => socialNotes.find((item) => item.slug === slug) || socialNotes[0]

export const getRelatedSocialPosts = (slug, circle) => socialNotes.filter((item) => item.slug !== slug && item.circle === circle).slice(0, 3)
