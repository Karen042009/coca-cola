import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [knowledgeStatus, setKnowledgeStatus] = useState({
    inertia: 'done',
    force_mass: 'in_progress',
    action_reaction: 'locked'
  });
  
  const [chatMessages, setChatMessages] = useState([]);
  
  const [showVoiceModal, setShowVoiceModal] = useState(false);
  const [voiceValidated, setVoiceValidated] = useState(false);

  const handleValidationSuccess = () => {
    setVoiceValidated(true);
    setKnowledgeStatus(prev => ({
      ...prev,
      force_mass: 'done',
      action_reaction: 'done'
    }));
  };

  return (
    <AppContext.Provider value={{
      knowledgeStatus,
      setKnowledgeStatus,
      chatMessages,
      setChatMessages,
      showVoiceModal,
      setShowVoiceModal,
      voiceValidated,
      handleValidationSuccess
    }}>
      {children}
    </AppContext.Provider>
  );
};
