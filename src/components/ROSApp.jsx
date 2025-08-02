import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LLMChatComponent from './LLMChat';
import Visualizer from './Visualizer';
import Toggle from './Toggle';
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';

const ROSApp = () => {
  return (
    <Container fluid className="bg-black text-white min-vh-100 py-4">
      <Row className="h-100">
        <Col xs={12} xl={7} className="h-100">
          <Toggle title="Visualizer" className="h-100">
            <Visualizer />
          </Toggle>
        </Col>
        <Col xs={12} xl={5} className="h-100 d-flex flex-column gap-3">
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
    </Container>
  );
};

export default ROSApp;
