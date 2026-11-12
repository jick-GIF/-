import { useEffect, useRef, useState } from 'react'
import './Skills.css'

const HARD_SKILLS = [
  { name: 'AI 视频生成', en: '即梦 / 可灵 / Runway', level: 88 },
  { name: '剪映专业版', en: 'CapCut Pro', level: 90 },
  { name: 'AI 图像生成', en: 'Midjourney / Stable Diffusion', level: 82 },
  { name: '分镜与叙事', en: 'Storyboard / Script', level: 78 },
  { name: 'Premiere Pro', en: 'Premiere Pro', level: 65 },
  { name: 'After Effects', en: 'After Effects', level: 42 },
]

const SOFT_SKILLS = [
  {
    no: '01',
    title: '分镜设计',
    desc: '从剧本拆台词、定景别、排镜头顺序，把文字节拍翻译成画面节拍。',
  },
  {
    no: '02',
    title: '角色一致性',
    desc: '同一角色跨镜头保持脸型、发型、服装与光感，避免 AI 生成的跳脸。',
  },
  {
    no: '03',
    title: '平台化交付',
    desc: '9:16 竖屏构图、字幕本地化、封面与首屏视觉，直接对齐海外短剧分发。',
  },
  {
    no: '04',
    title: '独立闭环',
    desc: '需求沟通 → 分镜 → 生成 → 合成剪辑 → 成片交付，商单可独立跑完。',
  },
]

function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="snap-section skills" ref={ref}>
      <div className="grid-bg" />
      <div className="orb orb-violet" />

      <div className="page skills-inner">
        <div className="skills-head">
          <div className="eyebrow">CAPABILITY · 个人优势</div>
          <h2 className="h-section">
            工具 + 审美 + <span className="grad-text">AI 工作流</span>
          </h2>
        </div>

        <div className="skills-body">
          <div className="skill-bars">
            {HARD_SKILLS.map((s, i) => (
              <div className="skill-bar" key={s.name}>
                <div className="skill-bar-head">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-en muted">{s.en}</span>
                  <span className="skill-pct">{s.level}%</span>
                </div>
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{
                      width: inView ? `${s.level}%` : '0%',
                      transition: `width 1.2s cubic-bezier(0.2,0.7,0.2,1) ${i * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="skill-cards">
            {SOFT_SKILLS.map((s) => (
              <div className="skill-card glass" key={s.no}>
                <div className="skill-card-num">{s.no}</div>
                <div className="skill-card-title">{s.title}</div>
                <div className="skill-card-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
