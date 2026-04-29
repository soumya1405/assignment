import React from 'react';
import { Upload, ArrowRight } from 'lucide-react';

const steps = [
  { n: '01', title: 'Prepare Manuscript', desc: 'Follow our author guidelines for formatting, word count, and citation style.' },
  { n: '02', title: 'Online Submission', desc: 'Submit via our secure portal. Receive acknowledgment within 24 hours.' },
  { n: '03', title: 'Peer Review', desc: 'Double-blind review by 2–3 expert reviewers. Typically 4–6 weeks.' },
  { n: '04', title: 'Publication', desc: 'Accepted manuscripts receive a DOI and are published online within 7 days.' },
];

const inputStyle = {
  width: '100%',
  border: '1.5px solid #e2e8f0',
  borderRadius: 9,
  padding: '11px 14px',
  fontSize: 14,
  color: '#0f172a',
  fontFamily: 'Inter, sans-serif',
  outline: 'none',
  background: '#fff',
  transition: 'border-color .15s',
};

export default function Submit() {
  return (
    <section id="submit" className="section" style={{ background: '#fff', borderTop: '1px solid #e2e8f0' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>

          {/* Left */}
          <div>
            <div className="section-label">For Authors</div>
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              Submit Your Research to a Global Audience
            </h2>
            <p style={{ color: '#64748b', lineHeight: 1.75, marginBottom: 40 }}>
              Join thousands of researchers who trust MedDocs Publishers. Our streamlined process and expert editorial team ensure your work gets the recognition it deserves.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
              {steps.map(s => (
                <div key={s.n} style={{ display: 'flex', gap: 16 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: '#eff6ff', border: '1.5px solid #bfdbfe',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, fontSize: 12, fontWeight: 800, color: '#2563eb',
                  }}>{s.n}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#0f172a', marginBottom: 3 }}>{s.title}</div>
                    <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.55 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#home" className="btn btn-primary">
              <Upload size={16} /> Submit Manuscript
            </a>
          </div>

          {/* Right — form */}
          <div style={{
            background: '#f8fafc', border: '1px solid #e2e8f0',
            borderRadius: 16, padding: '32px 28px',
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 24, letterSpacing: -.01 }}>Quick Inquiry</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {['Full Name', 'Email Address', 'Institution / Affiliation'].map(field => (
                <div key={field}>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>{field}</label>
                  <input
                    type={field === 'Email Address' ? 'email' : 'text'}
                    placeholder={`Enter ${field.toLowerCase()}`}
                    style={inputStyle}
                    onFocus={e => e.currentTarget.style.borderColor = '#2563eb'}
                    onBlur={e => e.currentTarget.style.borderColor = '#e2e8f0'}
                  />
                </div>
              ))}

              <div>
                <label style={{ fontSize: 12.5, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Journal Category</label>
                <select style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => e.currentTarget.style.borderColor = '#2563eb'}
                  onBlur={e => e.currentTarget.style.borderColor = '#e2e8f0'}>
                  <option value="">Select specialty</option>
                  {['Neurology', 'Cardiology', 'Gastroenterology', 'Oncology', 'Clinical Nutrition', 'Biotechnology'].map(s => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ fontSize: 12.5, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Message</label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your research…"
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.currentTarget.style.borderColor = '#2563eb'}
                  onBlur={e => e.currentTarget.style.borderColor = '#e2e8f0'}
                />
              </div>

              <button className="btn btn-primary" style={{ justifyContent: 'center', width: '100%', padding: '12px' }}>
                Send Inquiry <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) { #submit .wrap > div { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
