import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyIcon from "@mui/icons-material/Key";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to Log in");
    }
    setLoading(false);
  }

  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__img--box">
          <img className="auth__img" src="logo-2.png" alt="" />
        </div>
        <div className="auth__form__box">
          <Form onSubmit={handleSubmit} className="auth__form">
            <h1 className="auth__heading heading heading--4">Zaloguj się</h1>

            <Form.Group id="email" className="auth__form--group">
              <Form.Label className="auth__form--label">
                <MailOutlineIcon /> Email
              </Form.Label>
              <Form.Control
                type="email"
                className="auth__control"
                ref={emailRef}
                required
                placeholder="Wpisz swój adres e-mail"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="auth__form--group" id="password">
              <Form.Label className="auth__form--label">
                <KeyIcon /> Hasło
              </Form.Label>
              <Form.Control
                type="password"
                className="auth__control"
                ref={passwordRef}
                required
                placeholder="Wprowadź swoje hasło"
              ></Form.Control>
            </Form.Group>

            {error && <Alert variant="danger">{error}</Alert>}
            <Button
              disabled={loading}
              className="auth__button button button--dark"
              type="submit"
            >
              Zaloguj się
            </Button>
          </Form>
          <div className="auth__text typo typo--text">
            Potrzebujesz konta? &nbsp;
            <Link className="auth__link" to="/signup">
              Zarejestruj się
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
