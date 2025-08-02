import React from 'react';

const MicPulse = ({ size = 43.5 }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'pulse 1.4s infinite',
      }}
    >
      <img
        src="/p13/mic.png"
        alt="Mic"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.8;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MicPulse;
