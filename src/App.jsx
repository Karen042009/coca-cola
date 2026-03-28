import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import LandingPage from './pages/LandingPage';
import SubjectsPage from './pages/SubjectsPage';
import TopicsPage from './pages/TopicsPage';
import StudentDashboard from './pages/StudentDashboard';
import SocraticRoom from './pages/SocraticRoom';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import TheoryPage from './pages/TheoryPage';
import PracticePage from './pages/PracticePage';
import ProfilePage from './pages/ProfilePage';
import VoiceModal from './components/VoiceModal';
import { useAppContext } from './context/AppContext';

export default function App() {
  const { showVoiceModal, setShowVoiceModal, voiceValidated, handleValidationSuccess } = useAppContext();

  return (
    <>
      <TopNav />
      
      <main className={window.location.pathname === '/' ? "" : "container"} style={window.location.pathname === '/' ? {} : { paddingTop: '100px', paddingBottom: '60px' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/student" element={<SubjectsPage />} />
          <Route path="/student/:subjectId" element={<TopicsPage />} />
          <Route path="/student/:subjectId/:topicId" element={<StudentDashboard />} />
          <Route path="/theory/:topicId" element={<TheoryPage />} />
          <Route path="/practice/:topicId" element={<PracticePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/socratic/:topicId" element={<SocraticRoom />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
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
