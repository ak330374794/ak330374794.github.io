const workStudyImage = (prompt, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`

export const workStudyNav = [
  { label: '首页', to: '/workstudy/home.html' },
  { label: '在线教育', to: '/workstudy/courses.html' },
  { label: '文档文库', to: '/workstudy/library.html' },
  { label: '在线协作', to: '/workstudy/collab.html' },
  { label: '用户中心', to: '/workstudy/profile.html' },
]

export const workStudyHero = {
  title: '学得更系统，协作更高效',
  subtitle: '围绕在线教育、文档文库和在线协作三大场景，连接课程学习、知识沉淀、团队协同和个人成长档案。',
  tags: ['直播课堂', '录播学习', '文档预览', '多人协作', '知识库', '会议纪要'],
  image: workStudyImage(
    'modern online education and collaboration platform hero, chinese students and office professionals, dashboard with documents and teamwork, premium productivity website, realistic',
    'landscape_16_9'
  ),
}

export const workStudyStats = [
  { label: '注册用户', value: '100万+' },
  { label: '课程数量', value: '5000+' },
  { label: '文档资料', value: '1000万+' },
  { label: '企业客户', value: '2000家' },
]

export const workStudyCourses = [
  {
    title: '高效项目管理实战课',
    meta: '录播课 · 42 节 · 职场进阶',
    image: workStudyImage(
      'online course cover, project management training, laptop dashboard and teacher presentation, clean modern education style',
      'portrait_4_3'
    ),
  },
  {
    title: '英语口语 30 天训练营',
    meta: '直播班 · 小班互动 · 打卡陪练',
    image: workStudyImage('english speaking online bootcamp course cover, young teacher with headset, bright study room, realistic', 'portrait_4_3'),
  },
  {
    title: '中考数学提分营',
    meta: 'K12 课程 · 题库练习 · 错题本',
    image: workStudyImage('k12 math online class cover, teacher and digital blackboard, educational platform visual, realistic', 'portrait_4_3'),
  },
  {
    title: 'PPT 设计与汇报训练',
    meta: '微课 · 模板拆解 · 实操点评',
    image: workStudyImage(
      'presentation design course cover, slides and creative workspace, productivity learning platform, realistic',
      'portrait_4_3'
    ),
  },
]

export const learningPanels = [
  {
    title: '直播教室',
    desc: '音视频直播、白板、举手提问、签到和连麦互动，适配在线授课与培训场景。',
    tone: '#2563eb',
  },
  {
    title: '作业考试',
    desc: '题库管理、自动批改、错题本和成绩分析，支持课后训练与阶段测评。',
    tone: '#7c3aed',
  },
  {
    title: '学习管理',
    desc: '学习计划、打卡提醒、证书颁发与学习报告，帮助追踪长期成长路径。',
    tone: '#16a34a',
  },
]

export const libraryGroups = [
  {
    title: '考试备考',
    docs: ['公考行测高频题库', '英语四六级写作模板', '法考真题解析', '教师资格证面试题'],
  },
  {
    title: '职场办公',
    docs: ['项目复盘模板', '年度预算表', '商务合作方案', '岗位胜任力模型'],
  },
  {
    title: '教育课件',
    docs: ['语文课堂教案', '科学实验课件', '心理健康班会 PPT', '高中历史知识图谱'],
  },
]

export const collabFeatures = [
  {
    title: '云文档协作',
    desc: '在线 Word / Excel / PPT 编辑，支持光标显示、评论 @ 和修订模式。',
  },
  {
    title: '团队空间',
    desc: '按部门和项目组隔离空间，控制查看、评论、编辑和管理权限。',
  },
  {
    title: '知识库沉淀',
    desc: '结构化知识目录、全文检索、智能推荐和知识图谱关联。',
  },
  {
    title: '会议纪要',
    desc: '语音转文字、智能摘要、待办提取和录像回看，适配远程会议场景。',
  },
]

export const collabBoards = [
  { title: '市场增长项目', members: '12 人协作', progress: '本周更新 26 次' },
  { title: '春季课程研发', members: '8 人协作', progress: '新增 4 份课件' },
  { title: '客户培训知识库', members: '15 人协作', progress: '知识条目 286 篇' },
]

export const workStudyProfile = {
  name: '成长型学习者',
  handle: '@learnflow',
  bio: '关注课程学习、模板资料和团队协作效率，常用直播教室、文库下载和会议纪要能力。',
  avatar: workStudyImage('young chinese professional learner portrait, modern office and study atmosphere, realistic', 'square_hd'),
}

export const workStudyBenefits = ['课程提醒与学习档案', 'VIP 文档不限次下载', '团队协作高级权限', '会议纪要智能摘要', '模板中心专属内容']

export const workStudyHistory = ['高效项目管理实战课 · 第 12 节', '项目复盘模板 · 最近下载', '市场增长项目周会纪要', '英语口语训练营 · 打卡第 9 天']

export const workStudyNotices = [
  '今晚 19:30 有直播课《英语口语 30 天训练营》。',
  '你所在团队空间新增 3 条协作文档评论。',
  'VIP 月卡将在 5 天后到期，可续费获取无限下载。',
]
