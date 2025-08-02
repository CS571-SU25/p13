import React from 'react';
import MicPulse from './MicPulse';

const micSize = 43.5;

const ChatInputMessage = ({
  inputRef,
  onSubmit,
  toggleInputMode,
  mode = 'type', // 'type' | 'speech'
}) => {
  const isSpeech = mode === 'speech';

  const placeholder = isSpeech ? 'Say something...' : 'Type your message...';
  const submitButton = isSpeech ? (
    <div>
      <button
        disabled
        style={{
          width: `${micSize * 1.5}px`,
          height: `${micSize * 1.5}px`,
          padding: 0,
          borderRadius: '0.375rem',
          backgroundColor: '#222',
          color: '#999',
          border: 'none',
          cursor: 'default',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <MicPulse size={micSize} />
      </button>
    </div>
  ) : (
    <button
      onClick={onSubmit}
      style={{
        padding: '0.5rem 1rem',
        fontSize: '0.875rem',
        fontWeight: '600',
        borderRadius: '0.375rem',
        backgroundColor: '#222',
        color: 'white',
        height: '40px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Enter
    </button>
  );

  const toggleLabel = isSpeech ? 'Stop Speech' : 'Use Speech';
  const toggleColor = isSpeech ? '#991b1b' : '#065f46';

  return (
    <div style={{ width: '400px', display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
      <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <textarea
            ref={inputRef}
            placeholder={placeholder}
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
          {submitButton}
        </div>
        <button
          onClick={toggleInputMode}
          style={{
            alignSelf: 'flex-start',
            padding: '0.5rem 1rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            borderRadius: '0.375rem',
            backgroundColor: toggleColor,
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {toggleLabel}
        </button>
      </div>
    </div>
  );
};

export default ChatInputMessage;
