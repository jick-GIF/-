import { FEATURED } from '../data/works.js'
import VideoCard from './VideoCard.jsx'
import './Works.css'

export default function Works({ onOpen }) {
  return (
    <section id="works" className="snap-section works">
      <div className="grid-bg" />
      <div className="orb orb-cyan" />

      <div className="page works-inner">
        <div className="works-head">
          <div>
            <div className="eyebrow">FEATURED · 精选作品</div>
            <h2 className="h-section">
              AI 短剧 <span className="grad-text">四组代表镜头</span>
            </h2>
          </div>
          <p className="works-desc muted">
            竖屏 9:16 AIGC 影像。悬停即播片段，
            点击查看完整成片与创作说明。
          </p>
        </div>

        <div className="works-grid">
          {FEATURED.map((w, i) => (
            <VideoCard key={w.id} work={w} index={i} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  )
}
