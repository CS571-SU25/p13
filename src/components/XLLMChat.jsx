/* TODO: remove this file eventually */

import React, { useEffect, useRef, useState } from 'react';
import { LLMChat } from '../lib/LLMChat';
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';
import ROSLIB from 'roslib';
import '../App.css';

const LLMChatComponent = () => {
  const historyRef = useRef(null);
  const inputRef = useRef(null);
  const isSpeechModeRef = useRef(false);
  const recognitionRef = useRef(null);
  const runButtonRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [isSpeechMode, setIsSpeechMode] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if (!runButtonRef.current) return;

    const ros = new ROSLIB.Ros({ url: 'ws://localhost:9090' });
    const chat = new LLMChat(ros, "", "", runButtonRef.current.id);

    chat.llmListenerCallback = (message) => {
      setMessages((prev) => [...prev, { role: 'agent', text: message.data }]);
    };

    window.llmChat = chat;
  }, []);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      console.warn('Speech recognition not supported');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recog = new SpeechRecognition();
    recog.continuous = true;
    recog.interimResults = false;
    recog.lang = 'en-US';

    recognitionRef.current = recog;
    setRecognition(recog);

    recog.onresult = (event) => {
      const speechResult = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();

      if (speechResult.includes("stop speech")) {
        // recognition.stop();
        // recognitionRef.current?.abort();
        isSpeechModeRef.current = false;
        setIsSpeechMode(false);
        console.log("Speech mode stopped by voice command.");

        setTimeout(() => {
          recognitionRef.current?.abort();
          console.log("Mic aborted");
        }, 100);
        
        return;
      }

      if (speechResult.includes("enter")) {
        handleClick();
        inputRef.current.value = "";
        return;
      }

      // append to textarea
      const currentText = inputRef.current.value;
      inputRef.current.value = currentText
        ? `${currentText} ${speechResult}`
        : speechResult;
    };

    recog.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recog.onend = () => {
      if (isSpeechMode) {
        // recog.start(); // keep listening if still in speech mode
        recognitionRef.current?.start();
      }
      else {
        console.log("Microphone stopped.");
      }
    };

    setRecognition(recog);
  }, [isSpeechMode]);

  const handleClick = () => {
    const value = inputRef.current.value;
    console.log("User input:", value);
    if (value.trim()) {
      inputRef.current.value = "";

      setMessages((prev) => [...prev, { role: 'user', text: value }]);
      const str = new ROSLIB.Message({ data: value });
      window.llmChat.userResponsePub.publish(str);
    }
  };

  const toggleInputMode = () => {
    if (isSpeechMode) {
      // recognition.stop();
      recognitionRef.current?.abort();
    } else {
      // recognition.start();
      recognitionRef.current?.start();
    }
    isSpeechModeRef.current = !isSpeechMode;
    setIsSpeechMode((prev) => !prev);
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg max-w-md ml-auto">
      <ChatHistory messages={messages} historyRef={historyRef} />
      <ChatInput 
        inputRef={inputRef} 
        onSubmit={handleClick}
        isSpeechMode={isSpeechMode}
        toggleInputMode={toggleInputMode}
      />

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
