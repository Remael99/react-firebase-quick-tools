import React, { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./comps/SignUp";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./Contexts/AuthContext";
import Login from "./comps/Login";
import ForgortPassword from "./comps/ForgortPassword";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Title />
              <UploadForm />
              <ImageGrid setSelectedImage={setSelectedImg} />
              {selectedImg && (
                <Modal
                  selectedImg={selectedImg}
                  setSelectedImg={setSelectedImg}
                />
              )}
            </Route>
            <Route path="/sign-up">
              <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
              >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <SignUp />
                </div>
              </Container>
            </Route>
            <Route path="/login">
              <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
              >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <Login />
                </div>
              </Container>
            </Route>
            <Route path="/forgot-password">
              <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
              >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <ForgortPassword />
                </div>
              </Container>
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
