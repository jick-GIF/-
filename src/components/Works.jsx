import { FEATURED, ARCHIVE } from '../data/works.js'
import VideoCard from './VideoCard.jsx'
import './Works.css'

export default function Works({ onOpen, onNav }) {
  const hero = FEATURED[0]
  const rest = FEATURED.slice(1)

  return (
    <section id="works" className="snap-section works">
      <div className="grid-bg" />
      <div className="orb orb-cyan" />

      <div className="page works-inner">
        <div className="works-head">
          <span className="works-kicker">FEATURED</span>
          <h2 className="works-title">精选作品</h2>
        </div>

        <div className="feature-block">
          <div className="feature-main">
            <VideoCard work={hero} onOpen={onOpen} />
          </div>

          <div className="feature-side">
            <div className="feature-flag">
              <span className="feature-tag">本期主推</span>
            </div>
            <h3 className="feature-title">{hero.title}</h3>
            <div className="feature-cat">{hero.category}</div>
            <p className="feature-desc">{hero.desc}</p>
            {(hero.tags || []).length > 0 && (
              <div className="feature-tags">
                {hero.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            )}
            <button className="btn btn-primary feature-cta" onClick={() => onOpen(hero)}>
              播放完整成片 →
            </button>
          </div>

          <div className="feature-thumbs">
            {rest.map((w) => (
              <VideoCard
                key={w.id}
                work={w}
                onOpen={onOpen}
                showInfo={false}
              />
            ))}
          </div>

          <aside className="feature-rail">
            <div className="rail-label">NOTES · 这组精选</div>
            <p className="rail-desc">
              竖屏 9:16 AIGC 影像，悬停即播片段，
              点击可查看完整成片与创作说明。
            </p>
            <button className="rail-more" onClick={() => onNav && onNav('archive')}>
              全部作品 <em>{ARCHIVE.length}</em> 件
              <span>→</span>
            </button>
          </aside>
        </div>
      </div>
    </section>
  )
}
