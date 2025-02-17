import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { fontFamily, padding } from "@mui/system";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: 300,
    sm: 400,
    lg: 500,
  },
  height: "350px",
  bgcolor: "#fefefe",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  padding: "6rem 6rem 10rem 6rem",
};

const closeButtonStyle = {
  position: "absolute",
  top: "2rem",
  right: "2rem",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "#333",
  fontSize: "2rem",
};

export default function ModalNumberSpan({ number }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#eeeeee",
          color: "#000",
          margin: "20px",
          fontWeight: 600,
          borderRadius: "4px",
          fontFamily: "Montserrat",
        }}
        onClick={handleOpen}
      >
        Co oznacza mój wynik?
      </Button>

      <Modal
        aria-labelledby="modal-number-span-title"
        aria-describedby="modal-number-span-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: { timeout: 500 },
        }}
      >
        <Fade in={open}>
          <Box sx={boxStyle}>
            <button style={closeButtonStyle} onClick={handleClose}>
              <CloseIcon fontSize="inherit" />
            </button>

            <Typography
              id="modal-number-span-title"
              variant="h5"
              component="h2"
              sx={{
                mb: 4,
                fontWeight: "bold",
                fontSize: "2rem",
                fontFamily: "Montserrat",
                textAlign: "center",
              }}
            >
              Interpretacja wyniku Number Span
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontFamily: "Montserrat", mb: 2, fontSize: "1.4rem" }}
            >
              <strong>Twój wynik:</strong> {number}
            </Typography>

            <Typography
              variant="body1"
              component="div"
              sx={{
                mb: 3,
                fontSize: "1.4rem",
                lineHeight: 2,
                fontFamily: "Montserrat",
              }}
            >
              <ul>
                <li>
                  <strong>0–4 cyfr:</strong> Możliwe trudności z utrzymaniem
                  sekwencji numerycznych (wynik poniżej przeciętnej).
                </li>
                <li>
                  <strong>5–7 cyfr:</strong> Zakres zbliżony do przeciętnej
                  sprawności pamięci krótkotrwałej w populacji.
                </li>
                <li>
                  <strong>8–9 cyfr:</strong> Wynik powyżej przeciętnej.
                </li>
                <li>
                  <strong>10 i więcej:</strong> Bardzo rzadkie w typowej
                  populacji; świadczy o świetnej pamięci numerycznej (lub
                  znajomości mnemotechnik).
                </li>
              </ul>
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontSize: "1.4rem", fontFamily: "Montserrat" }}
            >
              Pamiętaj, że jest to jedynie orientacyjna interpretacja. Na
              faktyczny wynik mogą wpływać rozproszenie, strategia
              zapamiętywania lub warunki wykonywania testu.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
