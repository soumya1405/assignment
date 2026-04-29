import React from 'react';
import { FileText, User, Calendar, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    tag: 'Neurology', tagColor: '#7c3aed', tagBg: '#f5f3ff',
    title: 'Emerging Therapies in Neurodegenerative Disease Management',
    authors: 'Dr. S. Patel, Dr. K. Rao, Dr. M. Silva',
    journal: 'Journal of Neurology & Therapeutics',
    date: 'April 2026', volume: 'Vol. 14, Issue 2',
    abstract: 'This review examines recent advances in neuroprotective strategies and disease-modifying therapies for Alzheimer\'s and Parkinson\'s disease...',
  },
  {
    id: 2,
    tag: 'Gastroenterology', tagColor: '#059669', tagBg: '#ecfdf5',
    title: 'Gut Microbiome Alterations in Inflammatory Bowel Disease',
    authors: 'Dr. A. Chen, Prof. J. Williams',
    journal: 'Global Journal of Gastroenterology',
    date: 'March 2026', volume: 'Vol. 9, Issue 1',
    abstract: 'A comprehensive analysis of microbiome dysbiosis patterns in Crohn\'s disease and ulcerative colitis patients undergoing biologic therapy...',
  },
  {
    id: 3,
    tag: 'Clinical Nutrition', tagColor: '#d97706', tagBg: '#fffbeb',
    title: 'Dietary Interventions for Metabolic Syndrome Prevention',
    authors: 'Dr. R. Kumar, Dr. L. Hoffman',
    journal: 'Clinical Nutrition & Metabolism',
    date: 'April 2026', volume: 'Vol. 7, Issue 3',
    abstract: 'Evaluating the efficacy of Mediterranean and DASH dietary patterns in reducing cardiovascular risk factors in high-risk populations...',
  },
  {
    id: 4,
    tag: 'Biotechnology', tagColor: '#2563eb', tagBg: '#eff6ff',
    title: 'CRISPR-Cas9 Applications in Rare Genetic Disorders',
    authors: 'Prof. T. Anderson, Dr. Y. Nakamura',
    journal: 'Biotechnology & Biomedical Research',
    date: 'February 2026', volume: 'Vol. 11, Issue 1',
    abstract: 'Recent clinical trials utilizing CRISPR gene editing for sickle cell disease and beta-thalassemia show promising outcomes with acceptable safety profiles...',
  },
  {
    id: 5,
    tag: 'Addiction & Recovery', tagColor: '#dc2626', tagBg: '#fef2f2',
    title: 'Opioid Use Disorder: Integrated Treatment Approaches',
    authors: 'Dr. M. Brown, Dr. F. Torres',
    journal: 'Addiction Medicine & Recovery',
    date: 'March 2026', volume: 'Vol. 5, Issue 2',
    abstract: 'Analyzing outcomes of combined pharmacotherapy and behavioral interventions in reducing opioid dependence and improving quality of life...',
  },
  {
    id: 6,
    tag: 'Community Medicine', tagColor: '#0891b2', tagBg: '#ecfeff',
    title: 'Vaccine Hesitancy: Evidence-Based Communication Strategies',
    authors: 'Dr. P. Sharma, Dr. H. Nguyen, Dr. O. Klein',
    journal: 'Community Health & Preventive Medicine',
    date: 'April 2026', volume: 'Vol. 8, Issue 2',
    abstract: 'A systematic review of communication frameworks addressing vaccine hesitancy across diverse socioeconomic communities in sub-Saharan Africa and South Asia...',
  },
];

export default function Articles() {
  return (
    <section id="articles" className="section" style={{ background: '#f8fafc' }}>
      <div className="wrap">
        <div style={{ marginBottom: 52 }}>
          <div className="section-label">Latest Research</div>
          <h2 className="section-title">Recent Publications</h2>
          <p className="section-sub">Stay current with the latest peer-reviewed articles across all medical specialties.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {articles.map(a => (
            <article key={a.id} className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              {/* Accent strip */}
              <div style={{ height: 3, background: a.tagColor, flexShrink: 0 }} />
              <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <span className="tag" style={{ background: a.tagBg, color: a.tagColor }}>{a.tag}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#94a3b8', fontSize: 12 }}>
                    <Calendar size={12} /> {a.date}
                  </span>
                </div>

                <h3 style={{ fontSize: 14.5, fontWeight: 600, color: '#0f172a', lineHeight: 1.45, marginBottom: 10, letterSpacing: -.01 }}>
                  {a.title}
                </h3>

                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
                  {a.abstract}
                </p>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#64748b', fontSize: 12 }}>
                    <User size={11} />
                    <span style={{ fontWeight: 500 }}>{a.authors}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: 11, color: '#94a3b8' }}>{a.journal}</div>
                      <div style={{ fontSize: 11, color: '#cbd5e1', marginTop: 1 }}>{a.volume}</div>
                    </div>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#2563eb', fontSize: 12, fontWeight: 600 }}>
                      <FileText size={12} /> Read PDF
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <a href="#" className="btn btn-primary">
            View All Publications <ArrowRight size={15} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { #articles .wrap > div:nth-child(2) { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { #articles .wrap > div:nth-child(2) { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
