import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, X, Activity, CheckCircle, ArrowRight } from 'lucide-react';

export default function VoiceModal({ onClose, onSuccess, validated }) {
  const [recording, setRecording] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [noiseFilter, setNoiseFilter] = useState(false); // Active noise cancellation
  const recordingTimeoutRef = useRef(null);
  const typingIntervalRef = useRef(null);
  const navigate = useNavigate();

  const handleStartRecording = () => {
    setRecording(true);
    setAnalyzing(false);
    setTranscript('');

    const fullTranscript =
      '«Երբ զանգվածը նույնն է, իսկ ուժը մեծանում է, մեքենայի արագացումը մեծանում է։ Այսինքն մեքենան ավելի արագ է արագանում։»';

    if (recordingTimeoutRef.current) clearTimeout(recordingTimeoutRef.current);
    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);

    // Simulate recording for 3 seconds, then start "live" Speech-to-Text typing.
    recordingTimeoutRef.current = setTimeout(() => {
      setRecording(false);
      setAnalyzing(true);

      let idx = 0;
      typingIntervalRef.current = setInterval(() => {
        idx = Math.min(fullTranscript.length, idx + 4);
        setTranscript(fullTranscript.slice(0, idx));

        if (idx >= fullTranscript.length) {
          if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
          typingIntervalRef.current = null;
          setAnalyzing(false);
          setTranscript(fullTranscript);
          onSuccess();
        }
      }, 25);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (recordingTimeoutRef.current) clearTimeout(recordingTimeoutRef.current);
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'fadeIn 0.3s ease-out'
    }}>
      <div className="glass-panel animate-fade-in" style={{
        maxWidth: '800px',
        width: '90%',
        padding: '40px',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))',
        border: '1px solid var(--primary-glow)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(99, 102, 241, 0.2)'
      }}>
        
        <button 
          className="btn-icon"
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', background: 'transparent', color: 'var(--text-muted)' }}
        >
          <X size={24} />
        </button>

        <h2 style={{ textAlign: 'center', marginBottom: '32px' }} className="text-gradient">
          🎤 Ամփոփիչ Բանավոր Պաշտպանություն
        </h2>

        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '16px', textAlign: 'center', fontSize: '1.2rem', marginBottom: '40px', borderLeft: '4px solid var(--primary)' }}>
          <b style={{ color: 'var(--primary)' }}>AI-ի հարցը:</b> «Քո բառերով բացատրիր, խնդրեմ, ի՞նչ է տեղի ունենում մեքենայի հետ, երբ նրա վրա ազդող ուժը մեծանում է, իսկ զանգվածը մնում է նույնը։»
        </div>

        {!validated && !analyzing && !recording && (
          <div className="flex-center" style={{ flexDirection: 'column', gap: '24px' }}>
             <button 
                onClick={handleStartRecording}
                style={{
                  width: '120px', height: '120px',
                  borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)',
                  animation: 'pulse-glow 2s infinite'
                }}
             >
               <Mic size={48} color="white" />
             </button>
             <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', fontWeight: '500' }}>Սեղմեք խոսելու համար</p>

             {/* Background Noise Toggle */}
             <div 
               style={{ 
                 marginTop: '16px', padding: '12px 20px', borderRadius: '100px',
                 background: noiseFilter ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                 border: `1px solid ${noiseFilter ? 'var(--success)' : 'var(--surface-border)'}`,
                 display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer',
                 transition: 'all 0.3s'
               }}
               onClick={() => setNoiseFilter(!noiseFilter)}
             >
                <div style={{
                  width: '40px', height: '24px', borderRadius: '12px',
                  background: noiseFilter ? 'var(--success)' : 'rgba(255,255,255,0.2)',
                  position: 'relative', transition: '0.3s'
                }}>
                  <div style={{
                    position: 'absolute', top: '2px', left: noiseFilter ? '18px' : '2px',
                    width: '20px', height: '20px', borderRadius: '50%', background: 'white',
                    transition: '0.3s'
                  }}></div>
                </div>
                <span style={{ color: noiseFilter ? 'var(--success)' : 'var(--text-muted)', fontWeight: 600 }}>
                  Աղմուկի չեղարկում (AI Denoise Demo)
                </span>
             </div>
          </div>
        )}

        {recording && (
          <div className="flex-center" style={{ flexDirection: 'column', gap: '24px' }}>
            <div style={{
              width: '120px', height: '120px',
              borderRadius: '50%', background: 'var(--danger)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 40px rgba(239, 68, 68, 0.6)',
              animation: 'pulse-glow 1s infinite alternate'
            }}>
               <Mic size={48} color="white" />
            </div>
            <p style={{ fontSize: '1.2rem', color: 'var(--danger)', fontWeight: 'bold' }}>🔴 Ձայնագրվում է... խոսեք հիմա</p>
          </div>
        )}

        {analyzing && (
          <div className="flex-center animate-fade-in" style={{ flexDirection: 'column', gap: '24px' }}>
            <Activity size={64} color="var(--primary)" style={{ animation: 'float 2s ease-in-out infinite' }} />
            <h3 style={{ color: 'var(--primary)' }}>Վերլուծվում է տրամաբանությունը...</h3>
            <p>Mentoria AI Engine-ը ստուգում է իմաստային ճշգրտությունը...</p>

            <div style={{
              width: '100%',
              maxWidth: '560px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--surface-border)',
              borderRadius: '14px',
              padding: '14px 16px',
              color: '#e2e8f0',
              lineHeight: 1.7,
              minHeight: 64,
              overflow: 'hidden',
            }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 8 }}>
                Live Speech-to-Text
              </div>
              <div style={{ fontStyle: 'italic', fontWeight: 500 }}>
                {transcript || '... խոսքը թարգմանվում է տեքստի'}
              </div>
            </div>
          </div>
        )}

        {validated && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
               <CheckCircle size={64} color="var(--success)" style={{ marginBottom: '16px', display: 'inline-block' }} />
               <h3 style={{ color: 'var(--success)', fontSize: '1.5rem', marginBottom: '8px' }}>Թեման յուրացված է 100%-ով</h3>
               <p style={{ color: 'var(--success)', opacity: 0.8 }}>Վստահորեն կարող եք անցնել առաջ</p>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--text-muted)' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '2px' }}>Speech-To-Text Transcription</div>
              <p style={{ fontStyle: 'italic', fontWeight: '500' }}>{transcript}</p>
            </div>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', marginTop: '16px' }}>
              <button className="btn btn-secondary" onClick={() => {
                onClose();
                navigate('/student');
              }}>
                Վերադառնալ Ծառ
              </button>
              <button className="btn btn-primary" onClick={() => {
                onClose();
                navigate('/analytics');
              }}>
                Տեսնել Անալիտիկան <ArrowRight size={20} />
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
