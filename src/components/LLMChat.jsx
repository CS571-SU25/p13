import React, { useEffect, useRef, useState } from 'react';
import { LLMChat } from '../lib/LLMChat';
import ROSLIB from 'roslib';
import '../App.css';

const LLMChatComponent = () => {
  const historyRef = useRef(null);
  const inputRef = useRef(null);
  const runButtonRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!runButtonRef.current) return;

    const ros = new ROSLIB.Ros({ url: 'ws://localhost:9090' });
    const chat = new LLMChat(ros, "", "", runButtonRef.current.id);

    chat.llmListenerCallback = (message) => {
      setMessages((prev) => [...prev, { role: 'agent', text: message.data }]);
    };

    window.llmChat = chat;
  }, []);

  const handleClick = () => {
    const value = inputRef.current.value;
    console.log("User input:", value);
    if (value.trim()) {
      setMessages((prev) => [...prev, { role: 'user', text: value }]);

      const str = new ROSLIB.Message({ data: value });
      window.llmChat.userResponsePub.publish(str);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-md max-w-md ml-auto">
      <div
        ref={historyRef}
        style={{
          height: '400px',
          width: '400px',
          overflowY: 'scroll',
          backgroundColor: 'black',
          color: 'white',
          padding: '1rem',
          borderRadius: '0.5rem',
          boxShadow: '0 0 5px rgba(0,0,0,0.3)',
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

      {/* <button
        id="runOnBotButton"
        ref={runButtonRef}
        style={{ display: 'none' }}
        className="bg-gray-700 rounded hover:bg-gray-800 px-4 py-2 mb-2"
      >
        Run on robot
      </button> */}

      <div style={{ width: '400px', display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <div
          style={{
            width: '400px',
            display: 'flex',
            gap: '0.5rem',
          }}
        >
          <textarea
            id="userInput"
            ref={inputRef}
            defaultValue="Pick the apple and place it on the bread."
            style={{
              flexGrow: 1,
              padding: '0.5rem',
              fontSize: '0.875rem',
              borderRadius: '0.375rem',
              resize: 'none',
              backgroundColor: 'black',
              color: 'white',
              height: '85px',
              border: 'none',
            }}
          />
          <button
            onClick={handleClick}
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
      </div>
    </div>
  );
};

export default LLMChatComponent;
