import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const ForgortPassword = () => {
  const emailRef = useRef();
  const history = useHistory();
  const { passwordreset } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const timer = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    try {
      setError("");
      setLoading(true);
      await passwordreset(email);

      setMessage("message sent to inbox check for more information ");
      timer.current = window.setTimeout(() => {
        setMessage("");
        history.replace("/login");
      }, 3000);
    } catch {
      return setError("could not send email");
    }

    setLoading(false);
  };
  return (
    <div>
      <Card style={{ background: "#fafafa" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>

            <Button disabled={loading} type="submit" className="w-100">
              reset password
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/login"> Login </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgortPassword;
