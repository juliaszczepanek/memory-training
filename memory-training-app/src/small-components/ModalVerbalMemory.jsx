import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 500,
  bgcolor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  padding: "4rem",
};

const closeButtonStyle = {
  position: "absolute",
  top: "1.5rem",
  right: "1.5rem",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "#333",
  fontSize: "2rem",
};

export default function ModalVerbalMemory({ score }) {
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
        }}
        onClick={handleOpen}
      >
        Co oznacza mój wynik?
      </Button>

      <Modal
        aria-labelledby="modal-verbal-memory-title"
        aria-describedby="modal-verbal-memory-description"
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
              id="modal-verbal-memory-title"
              variant="h4"
              component="h2"
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              Interpretacja wyniku Verbal Memory
            </Typography>

            <Typography variant="body1">
              <strong>Twój wynik:</strong> {score}
            </Typography>

            <Typography
              variant="body1"
              component="div"
              sx={{ mb: 2, lineHeight: 1.6 }}
            >
              <ul>
                <li>
                  <strong>0–10:</strong> wynik raczej niski, możliwe że warunki
                  nie sprzyjały koncentracji.
                </li>
                <li>
                  <strong>11–25:</strong> poziom zbliżony do przeciętnego w
                  zadaniach z pamięci słownej.
                </li>
                <li>
                  <strong>26–40:</strong> wynik powyżej przeciętnej; dobra
                  zdolność rozpoznawania i zapamiętywania słów.
                </li>
                <li>
                  <strong>powyżej 40:</strong> bardzo wysoka sprawność w
                  rozpoznawaniu – może świadczyć o świetnej pamięci słownej.
                </li>
              </ul>
            </Typography>

            <Typography variant="body1">
              Jest to ćwiczenie orientacyjne, a nie formalna metoda kliniczna.
              Czynniki takie jak poziom uwagi, strategia zapamiętywania czy
              warunki mogą znacząco wpłynąć na wynik.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
