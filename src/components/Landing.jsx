import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  const handleTryItNow = () => {
    navigate("/robot");
  };

  return (
    <div className="p-4 bg-black text-white min-vh-100">
      <section className="my-5">
        <Container>
            <Row className="align-items-center">
                <Col lg={6}>
                    <h1 className="display-4 fw-bold">Assistive Robotic Arm</h1>
                    <p className="lead text-light mb-4">Bringing independence around the house.</p>
                    <p className="text-light">
                      The Assistive Robotic Arm is designed to support users with limited mobility to independently complete everyday tasks hands-free.
                      Whether it's simply moving an object or helping with daily routines, the robot arm responds to natural commands like "pick up the cup," "place the plate on the table," or "twist open the jar."
                      Using advanced language understanding and task planning, the system interprets the given command, breaks it down into a sequence of executable steps, and carries out the task.
                      The process is fully visualized in real time, giving users clear feedback on how the robot understands and responds to their requests. 
                      This allows for trust, transparency, and easy corrections if needed.
                      Designed with accessibility and autonomy in mind, the Assistive Robotic Arm opens new possibilities for hands-free assistance in home and care settings. 
                    </p>
                    <Button 
                        size="lg" 
                        className="mb-3 mb-lg-0"
                        style={{ backgroundColor: "#008080", borderColor: "#008080" }}
                        onClick={handleTryItNow}
                    >
                        Try It Now
                    </Button>
                </Col>

                <Col lg={6} className="text-center">
                    <video
                        controls
                        className="rounded shadow"
                        style={{ width: "100%", maxWidth: "500px", height: "auto" }}
                    >
                    <source src="/p13/demo.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </Col>
            </Row>
        </Container>
      </section>

      <section className="my-5">
        <h2 className="text-center mb-4">What it can do</h2>
        <Container>
          <Row className="g-4">
            <Col lg={4}>
              <Card bg="dark" text="white" className="h-100">
                <Card.Img src="/p13/text-input.png" className="mb-3" alt="Text input example" />
                <Card.Img src="/p13/speech-input.png" alt="Speech input example" />
                <Card.Body>
                  <Card.Title>Accessible Communication</Card.Title>
                  <Card.Text>
                    Easily switch between typing and speech communication modes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card bg="dark" text="white" className="h-100">
                <Card.Img src="/p13/task-planning-user.jpg" className="mb-3" alt="First user command" />
                <Card.Img src="/p13/task-planning-agent.jpg" className="mb-3" alt="First task planning from agent" />
                <Card.Img src="/p13/task-planning-user-2.png" className="mb-3" alt="Second user commadnd" />
                <Card.Img src="/p13/task-planning-agent-2.png" alt="Second task planning from agent" />
                <Card.Body>
                  <Card.Title>Smart Task Planning</Card.Title>
                  <Card.Text>
                    The model accurately breaks down complex tasks into achievable steps, so you don't need to worry about every detail.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card bg="dark" text="white" className="h-100">
                <Card.Img variant="top" src="/p13/visualization.jpg" alt="Live visualization of robot arm and objects in environment" />
                <Card.Body>
                  <Card.Title>Live Visualization</Card.Title>
                  <Card.Text>
                    Watch the robot visualized on screen before real-world manipulation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="text-center my-5">
        <h2 className="mb-3">Get started with the Assistive Robotic Arm</h2>
        <p className="lead text-light">
          Experience how it brings more autonomy to daily life.
        </p>
        <Button 
            size="lg" 
            style={{ backgroundColor: "#008080", borderColor: "#008080" }}
            onClick={handleTryItNow}
        >
          Try It Now
        </Button>
      </section>
    </div>
  );
}
