import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookA, Calculator, Atom, Globe2, Beaker, Code, Landmark, ScrollText, Map, Languages, TrendingUp, Music, Palette, Rocket, Brain, Scale } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations, t } from '../i18n/translations';
export default function SubjectsPage() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const subjects = [
    { id: 'physics', title: 'Ֆիզիկա', icon: <Atom size={32} color="var(--primary)" />, color: 'var(--primary)', glow: 'rgba(99, 102, 241, 0.2)', locked: false },
    { id: 'math', title: 'Մաթեմատիկա', icon: <Calculator size={32} color="var(--success)" />, color: 'var(--success)', glow: 'rgba(16, 185, 129, 0.2)', locked: false },
    { id: 'biology', title: 'Կենսաբանություն', icon: <Globe2 size={32} color="#14b8a6" />, color: '#14b8a6', glow: 'rgba(20, 184, 166, 0.2)', locked: false },
    { id: 'chemistry', title: 'Քիմիա', icon: <Beaker size={32} color="var(--secondary)" />, color: 'var(--secondary)', glow: 'rgba(168, 85, 247, 0.2)', locked: false },
    { id: 'cs', title: 'Ինֆորմատիկա', icon: <Code size={32} color="#3b82f6" />, color: '#3b82f6', glow: 'rgba(59, 130, 246, 0.2)', locked: false },
    { id: 'history', title: 'Պատմություն', icon: <Landmark size={32} color="#f59e0b" />, color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.2)', locked: false },
    { id: 'literature', title: 'Գրականություն', icon: <ScrollText size={32} color="#ec4899" />, color: '#ec4899', glow: 'rgba(236, 72, 153, 0.2)', locked: false },
    { id: 'language', title: 'Հայոց լեզու', icon: <BookA size={32} color="#84cc16" />, color: '#84cc16', glow: 'rgba(132, 204, 22, 0.2)', locked: false },
    { id: 'geography', title: 'Աշխարհագրություն', icon: <Map size={32} color="#0ea5e9" />, color: '#0ea5e9', glow: 'rgba(14, 165, 233, 0.2)', locked: false },
    { id: 'foreign_lang', title: 'Օտար լեզուներ', icon: <Languages size={32} color="#6366f1" />, color: '#6366f1', glow: 'rgba(99, 102, 241, 0.2)', locked: false },
    { id: 'astronomy', title: 'Աստղագիտություն', icon: <Rocket size={32} color="#a855f7" />, color: '#a855f7', glow: 'rgba(168, 85, 247, 0.2)', locked: false },
    { id: 'economics', title: 'Տնտեսագիտություն', icon: <TrendingUp size={32} color="#10b981" />, color: '#10b981', glow: 'rgba(16, 185, 129, 0.2)', locked: false },
    { id: 'psychology', title: 'Հոգեբանություն', icon: <Brain size={32} color="#fbbf24" />, color: '#fbbf24', glow: 'rgba(251, 191, 36, 0.2)', locked: false },
    { id: 'law', title: 'Իրավագիտություն', icon: <Scale size={32} color="#ef4444" />, color: '#ef4444', glow: 'rgba(239, 68, 68, 0.2)', locked: false },
    { id: 'art', title: 'Արվեստ', icon: <Palette size={32} color="#ec4899" />, color: '#ec4899', glow: 'rgba(236, 72, 153, 0.2)', locked: false },
    { id: 'music', title: 'Երաժշտություն', icon: <Music size={32} color="#8b5cf6" />, color: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.2)', locked: false },
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 className="text-gradient">{t(translations.subjects.title, lang)}</h2>
        <p>{t(translations.subjects.sub, lang)}</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '24px'
      }}>
        {subjects.map(s => (
          <div
            key={s.id}
            className="glass-panel"
            style={{
              padding: '32px 24px',
              textAlign: 'center',
              cursor: s.locked ? 'not-allowed' : 'pointer',
              opacity: s.locked ? 0.6 : 1,
              transition: 'all 0.3s',
              borderTop: `4px solid ${s.color}`,
              position: 'relative',
              overflow: 'hidden'
            }}
            onClick={() => {
              if (!s.locked) navigate(`/student/${s.id}`);
            }}
            onMouseOver={(e) => {
              if (!s.locked) {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 10px 30px ${s.glow}`;
              }
            }}
            onMouseOut={(e) => {
              if (!s.locked) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.3)';
              }
            }}
          >
            {s.locked && (
              <div style={{
                position: 'absolute', top: '12px', right: '12px',
                background: 'rgba(0,0,0,0.5)', padding: '4px 8px', borderRadius: '8px', fontSize: '0.75rem', color: '#cbd5e1'
              }}>{t(translations.subjects.soon, lang)}</div>
            )}
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%',
              background: s.glow, display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px auto'
            }}>
              {s.icon}
            </div>
            <h3 style={{ fontSize: '1.4rem', margin: 0 }}>
              {translations.subjects.names[s.id] ? t(translations.subjects.names[s.id], lang) : s.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
