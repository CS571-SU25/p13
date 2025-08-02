import React, { useEffect, useRef, useState } from 'react';
import ROSLIB from 'roslib';
import { LLMChat } from '../lib/LLMChat';

const LLMChatLogic = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const runButtonRef = useRef(null);

  useEffect(() => {
    const ros = new ROSLIB.Ros({ url: 'ws://localhost:9090' });

    ros.on('connection', () => console.log('Connected'));
    ros.on('error', (e) => console.error(e));
    ros.on('close', () => console.warn('Closed'));

    const chat = new LLMChat(ros, '', '', 'runOnBotButton');
    chat.llmListenerCallback = (msg) => {
      setMessages((prev) => [...prev, { role: 'agent', text: msg.data }]);
    };

    window.llmChat = chat;
  }, []);

  const handleUserMessage = (text) => {
    setMessages((prev) => [...prev, { role: 'user', text }]);
    const rosMsg = new ROSLIB.Message({ data: text });
    window.llmChat.userResponsePub.publish(rosMsg);
  };

  return (
    <>
      <button id="runOnBotButton" ref={runButtonRef} style={{ display: 'none' }}>
        Run
      </button>
      {children({ messages, handleUserMessage })}
    </>
  );
};

export default LLMChatLogic;
