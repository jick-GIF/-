import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import './VideoModal.css'

export default function VideoModal({ work, onClose }) {
  const videoRef = useRef(null)
  // 浏览器禁止带声自动播放，先静音起播，再由用户点按钮开声
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    // 带音轨的成片在未静音时会被浏览器的自动播放策略拦下，
    // 这里先同步置静音再起播，保证和以前一样一点即播
    const v = videoRef.current
    if (!v) return
    v.muted = true
    const p = v.play()
    if (p && p.catch) p.catch(() => {})
  }, [work.id])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const modal = (
    <div className="modal" role="dialog" aria-modal="true" aria-label={work.title}>
      <div className="modal-backdrop" onClick={onClose} />

      <div className="modal-body">
        <button className="modal-close" onClick={onClose} aria-label="关闭">
          <span />
          <span />
        </button>

        <div className="modal-video-wrap">
          <video
            ref={videoRef}
            src={work.full}
            poster={work.poster}
            controls
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            onContextMenu={(e) => e.preventDefault()}
            playsInline
            muted={muted}
            onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
            className="modal-video"
          />
          <button
            className={`modal-sound${muted ? '' : ' is-on'}`}
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? '开启声音' : '关闭声音'}
          >
            {muted ? '开启声音' : '关闭声音'}
          </button>
        </div>

        <aside className="modal-info">
          <div className="modal-eyebrow">AIGC VISUAL WORK</div>
          <h3 className="modal-title">{work.title}</h3>
          <div className="modal-meta">
            <span>{work.category}</span>
            <span className="dot-sep">·</span>
            <span>{work.year}</span>
          </div>
          <p className="modal-desc">{work.desc}</p>

          <div className="modal-tags">
            {work.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <div className="modal-spec">
            <div>
              <span className="spec-k">画幅</span>
              <span className="spec-v">9:16 竖屏</span>
            </div>
            <div>
              <span className="spec-k">产出方式</span>
              <span className="spec-v">AI 生成 + 后期合成</span>
            </div>
            <div>
              <span className="spec-k">源文件</span>
              <span className="spec-v">{work.file}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
