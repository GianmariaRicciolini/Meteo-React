import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertHelp() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="info">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>"Hey! Welcome! Please, use the search bar to check the weather in your city!"</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show me</Button>}
    </>
  );
}

export default AlertHelp;
