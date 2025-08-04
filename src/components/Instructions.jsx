import React from "react";
import { Container } from "react-bootstrap";

export default function Instructions() {
  return (
    <Container fluid className="bg-black text-white min-vh-100 pt-4 px-3">
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "2rem 1rem",
          textAlign: "left",
        }}
      >
        <h1>Instructions</h1>

        <ol style={{ listStylePosition: "inside", lineHeight: "2rem", padding: 0 }}>
          <li>Decide on a task for the robot</li>
          <li>Type the task into the input box on the right panel</li>
          <li>
            Press the <strong>Enter</strong> key or use speech input
          </li>
          <li>Observe the robot arm executing the task in the simulation</li>
        </ol>

        <p className="mt-4 fst-italic">
          TODO: Add more detailed steps and visuals once development progresses.
        </p>

        <div className="d-flex flex-wrap gap-4 mt-4">
          <div style={{ flex: "1", minWidth: "250px" }}>
            <img
              src="/mnt/data/0330626a-bb0b-4da2-ba8d-bdb18dc0d2cf.png"
              alt="Step 1 Placeholder"
              style={{ width: "100%", borderRadius: "10px", border: "1px solid white" }}
            />
            <p className="mt-2">Example of the robot workspace grid.</p>
          </div>
          <div style={{ flex: "1", minWidth: "250px" }}>
            <img
              src="/mnt/data/1e73b1b6-edae-4e79-a94d-9d124cb71a96.png"
              alt="Step 2 Placeholder"
              style={{ width: "100%", borderRadius: "10px", border: "1px solid white" }}
            />
            <p className="mt-2">Speech input activated view.</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
