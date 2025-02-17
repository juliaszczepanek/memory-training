import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyIcon from "@mui/icons-material/Key";

export default function Auth() {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);

      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      );

      navigate("/");
    } catch (err) {
      setError(err.message || "Failed to create an account");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="auth">
        <div className="auth__container">
          <div className="auth__img--box">
            <img className="auth__img" src="logo-2.png" alt="" />
          </div>
          <div className="auth__form__box">
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit} className="auth__form">
              <h1 className="auth__heading heading heading--4">
                Rejestracja konta
              </h1>
              <Form.Group id="name" className="auth__form--group">
                <Form.Label className="login__form--label">Imię</Form.Label>
                <Form.Control
                  type="text"
                  className="auth__control"
                  ref={nameRef}
                  required
                  placeholder="Wprowadź imię"
                ></Form.Control>
              </Form.Group>
              <Form.Group id="email" className="auth__form--group">
                <Form.Label className="auth__form--label">Email</Form.Label>
                <Form.Control
                  className="auth__control"
                  type="email"
                  ref={emailRef}
                  required
                  placeholder="Wprowadź swój adres e-mail"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="auth__form--group" id="password">
                <Form.Label className="auth__form--label">Hasło</Form.Label>
                <Form.Control
                  className="auth__control"
                  type="password"
                  ref={passwordRef}
                  required
                  placeholder="Utwórz hasło"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="auth__form--group" id="password-confirm">
                <Form.Label className="auth__form--label">
                  Potwierdzenie hasła
                </Form.Label>
                <Form.Control
                  className="auth__control"
                  type="password"
                  ref={passwordConfirmRef}
                  required
                  placeholder="Potwierdź swoje hasło"
                ></Form.Control>
              </Form.Group>
              <Button
                disabled={loading}
                className="auth__button button button--dark"
                type="submit"
              >
                Zarejestruj się
              </Button>
            </Form>
            <div className="auth__text typo typo--text">
              Posiadasz już konto? &nbsp;
              <Link className="auth__link" to="/login">
                Zaloguj się
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
