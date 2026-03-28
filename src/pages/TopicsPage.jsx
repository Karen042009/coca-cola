import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Maximize2, GitMerge } from 'lucide-react';
import { subjectsData } from '../data/topicsData';

export default function TopicsPage() {
  const navigate = useNavigate();
  const { subjectId } = useParams();

  const subject = subjectsData[subjectId] || subjectsData.physics;

  return (
    <div className="animate-fade-in" style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <button 
        className="btn btn-secondary" 
        onClick={() => navigate('/student')}
        style={{ padding: '8px 16px', marginBottom: '24px', borderRadius: '100px' }}
      >
        <ChevronLeft size={18} /> Առարկաներ
      </button>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 className="text-gradient">📚 {subject.title}ի Թեմաներ</h2>
        <p>Ընտրեք ուսումնական մոդուլը՝ AI դասը սկսելու համար</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {subject.topics.map(t => (
          <div
            key={t.id}
            className="glass-panel"
            style={{
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              opacity: t.locked ? 0.5 : 1,
              borderLeft: t.locked ? '4px solid var(--surface-border)' : '4px solid var(--primary)',
              cursor: t.locked ? 'not-allowed' : 'pointer',
              transition: '0.3s'
            }}
            onClick={() => {
              if (!t.locked) navigate(`/student/${subjectId}/${t.id}`);
            }}
            onMouseOver={(e) => {
              if (!t.locked) {
                 e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              }
            }}
            onMouseOut={(e) => {
               e.currentTarget.style.background = 'var(--surface-dark)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
               <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '12px' }}>
                 <GitMerge size={24} color={t.locked ? 'var(--text-muted)' : 'var(--primary)'}/>
               </div>
               <div>
                 <h3 style={{ fontSize: '1.2rem', margin: '0 0 4px 0' }}>{t.title}</h3>
                 <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Բաղկացած է {t.modules || 4} մոդուլից</div>
               </div>
            </div>
            
            <div style={{ width: '150px', textAlign: 'right' }}>
               <div style={{ fontSize: '0.85rem', marginBottom: '6px', color: 'var(--text-muted)' }}>
                 {t.locked ? 'Փակված է' : `Առաջընթաց՝ ${t.prg}%`}
               </div>
               <div style={{ height: '6px', borderRadius: '99px', background: 'rgba(255,255,255,0.1)' }}>
                  <div style={{ width: `${t.prg}%`, height: '100%', borderRadius: '99px', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}></div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
