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
  width: {
    xs: 350,
    sm: 500,
    lg: 500,
  },
  height: { md: "550px", sm: "500px", xs: "480px"},
  bgcolor: "#fefefe",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  padding: { md: "6rem 6rem 10rem 6rem", sm: "8rem 4rem 4rem 4rem", xs: "6rem 4rem 8rem 4rem"},
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
           margin: { xs: "10px", md: "20px"},
           width: "35px",
           height: "35px",
           minWidth: "30px",
           minHeight: "30px",
           borderRadius: "50%",
           padding: 0,
           fontSize: "1.6rem",
           fontWeight: 600,
           fontFamily: "Montserrat",
           lineHeight: "40px",  
           textAlign: "center", 
         }}
         onClick={handleOpen}>
        ?
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
              variant="h5"
              component="h2"
              sx={{
                mb: 4,
                fontWeight: "bold",
                fontSize: {md: "2rem", xs: "1.5rem"},
                fontFamily: "Montserrat",
                textAlign: "center",
              }}
            >
              Interpretacja wyniku Corsi Block
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontFamily: "Montserrat", mb: 2, fontSize: "1.4rem" }}
            >
              <strong>Twój wynik:</strong> {score}
            </Typography>


            <Typography
              variant="body1"
              component="div"
              sx={{
                mb: 3,
                fontSize: {md: "1.4rem", xs: "1rem"},
                lineHeight: 2,
                fontFamily: "Montserrat",
              }}
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

            <Typography
              variant="body1"
              sx={{  fontSize: {md: "1.4rem", xs: "1rem"}, fontFamily: "Montserrat" }}
            >
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
