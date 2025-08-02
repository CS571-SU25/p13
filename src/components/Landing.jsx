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
                <Col md={6}>
                    <h1 className="display-4 fw-bold">Assistive Robotic Arm</h1>
                    <p className="lead text-light mb-4">Bringing independence around the house.</p>
                    <p className="text-light">
                    TODO: write project description!<br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                    Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                    Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                    Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                    Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    </p>
                    <Button 
                        size="lg" 
                        style={{ backgroundColor: "#008080", borderColor: "#FFFFFF" }}
                        onClick={handleTryItNow}
                    >
                        Try It Now
                    </Button>
                </Col>

                <Col md={6} className="text-center">
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
            <Col md={4}>
              <Card bg="dark" text="white" className="h-100">
                <Card.Img src="/p13/task-planning-user.jpg" className="mb-3" />
                <Card.Img src="/p13/task-planning-agent.jpg" />
                <Card.Body>
                  <Card.Title>Smart Task Planning</Card.Title>
                  <Card.Text>
                    The model accurately breaks down complex tasks into safe, achievable steps.
                    <br/>TODO: list out primitives!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="dark" text="white" className="h-100">
                <Card.Img variant="top" src="/p13/visualization.jpg" />
                <Card.Body>
                  <Card.Title>Live Visualization</Card.Title>
                  <Card.Text>
                    Watch the robot visualized on screen before real-world manipulation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="dark" text="white" className="h-100">
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Accessible Communication</Card.Title>
                  <Card.Text>
                    Easily switch between typing and speech communication modes.
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
            style={{ backgroundColor: "#008080", borderColor: "#FFFFFF" }}
            onClick={handleTryItNow}
        >
          Try It Now
        </Button>
      </section>
    </div>
  );
}
