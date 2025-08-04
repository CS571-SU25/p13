import React, { useEffect, useRef, useState } from 'react';
import MicPulse from './MicPulse';

const micSize = 40;

const AudioTest = () => {
  const [isHearing, setIsHearing] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);

  const startTest = () => {
    setTranscript('');
    setIsTesting(true);

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recog = new SpeechRecognition();
    recog.continuous = true;
    recog.interimResults = true;
    recog.lang = 'en-US';

    recog.onresult = (event) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        finalTranscript += event.results[i][0].transcript;
      }
      setTranscript(finalTranscript);
    };

    recog.onerror = (e) => console.error("Speech recognition error:", e);
    recog.onend = () => {
      if (isTesting) recog.start();
    };

    recog.start();
    recognitionRef.current = recog;
  };

  const stopTest = () => {
    setIsTesting(false);
    recognitionRef.current?.stop();
    setTranscript("");
  };

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
    };
  }, []);

  return (
    <div>
      <div className="mb-2">
        {!isTesting ? (
            <button
            onClick={startTest}
            style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#065f46',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer',
            }}
            >
                Start Test
            </button>
        ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                  onClick={stopTest}
                  style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: '#991b1b',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.375rem',
                      cursor: 'pointer',
                  }}
              >
                  Stop Test
              </button>
              <MicPulse size={micSize} />
          </div>
        )}
      </div>
      <textarea
        value={transcript}
        placeholder="Speak into your mic..."
        aria-label="Speak into your mic"
        readOnly
        style={{
          width: '100%',
          height: '80px',
          padding: '0.5rem',
          backgroundColor: '#3f3f3f',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'default',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default AudioTest;
