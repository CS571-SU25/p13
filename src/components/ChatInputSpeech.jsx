import React, { useEffect, useRef } from 'react';
import ChatInputMessage from './ChatInputMessage';

const ChatInputSpeech = ({ onUserSubmit, toggleInputMode }) => {
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);
  const shouldRestartRef = useRef(true);

  const handleSubmit = () => {
    const value = inputRef.current?.value?.trim();
    if (value) {
      onUserSubmit(value);
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recog = new SpeechRecognition();
    recog.continuous = true;
    recog.interimResults = false;
    recog.lang = 'en-US';

    recog.onresult = (event) => {
      const speechResult = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();

      if (speechResult.includes("stop speech")) {
        shouldRestartRef.current = false;
        toggleInputMode();
        recog.stop();
        return;
      }

      if (speechResult.includes("enter")) {
        handleSubmit();
        return;
      }

      const currentText = inputRef.current.value;
      inputRef.current.value = currentText ? `${currentText} ${speechResult}` : speechResult;
    };

    recog.onerror = (e) => console.error("Speech error:", e);
    recog.onend = () => {
      if (shouldRestartRef.current) recog.start();
    };

    recognitionRef.current = recog;
    recog.start();

    return () => {
      shouldRestartRef.current = false;
      recog.stop();
    };
  }, []);

  return (
    <ChatInputMessage
      inputRef={inputRef}
      onSubmit={handleSubmit}
      toggleInputMode={toggleInputMode}
      mode="speech"
    />
  );
};

export default ChatInputSpeech;
