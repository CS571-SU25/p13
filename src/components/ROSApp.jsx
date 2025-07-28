import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LLMChatComponent from './LLMChat';
import Visualizer from './Visualizer';
import Toggle from './Toggle';

const ROSApp = () => {
  const [showVisualizer, setShowVisualizer] = useState(true);
  const [showChat, setShowChat] = useState(true);

  return (
    <Container className="min-vh-100 py-4">
      <Row>
        <Col xs={12} xl={7}>
          <Toggle title="Visualizer">
            <Visualizer />
          </Toggle>
        </Col>
        <Col xs={12} xl={5} className="mt-5 mt-xl-0">
          <Toggle title="Chat">
            <LLMChatComponent />
          </Toggle>
        </Col>
      </Row>
    </Container>
  );
};

export default ROSApp;
