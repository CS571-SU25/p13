import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import LLMChatComponent from './LLMChat';
import Visualizer from './Visualizer';
import Toggle from './Toggle';
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';

const ROSApp = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="bg-black text-white min-vh-100 py-4">
      <h1>Robot Interface</h1>
      <Row className="align-items-start gx-0">
        <Col xs={12} lg={6} className="mb-4">
          <h2>Visualizer</h2>
          <Toggle title="Visualizer">
            <Visualizer />
          </Toggle>
        </Col>
        <Col xs={12} lg={6} 
          className="d-flex flex-column align-items-center justify-content-start mb-5"
        >
          <h2>Chat</h2>
          <LLMChatComponent>
            {({ messages, handleUserMessage }) => (
              <>
                <Toggle title="Chat History">
                  <ChatHistory messages={messages} />
                </Toggle>
                <ChatInput onUserSubmit={handleUserMessage} />
              </>
            )}
          </LLMChatComponent>
        </Col>
      </Row>
      <h3>Need help?</h3>
      <Button
        variant="outline-secondary"
        onClick={() => navigate("/user-guide")}
      >
        User Guide
      </Button>
    </Container>
  );
};

export default ROSApp;
