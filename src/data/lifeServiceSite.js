const lifeImage = (prompt, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

export const lifeServiceNav = [
  { label: '首页', to: '/lifeservice/home.html' },
  { label: '本地生活', to: '/lifeservice/local.html' },
  { label: '出行服务', to: '/lifeservice/travel.html' },
  { label: '招聘求职', to: '/lifeservice/jobs.html' },
  { label: '用户中心', to: '/lifeservice/profile.html' },
]

export const lifeServiceHero = {
  title: '一站解决吃住行与找工作',
  subtitle: '覆盖本地生活、出行服务与招聘求职场景，整合到店消费、酒店机票、打车租车、职位搜索与订单管理能力。',
  tags: ['外卖团购', '酒店机票', '打车租车', '职位搜索', '订单追踪', '会员权益'],
  image: lifeImage(
    'local life service platform hero, chinese city lifestyle with food delivery travel booking and job search dashboard, premium service website, realistic',
    'landscape_16_9'
  ),
}

export const lifeServiceStats = [
  { label: '覆盖城市', value: '50+' },
  { label: '合作商家', value: '10万+' },
  { label: '活跃职位', value: '100万+' },
  { label: '年 GTV', value: '10亿' },
]

export const localServiceCards = [
  {
    title: '外卖严选',
    meta: '附近商家 · 满减优惠 · 订单追踪',
    image: lifeImage('food delivery card, chinese takeout dishes and smartphone app ui, realistic city lifestyle', 'portrait_4_3'),
  },
  {
    title: '酒店预订',
    meta: '地图找酒店 · 价格日历 · 到店保障',
    image: lifeImage('hotel booking card, modern hotel room and booking app interface, realistic travel service', 'portrait_4_3'),
  },
  {
    title: '票务预订',
    meta: '演出电影 · 选座购票 · 电子票',
    image: lifeImage('ticket booking card, cinema and concert ticket app, realistic entertainment service', 'portrait_4_3'),
  },
  {
    title: '家政到家',
    meta: '保洁维修 · 服务档案 · 在线预约',
    image: lifeImage('home service booking card, cleaning and repair service platform, realistic home lifestyle', 'portrait_4_3'),
  },
]

export const localBoards = [
  { title: '必吃榜', desc: '火锅、烧烤、咖啡与甜品好评商家实时更新。' },
  { title: '酒店特惠', desc: '周末度假酒店低至 6 折，支持地图筛选与无房赔付。' },
  { title: '达人探店', desc: '图文与短视频点评，支持收藏、榜单与打卡签到。' },
]

export const travelProducts = [
  { title: '机票预订', desc: '单程 / 往返 / 多程，价格趋势、在线值机和退改签。' },
  { title: '火车票', desc: '车次时刻、候补购票、抢票预约与订单管理。' },
  { title: '打车服务', desc: '实时用车、预约用车、拼车顺风车与行程分享。' },
  { title: '租车服务', desc: '车型选择、网点取还、保险购买与在线签约。' },
]

export const jobCards = [
  { title: '高级产品经理', company: '城市生活科技', salary: '25k-40k', meta: '上海 · 5-10年 · 本科' },
  { title: '前端开发工程师', company: '星云出行', salary: '20k-35k', meta: '杭州 · 3-5年 · 本科' },
  { title: '招聘运营专员', company: '优职人才', salary: '12k-18k', meta: '深圳 · 1-3年 · 本科' },
  { title: '酒店招商主管', company: '旅宿联盟', salary: '18k-28k', meta: '成都 · 3-5年 · 大专' },
]

export const companyBoards = [
  { title: '在招企业', desc: '企业主页、员工评价、工商信息与在招职位统一展示。' },
  { title: '面试经验', desc: '薪资爆料、面试复盘、行业问答和求职社区互动。' },
  { title: '招聘后台', desc: '职位发布、简历筛选、面试安排与人才库管理。' },
]

export const lifeServiceProfile = {
  name: '城市生活用户',
  handle: '@cityservice',
  bio: '常用外卖、酒店预订、机票搜索和职位投递功能，关注优惠券、会员权益与订单履约体验。',
  avatar: lifeImage('young chinese urban service app user portrait, city lifestyle and smartphone, realistic', 'square_hd'),
}

export const lifeBenefits = ['会员专享价', '专属优惠券', '订单积分加速', '客服优先', '生日权益']

export const lifeHistory = ['外卖订单：轻食沙拉套餐', '酒店预订：杭州西湖店', '航班搜索：上海-北京', '职位投递：高级产品经理']

export const lifeNotices = ['你预订的酒店今晚 18:00 后可办理入住。', '有 2 张外卖优惠券将在 3 天后到期。', '你投递的“前端开发工程师”已进入面试阶段。']
