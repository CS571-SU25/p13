import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Toggle from "./Toggle";
import AudioTest from "./AudioTest";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <Container fluid className="bg-black text-white min-vh-100 pt-4 px-3">
        <div
            style={{
            maxWidth: "700px",
            margin: "0 auto", // centers the "card"
            padding: "2rem 1rem",
            textAlign: "left", // left-aligns inner content
            }}
        >
            <h1>Settings</h1>
            <p>Customize your preferences and test your hardware.</p>

            <div className="mt-4">
            <h4>Visibility Toggles</h4>
            <div className="d-flex flex-column gap-2">
                <Toggle title="Visualizer" />
                <Toggle title="Tips" />
                <Toggle title="Chat History" />
            </div>
            </div>

            <div className="mt-4">
            <h4>Audio Testing</h4>
            <AudioTest />
            </div>

            <div className="mt-4">
            <h4>Need help?</h4>
            <Button
                variant="outline-secondary"
                onClick={() => navigate("/instructions")}
            >
                User Guide
            </Button>
            </div>
        </div>
    </Container>
  );
}
