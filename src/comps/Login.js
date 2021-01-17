import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.replace("/");
    } catch {
      return setError("failed to Log in please try again");
    }

    setLoading(false);
  };

  return (
    <div>
      <Card style={{ background: "#fafafa" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>

            <Button disabled={loading} type="submit" className="w-100">
              {" "}
              Login
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/forgot-password"> forgot password? </Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 ">
        need an account? <Link to="/sign-up"> Sign up </Link>{" "}
      </div>
    </div>
  );
};

export default Login;
