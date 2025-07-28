import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Toggle = ({ title = 'Component', children }) => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="position-relative mb-4 p-4">
      {/* Toggle button in top-left corner */}
      <Button
        variant="dark"
        size="md"
        style={{
          position: 'absolute',
          top: '0.5rem',
          left: '0.5rem',
          zIndex: 10,
        }}
        onClick={() => setVisible(v => !v)}
      >
        {visible ? `Hide` : `Show`} {title}
      </Button>

      {/* Wrapped component */}
      {visible && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Toggle;
