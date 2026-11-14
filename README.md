# 于静凯 · AIGC 视觉设计师作品集

暗色科技风个人作品集网站，React 19 + Vite 8 构建，PC 端整页翻页滚动（6 屏：Hero / 关于 / 精选作品 / 全部作品 / 能力 / 联系），版心 1680px。

站内 25 件作品来自本机素材目录 `D:\ai作品集\1`、`D:\ai作品集\10\车位` 与 `D:\ai作品集\10\顶美3-4`，已转码为竖屏 9:16 视频卡片：悬停自动播放 6 秒预览片段，点击打开全片播放 + 创作说明弹窗。

---

## 一、本地预览

开发态（已开箱可用）：

```powershell
cd "C:\Users\于静凯\Doubao\chats\2026-11-12\new-chat\portfolio"
npm run dev
# 打开 http://127.0.0.1:5173
```

如果本机 `npm` 不在 PATH 里，可以直接用内置 node 起服务：

```powershell
C:\Users\于静凯\AppData\Local\Doubao\User Data\sandbox_runtime\bases\772984f6fd3a8ae0ae7d2422cd7c2bfa\node\node.exe node_modules\vite\bin\vite.js --host 127.0.0.1 --port 5173
```

生产构建（产物在 `dist/`，可直接部署到任意静态托管）：

```powershell
npm run build
```

---

## 二、目录结构

```
portfolio/
├─ index.html                 入口页（含字体、meta）
├─ src/
│  ├─ App.jsx                 6 屏编排、滚动监听、弹窗状态、滚动锁
│  ├─ index.css               设计令牌（配色 / 版心 / 断点）、整页滚动容器
│  ├─ data/works.js           25 条作品元数据（标题 / 分类 / 描述 / tags / 精选标记）
│  └─ components/
│     ├─ Navbar.jsx+css       顶部导航（毛玻璃）
│     ├─ Hero.jsx+css         首屏：模糊视频背景 + 大标题 + 9:16 Showreel 轮播
│     ├─ About.jsx+css        关于：人物肖像 + 精简介绍 + 6 个标签 + 4 组项目数据
│     ├─ Works.jsx+css        精选作品：大标题「精选作品」+ 首张放大 + 信息栏 + 下方 3 张无标题缩略卡 + 右栏说明
│     ├─ Archive.jsx+css      全部作品：21 条归档（列数按条目数自动算，固定两行）
│     ├─ VideoCard.jsx+css    作品卡：悬停加载并播放预览、点击开弹窗
│     ├─ VideoModal.jsx+css   全片播放弹窗 + 右侧创作说明面板
│     ├─ Skills.jsx+css       能力可视化：6 条能力条 + 4 张软技能卡
│     └─ Contact.jsx+css      页尾：邮箱 / 电话 / 坐标 / 社交入口
└─ public/
   ├─ portrait.jpg            人物肖像（4:5，1080×1350，本人照片）
   ├─ works/w01..w25.jpg      25 张封面（540 宽 JPEG）
   └─ videos/
      ├─ preview/w01..w25.mp4 25 条悬停预览（6s / 480 宽 / 无音轨）
      └─ full/w01..w25.mp4    25 条完整成片（720 宽 / faststart / AAC 96k 音轨）
```

---

## 三、素材与编号对应（按文件名排序后重新编号）

| 编号 | 源文件 | 作品标题 | 栏目 |
|---|---|---|---|
| w01 | 05.mp4 | 假死出逃 | 归档 |
| w02 | 14.mp4 | 美漫车位1 | 归档 |
| w03 | 15.mp4 | 美漫车位2 | 归档 |
| w04 | 17.mp4 | 美漫车位3 | 归档 |
| w05 | 18.mp4 | 美漫车位4 | 归档 |
| w06 | 2.mp4 | 网恋1 | 归档 |
| w07 | 22.mp4 | 黑手党女王 | 归档 |
| w08 | 3.mp4 | 网恋2 | 归档 |
| w09 | 4.mp4 | 假死出逃2 | 归档 |
| w10 | 5.mp4 | 假死出逃 | 归档 |
| w11 | 8.mp4 | 荣耀1 | 归档 |
| w12 | 99.mp4 | 荣耀2 | 归档 |
| w13 | 黑.mp4 | 黑手党女王2 | 归档 |
| w14 | 精选作品1.mp4 | 抢婚纱 | 归档 |
| w15 | 精选作品3.mp4 | 水果车位 | 归档 |
| w16 | 手党.mp4 | 黑手党女王3 | 归档 |
| w17 | 首屏作品1.mp4 | 抢婚纱 | **精选 02 + 首屏背景 + 轮播** |
| w18 | 首屏作品2.mp4 | 水果车位 | **精选 03 + 轮播** |
| w19 | 首屏作品3.mp4 | 美漫 | 归档 + 轮播 |
| w20 | 首屏作品4.mp4 | 网恋2 | 轮播 |
| w21 | 首屏作品5.mp4 | 网恋3 | 轮播 |
| w22 | 车位/1.mp4 | 谁抢了我的车位 | **精选 01** |
| w23 | 车位/2.mp4 | 车位2 | 归档 |
| w24 | 顶美3-4/原片/3.mp4 | 顶美1 | 归档 |
| w25 | 顶美3-4/原片/4.mp4 | 顶美2 | **精选 04** |

---

## 四、换成新作品怎么做

### 1. 只换视频（标题描述沿用原编号）

把新素材转成同规格，替换同名文件即可，无需改代码：

```powershell
# 封面：第 1.5 秒，540 宽
ffmpeg -y -ss 1.5 -i "D:\ai作品集\1\首屏作品1.mp4" -frames:v 1 -vf "scale=540:-2" public\works\w17.jpg

# 悬停预览：前 6 秒，480 宽，无音轨
ffmpeg -y -i "D:\ai作品集\1\首屏作品1.mp4" -t 6 -an -vf "scale=480:-2" -c:v libx264 -crf 30 -preset veryfast -movflags +faststart public\videos\preview\w17.mp4

# 完整成片：720 宽，faststart，保留音轨（AAC 96k 立体声）
ffmpeg -y -i "D:\ai作品集\1\首屏作品1.mp4" -vf "scale=720:-2" -c:v libx264 -crf 27 -preset veryfast -c:a aac -b:a 96k -ac 2 -movflags +faststart public\videos\full\w17.mp4
```

成片带音轨，悬停预览保持静音（浏览器对带声自动播放有策略限制，卡片悬停只播画面）；弹窗打开默认静音起播，左上角「开启声音」按钮切到有声。

ffmpeg 位置：`C:\Users\于静凯\AppData\Local\Temp\ffmpeg_dl\ffmpeg-9.0.2-essentials_build\bin\ffmpeg.exe`（换机器可重新下载 gyan.dev essentials build）。

### 2. 换标题 / 分类 / 描述 / 精选

只改 `src/data/works.js` 里对应条目：

- `title` 作品标题，`category` 分类，`desc` 弹窗里的创作说明，`tags` 弹窗标签
- `featured: 1~4` 决定它进"精选作品"大卡并决定排列位置（1 在最左），其余自动进"全部作品"归档；改顺序只改这个数字
- 首屏右侧轮播取 `HERO_REEL = ['w17','w18','w19','w20','w21']`；首屏背景取 `HERO_BG`

### 3. 换人物照片

直接覆盖 `public/portrait.jpg`（建议 4:5 竖构图，1000×1250 以上）；或在 `src/components/About.jsx` 里改 `PORTRAIT` 常量。

---

## 五、验证记录

- `npm run build` 通过（35 modules，dist 正常产出）
- 悬停预览：鼠标进入作品卡自动加载并播放 `videos/preview/wNN.mp4`，移出暂停复位
- 弹窗播放：打开即静音自动播放 `videos/full/wNN.mp4`（带音轨），点左上角「开启声音」切换有声，Esc / 遮罩 / 关闭按钮均可关闭
- 下载权限：播放器控制条隐藏下载按钮（`controlsList="nodownload"`），视频与封面图禁右键另存、禁拖拽，关闭画中画与远程投屏。这是前端遮挡，能挡访客随手另存；彻底禁止需部署侧配合（Referer 防盗链 / 签名 URL / CDN 鉴权）
- 点击任意作品卡 → 弹窗播放 `videos/full/wNN.mp4`（720p，带原生控制条），右侧显示标题 / 分类 / 时间 / 说明 / tags / 画幅 / 产出方式 / 源文件
- 弹窗关闭：右上角按钮、点击遮罩、`Esc` 三种方式均生效；打开期间底层页面锁定不滚动
- 6 屏内容高度均在一屏内（hero 563 / about 638 / works 735 / archive 542 / skills 527 / contact 445 @ 883px 视口），不出现半截滚动；归档 21 条按条目数自动排 11 列两行，标题允许两行显示，后续再加作品列数自动增加

---

## 六、待补充

- 社交链接（抖音 / TikTok / 微信 / 小红书）目前是占位 `href="#"`，提供真实主页后替换 `src/components/Contact.jsx` 中的 `SOCIALS`
- 上线前如需绑定域名/部署，建议 `npm run build` 后把 `dist/` 上传到静态托管（视频较大，注意开启 Range 支持）

## 简历入口（2026-11-13）

- 源文件：`D:\简历\简历-后期制作.docx`，用本机 Word（`WINWORD.EXE`）的 COM `ExportAsFixedFormat($dst, 17)` 导出 1 页 PDF（154,804 字节），排版与 Word 原稿一致。
- 站内资源：只有 `public/resume-preview.png`（1667×2358，A4 比例 0.707，478,180 字节，2026-11-14 换新简历）。PDF 已按要求从 public 删除，站内不提供下载/直链。
- 页面尺寸：源 DOCX 原为 Letter（612×792pt），导出时在 Word 里临时改为 A4（595.3×842pt）后导出，内容重排后仍是 1 页；原 DOCX 未被改动。
- 入口：首屏 Hero 第三个按钮「查看简历 ↗」、页尾 Contact 「查看简历 / RESUME ↗」，两者都打开 `ResumeModal` 全屏弹层。
- 弹层内容：顶部信息条（于静凯 · 简历 / 后期制作 / 杭州 / 1 年经验）+「仅供在线查看」+ 可滚动的简历长图；长图按 A4 原始比例显示（760 × 1075，不压缩）；图片禁右键/禁拖拽；Esc 或点遮罩或 × 关闭。
- 为什么弹层里放长图而不是 iframe：直接把 PDF 塞进 iframe 会在本机浏览器里触发下载并把整页顶掉（实测多次），长图渲染稳定，且缩放后整页可读；PDF 仍保留给下载与新窗口。
- 简历 PDF 里保留了嘉兴九州（AI 短剧制作师 2026.08–2026.11），而 About 屏正文已按要求不写九州；两处口径有意不同，改简历内容需重新导出 PDF 并重生成长图。
## 归档排序规则（2026-11-13）

- 标题末尾数字当作系列编号：「假死出逃3」= 系列「假死出逃」编号 3，无数字记 0（排在该系列最前）。
- 同一系列相邻排列、系列内按编号从小到大；系列之间的先后按该系列在 WORK_SOURCE 里第一次出现的位置，加新作品不会打乱既有顺序。
- 排序在 src/data/works.js 的 sortBySeries() 里做，ARCHIVE 已按此排序导出；改标题文字即可影响分组。
- 当前顺序：假死出逃1/2/3 → 美漫车位1-4 → 网恋1/2/2/3 → 黑手党女王/2/3 → 荣耀1/2 → 抢婚纱 → 水果车位 → 美漫 → 车位2 → 顶美1。

## 2026-11-14 简历改为独立页面

- 简历不再是弹层：src/components/ResumeModal.jsx / ResumeModal.css 已删除，App.jsx 里 esumeOpen 状态一并移除。
- 新增静态页 public/resume.html（深色主题、顶栏「仅供在线查看」+「返回作品集 ←」、A4 长图最大 880px、禁右键/禁拖拽、页面无任何下载链接）。构建后自动出现在 dist/resume.html。
- Hero「查看简历 ↗」与 Contact「查看简历 / RESUME ↗」改为 window.open('/resume.html', '_blank', 'noopener,noreferrer')，点击新开一页，不再锁滚动。

## 2026-11-14 批注改动

- 精选屏去掉全部序号：删除 .feature-no（原「01」）与主推卡/缩略卡的 card-index 徽标，VideoCard 的 index 参数在精选屏不再传值。
- 归档屏标题：删掉 h2「其余 21 条素材归档」，把眉标改为 rchive-kicker ARCHIVE + 大号 rchive-title 全部作品（clamp(30px,3vw,40px) / 700），右侧说明文案保留；归档内容高 542 → 507px。
