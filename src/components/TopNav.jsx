import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BrainCircuit, BookOpen, BarChart3, Flame } from 'lucide-react';

export default function TopNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const isStudent = path.startsWith('/student') || path.startsWith('/socratic');
  const isAnalytics = path.startsWith('/analytics');

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      height: 'var(--nav-height)',
      background: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--surface-border)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
    }}>
      <div className="container flex-between" style={{ width: '100%' }}>
        {/* Logo */}
        <div
          className="flex-center"
          style={{ gap: '12px', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          <div style={{
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            padding: '8px', borderRadius: '12px', display: 'flex'
          }}>
            <BrainCircuit color="white" size={24} />
          </div>
          <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Mentoria AI</h2>
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>

          {/* 🔥 Streak Badge */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: '6px 14px',
            background: 'linear-gradient(135deg, rgba(251,146,60,0.15), rgba(239,68,68,0.1))',
            border: '1px solid rgba(251,146,60,0.4)',
            borderRadius: '100px',
            cursor: 'default',
          }} title="Streak — Անընդմեջ ակտիվ օրեր">
            <Flame size={18} color="#fb923c" fill="#fb923c" />
            <span style={{ fontWeight: 700, color: '#fb923c', fontSize: '0.95rem' }}>3 օր</span>
          </div>

          <button
            className={`btn ${isStudent ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => navigate('/student')}
            style={{ padding: '8px 16px', fontSize: '0.95rem' }}
          >
            <BookOpen size={18} />
            <span>Աշակերտ</span>
          </button>

          <button
            className={`btn ${isAnalytics ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => navigate('/analytics')}
            style={{ padding: '8px 16px', fontSize: '0.95rem' }}
          >
            <BarChart3 size={18} />
            <span>Անալիտիկա</span>
          </button>
          
          {/* Profile Circle */}
          <button 
            onClick={() => navigate('/profile')}
            style={{ 
              width: '40px', height: '40px', borderRadius: '50%', border: 'none', cursor: 'pointer',
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
              boxShadow: '0 0 15px rgba(99, 102, 241, 0.4)', marginLeft: '8px'
            }}
            title="Աշակերտի Պրոֆիլ"
          >
            👨‍🎓
          </button>
        </div>
      </div>
    </nav>
  );
}
