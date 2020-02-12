import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../declare_modules.d.ts";
import "../style.css";
import { TitleBar, Box, Button } from "react-desktop/macOs";
import { Form, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NotificationModal } from "./NotificationModal";
import { Presentation } from "./Presentation";
import { SettingForm } from "./SettingForm";

const App = () => {
  const [titles, setTitles] = useState("Main");
  const [currentView, setCurrentView] = useState("Main");
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [length, setLength] = useState(3);
  const [activeFontFamily, setActiveFontFamily] = useState("");
  const [mainSlideImgCount, setMainSlideImgCount] = useState(4);
  const [isAutoRun, setIsAutoRun] = useState(true);

  //https://dev.to/busypeoples/notes-on-typescript-react-hooks-28j2
  const inputRandomTitleEl = useRef(null);
  const inputTitleEl = useRef(null);
  const inputAutoRunEl = useRef(null);
  const inputLengthEl = useRef(null);

  const goBackToMain = () => {
    setCurrentView("Main");
  };
  console.log("showModal1 :", showModal);
  const handleClose = () => {
    setShowModal(false);
  };
  const handleShow = () => {
    setShowModal(true);
  };
  const handleNext = () => {
    setCurrentView("Slide");
    setShowModal(false);
  };
  useEffect(() => {
    const initialSet = async () => {
      await axios({
        url: "/graphql",
        method: "post",
        data: {
          query: `query {Titles {title}}`
        }
      }).then(res => {
        const titleList = res.data.data.Titles;
        console.log("API titleList :", titleList);
        setTitles(titleList.map((item: any) => item.title));
      });
    };
    initialSet();
  }, []);
  const renderCurrentView = () => {
    switch (currentView) {
      case "Main":
        return (
          <>
            <TitleBar
              title="Random Slides Generator"
              controls
              onCloseClick={() => window.close()} //Close browser
              onMinimizeClick={() => alert("Sorry!")} //Nope
              onMaximizeClick={() => console.log("Mazimize window")} //Nope
              onResizeClick={() => alert("Sorry!")} //Nope
            />
            <Box padding="20px" margin="10px" height="100%">
              <Form.Group controlId="formGroupSlideTitle">
                <Form.Label>Title</Form.Label>
                <Form.Row>
                  <Col sm={3}>
                    <Form.Check
                      type="checkbox"
                      label="Random title"
                      defaultChecked={true}
                      ref={inputRandomTitleEl}
                      onChange={() => {
                        if (inputRandomTitleEl.current.checked) {
                          inputTitleEl.current.disabled = true;
                        } else {
                          inputTitleEl.current.disabled = false;
                        }
                      }}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Enter your title"
                      disabled
                      ref={inputTitleEl}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
              <Form.Group controlId="formGroupLength">
                <Form.Label>Length</Form.Label>
                <Form.Row>
                  <Col sm={3}>
                    <Form.Check
                      type="checkbox"
                      label="Auto play"
                      ref={inputAutoRunEl}
                      defaultChecked={true}
                    />
                  </Col>
                  <Col ref={inputLengthEl}>
                    <Form.Check
                      type="radio"
                      label="3 minutes"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                      checked
                      onChange={() => {}}
                    />
                    <Form.Check
                      type="radio"
                      label="5 minutes"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                      disabled
                    />
                    <Form.Check
                      type="radio"
                      label="7 minutes"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                      disabled
                      onChange={() => {}}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Button
                color="blue"
                onClick={() => {
                  handleShow();
                  if (inputRandomTitleEl.current!.checked) {
                    //Create random title here
                    console.log("titles :", titles);
                    let randomIndex = Math.floor(
                      Math.random() * (titles.length - 1)
                    );
                    //For demo!
                    randomIndex = 6;
                    console.log("randomIndex :", randomIndex);
                    setTitle(titles[randomIndex]);
                  } else {
                    setTitle(inputTitleEl.current!.value);
                  }
                  console.log(
                    "selectedIndex :",
                    inputLengthEl.current!.selectedIndex
                  );
                  console.log("current :", inputLengthEl.current!);
                  setIsAutoRun(inputAutoRunEl.current!.checked);
                }}
              >
                Start presentation
              </Button>
            </Box>
          </>
        );
      case "Slide":
        return (
          <Presentation
            title={title}
            length={length * 60}
            goBackToMain={goBackToMain}
            isAutoRun={isAutoRun}
          />
        );
      default:
        break;
    }
  };
  return (
    <>
      <div className="App">{renderCurrentView()}</div>
      <NotificationModal
        showModal={showModal}
        handleClose={handleClose}
        handleShow={handleShow}
        handleNext={handleNext}
      />
    </>
  );
};

export default App;
