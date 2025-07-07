import React, { useEffect, useRef, useState } from 'react';
import { LLMChat } from '../lib/LLMChat';
import ROSLIB from 'roslib';

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

    window.llmChat = chat; // still needed for button callbacks
  }, []);

  const handleClick = () => {
    const value = inputRef.current.value;
    if (value.trim()) {
      setMessages((prev) => [...prev, { role: 'user', text: value }]);

      const str = new ROSLIB.Message({ data: value });
      window.llmChat.userResponsePub.publish(str);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-md max-w-md ml-auto">
      <div className="w-full bg-black text-white h-[200px] p-4 rounded shadow-md overflow-y-auto">
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

      <div className="flex justify-center mt-4">
        <div className="flex gap-2 items-center">
            <textarea
                id="userInput"
                ref={inputRef}
                defaultValue="Pick the apple and place it on the bread."
                className="h-[60px] w-[300px] p-2 text-sm leading-tight rounded bg-gray-800 border border-gray-600 resize-none"
            />
            <button
                onClick={handleClick}
                className="h-[60px] px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded"
            >
            Enter
            </button>
        </div>
      </div>
    </div>
  );
};

export default LLMChatComponent;
