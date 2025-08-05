import React from "react";
import { Container } from "react-bootstrap";

export default function UserGuide() {
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
        <h1 className="mb-4">User Guide</h1>

        <section className="mb-5">
          <h2>1. Visualizer</h2>
          <p>The Visualizer shows the robot and the detected objects in a simulated 3D environment.</p>
          <ul>
            <li>Click "Hide Tips" to hide the camera control tips.</li>
            <li>Click "Hide Visualizer" to collaspe the entire Visualizer.</li>
            <li>
              Use your mouse or trackpad to:
              <ul>
                <li>Click + drag to rotate</li>
                <li>Scroll to zoom</li>
                {/* <li>Right-click to pan</li> */}
              </ul>
            </li>
          </ul>
          <div className="mt-3">
            <img
              src="/p13/visualization.jpg"
              alt="Visualizer placeholder"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                display: "block",
                borderRadius: "10px",
                border: "1px solid white",
              }}
            />
            <p className="mt-2 fst-italic">3D visualizer showing the robot and object grid.</p>
          </div>
        </section>

        <section className="mb-5">
          <h2 >2. Chat Interface</h2>
          <p>The chat interface allows you to control the robot using typed or spoken commands.</p>
          <h3 className="mt-4">Chat History</h3>
          <ul>
            <li>Click "Hide Chat History" to collapse the history panel.</li>
            <li>Messages are saved for the current session, even if you navigate away or refresh.</li>
          </ul>
          <h3 className="mt-4">Typing Commands</h3>
          <ul>
            <li>Click inside the input box and type your command.</li>
            <li>Press the <b>Enter</b> key or click the <span style={{ color: "#60a5fa" }}>"Enter"</span> button to submit.</li>
            <li>Use <b>Shift + Enter</b> to insert a new line.</li>
          </ul>
          <div className="d-flex flex-wrap gap-4 mt-4">
            <div style={{ flex: "1", minWidth: "250px" }}>
              <img
                src="/p13/text-input.png"
                alt="Typing mode example"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  display: "block",
                  borderRadius: "10px",
                  border: "1px solid white",
                }}
              />
              <p className="mt-2 fst-italic">Chat interface in typing mode.</p>
            </div>
          </div>
          <h3 className="mt-4">Speech Commands</h3>
          <ul>
            <li>Click the <span style={{ color: "#34d399" }}>"Use Speech"</span> button.</li>
            <li>Allow microphone access when prompted.</li>
            <li>Speak your command clearly.</li>
            <li>Say "Enter" to submit your command.</li>
            <li>Say "Stop Speech" to exit speech mode or click on the <span style={{ color: "#f87171" }}>"Say 'Stop Speech'"</span> button.</li>
          </ul>
          <div className="d-flex flex-wrap gap-4 mt-4">
            <div style={{ flex: "1", minWidth: "250px" }}>
              <img
                src="/p13/speech-input.png"
                alt="Speech mode example"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  display: "block",
                  borderRadius: "10px",
                  border: "1px solid white",
                }}
              />
              <p className="mt-2 fst-italic">Speech mode with mic input active.</p>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2>3. Executing a Task</h2>
          <ol>
            <li>Decide what task you want the robot to perform (e.g., "Pick up the cup").</li>
            <li>Type or speak your command using the chat interface.</li>
            <li>Submit the command.</li>
            <li>Watch the robot simulate the task in the 3D visualizer.</li>
          </ol>
          <img
              src="/p13/task-planning-user-cropped.jpg"
              alt="Task execution simulation"
              style={{
                  width: "100%",
                  maxWidth: "300px",
                  height: "auto",
                  display: "block",
                  borderRadius: "10px",
                  border: "1px solid white",
                }}
            />
          <div
            className="d-flex flex-wrap gap-3 mt-3"
            style={{ justifyContent: "center" }}
          >
            {["step-1.png", "step-2.png", "step-3.png", "step-4.png", "step-5.png"].map((img, idx) => (
              <img
                key={idx}
                src={`/p13/${img}`}
                alt={`Step ${idx + 1} of task simulation`}
                style={{
                  width: "100%",
                  maxWidth: "120px",
                  height: "auto",
                  borderRadius: "10px",
                  border: "1px solid white",
                }}
              />
            ))}
          </div>
          <p className="mt-2 fst-italic">Example of a robot task being visualized step by step.</p>
        </section>
      </div>
    </Container>
  );
}
