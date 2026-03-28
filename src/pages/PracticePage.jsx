import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTopicContent } from '../data/mockContent';
import { ChevronLeft, CheckCircle2, XCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations, t } from '../i18n/translations';

export default function PracticePage() {
  const navigate = useNavigate();
  const { topicId } = useParams();
  const { lang } = useLanguage();
  const content = getTopicContent(topicId);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const question = content.practiceQuestion;
  const options = content.practiceOptions;

  return (
    <div className="animate-fade-in" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button 
        className="btn btn-secondary" 
        onClick={() => navigate(-1)}
        style={{ padding: '8px 16px', marginBottom: '24px', borderRadius: '100px' }}
      >
        <ChevronLeft size={18} /> {t(translations.practice.backBtn, lang)}
      </button>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 className="text-gradient">{t(translations.practice.title, lang)}</h2>
        <p>{lang === 'hy' ? 'Կիրառիր սովորածդ տեսությունը պրակտիկայում' : lang === 'ru' ? 'Примените изученную теорию на практике' : 'Apply the theory you learned in practice'}</p>
      </div>

      <div className="glass-panel" style={{ padding: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
          <span style={{ color: 'var(--text-muted)' }}>{t(translations.practice.question, lang)} 1 / 5</span>
          <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>+10 XP</span>
        </div>
        
        <h3 style={{ fontSize: '1.4rem', lineHeight: '1.6', marginBottom: '32px' }}>{question}</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {options.map((opt) => {
             const isSelected = selected === opt.id;
             let bg = isSelected ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255,255,255,0.05)';
             let border = isSelected ? '1px solid var(--primary)' : '1px solid var(--surface-border)';
             let icon = null;

             if (submitted) {
               if (opt.correct) {
                 bg = 'rgba(16, 185, 129, 0.2)';
                 border = '1px solid var(--success)';
                 icon = <CheckCircle2 color="var(--success)" />;
               } else if (isSelected && !opt.correct) {
                 bg = 'rgba(239, 68, 68, 0.2)';
                 border = '1px solid var(--danger)';
                 icon = <XCircle color="var(--danger)" />;
               }
             }

             return (
               <div 
                 key={opt.id}
                 style={{
                   padding: '16px 24px', borderRadius: '12px', background: bg, border: border,
                   display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                   cursor: submitted ? 'default' : 'pointer', fontSize: '1.1rem', transition: '0.2s'
                 }}
                 onClick={() => !submitted && setSelected(opt.id)}
               >
                 <span>{opt.text}</span>
                 {icon}
               </div>
             )
          })}
        </div>

        <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end' }}>
          {!submitted ? (
            <button 
              className="btn btn-primary" 
              onClick={() => setSubmitted(true)}
              disabled={!selected}
            >
              {t(translations.practice.submit, lang)}
            </button>
          ) : (
             <button className="btn btn-secondary" onClick={() => navigate(-1)}>
               {t(translations.practice.backToDash, lang)}
             </button>
          )}
        </div>
      </div>
    </div>
  );
}
