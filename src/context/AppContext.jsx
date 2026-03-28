import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
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
