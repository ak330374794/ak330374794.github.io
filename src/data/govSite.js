const govImage = (prompt, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

export const govNav = [
  { label: '首页', to: '/gov/home.html' },
  { label: '政府门户', to: '/gov/portal.html' },
  { label: '在线办事', to: '/gov/services.html' },
  { label: '公共查询', to: '/gov/query.html' },
  { label: '互动中心', to: '/gov/profile.html' },
]

export const govHero = {
  title: '让数据多跑路，让群众少跑腿',
  subtitle: '围绕政府门户、在线办事大厅、公共查询与政民互动场景，打造公开透明、便民高效的政务服务数字平台。',
  tags: ['政务公开', '在线办事', '一件事一次办', '电子证照', '12345 热线', '公共查询'],
  image: govImage(
    'digital government service portal hero, clean public service hall interface, modern chinese civic platform, realistic',
    'landscape_16_9'
  ),
}

export const govStats = [
  { label: '网上可办率', value: '95%+' },
  { label: '全程网办率', value: '80%+' },
  { label: '满意度', value: '90%+' },
  { label: '响应时效', value: '24h' },
]

export const govPortalPanels = [
  { title: '政务公开', desc: '机构职能、政策文件、预算公开、政府采购和人事任免。' },
  { title: '新闻动态', desc: '政务要闻、通知公告、部门动态、区县动态和媒体聚焦。' },
  { title: '政策文件库', desc: '按主题、部门、年份分类，全文检索与政策关联图谱。' },
]

export const govServicePanels = [
  { title: '个人办事', desc: '社保、公积金、医保、护照、驾驶证等高频个人服务。' },
  { title: '法人办事', desc: '企业开办、税务登记、资质认定、工程审批和招投标。' },
  { title: '一件事一次办', desc: '出生、退休等主题套餐服务，多表合一、一窗受理。' },
  { title: '电子证照', desc: '身份证、驾驶证、营业执照等电子证照生成与亮证。' },
]

export const govQueryPanels = [
  { title: '社保查询', desc: '参保信息、缴费记录、待遇领取和转移接续查询。' },
  { title: '公积金查询', desc: '缴存明细、贷款进度、提取记录和还款计划。' },
  { title: '交通违章', desc: '违章记录、罚款缴纳、学法减分和记分查询。' },
  { title: '环境监测', desc: '空气质量、水质噪声数据和污染举报入口。' },
]

export const govProfile = {
  name: '政务服务用户',
  handle: '@publicservice',
  bio: '经常办理社保、公积金、户籍和企业服务事项，希望通过统一门户完成查询、申报和进度跟踪。',
  avatar: govImage('citizen using digital government services portrait, clean official style, realistic', 'square_hd'),
}

export const govBenefits = ['统一身份认证', '电子证照亮证', '办件进度跟踪', '12345 工单管理', '无障碍与多语言']
export const govHistory = ['办件进度：社保转移审核中', '查询记录：公积金贷款进度', '预约服务：政务大厅窗口预约', '互动诉求：12345 工单已回复']
export const govNotices = ['你提交的医保报销材料已进入复审阶段。', '预约大厅窗口将在明日 10:30 开始办理。', '新政策文件《人才落户指南》已发布。']
