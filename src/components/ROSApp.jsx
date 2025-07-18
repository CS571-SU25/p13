import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LLMChatComponent from './LLMChat';
import Visualizer from './Visualizer';

const ROSApp = () => {
  return (
    <Container className="min-vh-100 py-4">
      <Row>
        <Col xs={12} xl={7}>
          <Visualizer />
        </Col>
        <Col xs={12} xl={5} className="mt-5 mt-xl-0">
          <LLMChatComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ROSApp;
