const housingImage = (prompt, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

export const housingNav = [
  { label: '首页', to: '/housing/home.html' },
  { label: '房产交易', to: '/housing/property.html' },
  { label: '租房服务', to: '/housing/rent.html' },
  { label: '装修家居', to: '/housing/design.html' },
  { label: '用户中心', to: '/housing/profile.html' },
]

export const housingHero = {
  title: '从找房到装修，一站完成安家决策',
  subtitle: '围绕房产买卖、租房、装修与智能家居场景，构建真实可信、服务完整的房产家居数字平台。',
  tags: ['地图找房', 'VR 看房', '房贷计算', '在线签约', '装修报价', '智能家居'],
  image: housingImage(
    'real estate and home improvement platform hero, modern apartment listings vr viewing and interior design dashboard, realistic',
    'landscape_16_9'
  ),
}

export const housingStats = [
  { label: '覆盖城市', value: '100+' },
  { label: '在线房源', value: '500万+' },
  { label: '月均成交', value: '10万+' },
  { label: '合作装企', value: '1000+' },
]

export const housingCards = [
  {
    title: '新房二手房',
    meta: '地图找房 · 学区通勤 · 房价分析',
    image: housingImage('real estate listing card, apartment buildings and map search interface, realistic', 'portrait_4_3'),
  },
  {
    title: '租房公寓',
    meta: '整租合租 · 房东认证 · 在线签约',
    image: housingImage('rental apartment card, modern home interior and app ui, realistic', 'portrait_4_3'),
  },
  {
    title: '装修设计',
    meta: '3D 效果图 · 报价对比 · 施工管理',
    image: housingImage('home renovation card, interior design dashboard and room rendering, realistic', 'portrait_4_3'),
  },
  {
    title: '智能家居',
    meta: '场景方案 · 设备商城 · 安装服务',
    image: housingImage('smart home card, connected devices in modern apartment, realistic', 'portrait_4_3'),
  },
]

export const housingPropertyPanels = [
  { title: '房源详情', desc: '高清图、VR 看房、户型图、历史成交与周边配套一体化展示。' },
  { title: '小区百科', desc: '小区均价、物业、绿化、容积率与业主评价统一沉淀。' },
  { title: '交易服务', desc: '在线签约、资金监管、按揭代办、过户预约与税费计算。' },
]

export const housingDesignPanels = [
  { title: '装修需求发布', desc: '上传户型图、填写面积预算、预约量房和装修偏好。' },
  { title: '施工管理', desc: '施工日志、节点验收、监理记录与资金托管。' },
  { title: '建材商城', desc: '瓷砖、地板、卫浴、灯具等建材在线选购。' },
]

export const housingProfile = {
  name: '安家用户',
  handle: '@newhome',
  bio: '关注学区房、小区房价走势、租房合同与装修报价，希望统一管理买房、租房与装修进度。',
  avatar: housingImage('young urban home buyer portrait, modern apartment lifestyle, realistic', 'square_hd'),
}

export const housingBenefits = ['收藏房源与小区', '浏览足迹与订阅提醒', '交易订单统一管理', '合同与资金流水', '消息中心']
export const housingHistory = ['浏览房源：滨江三居室', '租赁订单：城西公寓签约中', '装修需求：北欧风两居', '智能家居方案：回家模式']
export const housingNotices = ['你关注的小区今日降价 12 万。', '量房师已确认明日上门时间。', '新上符合订阅条件的房源 3 套。']
