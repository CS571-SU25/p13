import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const Toggle = ({ title = 'Component', children }) => {
  const storageKey = `toggle-${title}`;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const savedState = sessionStorage.getItem(storageKey);
    if (savedState !== null) {
      setVisible(savedState === "true");
    }
  }, [storageKey]);

  const toggleVisibility = () => {
    const newState = !visible;
    setVisible(newState);
    sessionStorage.setItem(storageKey, newState.toString());
  };

  return (
    <div>
      <Button
        variant="dark"
        size="md"
        style={{
          zIndex: 10,
        }}
        onClick={toggleVisibility}
      >
        {visible ? `Hide` : `Show`} {title}
      </Button>
      {visible && children && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default Toggle;
