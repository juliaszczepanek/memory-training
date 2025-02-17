import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MemoryStrategies() {
  return (
    <div className="memory-strategies">
      <h1 className="memory-strategies__title typo typo--subtitle">
        Strategie Zapamiętywania
      </h1>
      <h4 className="memory-strategies__subtitle typo typo--text">
        Poznaj sprawdzone techniki, które mogą wspomóc Twoją pamięć operacyjną.
        Wszystkie metody opisane są na podstawie badań naukowych i literatury
        specjalistycznej.
      </h4>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Technika loci (Metoda Pałacu Pamięci)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Ta technika polega na łączeniu informacji z dobrze znanymi
            lokalizacjami – np. wyobrażeniem sobie trasy przez dom lub miasto, w
            którym umieszczasz zapamiętywane elementy. Badania (Bower, 1970)
            wykazały, że skojarzenia przestrzenne znacząco ułatwiają
            przywoływanie informacji.
          </p>
          <Box sx={{ textAlign: "center", my: 2 }}>
            <img
              src="diagram-loci.png"
              alt="Schemat techniki loci"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <Typography variant="caption" display="block">
              Schemat ilustrujący metodę pałacu pamięci
            </Typography>
          </Box>
          <Typography variant="caption" display="block">
            Źródło: Bower, G. H. (1970). Imagery and Verbal Processes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Chunking (Grupowanie Informacji)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Chunking to strategia polegająca na dzieleniu dużych ilości
            informacji na mniejsze, łatwiej przyswajalne jednostki zwane
            „chunkami”. Dzięki temu zamiast zapamiętywać każdy element osobno,
            łączymy je w logiczne grupy, co zmniejsza obciążenie pamięci
            operacyjnej. Na przykład, ciąg cyfr „1 9 4 5 2 0 2 1” można
            efektywnie zapamiętać jako dwie grupy: „1945” i „2021”.
          </p>
          <Box sx={{ textAlign: "center", my: 2 }}>
            <img
              src="diagram-loci.png"
              alt="Schemat techniki loci"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <Typography variant="caption" display="block">
              Schemat ilustrujący metodę pałacu pamięci
            </Typography>
          </Box>
          <Typography variant="caption" display="block">
            Źródło: Bower, G. H. (1970). Imagery and Verbal Processes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Dual Coding (Podwójne Kodowanie)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Ta technika polega na łączeniu informacji z dobrze znanymi
            lokalizacjami – np. wyobrażeniem sobie trasy przez dom lub miasto, w
            którym umieszczasz zapamiętywane elementy. Badania (Bower, 1970)
            wykazały, że skojarzenia przestrzenne znacząco ułatwiają
            przywoływanie informacji.
          </p>
          <Box sx={{ textAlign: "center", my: 2 }}>
            <img
              src="diagram-loci.png"
              alt="Schemat techniki loci"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <Typography variant="caption" display="block">
              Schemat ilustrujący metodę pałacu pamięci
            </Typography>
          </Box>
          <Typography variant="caption" display="block">
            Źródło: Bower, G. H. (1970). Imagery and Verbal Processes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Technika loci (metoda pałacu pamięci)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Ta technika polega na łączeniu informacji z dobrze znanymi
            lokalizacjami – np. wyobrażeniem sobie trasy przez dom lub miasto, w
            którym umieszczasz zapamiętywane elementy. Badania (Bower, 1970)
            wykazały, że skojarzenia przestrzenne znacząco ułatwiają
            przywoływanie informacji.
          </p>
          <Box sx={{ textAlign: "center", my: 2 }}>
            <img
              src="diagram-loci.png"
              alt="Schemat techniki loci"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <Typography variant="caption" display="block">
              Schemat ilustrujący metodę pałacu pamięci
            </Typography>
          </Box>
          <Typography variant="caption" display="block">
            Źródło: Bower, G. H. (1970). Imagery and Verbal Processes.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Box sx={{ mt: 4 }}>
        <Typography variant="subtitle1" align="center">
          Więcej informacji oraz statystyki Twoich wyników znajdziesz w sekcji{" "}
          <Link href="/profile" underline="hover">
            Profil
          </Link>
          .
        </Typography>
      </Box>

      <Box sx={{ mt: 4, pt: 2, borderTop: "1px solid #ccc" }}>
        <Typography variant="caption" display="block">
          Literatura:
        </Typography>
        <Typography variant="caption" display="block">
          - Bower, G. H. (1970). Imagery and Verbal Processes.
        </Typography>
        <Typography variant="caption" display="block">
          - Miller, G. A. (1956). The Magical Number Seven, Plus or Minus Two.
        </Typography>
        <Typography variant="caption" display="block">
          - Cepeda, N. J. et al. (2006). Distributed practice in verbal recall
          tasks.
        </Typography>
        <Typography variant="caption" display="block">
          - Paivio, A. (1986). Mental Representations: A Dual Coding Approach.
        </Typography>
      </Box>
    </div>
  );
}
