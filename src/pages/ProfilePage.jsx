import React from 'react';
import { Target, Trophy, Flame, Zap, Award, Medal } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="animate-fade-in" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        
        {/* Profile Card */}
        <div className="glass-panel" style={{ flex: '1 1 300px', textAlign: 'center', padding: '40px 24px' }}>
           <div style={{ 
              width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 24px auto',
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem',
              boxShadow: '0 0 40px rgba(99, 102, 241, 0.4)', position: 'relative'
           }}>
             👨‍🎓
             <div style={{ position: 'absolute', bottom: -10, background: '#1e293b', padding: '4px 12px', borderRadius: '20px', border: '2px solid var(--primary)', fontSize: '0.9rem', fontWeight: 'bold' }}>
               Lv. 4
             </div>
           </div>
           
           <h2 style={{ fontSize: '1.8rem', margin: '0 0 8px 0' }}>Խաչատուրյան Ա.</h2>
           <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Mentoria Հետազոտող</p>

           <div style={{ display: 'flex', justifyContent: 'space-around', background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '16px' }}>
              <div>
                <div style={{ color: 'var(--warning)', fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'center' }}><Zap size={20} /> 1250</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ընդհանուր XP</div>
              </div>
              <div style={{ width: '1px', background: 'var(--surface-border)' }}></div>
              <div>
                <div style={{ color: '#ef4444', fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'center' }}><Flame size={20} /> 14</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Օր Streak</div>
              </div>
           </div>
        </div>

        {/* Stats and Badges */}
        <div style={{ flex: '2 1 500px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
           <div className="glass-panel" style={{ padding: '24px' }}>
             <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}><Target color="var(--success)" /> Առաջընթացի Քարտեզ</h3>
             <div style={{ marginBottom: '16px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                 <span>Ֆիզիկա</span>
                 <span style={{ color: 'var(--primary)' }}>45%</span>
               </div>
               <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '99px' }}>
                 <div style={{ width: '45%', height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))', borderRadius: '99px' }}></div>
               </div>
             </div>
             <div>
               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                 <span>Մաթեմատիկա</span>
                 <span style={{ color: 'var(--success)' }}>20%</span>
               </div>
               <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '99px' }}>
                 <div style={{ width: '20%', height: '100%', background: 'var(--success)', borderRadius: '99px' }}></div>
               </div>
             </div>
           </div>

           <div className="glass-panel" style={{ padding: '24px', flex: 1 }}>
             <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}><Trophy color="var(--warning)" /> Նվաճումներ և Շքանշաններ</h3>
             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '16px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flex: 1, minWidth: '120px' }}>
                  <Award size={36} color="var(--warning)" />
                  <div style={{ fontWeight: 'bold', fontSize: '0.9rem', textAlign: 'center' }}>Խնդիրների Վարպետ</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Լուծված 50 խնդիր</div>
                </div>
                <div style={{ background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)', padding: '16px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flex: 1, minWidth: '120px' }}>
                  <Flame size={36} color="var(--secondary)" />
                  <div style={{ fontWeight: 'bold', fontSize: '0.9rem', textAlign: 'center' }}>Անընդմեջ 14 Օր</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Ուսուցման streak</div>
                </div>
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '16px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flex: 1, minWidth: '120px' }}>
                  <Medal size={36} color="var(--success)" />
                  <div style={{ fontWeight: 'bold', fontSize: '0.9rem', textAlign: 'center' }}>Սոկրատեսյան Հանճար</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>0 սխալ բանավորում</div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
