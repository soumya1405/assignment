import React from 'react';
import { BookOpen, Calendar, MapPin, ArrowRight, Clock, Users } from 'lucide-react';

const ebooks = [
  {
    title: 'Comprehensive Guide to Modern Oncology',
    category: 'Oncology', pages: '382 pages', year: '2026 Edition',
    color: '#9333ea',
    desc: 'A complete reference for oncologists covering solid tumors, hematologic cancers, and emerging immunotherapy protocols.',
  },
  {
    title: 'Essentials of Cardiovascular Medicine',
    category: 'Cardiology', pages: '510 pages', year: '2025 Edition',
    color: '#dc2626',
    desc: 'From basic heart physiology to complex interventional procedures — an authoritative clinical reference.',
  },
  {
    title: 'Pediatric Nutrition Handbook',
    category: 'Clinical Nutrition', pages: '248 pages', year: '2026 Edition',
    color: '#d97706',
    desc: 'Evidence-based nutritional guidelines for neonates, infants, children, and adolescents with clinical case studies.',
  },
];

const conferences = [
  {
    title: 'World Summit on Clinical Nutrition 2026',
    date: 'June 18–20, 2026', location: 'Vienna, Austria',
    mode: 'Hybrid', speakers: 120, color: '#2563eb',
    deadline: 'Abstract deadline: May 1, 2026',
  },
  {
    title: 'International Conference on Neuroscience',
    date: 'August 5–7, 2026', location: 'San Francisco, USA',
    mode: 'In-Person', speakers: 95, color: '#7c3aed',
    deadline: 'Abstract deadline: June 15, 2026',
  },
  {
    title: 'Global Biotechnology Symposium',
    date: 'October 12–14, 2026', location: 'Singapore',
    mode: 'Hybrid', speakers: 80, color: '#0891b2',
    deadline: 'Abstract deadline: August 20, 2026',
  },
];

export default function EbooksConferences() {
  return (
    <>
      {/* eBooks */}
      <section id="ebooks" className="section" style={{ background: '#f8fafc' }}>
        <div className="wrap">
          <div style={{ marginBottom: 52 }}>
            <div className="section-label">Digital Library</div>
            <h2 className="section-title">Medical eBooks</h2>
            <p className="section-sub">Download comprehensive medical references authored by leading specialists — free for members.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {ebooks.map(b => (
              <div key={b.title} className="card" style={{ overflow: 'hidden' }}>
                {/* Cover */}
                <div style={{
                  height: 160, background: b.color,
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'space-between', padding: '20px 22px',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{
                      background: 'rgba(255,255,255,0.18)', color: '#fff',
                      fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 6,
                    }}>{b.year}</span>
                    <span style={{
                      background: 'rgba(255,255,255,0.18)', color: '#fff',
                      fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 6,
                    }}>{b.category}</span>
                  </div>
                  <BookOpen size={26} color="rgba(255,255,255,0.85)" />
                  {/* decorative circle */}
                  <div style={{ position: 'absolute', bottom: -30, right: -30, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
                </div>

                <div style={{ padding: '18px 22px 22px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', lineHeight: 1.4, marginBottom: 8, letterSpacing: -.01 }}>{b.title}</h3>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6, marginBottom: 18 }}>{b.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 12, color: '#94a3b8' }}>{b.pages}</span>
                    <a href="#home" className="btn" style={{ background: b.color, color: '#fff', padding: '7px 16px', fontSize: 13 }}>
                      Download <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conferences */}
      <section id="conferences" className="section" style={{ background: '#fff' }}>
        <div className="wrap">
          <div style={{ marginBottom: 52 }}>
            <div className="section-label">Global Events</div>
            <h2 className="section-title">Upcoming Conferences</h2>
            <p className="section-sub">Connect with medical professionals worldwide at our prestigious academic conferences.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {conferences.map(c => (
              <div key={c.title} className="card" style={{ display: 'flex', overflow: 'hidden' }}>
                <div style={{ width: 5, background: c.color, flexShrink: 0 }} />
                <div style={{ padding: '22px 28px', flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', marginBottom: 10, letterSpacing: -.01 }}>{c.title}</h3>
                    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                      {[
                        [Calendar, c.date],
                        [MapPin, c.location],
                        [Users, `${c.speakers} Speakers`],
                      ].map(([Icon, text]) => (
                        <span key={text} style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#64748b', fontSize: 13 }}>
                          <Icon size={13} color={c.color} /> {text}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 10 }}>
                      <Clock size={12} color={c.color} />
                      <span style={{ fontSize: 12, color: c.color, fontWeight: 600 }}>{c.deadline}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexShrink: 0 }}>
                    <span style={{
                      background: `${c.color}12`, color: c.color,
                      fontSize: 12, fontWeight: 700, padding: '5px 12px', borderRadius: 6,
                    }}>{c.mode}</span>
                    <a href="#home" className="btn" style={{ background: c.color, color: '#fff', padding: '9px 20px', fontSize: 13 }}>
                      Register <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a href="#home" className="btn btn-outline">
              <Calendar size={15} /> All Conferences
            </a>
          </div>
        </div>

        <style>{`
          @media (max-width: 760px) { #ebooks .wrap > div:nth-child(2) { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </>
  );
}
