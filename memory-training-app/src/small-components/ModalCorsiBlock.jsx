import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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
  padding: "5rem",
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

export default function ModalCorsiBlock({ score }) {
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
        <InfoOutlinedIcon /> &nbsp; Co oznacza mój wynik?
      </Button>

      <Modal
        aria-labelledby="modal-corsi-block-title"
        aria-describedby="modal-corsi-block-description"
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
              id="modal-corsi-block-title"
              variant="h4"
              component="h2"
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              Interpretacja wyniku Corsi Block
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
                  <strong>0–4:</strong> poniżej przeciętnej sprawności pamięci
                  wzrokowo-przestrzennej.
                </li>
                <li>
                  <strong>5–6:</strong> poziom w granicach przeciętnej; wiele
                  osób dorosłych osiąga taki pułap.
                </li>
                <li>
                  <strong>7–8:</strong> wynik powyżej przeciętnej, świadczący o
                  dobrej pamięci wzrokowo-przestrzennej.
                </li>
                <li>
                  <strong>9:</strong> maksymalna długość sekwencji – rzadko
                  spotykana w populacji, sugeruje bardzo wysoką zdolność
                  zapamiętywania układów przestrzennych.
                </li>
              </ul>
            </Typography>

            <Typography variant="body1">
              Pamiętaj, że jest to jedynie narzędzie poglądowe, a nie
              standaryzowany test kliniczny. Na wynik mogą wpływać czynniki
              takie jak skupienie, motywacja czy warunki badania.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
