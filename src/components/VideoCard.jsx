import { useRef, useState } from 'react'
import './VideoCard.css'

export default function VideoCard({ work, index, variant = 'large', onOpen, showInfo = true }) {
  const vidRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const handleEnter = () => {
    const v = vidRef.current
    if (!v) return
    if (!v.getAttribute('src')) {
      v.src = work.preview
      v.load()
    }
    const p = v.play()
    if (p && p.then) p.then(() => setPlaying(true)).catch(() => {})
    else setPlaying(true)
  }

  const handleLeave = () => {
    const v = vidRef.current
    if (v) v.pause()
    setPlaying(false)
  }

  return (
    <button
      className={`vcard ${variant} ${playing ? 'is-playing' : ''}`}
      onClick={() => onOpen(work)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      aria-label={`查看作品：${work.title}`}
    >
      <div className="vcard-media">
        <img
          className="vcard-poster"
          src={work.poster}
          alt={work.title}
          loading="lazy"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
        <video
          ref={vidRef}
          className="vcard-video"
          muted
          loop
          playsInline
          preload="none"
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
          poster={work.poster}
        />
        <div className="vcard-shade" />
        {variant === 'large' && index != null && (
          <span className="vcard-index">{String(index + 1).padStart(2, '0')}</span>
        )}
        <span className="vcard-play">
          <i />
          播放
        </span>
      </div>

      {showInfo && (
        <div className="vcard-info">
          <span className="vcard-title">{work.title}</span>
          <span className="vcard-cat">{work.category}</span>
        </div>
      )}
    </button>
  )
}
