import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleOpenMenu = () => {
    setIsOpen(true);
    setIsVisible(true);
  };

  const handleCloseMenu = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 50);
  };
  const handleLogout = async () => {
    try {
      await logout();
      handleCloseMenu();
      setTimeout(() => {
        navigate("/login");
      }, 200);
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <div className="navigation">
      <div className="navigation__container" onClick={handleOpenMenu}>
        <MenuIcon
          sx={{
            fontSize: { xs: "3.5rem", sm: "1.5rem", md: "4rem" },
          }}
        ></MenuIcon>
      </div>
      {isOpen && (
        <div className="navigation__overlay">
          <button className="close-button" onClick={handleCloseMenu}>
            <CloseIcon
              sx={{
                fontSize: { xs: "3.5rem", sm: "1.5rem", md: "4rem" },
              }}
            />
          </button>
          <nav className="overlay__nav">
            <ul>
              <li>
                <Link
                  to="/"
                  className="navigation__link"
                  onClick={handleCloseMenu}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="navigation__link"
                  onClick={handleCloseMenu}
                >
                  PROFIL
                </Link>
              </li>
              <li>
                <Link
                  to="/number-span"
                  className="navigation__link"
                  onClick={handleCloseMenu}
                >
                  NUMBER SPAN
                </Link>
              </li>
              <li>
                <Link
                  to="/verbal-memory"
                  className="navigation__link"
                  onClick={handleCloseMenu}
                >
                  VERBAL MEMORY
                </Link>
              </li>
              <li>
                <Link
                  to="/corsi-block"
                  className="navigation__link"
                  onClick={handleCloseMenu}
                >
                  CORSI BLOCK
                </Link>
              </li>
              <li>
                <Link
                  to="/memory-strategies"
                  className="navigation__link"
                  onClick={handleCloseMenu}
                >
                  TECHNIKI ZAPAMIĘTYWANIA
                </Link>
              </li>
              <li>
                {currentUser ? (
                  <Link onClick={handleLogout} className="navigation__link">
                    WYLOGUJ SIĘ
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    onClick={handleCloseMenu}
                    className="navigation__link"
                  >
                    LOGOWANIE
                  </Link>
                )}
              </li>
            </ul>
            <div className="navigation__logo">
              <img className="navigation__logo--img" src="logo-1.png" alt="" />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
