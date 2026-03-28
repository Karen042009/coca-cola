import React, { useState } from 'react';
import { Send, Book, MessageSquare, Bot, User } from 'lucide-react';
import { useAppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { getTopicContent } from '../data/mockContent';
import { useLanguage } from '../context/LanguageContext';
import { translations, t } from '../i18n/translations';

export default function SocraticRoom() {
  const navigate = useNavigate();
  const { chatMessages: messages, setChatMessages: setMessages, setShowVoiceModal } = useAppContext();
  const { lang } = useLanguage();
  const [inputText, setInputText] = useState('');
  
  const onComplete = () => setShowVoiceModal(true);
  
  const { topicId } = useParams();
  const content = getTopicContent(topicId);

  // Initialize the chat dynamically if empty or changed logic
  React.useEffect(() => {
    setMessages([{ role: 'assistant', content: content.socraticInitial }]);
    // eslint-disable-next-line
  }, [topicId]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    // Add user message
    const newMsgs = [...messages, { role: 'user', content: inputText }];
    setMessages(newMsgs);
    setInputText('');
    setIsTyping(true);
    
    // Simple Keyword check to show "functionality"
    const text = inputText.toLowerCase();
    let replyText = '';

    if (text.includes(content.socraticKeywords.key1) || text.includes(content.socraticKeywords.key2)) {
      replyText = content.socraticKeywords.successText;
    } else if (text.includes('չգիտեմ') || text.length < 5) {
      replyText = content.socraticKeywords.failText;
    } else {
      replyText = content.socraticKeywords.fallback;
    }

    // Simulate AI thinking and streaming
    setTimeout(() => {
      setIsTyping(false);
      let idx = 0;
      const interval = setInterval(() => {
        idx += 2;
        const currentSlice = replyText.slice(0, idx);
        
        // Update the last message piece by piece
        setMessages((prevMsgs) => {
          const m = [...prevMsgs];
          // if the last message is from bot in this streaming session, update it
          if (m[m.length - 1].role === 'assistant' && m[m.length - 1].isStreaming) {
            m[m.length - 1] = { role: 'assistant', content: currentSlice, isStreaming: true };
          } else {
            m.push({ role: 'assistant', content: currentSlice, isStreaming: true });
          }
          return m;
        });

        if (idx >= replyText.length) {
          clearInterval(interval);
          setMessages((prev) => {
            const m = [...prev];
            m[m.length - 1].isStreaming = false;
            return m;
          });
        }
      }, 30);
    }, 800);
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', gap: '32px', minHeight: 'calc(100vh - 160px)' }}>
      {/* Left: Theory */}
      <div className="glass-panel" style={{ flex: 1, padding: '32px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ padding: '12px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', color: 'var(--primary)' }}>
            <Book size={24} />
          </div>
          <h2 style={{ fontSize: '1.75rem', margin: 0 }}>{t(translations.socratic.theoryTitle, lang)}</h2>
        </div>
        
        <div style={{ 
          background: 'rgba(30, 41, 59, 0.5)', 
          padding: '24px', 
          borderRadius: '16px',
          border: '1px solid var(--surface-border)',
          lineHeight: '1.8'
        }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {content.emoji} {content.theoryTitle}
          </h3>
          <p style={{ marginTop: '12px', color: '#cbd5e1' }}>
            {content.theoryText}
          </p>
        </div>

        <div style={{ marginTop: 'auto', padding: '16px', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '12px', color: '#d8b4fe', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
          <b>{t(translations.socratic.goalLabel, lang)}՝</b> {t(translations.socratic.goalText, lang)}
        </div>
      </div>

      {/* Right: Chat Simulation */}
      <div className="glass-panel" style={{ flex: 1.5, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid var(--surface-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ padding: '8px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', borderRadius: '50%' }}>
            <Bot size={24} color="white" />
          </div>
          <div>
            <h3 style={{ margin: 0 }}>{t(translations.socratic.mentorName, lang)}</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--success)' }}>{t(translations.socratic.online, lang)}</span>
          </div>
        </div>

        <div style={{ flex: 1, padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {messages.map((msg, i) => {
            const isBot = msg.role === 'assistant';
            return (
              <div key={i} style={{
                display: 'flex',
                gap: '12px',
                flexDirection: isBot ? 'row' : 'row-reverse',
                alignItems: 'flex-end',
                animation: 'fadeIn 0.4s ease-out forwards'
              }}>
                <div style={{ 
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: isBot ? 'rgba(99, 102, 241, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: isBot ? 'var(--primary)' : 'var(--success)',
                  flexShrink: 0
                }}>
                  {isBot ? <Bot size={20} /> : <User size={20} />}
                </div>
                
                <div style={{
                  background: isBot ? '#1e293b' : 'linear-gradient(135deg, var(--primary), var(--primary-hover))',
                  color: 'white',
                  padding: '16px 20px',
                  borderRadius: '24px',
                  borderBottomLeftRadius: isBot ? '4px' : '24px',
                  borderBottomRightRadius: isBot ? '24px' : '4px',
                  maxWidth: '80%',
                  lineHeight: '1.6',
                  border: isBot ? '1px solid var(--surface-border)' : 'none',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}>
                  {msg.content}
                </div>
              </div>
            );
          })}
          
          {isTyping && (
            <div style={{
              display: 'flex', gap: '12px', alignItems: 'flex-end', animation: 'fadeIn 0.4s ease-out'
            }}>
                <div style={{ 
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'rgba(99, 102, 241, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--primary)', flexShrink: 0
                }}>
                  <Bot size={20} />
                </div>
                
                <div style={{
                  background: '#1e293b', color: 'white', padding: '16px 20px',
                  borderRadius: '24px', borderBottomLeftRadius: '4px', maxWidth: '80%',
                  border: '1px solid var(--surface-border)', display: 'flex', gap: '6px'
                }}>
                  <span className="dot-typing" style={{ animation: 'pulse-glow 1s infinite alternate', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></span>
                  <span className="dot-typing" style={{ animation: 'pulse-glow 1s infinite alternate 0.2s', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></span>
                  <span className="dot-typing" style={{ animation: 'pulse-glow 1s infinite alternate 0.4s', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></span>
                </div>
            </div>
          )}
        </div>

        {messages.length > 4 && (
          <div style={{ padding: '0 24px' }} className="animate-fade-in">
            <button className="btn btn-primary" style={{ width: '100%', marginBottom: '16px', padding: '16px' }} onClick={onComplete}>
              {t(translations.socratic.completeBtn, lang)}
            </button>
          </div>
        )}

        <div style={{ padding: '24px', borderTop: '1px solid var(--surface-border)', display: 'flex', gap: '12px', background: 'rgba(15, 23, 42, 0.5)' }}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t(translations.socratic.placeholder, lang)}
            style={{
              flex: 1,
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--surface-border)',
              borderRadius: '24px',
              padding: '0 20px',
              color: 'white',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--surface-border)'}
          />
          <button 
            className="btn btn-primary btn-icon"
            onClick={handleSend}
            disabled={!inputText.trim()}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
