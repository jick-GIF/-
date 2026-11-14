import { ARCHIVE, WORKS } from '../data/works.js'
import VideoCard from './VideoCard.jsx'
import './Archive.css'

export default function Archive({ onOpen }) {
  // 归档始终排两行，列数按条目数自动算，后续再加作品也不会溢出整屏
  const cols = Math.ceil(ARCHIVE.length / 2)

  return (
    <section id="archive" className="snap-section archive">
      <div className="grid-bg" />
      <div className="orb orb-violet" />

      <div className="page archive-inner">
        <div className="archive-head">
          <div className="archive-head-left">
            <span className="archive-kicker">ARCHIVE</span>
            <h2 className="archive-title">全部作品</h2>
          </div>
          <p className="archive-desc muted">
            角色特写、场景空镜与风格化实验。
            全部为 AI 生成 + 后期合成，按编号归档。
          </p>
        </div>

        <div
          className="archive-grid"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {ARCHIVE.map((w) => (
            <VideoCard
              key={w.id}
              work={w}
              variant="small"
              onOpen={onOpen}
            />
          ))}
        </div>

        <div className="archive-foot">
          <span className="archive-line" />
          <span>
            {ARCHIVE.length} / {WORKS.length} · AIGC VISUAL ARCHIVE · 2026
          </span>
        </div>
      </div>
    </section>
  )
}
