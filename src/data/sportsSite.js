const sportsImage = (prompt, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

export const sportsNav = [
  { label: '首页', to: '/sports/home.html' },
  { label: '赛事直播', to: '/sports/live.html' },
  { label: '健身课程', to: '/sports/courses.html' },
  { label: '运动社区', to: '/sports/community.html' },
  { label: '用户中心', to: '/sports/profile.html' },
]

export const sportsHero = {
  title: '赛事、训练与社交，一个平台全覆盖',
  subtitle: '围绕赛事直播、健身课程、运动记录与运动社区场景，打造更有活力的体育健身数字生态。',
  tags: ['赛事直播', '课程计划', '运动记录', '跑团圈子', '硬件连接', '会员权益'],
  image: sportsImage(
    'sports and fitness platform hero, live match dashboard, gym training interface and running community, realistic energetic design',
    'landscape_16_9'
  ),
}

export const sportsStats = [
  { label: '注册用户', value: '300万+' },
  { label: '日均直播', value: '100场+' },
  { label: '课程库', value: '5000+' },
  { label: '运动记录月活', value: '100万+' },
]

export const sportsLivePanels = [
  { title: '赛事中心', desc: '赛程日历、热门赛事推荐与即将开始 / 进行中 / 已结束状态。' },
  { title: '比分直播', desc: '实时比分、关键事件、技术统计和即时推送提醒。' },
  { title: '比赛回放', desc: '全场回放、集锦视频、关键瞬间和战术分析内容。' },
]

export const sportsCourseCards = [
  {
    title: '28 天减脂计划',
    meta: 'HIIT + 饮食指导 · 每日任务推送',
    image: sportsImage('fitness program card, hiit training and trainer, realistic', 'portrait_4_3'),
  },
  {
    title: '基础力量训练',
    meta: '动作拆解 · 难度分级 · 发力说明',
    image: sportsImage('strength training course card, gym coach and barbell, realistic', 'portrait_4_3'),
  },
  {
    title: '瑜伽拉伸',
    meta: '直播带练 · 体态改善 · 柔韧恢复',
    image: sportsImage('yoga stretching course card, calm home workout, realistic', 'portrait_4_3'),
  },
  {
    title: '跑步进阶营',
    meta: '配速计划 · 心率区间 · 马拉松备战',
    image: sportsImage('running training course card, athlete on track with app data, realistic', 'portrait_4_3'),
  },
]

export const sportsCommunityPanels = [
  { title: '动态发布', desc: '文字、图片、视频分享运动瞬间，支持话题标签与定位场馆。' },
  { title: '圈子跑团', desc: '同城跑团、运动圈子、约跑约练和线下活动组织。' },
  { title: '装备社区', desc: '跑鞋、手表、器材测评推荐与二手交易。' },
]

export const sportsProfile = {
  name: '运动达人',
  handle: '@sportlife',
  bio: '喜欢看球赛、上健身课程、记录跑步数据，也会参与跑团和装备社区互动。',
  avatar: sportsImage('young sporty person portrait, active fitness lifestyle, realistic', 'square_hd'),
}

export const sportsBenefits = ['课程无限看', '赛事优先报名', '身体档案', '直播提醒与社区消息', '硬件数据同步']
export const sportsHistory = ['课程打卡：28 天减脂计划 Day 12', '直播观看：欧冠半决赛', '运动记录：夜跑 6.2 公里', '社区动态：晒图打卡健身房']
export const sportsNotices = ['你关注的比赛将在今晚 20:00 开始直播。', '本周训练目标已完成 68%，继续加油。', '跑团活动“周末 10 公里”已开放报名。']
