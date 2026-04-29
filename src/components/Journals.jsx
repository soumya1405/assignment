import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

const journals = [
  { name: 'Biotechnology', count: '48 Articles', color: '#2563eb', icon: '🧬', desc: 'Genetic engineering, molecular biology & biopharmaceuticals' },
  { name: 'Neurology', count: '62 Articles', color: '#7c3aed', icon: '🧠', desc: 'Brain disorders, neuroimaging & neurodegenerative diseases' },
  { name: 'Gastroenterology', count: '37 Articles', color: '#059669', icon: '🫀', desc: 'Digestive health, liver diseases & gut microbiome' },
  { name: 'Clinical Nutrition', count: '55 Articles', color: '#d97706', icon: '🥗', desc: 'Dietary therapy, metabolic disorders & obesity management' },
  { name: 'Addiction & Recovery', count: '29 Articles', color: '#dc2626', icon: '💊', desc: 'Substance use disorders, rehabilitation & mental health' },
  { name: 'Community Medicine', count: '41 Articles', color: '#0891b2', icon: '🏥', desc: 'Epidemiology, public health policy & preventive care' },
  { name: 'Cardiology', count: '71 Articles', color: '#be185d', icon: '❤️', desc: 'Heart disease, interventional cardiology & cardiac imaging' },
  { name: 'Oncology', count: '83 Articles', color: '#9333ea', icon: '🔬', desc: 'Cancer research, targeted therapy & immunotherapy' },
];

export default function Journals() {
  return (
    <section id="journals" className="section" style={{ background: '#fff' }}>
      <div className="wrap">
        <div style={{ marginBottom: 52 }}>
          <div className="section-label">Explore by Specialty</div>
          <h2 className="section-title">Journal Categories</h2>
          <p className="section-sub">Dive into over 20 medical specialties with cutting-edge research from global experts.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {journals.map(j => (
            <a key={j.name} href="#home" style={{
              display: 'block', textDecoration: 'none',
              background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
              padding: '22px 20px',
              transition: 'box-shadow .2s, border-color .2s, transform .2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 8px 28px ${j.color}1a`;
                e.currentTarget.style.borderColor = `${j.color}55`;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              <div style={{ fontSize: 30, marginBottom: 14 }}>{j.icon}</div>
              <h3 style={{ fontSize: 14.5, fontWeight: 700, color: '#0f172a', marginBottom: 6, letterSpacing: -.01 }}>{j.name}</h3>
              <p style={{ fontSize: 12.5, color: '#64748b', lineHeight: 1.55, marginBottom: 16 }}>{j.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontSize: 11, fontWeight: 700,
                  color: j.color, background: `${j.color}12`,
                  padding: '3px 8px', borderRadius: 6,
                }}>{j.count}</span>
                <ArrowRight size={14} color={j.color} />
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <a href="#home" className="btn btn-outline">
            <BookOpen size={16} /> View All Journals
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { #journals .wrap > div:nth-child(2) { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 720px)  { #journals .wrap > div:nth-child(2) { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px)  { #journals .wrap > div:nth-child(2) { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
