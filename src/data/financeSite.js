const financeImage = (prompt, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

export const financeNav = [
  { label: '首页', to: '/finance/home.html' },
  { label: '银行服务', to: '/finance/bank.html' },
  { label: '证券基金', to: '/finance/invest.html' },
  { label: '保险保障', to: '/finance/insurance.html' },
  { label: '资产中心', to: '/finance/profile.html' },
]

export const financeHero = {
  title: '一站式金融服务与财富管理平台',
  subtitle: '围绕银行、证券基金、保险和理财场景，构建安全合规、数据可视化、交易顺畅的数字金融服务门户。',
  tags: ['账户管理', '证券基金', '保险投保', '贷款服务', '资产总览', '安全中心'],
  image: financeImage(
    'premium fintech platform hero, banking investment insurance dashboard, elegant blue finance interface, realistic corporate style',
    'landscape_16_9'
  ),
}

export const financeStats = [
  { label: '注册用户', value: '100万+' },
  { label: 'AUM', value: '50亿' },
  { label: '线上办理占比', value: '80%+' },
  { label: 'NPS', value: '40+' },
]

export const bankCards = [
  {
    title: '账户与存款',
    meta: '开户、余额明细、定期存款、大额存单',
    image: financeImage('mobile banking account card, secure finance app dashboard, elegant blue interface, realistic', 'portrait_4_3'),
  },
  {
    title: '转账汇款',
    meta: '行内跨行、手机号转账、批量转账',
    image: financeImage('bank transfer product card, digital banking transfer interface, realistic fintech ui', 'portrait_4_3'),
  },
  {
    title: '信用卡中心',
    meta: '在线申请、账单还款、积分权益、分期',
    image: financeImage('credit card center product card, premium bank app and loyalty rewards, realistic', 'portrait_4_3'),
  },
  {
    title: '贷款服务',
    meta: '消费贷、经营贷、房贷、进度查询',
    image: financeImage('loan service product card, digital banking credit approval dashboard, realistic', 'portrait_4_3'),
  },
]

export const investPanels = [
  {
    title: '行情中心',
    desc: '股票、基金、债券、期货实时行情与分时 / 日周月 K 线图。',
  },
  {
    title: '交易下单',
    desc: '买入卖出、撤单、融资融券、新股申购和条件单交易。',
  },
  {
    title: '资产配置',
    desc: '持仓总览、收益曲线、资产分布、盈亏分析与定投策略。',
  },
  {
    title: '智能投顾',
    desc: '风险测评、组合推荐、自动调仓与业绩归因分析。',
  },
]

export const insuranceCards = [
  { title: '健康险', desc: '保障范围、保费试算、智能核保与在线投保。' },
  { title: '寿险', desc: '投保人信息、受益人设置、电子签名与续保提醒。' },
  { title: '车险理赔', desc: '在线报案、材料上传、理赔进度与智能定损。' },
  { title: '健康管理', desc: '体检预约、慢病管理、就医绿通与健康评测。' },
]

export const wealthCards = [
  { title: '理财超市', yield: '4.28%', meta: '活期 / 定期 / 债权转让 · 稳健型' },
  { title: '基金组合', yield: '9.61%', meta: '偏股混合 · 自动定投 · 中风险' },
  { title: '养老储蓄', yield: '3.82%', meta: '长期稳健 · 月月积累 · 低风险' },
]

export const financeProfile = {
  name: '财富管理客户',
  handle: '@securewealth',
  bio: '关注账户安全、资产配置、基金定投和保险保障，希望在一个平台内完成交易、投保与资产管理。',
  avatar: financeImage('wealth management customer portrait, premium fintech style, realistic business portrait', 'square_hd'),
}

export const financeBenefits = ['实名认证进度', '资产总览统一视图', '安全中心多重验证', '理财与投保提醒', '智能客服与视频客服']

export const financeHistory = ['查看资产总览：净资产 286,000 元', '基金定投：每周二自动扣款', '保险保单：健康险续费提醒', '贷款申请：消费贷审核中']

export const financeNotices = [
  '你关注的基金组合今日收益更新，请及时查看。',
  '账户新增异地登录提醒，建议确认设备安全。',
  '健康险保单将在 7 天后到期，可在线续保。',
]
