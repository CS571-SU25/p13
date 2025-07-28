// components/ChatInput.jsx
import React from 'react';

const ChatInput = ({ inputRef, onSubmit, isSpeechMode, toggleInputMode }) => {
  return (
    <div style={{ 
      width: '400px', 
      display: 'flex', 
      justifyContent: 'center', 
      marginTop: '1rem',
    }}>
      <div
        style={{
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <textarea
                id="userInput"
                ref={inputRef}
                // defaultValue="Pick the apple and place it on the bread."
                placeholder={isSpeechMode ? "Say something..." : "Type your message..."}
                style={{
                  flexGrow: 1,
                  padding: '0.5rem',
                  fontSize: '0.875rem',
                  borderRadius: '0.375rem',
                  resize: 'none',
                  backgroundColor: '#3f3f3f',
                  color: 'white',
                  height: '85px',
                  border: 'none',
                }}
              />
              <button
                onClick={onSubmit}
                disabled={isSpeechMode}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  borderRadius: '0.375rem',
                  backgroundColor: 'black',
                  color: 'white',
                  height: '40px',
                  border: 'none',
                  cursor: 'pointer',
                }}
                type="button"
              >
                Enter
              </button>
            </div>
        <button
            onClick={toggleInputMode}
            type="button"
            style={{
              alignSelf: 'flex-start',
              padding: '0.5rem 1rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              borderRadius: '0.375rem',
              backgroundColor: isSpeechMode ? '#991b1b' : '#065f46',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {isSpeechMode ? 'Stop Speech' : 'Use Speech'}
          </button>
      </div>
    </div>
  );
};

export default ChatInput;
