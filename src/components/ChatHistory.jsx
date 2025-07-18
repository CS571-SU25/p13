// components/ChatHistory.jsx
import React from 'react';

const ChatHistory = ({ messages, historyRef }) => {
  return (
    <div
      ref={historyRef}
      style={{
        height: '400px',
        width: '400px',
        overflowY: 'scroll',
        backgroundColor: 'black',
        color: 'white',
        padding: '1rem',
        borderRadius: '0.5rem'
      }}
    >
      <h2 className="text-sm mb-2">Chat History</h2>
      {messages.length === 0 ? (
        <p className="text-gray-400">No messages yet...</p>
      ) : (
        messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded mb-2 ${
              msg.role === 'user' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            <strong>{msg.role.toUpperCase()}:</strong> {msg.text}
          </div>
        ))
      )}
    </div>
  );
};

export default ChatHistory;
