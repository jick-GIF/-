// 25 条作品素材：视频由 D:\ai作品集\1、D:\ai作品集\10\车位 与 D:\ai作品集\10\顶美3-4 转码而来
// poster / preview / full 分别对应 public/works、public/videos/preview、public/videos/full
// 替换作品时：换掉对应编号的文件，或改这里的 src 字段

const WORK_SOURCE = [
  {
    id: 'w01',
    file: '05.mp4',
    title: '假死出逃3',
    category: 'AI 短剧 · 夜景人物',
    year: '2026',
    desc: '城市夜色中的人物侧脸，冷暖光源对撞，用一句台词完成情绪铺垫。',
    tags: ['都市情感', '夜景', '侧脸特写'],
  },
  {
    id: 'w02',
    file: '14.mp4',
    title: '美漫车位1',
    category: 'AI 角色 · 正面特写',
    year: '2026',
    desc: 'Marco 的正面特写，硬光压出下颌轮廓，眼神承担整段叙事的张力。',
    tags: ['角色叙事', '硬光', '情绪镜头'],
  },
  {
    id: 'w03',
    file: '15.mp4',
    title: '美漫车位2',
    category: '美漫风格 · 家族对峙',
    year: '2026',
    desc: '美漫笔触的正面交锋：银发家主与红发继承人在停机坪上对峙，身后车队与随从排出纵深，三句台词把「父亲 / 家族不容挑战」的立场压在同一个画面里。',
    tags: ['美漫风格', '家族叙事', '对峙构图'],
  },
  {
    id: 'w04',
    file: '17.mp4',
    title: '美漫车位3',
    category: 'AI 短剧 · 极限特写',
    year: '2026',
    desc: '极限特写切到虹膜细节，睫毛与反光构成画面唯一的动势。',
    tags: ['极限特写', '细节', '张力'],
  },
  {
    id: 'w05',
    file: '18.mp4',
    title: '美漫车位4',
    category: 'AI 短剧 · 群像构图',
    year: '2026',
    desc: '正装队列纵深排列，用重复与压迫式构图表现家族权力的沉默。',
    tags: ['群像', '纵深构图', '权力叙事'],
  },
  {
    id: 'w06',
    file: '2.mp4',
    title: '网恋1',
    category: 'AI 角色 · 制服叙事',
    year: '2026',
    desc: '制服少女的自白镜头，封闭构图与对称光源强化仪式的秩序感。',
    tags: ['角色设定', '制服', '对称构图'],
  },
  {
    id: 'w07',
    file: '22.mp4',
    title: '黑手党女王',
    category: 'AI 短剧 · 双人关系',
    year: '2026',
    desc: '只拍一只手的克制动作，用局部接触完成两人的关系说明。',
    tags: ['双人镜头', '手部动作', '克制表达'],
  },
  {
    id: 'w08',
    file: '3.mp4',
    title: '网恋2',
    category: 'AI 角色 · 冷调反差',
    year: '2026',
    desc: '蓝调冷光打在人物脸上，与台词形成反差，制造剧情反转的伏笔。',
    tags: ['冷调', '反转', '台词设计'],
  },
  {
    id: 'w09',
    file: '4.mp4',
    title: '假死出逃1',
    category: 'AI 场景 · 环境光影',
    year: '2026',
    desc: '窗边环境空镜，暖光穿透玻璃，斑驳地板承担年代感的叙事。',
    tags: ['环境空镜', '暖光', '场景设定'],
  },
  {
    id: 'w10',
    file: '5.mp4',
    title: '假死出逃2',
    category: 'AI 短剧 · 道具叙事',
    year: '2026',
    desc: '咖啡桌与展览邀请卡同框，午后侧光把关键道具变成剧情线索。',
    tags: ['道具叙事', '午后光', '伏笔'],
  },
  {
    id: 'w11',
    file: '8.mp4',
    title: '荣耀1',
    category: 'AI 短剧 · 家族气压',
    year: '2026',
    desc: '双人半身构图，法语台词与长辈的目光共同压出家族的等级秩序。',
    tags: ['双人构图', '家族', '多语种字幕'],
  },
  {
    id: 'w12',
    file: '99.mp4',
    title: '荣耀2',
    category: 'AI 角色 · 烛光肖像',
    year: '2026',
    desc: '烛光下的微笑特写，背景散景把人物从环境里剥离出来。',
    tags: ['烛光', '散景', '肖像'],
  },
  {
    id: 'w13',
    file: '黑.mp4',
    title: '黑手党女王2',
    category: 'AI 角色 · 暗场压光',
    year: '2026',
    desc: '黑色皮草与暗场压光，人物第一次出场即确立身份与距离感。',
    tags: ['暗场', '角色出场', '压光'],
  },
  {
    id: 'w14',
    file: '精选作品1.mp4',
    title: '抢婚纱',
    category: 'AI 短剧 · 柔光情绪',
    year: '2026',
    desc: '侧脸回避视线，柔光与低饱和共同表现被打断的对白与沉默。',
    tags: ['柔光', '侧脸', '低饱和'],
  },
  {
    id: 'w15',
    file: '精选作品3.mp4',
    title: '水果车位',
    category: 'AIGC 风格化 · 角色设计',
    year: '2026',
    desc: '高饱和红色发饰与正装造型，风格化角色设定，细节密度极高。',
    tags: ['风格化', '角色设计', '高饱和'],
  },
  {
    id: 'w16',
    file: '手党.mp4',
    title: '黑手党女王3',
    category: 'AI 短剧 · 夜景动作',
    year: '2026',
    desc: '庭院夜景的双人对峙，门廊灯光切出明暗边界，暗示动作即将发生。',
    tags: ['夜景', '动作前奏', '门廊光'],
  },
  {
    id: 'w17',
    file: '首屏作品1.mp4',
    title: '抢婚纱',
    category: 'AI 短剧 · 电影感分镜',
    year: '2026',
    desc: '纽约天际线前的车边对峙，长焦压缩空间，人物与城市形成尺度对比。',
    tags: ['电影感', '城市外景', '长焦'],
    featured: 2,
  },
  {
    id: 'w18',
    file: '首屏作品2.mp4',
    title: '水果车位',
    category: 'AIGC 风格化 · 异色瞳',
    year: '2026',
    desc: '紫色调面部特写与异色瞳设定，用配色直接标注角色的非现实属性。',
    tags: ['异色瞳', '紫色调', '风格化'],
    featured: 3,
  },
  {
    id: 'w19',
    file: '首屏作品3.mp4',
    title: '美漫',
    category: 'AI 角色 · 情绪特写',
    year: '2026',
    desc: '手持电话的近景，冷汗与失焦背景一起把台词的压力推到顶点。',
    tags: ['情绪特写', '电话戏', '近景'],
  },
  {
    id: 'w20',
    file: '首屏作品4.mp4',
    title: '网恋2',
    category: 'AI 肖像 · 日光柔调',
    year: '2026',
    desc: '针织开衫与自然日光，去掉戏剧化打光后的人物日常肖像。',
    tags: ['日常肖像', '自然光', '柔和'],
  },
  {
    id: 'w21',
    file: '首屏作品5.mp4',
    title: '网恋3',
    category: 'AI 肖像 · 冷白调',
    year: '2026',
    desc: '浅发色少女的正脸肖像，冷白调与浅景深，用于角色首次亮相。',
    tags: ['肖像', '冷白调', '角色亮相'],
  },
  {
    id: 'w22',
    file: '车位/1.mp4',
    title: '谁抢了我的车位',
    category: 'AI 短剧 · 停机坪场景',
    year: '2026',
    desc: '停机坪上的家族宣示：黑衣继承人的狮头胸针特写开场，台词是「Even the greatest Dons bow their heads」；随后机车冲上跑道，「Bellini 家族拥有一切」收尾。',
    tags: ['停机坪', '家族宣示', '机车冲刺'],
    featured: 1,
  },
  {
    id: 'w23',
    file: '车位/2.mp4',
    title: '车位2',
    category: 'AI 短剧 · 双人威胁',
    year: '2026',
    desc: '战机前的对峙：金发女郎举枪宣布「家族定规矩」，黑衣人被枪口抵住，一句「她的傲慢激怒了我」把两条家族的冲突推到临界点。',
    tags: ['对峙', '枪口特写', '家族'],
  },
  {
    id: 'w24',
    file: '顶美3-4/原片/3.mp4',
    title: '顶美1',
    category: 'AI 短剧 · 三角关系',
    year: '2026',
    desc: '机场外的三角关系：金发女孩质问「Cole 为什么替她说话」，走廊尽头的黑发女孩只回一句「没关系」，少年 Cole 的正面特写把沉默压得很紧。',
    tags: ['三角关系', '对峙', '人物特写'],
  },
  {
    id: 'w25',
    file: '顶美3-4/原片/4.mp4',
    title: '顶美2',
    category: 'AI 短剧 · 屏幕叙事',
    year: '2026',
    desc: '车内的告白与手机屏幕：一句「我的胸口还疼」把两人拉近，副驾上「你父母在国外」挑明处境，结尾落在手机对话「她很漂亮，但她……」，把三角关系摊在屏幕上。',
    tags: ['车内', '手机对话', '三角关系'],
    featured: 4,
  },
].map((w) => ({
  ...w,
  poster: `/works/${w.id}.jpg`,
  preview: `/videos/preview/${w.id}.mp4`,
  full: `/videos/full/${w.id}.mp4`,
}))

export const WORKS = WORK_SOURCE
// featured 用 1-4 的序号标记精选位顺序，过滤后按序号排序，改顺序只需改数字
export const FEATURED = WORK_SOURCE.filter((w) => w.featured).sort(
  (a, b) => a.featured - b.featured
)
// 归档排序：标题末尾数字视为系列编号（「假死出逃3」→ 假死出逃 + 3，无数字记 0）
// 同一系列排在一起、系列内按编号从小到大；系列之间按各自第一次出现的位置，顺序稳定
const splitSeries = (title) => {
  const m = title.match(/^(.*?)(\d+)$/)
  return m ? { base: m[1], num: Number(m[2]) } : { base: title, num: 0 }
}

const sortBySeries = (list) => {
  const firstIndex = new Map()
  list.forEach((w, i) => {
    const { base } = splitSeries(w.title)
    if (!firstIndex.has(base)) firstIndex.set(base, i)
  })

  return list
    .map((w, i) => ({ w, i, k: splitSeries(w.title) }))
    .sort((a, b) => {
      const ga = firstIndex.get(a.k.base)
      const gb = firstIndex.get(b.k.base)
      if (ga !== gb) return ga - gb
      return a.k.num - b.k.num || a.i - b.i
    })
    .map((item) => item.w)
}

export const ARCHIVE = sortBySeries(WORK_SOURCE.filter((w) => !w.featured))

// 首屏右侧轮播：5 条首屏级作品
export const HERO_REEL = ['w17', 'w18', 'w19', 'w20', 'w21'].map((id) =>
  WORK_SOURCE.find((w) => w.id === id)
)

export const HERO_BG = '/videos/full/w17.mp4'

export const STATS = [
  { num: '25', label: '部 AIGC 视觉成片', sub: '短剧 / 角色 / 场景' },
  { num: '5W+', label: '单条播放峰值', sub: '海外账号实测' },
  { num: '10+', label: '商业剪辑商单', sub: '信息流 / 影视解说' },
  { num: '2Y', label: '内容创作经验', sub: '剪辑 + 运营' },
]
