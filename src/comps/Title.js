import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const Title = () => {
  const { currentUser, signout } = useAuth();
  const [error, setError] = useState("");
  const [loggedOut, setLoggedOut] = useState("");
  const timer = useRef();

  const handleSignOut = async () => {
    try {
      setError("");
      await signout();
      setLoggedOut("succesfully logged out! come back soon");
      timer.current = window.setTimeout(() => {
        setLoggedOut("");
      }, 3000);
    } catch {
      return (
        setError("something went wrong with log out please try again"),
        setLoggedOut(""),
        (timer.current = window.setTimeout(() => {
          setLoggedOut("");
          setError("");
        }, 3000))
      );
    }
  };

  return (
    <div className="title">
      {error && (
        <div className="title__error">
          <p> {error} </p>
        </div>
      )}

      {loggedOut && (
        <div className="title__loggedOut">
          <p> {loggedOut} </p>
        </div>
      )}
      <div className="title__header">
        <h1>MikesGram</h1>
        {currentUser ? (
          <button onClick={handleSignOut}>Sign out</button>
        ) : (
          <Link to="/sign-up">
            <button>Sign up</button>
          </Link>
        )}
      </div>

      <h2>Mikes Gallery</h2>
      <p>
        When words become unclear, I shall focus with photographs. When images
        become inadequate, I shall be content with silence.
      </p>
    </div>
  );
};

export default Title;
