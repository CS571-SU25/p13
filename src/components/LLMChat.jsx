import React, { useEffect, useRef, useState } from 'react';
import { LLMChat } from '../lib/LLMChat';
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';
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
    <div className="p-6 bg-gray-900 text-white rounded-lg max-w-md ml-auto">
      <ChatHistory messages={messages} historyRef={historyRef} />
      <ChatInput inputRef={inputRef} onSubmit={handleClick} />

      {/* <button
        id="runOnBotButton"
        ref={runButtonRef}
        style={{ display: 'none' }}
        className="bg-gray-700 rounded hover:bg-gray-800 px-4 py-2 mb-2"
      >
        Run on robot
      </button> */}
    </div>
  );
};

export default LLMChatComponent;
