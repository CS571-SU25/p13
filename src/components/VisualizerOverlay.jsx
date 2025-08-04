import React from 'react';

const VisualizerOverlay = () => {
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        borderRadius: '0.5rem',
        fontSize: '0.875rem',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    >
      <div>Click + drag to rotate</div>
      <div>Scroll to zoom</div>
      {/* <div>Right-click to pan</div> */}
    </div>
  );
};

export default VisualizerOverlay;
