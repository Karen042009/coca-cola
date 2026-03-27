import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TopNav from './components/TopNav';
import LandingPage from './pages/LandingPage';
import StudentDashboard from './pages/StudentDashboard';
import SocraticRoom from './pages/SocraticRoom';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import VoiceModal from './components/VoiceModal';

export default function App() {
  // Shared Application State
  const [knowledgeStatus, setKnowledgeStatus] = useState({
    inertia: 'done',
    force_mass: 'in_progress',
    action_reaction: 'locked'
  });
  
  const [chatMessages, setChatMessages] = useState([
    {
      role: 'assistant',
      content: 'Բարև, Արամ։ Տեսությունը կարդալուց հետո, արի քննարկենք։ Պատկերացրու գնում ես սուպերմարկետ: Ո՞ր սայլակն է ավելի դժվար հրել՝ դատա՞րկը, թե՞ մթերքներով լիքը: Եվ ինչո՞ւ։'
    },
    {
      role: 'user',
      content: 'Մթերքներով լիքը։ Որովհետև մեծ զանգվածի դեպքում իներցիան ավելի մեծ է, դրա համար դժվար է տեղից շարժել։'
    },
    {
      role: 'assistant',
      content: 'Ճիշտ է։ Իսկ ֆիզիկայի լեզվով այդ "ծանրը" զանգվածն է: Հետևաբար, ինչպե՞ս է կապված զանգվածը նրա հետ, թե որքան ուժ պետք է գործադրես։'
    }
  ]);
  
  const [showVoiceModal, setShowVoiceModal] = useState(false);
  const [voiceValidated, setVoiceValidated] = useState(false);

  const handleValidationSuccess = () => {
    setVoiceValidated(true);
    setKnowledgeStatus(prev => ({
      ...prev,
      force_mass: 'done',
      action_reaction: 'done' // Unlocks the next one
    }));
  };

  return (
    <>
      <TopNav />
      
      <main className="container" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/student"
            element={<StudentDashboard status={knowledgeStatus} />}
          />
          <Route
            path="/socratic-room"
            element={
              <SocraticRoom
                messages={chatMessages}
                setMessages={setChatMessages}
                onComplete={() => setShowVoiceModal(true)}
              />
            }
          />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {showVoiceModal && (
        <VoiceModal 
          onClose={() => setShowVoiceModal(false)}
          onSuccess={handleValidationSuccess}
          validated={voiceValidated}
        />
      )}
    </>
  );
}
