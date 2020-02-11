import React, { useState } from "react";
import "../declare_modules.d.ts";
import "../style.css";
import { Box, Button } from "react-desktop/macOs";
import { Form, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const SettingForm = () => {
  return (
    <>
      <Box padding="20px" margin="5px" height="100%">
        <Form.Group controlId="formGroupSlideTitle">
          <Form.Label>Title</Form.Label>
          <Form.Row>
            <Col sm={3}>
              <Form.Check type="checkbox" label="Random title" />
            </Col>
            <Col>
              <Form.Control
                type="text"
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
              <Form.Check type="checkbox" label="Auto play" />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="3 minutes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="5 minutes"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="7 minutes"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Button
          color="blue"
          onClick={() => {
            // setTitle("new title");
            // handleShow();
            console.log("Clicked!");
          }}
        >
          Start presentation
        </Button>
      </Box>
    </>
  );
};
