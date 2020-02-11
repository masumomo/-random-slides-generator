import React, { useState } from "react";
import "../declare_modules.d.ts";
import "../style.css";
import { Button, Dialog, TitleBar } from "react-desktop/macOs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";

export const NotificationModal = (props: any) => {
  console.log("showModal test :", props.showModal);
  return (
    <Modal show={props.showModal} onHide={props.handleClose}>
      <TitleBar controls />
      <Dialog
        title="Created new slide for you!"
        message="Are you ready???"
        buttons={[
          <Button onClick={props.handleClose}>Cancel</Button>,
          <Button color="blue" onClick={props.handleNext}>
            OK
          </Button>
        ]}
      />
    </Modal>
  );
};
