import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Journals', href: '#journals', sub: ['Biotechnology', 'Neurology', 'Gastroenterology', 'Clinical Nutrition'] },
  { label: 'eBooks', href: '#ebooks' },
  { label: 'Conferences', href: '#conferences' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [drop, setDrop] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.95)' : '#fff',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: '1px solid #e2e8f0',
      transition: 'background .2s',
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', height: 60, gap: 32 }}>

        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: '#2563eb',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 800, fontSize: 15, letterSpacing: -1,
          }}>M</div>
          <span style={{ fontWeight: 700, fontSize: 16, color: '#0f172a', letterSpacing: -.02 }}>MedDocs</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }} className="d-nav">
          {links.map(l => (
            <div key={l.label} style={{ position: 'relative' }}
              onMouseEnter={() => l.sub && setDrop(l.label)}
              onMouseLeave={() => setDrop(null)}>
              <a href={l.href} style={{
                display: 'flex', alignItems: 'center', gap: 4,
                padding: '6px 12px', borderRadius: 8,
                fontSize: 14, fontWeight: 500, color: '#374151',
                transition: 'background .15s, color .15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#0f172a'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#374151'; }}>
                {l.label}
                {l.sub && <ChevronDown size={13} style={{ opacity: .5 }} />}
              </a>

              {l.sub && drop === l.label && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 4px)', left: 0,
                  background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10,
                  boxShadow: '0 8px 24px rgba(0,0,0,.1)', padding: 6,
                  minWidth: 180, zIndex: 200,
                }}>
                  {l.sub.map(s => (
                    <a key={s} href="#journals" style={{
                      display: 'block', padding: '8px 12px', borderRadius: 7,
                      fontSize: 13.5, color: '#374151',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#0f172a'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#374151'; }}>
                      {s}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <a href="#submit" className="btn btn-primary d-nav" style={{ fontSize: 13, padding: '8px 18px', flexShrink: 0 }}>
          Submit Manuscript
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(o => !o)} className="m-nav" style={{ marginLeft: 'auto', color: '#374151', padding: 6, borderRadius: 8 }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop: '1px solid #e2e8f0', background: '#fff', padding: '12px 28px 20px' }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '10px 0',
              borderBottom: '1px solid #f1f5f9',
              fontSize: 15, fontWeight: 500, color: '#374151',
            }}>{l.label}</a>
          ))}
          <a href="#submit" className="btn btn-primary" style={{ marginTop: 16, justifyContent: 'center', width: '100%' }}>
            Submit Manuscript
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 800px) { .d-nav { display: none !important; } .m-nav { display: flex !important; } }
        @media (min-width: 801px) { .m-nav { display: none !important; } }
      `}</style>
    </header>
  );
}
