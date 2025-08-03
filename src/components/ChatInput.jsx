import React, { useState } from 'react';
import ChatInputType from './ChatInputType';
import ChatInputSpeech from './ChatInputSpeech';

const ChatInput = ({ onUserSubmit }) => {
  const [isSpeechMode, setIsSpeechMode] = useState(false);

  const toggleInputMode = () => setIsSpeechMode((prev) => !prev);

  return isSpeechMode ? (
    <ChatInputSpeech onUserSubmit={onUserSubmit} toggleInputMode={toggleInputMode} />
  ) : (
    <ChatInputType onUserSubmit={onUserSubmit} toggleInputMode={toggleInputMode} />
  );
};

export default ChatInput;
