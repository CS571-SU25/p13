// components/ChatHistory.jsx
import React from 'react';
import ChatHistoryMessage from './ChatHistoryMessage';

const ChatHistory = ({ messages, historyRef }) => {
  return (
    <div>
      <ChatHistoryMessage messages={messages} historyRef={historyRef} />
    </div>
  );
};

export default ChatHistory;
