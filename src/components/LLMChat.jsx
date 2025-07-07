import React, { useEffect, useRef } from 'react';
import { LLMChat } from '../lib/LLMChat';
import ROSLIB from 'roslib';

const LLMChatComponent = () => {
  const historyRef = useRef(null);
  const inputRef = useRef(null);
  const runButtonRef = useRef(null);

  useEffect(() => {
    const ros = new ROSLIB.Ros({ url: 'ws://localhost:9090' });
    const chat = new LLMChat(ros, "", historyRef.current.id, runButtonRef.current.id);
    window.llmChat = chat; // still needed for button callbacks
  }, []);

  const handleClick = () => {
    window.llmChat?.userInputCallback(inputRef.current.id);
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <div id="chatHistory" ref={historyRef} className="mb-4"></div>
      <button
        id="runOnBotButton"
        ref={runButtonRef}
        style={{ display: "none" }}
        className="bg-gray-700 rounded hover:bg-gray-800 px-4 py-2 mb-2"
      >
        Run on robot
      </button>
      <textarea
        id="userInput"
        ref={inputRef}
        defaultValue="Pick the apple and place it on the bread."
        className="w-full p-2 mb-2 rounded bg-gray-800 border border-gray-600"
      />
      <button
        onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Enter
      </button>
    </div>
  );
};

export default LLMChatComponent;
