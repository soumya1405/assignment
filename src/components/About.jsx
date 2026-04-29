import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  'Rigorous double-blind peer review process',
  'Open access — free to read globally',
  'CrossRef DOI assignment for all articles',
  'PubMed, Scopus & Web of Science indexed',
  'Rapid review & publication turnaround',
  'Author support from submission to print',
];

const indexers = ['PubMed', 'Scopus', 'Web of Science', 'DOAJ', 'CrossRef', 'Google Scholar', 'EBSCO', 'Embase'];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: '#f8fafc' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>

          {/* Left — stats card */}
          <div className="about-vis">
            <div style={{
              background: '#2563eb', borderRadius: 20, padding: '40px 36px',
              color: '#fff', position: 'relative', overflow: 'hidden',
            }}>
              {/* Decorative circles */}
              <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
              <div style={{ position: 'absolute', bottom: -20, left: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />

              <div style={{ fontSize: 11, letterSpacing: .1, textTransform: 'uppercase', opacity: .7, marginBottom: 14, fontWeight: 600 }}>Our Mission</div>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.65, marginBottom: 28, position: 'relative', fontStyle: 'italic', opacity: .95 }}>
                "To democratize medical knowledge by providing open-access, peer-reviewed publishing for researchers worldwide."
              </p>
              <div style={{ width: 36, height: 3, background: 'rgba(255,255,255,0.45)', borderRadius: 2, marginBottom: 28 }} />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, position: 'relative' }}>
                {[['1998', 'Founded'], ['20+', 'Specialties'], ['500+', 'Journals'], ['12K+', 'Authors']].map(([v, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -.02 }}>{v}</div>
                    <div style={{ fontSize: 12, opacity: .7, marginTop: 3 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              marginTop: -1, marginLeft: 'auto', width: 'fit-content',
              background: '#fff', border: '1px solid #e2e8f0',
              borderRadius: 12, padding: '16px 22px',
              boxShadow: '0 6px 24px rgba(0,0,0,.1)',
              transform: 'translateY(-20px) translateX(-20px)',
            }}>
              <div style={{ fontSize: 10, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: .08, marginBottom: 4, fontWeight: 600 }}>Acceptance Rate</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#2563eb', lineHeight: 1 }}>42%</div>
              <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 3 }}>Rigorous peer review</div>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="section-label">About Us</div>
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              A Trusted Name in Medical Publishing Since 1998
            </h2>
            <p style={{ color: '#64748b', lineHeight: 1.75, marginBottom: 28 }}>
              MedDocs Publishers is a global open-access medical publisher committed to advancing healthcare research. We provide a rigorous peer-review platform for clinicians, researchers, and scientists.
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 32 }}>
              {features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 14, color: '#374151' }}>
                  <CheckCircle size={16} color="#2563eb" style={{ flexShrink: 0, marginTop: 2 }} />
                  {f}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn btn-primary">
              Get in Touch <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Indexers */}
        <div style={{ marginTop: 72, padding: '36px 0', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 700, letterSpacing: .12, textTransform: 'uppercase', marginBottom: 20 }}>
            Indexed & Abstracted In
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10 }}>
            {indexers.map(name => (
              <span key={name} style={{
                background: '#fff', border: '1px solid #e2e8f0',
                borderRadius: 8, padding: '8px 18px',
                fontSize: 13, fontWeight: 600, color: '#374151',
              }}>{name}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          #about .wrap > div { grid-template-columns: 1fr !important; }
          .about-vis { display: none !important; }
        }
      `}</style>
    </section>
  );
}
