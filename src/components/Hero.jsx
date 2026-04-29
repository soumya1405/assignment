import React, { useState } from 'react';
import { Search, ArrowRight, BookOpen, Users, Globe, Award } from 'lucide-react';

const stats = [
  { icon: BookOpen, value: '500+', label: 'Journals' },
  { icon: Users, value: '12K+', label: 'Authors' },
  { icon: Globe, value: '90+', label: 'Countries' },
  { icon: Award, value: '98%', label: 'Peer Reviewed' },
];

export default function Hero() {
  const [q, setQ] = useState('');

  return (
    <section id="home" style={{ background: '#fff', padding: '80px 0 0', borderBottom: '1px solid #e2e8f0' }}>
      <div className="wrap">

        {/* Badge */}
        <div style={{ marginBottom: 24 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: '#eff6ff', color: '#2563eb',
            fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 20,
            border: '1px solid #bfdbfe',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
            Open Access Medical Publishing Platform
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <h1 style={{
              fontSize: 'clamp(2rem, 3.6vw, 3rem)',
              fontWeight: 700,
              color: '#0f172a',
              lineHeight: 1.2,
              letterSpacing: '-.03em',
              marginBottom: 18,
            }}>
              Advancing Medical Knowledge for a Healthier World
            </h1>

            <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7, marginBottom: 36, maxWidth: 460 }}>
              Peer-reviewed journals, e-books, and conferences across 20+ medical specialties — empowering researchers and clinicians worldwide.
            </p>

            {/* Search */}
            <div style={{
              display: 'flex', alignItems: 'center',
              border: '1.5px solid #e2e8f0', borderRadius: 10,
              background: '#fff', marginBottom: 32,
              boxShadow: '0 1px 4px rgba(0,0,0,.06)',
              overflow: 'hidden',
            }}>
              <span style={{ padding: '0 14px', color: '#94a3b8', display: 'flex' }}>
                <Search size={17} />
              </span>
              <input
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder="Search journals, articles, authors…"
                style={{
                  flex: 1, border: 'none', outline: 'none',
                  fontSize: 14, color: '#0f172a', padding: '13px 0',
                  fontFamily: 'Inter, sans-serif', background: 'transparent',
                }}
              />
              <button style={{
                background: '#2563eb', color: '#fff',
                padding: '0 22px', height: '100%', minHeight: 46,
                fontSize: 13.5, fontWeight: 600,
                borderLeft: '1px solid #1d4ed8', flexShrink: 0,
              }}>
                Search
              </button>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#journals" className="btn btn-primary">
                Browse Journals <ArrowRight size={15} />
              </a>
              <a href="#submit" className="btn btn-ghost">
                Submit Research
              </a>
            </div>
          </div>

          {/* Right — visual cards */}
          <div style={{ position: 'relative', height: 380, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hero-visual">

            {/* Center card */}
            <div style={{
              background: '#fff', border: '1px solid #e2e8f0',
              borderRadius: 16, padding: '28px 30px',
              boxShadow: '0 12px 40px rgba(0,0,0,.1)',
              textAlign: 'center', minWidth: 180,
            }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: '#2563eb', letterSpacing: -.04, lineHeight: 1 }}>20+</div>
              <div style={{ fontSize: 14, color: '#64748b', marginTop: 6 }}>Medical Specialties</div>
              <div style={{ width: 32, height: 3, background: '#2563eb', borderRadius: 2, margin: '12px auto 0' }} />
            </div>

            {/* Top right */}
            <div style={{
              position: 'absolute', top: 10, right: 0,
              background: '#fff', border: '1px solid #e2e8f0',
              borderRadius: 12, padding: '16px 20px',
              boxShadow: '0 4px 20px rgba(0,0,0,.08)',
              maxWidth: 210,
            }}>
              <div style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: .08, marginBottom: 6, fontWeight: 600 }}>Latest</div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: '#0f172a', lineHeight: 1.4, marginBottom: 8 }}>
                Advances in Neurological Therapeutics
              </div>
              <div style={{ fontSize: 11.5, color: '#94a3b8' }}>Journal of Neurology · Vol. 14</div>
            </div>

            {/* Bottom left */}
            <div style={{
              position: 'absolute', bottom: 24, left: 0,
              background: '#fff', border: '1px solid #e2e8f0',
              borderRadius: 12, padding: '16px 20px',
              boxShadow: '0 4px 20px rgba(0,0,0,.08)',
              maxWidth: 200,
            }}>
              <div style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: .08, marginBottom: 6, fontWeight: 600 }}>Conference</div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: '#0f172a', lineHeight: 1.4, marginBottom: 6 }}>
                World Summit on Clinical Nutrition
              </div>
              <div style={{ fontSize: 11.5, color: '#2563eb', fontWeight: 600 }}>June 18–20, 2026 · Vienna</div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          borderTop: '1px solid #e2e8f0', marginTop: 56,
        }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '24px 28px',
              borderRight: i < 3 ? '1px solid #e2e8f0' : 'none',
            }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <s.icon size={18} color="#2563eb" />
              </div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 3 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          #home .wrap > div:nth-child(3) { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
          #home .wrap > div:last-child { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
