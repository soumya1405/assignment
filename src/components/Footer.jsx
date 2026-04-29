import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const quickLinks = ['Author Guidelines', 'Submit Manuscript', 'Peer Review Process', 'Editorial Board', 'Open Access Policy', 'Copyright & Licensing'];
const resources = ['Online Library', 'Upcoming Conferences', 'eBook Downloads', 'Membership Benefits', 'Indexing & Abstracting', 'FAQ'];
const specialties = ['Neurology', 'Cardiology', 'Gastroenterology', 'Oncology', 'Biotechnology', 'Clinical Nutrition', 'Community Medicine', 'Addiction & Recovery'];

export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#0f172a', color: '#fff' }}>

      {/* Newsletter */}
      <div style={{ background: '#1e293b', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '36px 0' }}>
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 4, color: '#f1f5f9' }}>Stay Updated with Medical Research</div>
            <div style={{ fontSize: 14, color: '#94a3b8' }}>Weekly digests of the latest publications and conferences.</div>
          </div>
          <div style={{ display: 'flex', gap: 0, flexShrink: 0, border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, overflow: 'hidden', background: 'rgba(255,255,255,0.05)' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                background: 'transparent', border: 'none', outline: 'none',
                color: '#fff', padding: '12px 18px', fontSize: 14,
                fontFamily: 'Inter, sans-serif', minWidth: 240,
              }}
            />
            <button className="btn btn-primary" style={{ borderRadius: 0, padding: '12px 20px', fontSize: 13 }}>
              Subscribe <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="wrap" style={{ padding: '56px 28px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.2fr', gap: 48, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8, background: '#2563eb',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 800, fontSize: 15,
              }}>M</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>MedDocs</div>
                <div style={{ fontSize: 10, color: '#64748b', letterSpacing: .12, textTransform: 'uppercase' }}>Publishers</div>
              </div>
            </div>
            <p style={{ fontSize: 13.5, color: '#64748b', lineHeight: 1.75, marginBottom: 24, maxWidth: 270 }}>
              A leading open-access medical publisher connecting researchers, clinicians, and scientists across the globe since 1998.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 22 }}>
              {[[Phone, '+1 (608) 718-6264'], [Mail, 'support@meddocsonline.org'], [MapPin, 'Reno, Nevada, USA']].map(([Icon, text]) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, color: '#64748b' }}>
                  <Icon size={13} color="#2563eb" /> {text}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: .1, textTransform: 'uppercase', color: '#cbd5e1', marginBottom: 18 }}>Quick Links</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map(l => (
                <li key={l}>
                  <a href="#home" style={{ fontSize: 13.5, color: '#64748b', transition: 'color .15s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#e2e8f0'}
                    onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: .1, textTransform: 'uppercase', color: '#cbd5e1', marginBottom: 18 }}>Resources</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {resources.map(l => (
                <li key={l}>
                  <a href="#home" style={{ fontSize: 13.5, color: '#64748b', transition: 'color .15s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#e2e8f0'}
                    onMouseLeave={e => e.currentTarget.style.color = '#64748b'}>{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: .1, textTransform: 'uppercase', color: '#cbd5e1', marginBottom: 18 }}>Specialties</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {specialties.map(s => (
                <a key={s} href="#home" style={{
                  fontSize: 12, color: '#64748b',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 6, padding: '4px 10px', transition: 'color .15s, border-color .15s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 13, color: '#475569' }}>© 2026 MedDocs Publishers. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'GDPR'].map(l => (
              <a key={l} href="#home" style={{ fontSize: 13, color: '#475569', transition: 'color .15s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#94a3b8'}
                onMouseLeave={e => e.currentTarget.style.color = '#475569'}>{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { footer .wrap > div:first-of-type { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px)  { footer .wrap > div:first-of-type { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
