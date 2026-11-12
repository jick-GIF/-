import './Navbar.css'

const LINKS = [
  { id: 'about', label: '关于' },
  { id: 'works', label: '精选作品' },
  { id: 'archive', label: '全部作品' },
  { id: 'skills', label: '能力' },
  { id: 'contact', label: '联系' },
]

export default function Navbar({ onNav }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <button className="logo" onClick={() => onNav('hero')}>
          <span className="logo-mark">YK</span>
          <span className="logo-text">
            YU <span className="muted">/</span> JINGKAI
          </span>
        </button>

        <nav className="nav-links">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => onNav(l.id)}>
              {l.label}
            </button>
          ))}
          <button className="btn btn-primary nav-cta" onClick={() => onNav('contact')}>
            合作咨询 →
          </button>
        </nav>
      </div>
    </header>
  )
}
