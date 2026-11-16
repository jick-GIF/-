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
              具备短视频剪辑、电商内容运营与 AIGC 影像的复合经验。
              熟练用剪映完成剪辑包装，掌握 Premiere 基础操作，了解 PS / AE，
              熟悉抖音 / TikTok 的流量与完播逻辑。
              <br />
              <br />
              专注 <strong className="grad-text">竖屏 AI 短剧</strong>：
              从分镜拆解、人物与资产生成、AI 视频生成，
              到后期剪辑、配音配乐与成片交付，能独立跑完整条链路。
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
