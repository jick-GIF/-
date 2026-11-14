import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Works from './components/Works.jsx'
import Archive from './components/Archive.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import VideoModal from './components/VideoModal.jsx'

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'works', label: 'Featured' },
  { id: 'archive', label: 'Archive' },
  { id: 'skills', label: 'Capability' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(0)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => {
      const idx = Math.round(el.scrollTop / el.clientHeight)
      setActive(Math.min(SECTIONS.length - 1, Math.max(0, idx)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = containerRef.current
    if (!el) return
    const idx = SECTIONS.findIndex((s) => s.id === id)
    if (idx >= 0) el.scrollTo({ top: idx * el.clientHeight, behavior: 'smooth' })
  }

  // 简历改为独立页面：点击按钮新开一页 /resume.html，站内不再用弹层
  const openResume = () => {
    window.open('/resume.html', '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <Navbar onNav={scrollTo} />
      <div
        className={`scroll-container ${selected ? 'locked' : ''}`}
        ref={containerRef}
      >
        <Hero onOpen={setSelected} onNav={scrollTo} onResume={openResume} />
        <About />
        <Works onOpen={setSelected} onNav={scrollTo} />
        <Archive onOpen={setSelected} />
        <Skills />
        <Contact onResume={openResume} />
      </div>

      <nav className="side-nav" aria-label="Section navigation">
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            className={`dot ${active === i ? 'active' : ''}`}
            onClick={() => scrollTo(s.id)}
            aria-label={s.label}
          >
            <span className="tip">{s.label}</span>
          </button>
        ))}
      </nav>

      {selected && (
        <VideoModal work={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}

export default App
