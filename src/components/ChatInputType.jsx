import React, { useRef } from 'react';
import ChatInputMessage from './ChatInputMessage';

const ChatInputType = ({ onUserSubmit, toggleInputMode }) => {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    const value = inputRef.current?.value?.trim();
    if (value) {
      onUserSubmit(value);
      inputRef.current.value = '';
    }
  };

  return (
    <ChatInputMessage
      inputRef={inputRef}
      onSubmit={handleSubmit}
      toggleInputMode={toggleInputMode}
      mode="type"
    />
  );
};

export default ChatInputType;
