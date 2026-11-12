import { useEffect, useState } from 'react'
import { HERO_BG, HERO_REEL, WORKS } from '../data/works.js'
import './Hero.css'

export default function Hero({ onOpen, onNav }) {
  const [idx, setIdx] = useState(0)
  const current = HERO_REEL[idx]

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % HERO_REEL.length)
    }, 7000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="hero" className="snap-section hero">
      <div className="hero-bg-wrap">
        <video
          className="hero-bg-video"
          src={HERO_BG}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
        />
        <div className="hero-video-mask" />
      </div>

      <div className="grid-bg" />
      <div className="orb orb-cyan" />
      <div className="orb orb-violet" />

      <div className="page hero-inner">
        <div className="hero-copy">
          <div className="eyebrow rise rise-1">AIGC VISUAL · PORTFOLIO 2026</div>

          <h1 className="h-display rise rise-2">
            于静凯
            <br />
            <span className="grad-text">AIGC Visual</span> Designer
          </h1>

          <p className="hero-sub rise rise-3">
            用 AI 生成影像，用剪辑完成叙事。
            专注 AI 短剧 / 电影感分镜 / 角色一致性，
            把脚本变成有质感的画面。
          </p>

          <div className="hero-actions rise rise-4">
            <button className="btn btn-primary" onClick={() => onNav('works')}>
              查看精选作品 ↓
            </button>
            <button className="btn btn-ghost" onClick={() => onNav('contact')}>
              联系我 →
            </button>
          </div>

          <div className="hero-meta rise rise-5">
            <div className="meta-item">
              <span className="meta-num">{WORKS.length}</span>
              <span className="meta-label">AIGC 视觉成片</span>
            </div>
            <div className="meta-divider" />
            <div className="meta-item">
              <span className="meta-num">5W+</span>
              <span className="meta-label">单条播放峰值</span>
            </div>
            <div className="meta-divider" />
            <div className="meta-item">
              <span className="meta-num">3Y</span>
              <span className="meta-label">内容创作经验</span>
            </div>
          </div>
        </div>

        {/* 右侧竖屏 Showreel */}
        <div className="hero-reel rise rise-3">
          <div className="reel-frame">
            <video
              key={current.id}
              src={current.preview}
              poster={current.poster}
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
              className="reel-video"
            />
            <div className="reel-grad" />

            <div className="reel-top">
              <span className="reel-tag">SHOWREEL</span>
              <span className="reel-count">
                {String(idx + 1).padStart(2, '0')} / {String(HERO_REEL.length).padStart(2, '0')}
              </span>
            </div>

            <button className="reel-play" onClick={() => onOpen(current)}>
              <span className="play-icon" />
              播放完整作品
            </button>

            <div className="reel-dots">
              {HERO_REEL.map((w, i) => (
                <button
                  key={w.id}
                  className={`reel-dot ${i === idx ? 'on' : ''}`}
                  onClick={() => setIdx(i)}
                  aria-label={w.title}
                />
              ))}
            </div>
          </div>

          <div className="reel-caption">
            <span className="reel-title">{current.title}</span>
            <span className="reel-cat">{current.category}</span>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="mouse">
          <div className="wheel" />
        </div>
        <span>SCROLL</span>
      </div>
    </section>
  )
}
