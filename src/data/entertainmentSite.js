const entertainmentImage = (prompt, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

export const entertainmentNav = [
  { label: '首页', to: '/entertainment/home.html' },
  { label: '长视频', to: '/entertainment/video.html' },
  { label: '音乐馆', to: '/entertainment/music.html' },
  { label: '游戏官网', to: '/entertainment/game.html' },
  { label: '会员中心', to: '/entertainment/profile.html' },
]

export const entertainmentHero = {
  title: '星幕娱乐，一站看剧听歌玩游戏',
  subtitle: '围绕长视频平台、音乐网站和游戏官网三大场景，构建发现、观看、收听、下载、互动和会员转化一体化内容娱乐平台。',
  tags: ['4K 影院', '无损音质', '赛事直播', '追剧日历', '家庭会员'],
  image: entertainmentImage(
    'premium entertainment platform hero, chinese streaming video music gaming website, cinematic neon lighting, luxury ui scene, realistic digital poster',
    'landscape_16_9'
  ),
}

export const entertainmentStats = [
  { label: '付费会员', value: '50万+' },
  { label: '电影内容库', value: '5000+' },
  { label: '音乐曲库', value: '3000万+' },
  { label: '游戏下载转化', value: '15%' },
]

export const featuredShows = [
  {
    title: '深海边境',
    meta: '悬疑剧 · 4K 杜比',
    image: entertainmentImage(
      'cinematic chinese suspense drama poster, ocean storm, premium long video platform banner, realistic movie key visual',
      'portrait_16_9'
    ),
  },
  {
    title: '星际档案',
    meta: '科幻电影 · 抢先看',
    image: entertainmentImage(
      'science fiction chinese movie poster, spaceship and futuristic city, premium streaming platform, realistic key art',
      'portrait_16_9'
    ),
  },
  {
    title: '周末喜剧社',
    meta: '综艺 · 热播榜第 1',
    image: entertainmentImage('variety show stage poster, bright studio lights, chinese entertainment platform visual, realistic', 'portrait_16_9'),
  },
]

export const videoRows = [
  {
    title: '猜你喜欢',
    items: [
      {
        title: '无界追踪',
        info: '动作 · 更新至 18 集',
        image: entertainmentImage('action drama cover, modern city chase, premium streaming poster', 'portrait_4_3'),
      },
      {
        title: '故城来信',
        info: '剧情 · 评分 9.2',
        image: entertainmentImage('period drama cover, chinese old town, emotional poster, realistic', 'portrait_4_3'),
      },
      {
        title: '深夜食堂计划',
        info: '纪录片 · 会员专享',
        image: entertainmentImage('documentary food series cover, warm restaurant lighting, realistic', 'portrait_4_3'),
      },
      {
        title: '浪潮练习生',
        info: '综艺 · 热度 9812',
        image: entertainmentImage('idol reality show poster, stage spotlight, energetic youth, realistic', 'portrait_4_3'),
      },
    ],
  },
  {
    title: '热播片单',
    items: [
      {
        title: '密室逃生局',
        info: '电影 · 惊悚',
        image: entertainmentImage('thriller movie poster, dark room and neon clues, realistic', 'portrait_4_3'),
      },
      {
        title: '天光乐园',
        info: '动漫 · 口碑佳作',
        image: entertainmentImage('animated fantasy adventure poster, colorful paradise, premium visual', 'portrait_4_3'),
      },
      {
        title: '蓝调港湾',
        info: '爱情 · 上新',
        image: entertainmentImage('romantic movie poster, harbor sunset, cinematic realism', 'portrait_4_3'),
      },
      {
        title: '零点法则',
        info: '悬疑 · VIP 抢先',
        image: entertainmentImage('mystery thriller series poster, detective and city night, realistic', 'portrait_4_3'),
      },
    ],
  },
]

export const musicBoards = [
  {
    title: '飙升榜',
    songs: ['夏夜轨道 - 林深', '无名星球 - Echo', '倒带之前 - RIN', '海风留言 - 沐川'],
  },
  {
    title: '新歌首发',
    songs: ['银河入口 - VERA', '月光备份 - 陈屿', '凌晨 3:17 - VIVI', '放空指南 - 北屿乐团'],
  },
  {
    title: '氛围歌单',
    songs: ['通勤降噪模式', '夜晚书房 Lo-Fi', '周末自驾电台', '晨跑电子节拍'],
  },
]

export const playlistCards = [
  {
    title: '今夜循环',
    desc: '适合夜晚独处和长途通勤的氛围流行。',
    image: entertainmentImage('music playlist cover, night city lights and headphones, stylish realistic', 'square_hd'),
  },
  {
    title: '高能训练室',
    desc: '跑步、健身和运动时常听的电子与节拍单曲。',
    image: entertainmentImage('fitness music playlist cover, energetic neon gym mood, realistic', 'square_hd'),
  },
  {
    title: '海边公路',
    desc: '适合旅行、自驾和看海时循环播放的城市民谣。',
    image: entertainmentImage('road trip playlist cover, seaside highway at sunset, realistic', 'square_hd'),
  },
]

export const gameFeature = {
  title: '代号：裂隙边界',
  subtitle: '开放世界动作 RPG，支持多人副本、赛事直播与版本资料片更新。',
  image: entertainmentImage(
    'triple A chinese game official website hero, fantasy warrior and ruined city, cinematic key art, realistic',
    'landscape_16_9'
  ),
  tags: ['版本更新', '客户端下载', '赛事直播', '攻略专区'],
}

export const gamePanels = [
  { title: '最新公告', desc: '夏季资料片 7 月上线，新增地图与团队副本。' },
  { title: '下载中心', desc: 'PC 客户端、移动端 APK、补丁包和加速器入口。' },
  { title: '赛事直播', desc: '冠军赛程、战队资料、竞猜互动和回放集锦。' },
]

export const membershipBenefits = ['4K / 杜比视界画质', '无损音质与 Hi-Res', '去广告与抢先看', '多端续播与下载缓存', '家庭账号共享', '线下活动优先权']

export const entertainmentProfile = {
  name: '星幕 VIP 用户',
  handle: '@starmedia',
  bio: '偏好长视频追剧、夜间音乐播放和新游资料片内容，常用家庭共享和高清画质权益。',
  avatar: entertainmentImage(
    'premium entertainment member profile portrait, stylish young person with headphones and cinema lights, realistic',
    'square_hd'
  ),
}

export const watchHistory = ['深海边境 第 18 集', '星际档案 预告片', '今夜循环 歌单', '代号：裂隙边界 新版本实机演示']

export const memberNotices = [
  '会员将在 7 天后到期，可续费年卡享 8 折。',
  '家庭子账号已开启青少年内容过滤。',
  '你收藏的《周末喜剧社》今晚 20:00 更新。',
]
