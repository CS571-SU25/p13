// // // components/ChatInput.jsx
// // import React from 'react';

// // const ChatInput = ({ inputRef, onSubmit, isSpeechMode, toggleInputMode }) => {
// //   return (
// //     <div style={{ 
// //       width: '400px', 
// //       display: 'flex', 
// //       justifyContent: 'center', 
// //       marginTop: '1rem',
// //     }}>
// //       <div
// //         style={{
// //           width: '400px',
// //           display: 'flex',
// //           flexDirection: 'column',
// //           gap: '1rem',
// //         }}
// //       >
// //             <div style={{ display: 'flex', gap: '0.5rem' }}>
// //               <textarea
// //                 id="userInput"
// //                 ref={inputRef}
// //                 // defaultValue="Pick the apple and place it on the bread."
// //                 placeholder={isSpeechMode ? "Say something..." : "Type your message..."}
// //                 style={{
// //                   flexGrow: 1,
// //                   padding: '0.5rem',
// //                   fontSize: '0.875rem',
// //                   borderRadius: '0.375rem',
// //                   resize: 'none',
// //                   backgroundColor: '#3f3f3f',
// //                   color: 'white',
// //                   height: '85px',
// //                   border: 'none',
// //                 }}
// //               />
// //               <button
// //                 onClick={onSubmit}
// //                 disabled={isSpeechMode}
// //                 style={{
// //                   padding: '0.5rem 1rem',
// //                   fontSize: '0.875rem',
// //                   fontWeight: '600',
// //                   borderRadius: '0.375rem',
// //                   backgroundColor: 'black',
// //                   color: 'white',
// //                   height: '40px',
// //                   border: 'none',
// //                   cursor: 'pointer',
// //                 }}
// //                 type="button"
// //               >
// //                 Enter
// //               </button>
// //             </div>
// //         <button
// //             onClick={toggleInputMode}
// //             type="button"
// //             style={{
// //               alignSelf: 'flex-start',
// //               padding: '0.5rem 1rem',
// //               fontSize: '0.875rem',
// //               fontWeight: '600',
// //               borderRadius: '0.375rem',
// //               backgroundColor: isSpeechMode ? '#991b1b' : '#065f46',
// //               color: 'white',
// //               border: 'none',
// //               cursor: 'pointer',
// //             }}
// //           >
// //             {isSpeechMode ? 'Stop Speech' : 'Use Speech'}
// //           </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ChatInput;

// // ChatInput.jsx
// import React, { useRef, useEffect, useState } from 'react';
// import ChatInputMessage from './ChatInputMessage';

// const ChatInput = ({ onUserSubmit }) => {
//   const inputRef = useRef(null);
//   const recognitionRef = useRef(null);
//   const shouldRestartRef = useRef(true);
//   const [isSpeechMode, setIsSpeechMode] = useState(false);

//   useEffect(() => {
//     if (!('webkitSpeechRecognition' in window)) return;

//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     const recog = new SpeechRecognition();
//     recog.continuous = true;
//     recog.interimResults = false;
//     recog.lang = 'en-US';

//     recog.onresult = (event) => {
//       const speechResult = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
//       if (speechResult.includes("stop speech")) {
//         shouldRestartRef.current = false;
//         setIsSpeechMode(false);
//         recog.stop();
//         return;
//       }
//       if (speechResult.includes("enter")) {
//         handleSubmit();
//         return;
//       }
//       const currentText = inputRef.current.value;
//       inputRef.current.value = currentText ? `${currentText} ${speechResult}` : speechResult;
//     };

//     recog.onerror = (e) => console.error("Speech error:", e);
//     recog.onend = () => shouldRestartRef.current && recog.start();

//     recognitionRef.current = recog;
//   }, []);

//   const toggleInputMode = () => {
//     if (isSpeechMode) {
//       shouldRestartRef.current = false;
//       recognitionRef.current?.stop();
//     } else {
//       shouldRestartRef.current = true;
//       recognitionRef.current?.start();
//     }
//     setIsSpeechMode((prev) => !prev);
//   };

//   const handleSubmit = () => {
//     const value = inputRef.current?.value?.trim();
//     if (value) {
//       onUserSubmit(value);
//       inputRef.current.value = '';
//     }
//   };

//   return (
//     <ChatInputMessage
//       inputRef={inputRef}
//       onSubmit={handleSubmit}
//       isSpeechMode={isSpeechMode}
//       toggleInputMode={toggleInputMode}
//     />
//   );
// };

// export default ChatInput;

// components/ChatInput.jsx
import React, { useState } from 'react';
import ChatInputType from './ChatInputType';
import ChatInputSpeech from './ChatInputSpeech';

const ChatInput = ({ onUserSubmit }) => {
  const [isSpeechMode, setIsSpeechMode] = useState(false);

  const toggleInputMode = () => setIsSpeechMode((prev) => !prev);

  return isSpeechMode ? (
    <ChatInputSpeech onUserSubmit={onUserSubmit} toggleInputMode={toggleInputMode} />
  ) : (
    <ChatInputType onUserSubmit={onUserSubmit} toggleInputMode={toggleInputMode} />
  );
};

export default ChatInput;
