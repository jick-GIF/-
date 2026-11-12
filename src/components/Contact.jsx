import { WORKS } from '../data/works.js'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="snap-section contact">
      <div className="grid-bg" />
      <div className="orb orb-cyan" />
      <div className="orb orb-violet" />

      <div className="page contact-inner">
        <div className="eyebrow">CONTACT · 联系我</div>
        <h2 className="h-section contact-title">
          有剧本？
          <br />
          <span className="grad-text">一起把它拍成画面。</span>
        </h2>

        <p className="contact-sub">
          开放 AIGC 短剧、AI 视觉、品牌动态包装等合作。
          支持远程协作，通常 24 小时内回复。
        </p>

        <div className="contact-grid">
          <a className="contact-item glass" href="tel:18772112761">
            <div className="ci-label">PHONE · 电话</div>
            <div className="ci-value">187 7211 2761</div>
          </a>
          <a className="contact-item glass" href="mailto:3346371442@qq.com">
            <div className="ci-label">EMAIL · 邮箱</div>
            <div className="ci-value">3346371442@qq.com</div>
          </a>
          <div className="contact-item glass">
            <div className="ci-label">LOCATION · 坐标</div>
            <div className="ci-value">中国 · 杭州</div>
          </div>
        </div>

        <div className="contact-social">
          <span className="social-label">FIND ME ON</span>
          <div className="social-links">
            <a href="#" onClick={(e) => e.preventDefault()}>抖音 / Douyin</a>
            <a href="#" onClick={(e) => e.preventDefault()}>TikTok</a>
            <a href="#" onClick={(e) => e.preventDefault()}>微信 / WeChat</a>
            <a href="#" onClick={(e) => e.preventDefault()}>小红书</a>
          </div>
        </div>
      </div>

      <footer className="contact-footer">
        <div className="page footer-inner">
          <span>© 2026 于静凯 Yu Jingkai · AIGC Visual Designer</span>
          <span>{WORKS.length} works · React + Vite · 1680px</span>
        </div>
      </footer>
    </section>
  )
}
