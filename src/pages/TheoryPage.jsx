import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTopicContent } from '../data/mockContent';
import { ChevronLeft, PlayCircle, FileText, CheckCircle2 } from 'lucide-react';

export default function TheoryPage() {
  const navigate = useNavigate();
  const { topicId } = useParams();
  const content = getTopicContent(topicId);
  const [completed, setCompleted] = useState(false);

  return (
    <div className="animate-fade-in" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <button 
        className="btn btn-secondary" 
        onClick={() => navigate(-1)}
        style={{ padding: '8px 16px', marginBottom: '24px', borderRadius: '100px' }}
      >
        <ChevronLeft size={18} /> Վերադառնալ
      </button>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 600px' }}>
          <div className="glass-panel" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--primary)' }}>
            <div style={{ 
              width: '100%', height: '400px', background: '#0f172a', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', position: 'relative'
            }}>
               <PlayCircle size={64} color="var(--primary)" style={{ cursor: 'pointer', opacity: 0.8 }} />
               <p style={{ marginTop: '16px', color: 'var(--text-muted)' }}>Ինտերակտիվ վիդեոդաս (AI գեներացված 3D)</p>
               
               <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)' }}>
                 <div style={{ width: '45%', height: '100%', background: 'var(--primary)' }}></div>
               </div>
            </div>
          </div>
          
          <h2 style={{ fontSize: '1.8rem', marginTop: '32px', marginBottom: '16px' }}>{content.theoryTitle}</h2>
          <p style={{ lineHeight: '1.8', color: '#cbd5e1', fontSize: '1.1rem' }}>
            {content.theoryText}
          </p>
        </div>

        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}><FileText size={20} color="var(--secondary)" /> Դասի Նյութեր</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                <span>Կոնսպեկտ PDF</span>
                <span style={{ color: 'var(--primary)', cursor: 'pointer' }}>Բացել</span>
              </li>
              <li style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                <span>3D մոդել (Ուժ/Զանգված)</span>
                <span style={{ color: 'var(--primary)', cursor: 'pointer' }}>Բացել</span>
              </li>
            </ul>
          </div>
          
          <div className="glass-panel" style={{ padding: '24px', background: 'rgba(16, 185, 129, 0.05)', borderColor: 'var(--success)' }}>
            <h3 style={{ marginTop: 0 }}>Ամփոփում</h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '24px' }}>Նայեք վիդեոդասը և ծանոթացեք կոնսպեկտին՝ գործնական փուլին անցնելու համար։</p>
            <button 
              className={`btn ${completed ? 'btn-secondary' : 'btn-primary'}`} 
              style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '8px' }}
              onClick={() => {
                setCompleted(true);
                setTimeout(() => navigate(-1), 1000);
              }}
            >
              {completed ? <><CheckCircle2 size={18} /> Նշված է որպես արված</> : 'Նշել որպես կարդացված'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
