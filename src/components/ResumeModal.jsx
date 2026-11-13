import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './ResumeModal.css'

// 站内只展示长图，不提供 PDF 下载/直链（PDF 已从 public 移除）
const PREVIEW = '/resume-preview.png'

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return createPortal(
    <div className="resume-overlay" onClick={onClose}>
      <div className="resume-panel" onClick={(e) => e.stopPropagation()}>
        <header className="resume-bar">
          <div className="resume-bar-title">
            <span className="resume-dot" />
            于静凯 · 简历
            <em>后期制作 / 杭州 / 1 年经验</em>
          </div>

          <div className="resume-bar-actions">
            <span className="resume-viewonly">仅供在线查看</span>
            <button className="resume-close" onClick={onClose} aria-label="关闭简历">
              ×
            </button>
          </div>
        </header>

        <div
          className="resume-scroll"
          onContextMenu={(e) => e.preventDefault()}
        >
          <img
            src={PREVIEW}
            alt="于静凯的简历"
            className="resume-page"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </div>,
    document.body,
  )
}
