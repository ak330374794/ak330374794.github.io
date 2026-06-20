const medicalImage = (prompt, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

export const medicalNav = [
  { label: '首页', to: '/medical/home.html' },
  { label: '在线问诊', to: '/medical/consult.html' },
  { label: '预约挂号', to: '/medical/appointment.html' },
  { label: '健康管理', to: '/medical/health.html' },
  { label: '用户中心', to: '/medical/profile.html' },
]

export const medicalHero = {
  title: '把问诊、挂号与健康管理搬到线上',
  subtitle: '围绕在线问诊、预约挂号、健康档案和医药服务，构建连接患者、医生与医疗机构的数字医疗平台。',
  tags: ['AI 预问诊', '图文问诊', '视频问诊', '预约挂号', '体检报告', '慢病管理'],
  image: medicalImage(
    'modern online healthcare platform hero, doctor patient telemedicine dashboard, hospital app interface, realistic medical service design',
    'landscape_16_9'
  ),
}

export const medicalStats = [
  { label: '注册用户', value: '200万+' },
  { label: '日均问诊', value: '5万+' },
  { label: '入驻医生', value: '1万+' },
  { label: '合作医院', value: '500+' },
]

export const medicalConsultCards = [
  {
    title: '快速问诊',
    meta: 'AI 分诊 · 症状自查 · 科室推荐',
    image: medicalImage('telemedicine triage card, ai medical chatbot and doctor dashboard, realistic', 'portrait_4_3'),
  },
  {
    title: '图文问诊',
    meta: '48 小时追问 · 图片上传 · 电子处方',
    image: medicalImage('online text consultation card, doctor chat and prescription ui, realistic', 'portrait_4_3'),
  },
  {
    title: '视频问诊',
    meta: '实时音视频 · 报告共享 · 复诊续方',
    image: medicalImage('video consultation card, doctor video call interface, realistic healthcare app', 'portrait_4_3'),
  },
  {
    title: '诊后随访',
    meta: '用药提醒 · 康复指导 · 满意度评价',
    image: medicalImage('post consultation follow up card, medicine reminders and care plan, realistic', 'portrait_4_3'),
  },
]

export const medicalAppointmentPanels = [
  { title: '医院搜索', desc: '按城市、科室、医院等级和医生职称筛选医院与号源。' },
  { title: '号源查询', desc: '查看未来 7-14 天号源状态、停诊信息与预计候诊时间。' },
  { title: '报告查询', desc: '检验检查报告在线查看，支持 PDF 下载与历史归档。' },
  { title: '住院服务', desc: '住院预约、床位查询、押金缴纳和每日清单查看。' },
]

export const medicalHealthPanels = [
  { title: '健康档案', desc: '过敏史、病史、家族病史、手术记录和家庭成员档案。' },
  { title: '体检预约', desc: '入职、婚检、老年和高端体检套餐在线比价预约。' },
  { title: '慢病管理', desc: '血压血糖记录、用药提醒、趋势对比和医生随访。' },
  { title: '医药电商', desc: '处方购药、OTC 药品、器械商城与同城送药。' },
]

export const medicalProfile = {
  name: '家庭健康用户',
  handle: '@healthcare',
  bio: '关注在线问诊、儿童挂号、父母慢病管理和体检报告解读，希望统一管理全家的健康记录。',
  avatar: medicalImage('family healthcare app user portrait, modern clean medical portrait, realistic', 'square_hd'),
}

export const medicalBenefits = ['实名认证进度', '医保卡绑定', '家庭成员档案', '问诊与挂号订单统一管理', '隐私授权设置']
export const medicalHistory = ['图文问诊：儿科发热咨询', '挂号订单：市一医院皮肤科', '体检报告：年度体检解读', '药品订单：降压药续方配送']
export const medicalNotices = [
  '你预约的门诊将在明天 09:20 开始候诊。',
  '本周慢病随访任务已生成，请记录血压数据。',
  '体检报告已出，可查看异常指标提醒。',
]
