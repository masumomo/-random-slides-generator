import React from "react";
import "../declare_modules.d.ts";
import sampleImg from "../img/sample.webp";
import "../style.css";
import { Window, TitleBar, Box, Button, Dialog } from "react-desktop/macOs";
import { Form, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <div className="App">
        <TitleBar
          title="CCC generator"
          controls
          onCloseClick={() => console.log("Close window")} //Close browser
          onMinimizeClick={() => alert("Sorry!")} //Nope
          onMaximizeClick={() => console.log("Mazimize window")} //Nope
          onResizeClick={() => alert("Sorry!")} //Nope
        />
        <Box padding="20px" margin="5px">
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Title</Form.Label>
            <Form.Row>
              <Col sm={3}>
                <Form.Check type="checkbox" label="Random title" checked />
              </Col>
              <Col>
                <Form.Control
                  type="email"
                  placeholder="Enter your title"
                  disabled
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Length</Form.Label>
            <Form.Row>
              <Col sm={3}>
                <Form.Check type="checkbox" label="Auto run" checked />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="1 minute"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="3 minutes"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  checked
                />
                <Form.Check
                  type="radio"
                  label="5 minutes"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Button color="blue" onClick={() => console.log("Clicked!")}>
            Start presentation
          </Button>
        </Box>
      </div>

      <div className="App">
        <Window
          className="modal-notification"
          chrome
          height="200px"
          width="300px"
          padding="20px"
        >
          <TitleBar controls />
          <Dialog
            title="This is a title"
            message="This message is inside a dialog component."
            buttons={[
              <Button onClick={() => console.log("close this dialog")}>
                Cancel
              </Button>,
              <Button
                color="blue"
                onClick={() => console.log("submit this dialog")}
              >
                OK
              </Button>
            ]}
          />
        </Window>
      </div>
      <div className="slides">
        <div className="slides1">
          <h2>TITLE</h2>
        </div>

        <div className="slides2">
          <img src={sampleImg} alt="slide" />
        </div>

        <div className="slides3">
          <img src={sampleImg} alt="slide" />
        </div>

        <div className="slides4">
          <img src={sampleImg} alt="slide" />
        </div>

        <div className="slides5">
          <h2>End</h2>
        </div>
        <div className="slides6">
          <img src={sampleImg} alt="slide" />
        </div>
      </div>
    </>
  );
};

export default App;
