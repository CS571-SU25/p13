import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LLMChatComponent from './LLMChat';
import Visualizer from './Visualizer';

const ROSApp = () => {
  return (
    <Container fluid className="bg-white min-vh-100 py-4">
      <Row>
        <Col xs={12} xl={8}>
          <Visualizer />
        </Col>
        <Col xs={12} xl={4}>
          <LLMChatComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ROSApp;
