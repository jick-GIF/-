import { STATS } from '../data/works.js'
import './About.css'

const PORTRAIT = '/portrait.jpg'

const TAGS = [
  '#AI 短剧',
  '#电影感分镜',
  '#角色一致性',
  '#AIGC 图像',
  '#动态视觉',
  '#平台内容运营',
]

export default function About() {
  return (
    <section id="about" className="snap-section about">
      <div className="grid-bg" />
      <div className="orb orb-violet" />

      <div className="page about-wrap">
        <div className="about-inner">
          <div className="about-left">
            <div className="eyebrow">ABOUT · 关于我</div>
            <h2 className="h-section">
              让脚本
              <br />
              变成<span className="grad-text">有质感的画面</span>
            </h2>

            <p className="about-desc">
              2026 届内容创作者，3 年短视频创作与电商运营实战经验。
              熟练用剪映 / Premiere 完成成片包装，掌握 PS 修图与 AE 动效，
              熟悉抖音 / TikTok 的流量与完播逻辑。
              <br />
              <br />
              现在专注 <strong className="grad-text">AIGC 影像工作流</strong>：
              从剧本拆解、分镜设计、角色一致性控制，到 AI 生成、动态合成与字幕本地化，
              独立完成一条竖屏短剧从 0 到 1 的全流程。
            </p>

            <div className="about-tags">
              {TAGS.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="portrait-frame">
              <img src={PORTRAIT} alt="于静凯" className="portrait" />
              <div className="portrait-glow" />
              <div className="portrait-badge glass">
                <div className="badge-dot" />
                <div>
                  <div className="badge-title">于静凯</div>
                  <div className="badge-sub">AIGC Visual Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-row">
          {STATS.map((s) => (
            <div className="stat glass" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
