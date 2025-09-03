import {
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
      <h1 className="memory-strategies__title heading heading--1">
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
            variant="h5"
            sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "700", color: "#364c63", m: 1 }}
          >
            Technika loci (Metoda Pałacu Pamięci)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography
            variant="h6"
            sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "500", color: "#364c63", mx: 1, fontSize: {xs: "1rem", sm: "1.2rem", md: "1.3rem"}, textAlign: "justify"}}
          >
            Technika loci, znana również jako <strong>metoda pałacu pamięci</strong>, jest jedną z najczęściej opisywanych w literaturze strategii pamięciowych. Jej skuteczność była wielokrotnie badana i potwierdzana w badaniach eksperymentalnych oraz metaanalizach. Według Quereshi i in. metoda pałacu pamięci to <strong>technika mnemotechniczna polegająca na wykorzystaniu relacji przestrzennych między miejscami w celu uporządkowania i przypomnienia sobie treści pamięci</strong>. Technika ta polega na utworzeniu w wyobraźni obrazu wzrokowego dobrze znanego miejsca (np. pokoju, mieszkania lub własnego ciała). Następnie w tej przestrzeni należy wyodrębnić wyraźne lokalizacje (np. łazienka, kuchnia, jadalnia, salon), które później zostają powiązane z poszczególnymi informacjami przeznaczonymi do zapamiętania. W trakcie odtwarzania materiału osoba &quot;przechodzi&quot; mentalnie przez kolejne miejsca w wyobrażonym otoczeniu i przywołuje powiązane z nim treści. Przykładem zastosowania techniki loci w praktyce może być zapamiętanie listy zakupów. Aby utrwalić kolejność elementów listy (mleko, chleb, kwiaty, jabłka, ryż), wybiera się znaną trasę po mieszkaniu: przedpokój =&gt; kuchnia =&gt; jadalnia =&gt; salon =&gt; łazienka. W każdej lokacji umieszcza się jeden barwny obraz: w przedpokoju rozlane mleko, w kuchni zapach świeżo upieczonego chleba, w jadalni wazon z pięknymi kwiatami, w salonie na sofie leżą ogromne jabłka, a w łazience jest wanna pełna ryżu. Podczas przypominania sobie tej listy, osoba wykonuje &quot;mentalny spacer&ldquo; tą samą trasą i w każdej lokacji przywołuje skojarzony element, odtwarzając w ten sposób zarówno treść listy, jak i jej kolejność.  
          </Typography>

                  <Typography
            variant="h6"
            sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "500", color: "#364c63", mx: 1, my: 2, fontSize: {xs: "1rem", sm: "1.2rem", md: "1.3rem"},  textAlign: "justify"}}
          >
W kontekście aplikacji technikę loci można zastosować w ćwiczeniu Corsi Block. Podczas prezentacji sekwencji każdy kolejny blok można powiązać mentalnie z następną lokacją na uprzednio wyznaczonej trasie (np. kolejnymi pomieszczeniami lub kolejnymi punktami na ciele). W fazie odpowiedzi kolejność odtwarza się, przechodząc tą samą trasą w wyobraźni i wskazując bloki w odpowiedniej kolejności Podejście to jest niezależne od układu planszy i sprawdzi się zarówno przy rozstawie bloków na ekranach komputerów jak i przy siatce 3 x 3 w wersji mobilnej ćwiczenia.             </Typography>
          <Box sx={{ textAlign: "center", my: 2, fontFamily: "Montserrat, sans-serif" }}>
           
            <Typography variant="body1" display="block" sx={{fontSize: "18px", color: "#364c63", padding: "20px 0", fontFamily: "Montserrat, sans-serif" }}>
              Filmik wyjaśniający metodę loci:
            </Typography>
            <iframe  className="memory-strategies--iframe" 
src="https://www.youtube.com/embed/p9IOqd1LpkA">
</iframe>
          </Box>
          <Typography variant="caption" display="block" sx={{mx: 1,  fontFamily: "Montserrat, sans-serif"}}>
            Źródło: <a href="https://www.youtube.com/watch?v=p9IOqd1LpkA">https://www.youtube.com/watch?v=p9IOqd1LpkA</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "700", color: "#364c63", m: 1 }}
          >
             Chunking (Grupowanie Informacji)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography
            variant="h6"
            sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "500", color: "#364c63", mx: 1, fontSize: {xs: "1rem", sm: "1.2rem", md: "1.3rem"},  textAlign: "justify"}}
          >
Chunking czyli tzw. grupowanie informacji polega na zmianie organizacji materiału do zapamiętania w sposób, który umożliwia lepsze &quot;upakowanie&quot; go w pamięci. Grupowanie polega na łączeniu pojedynczych elementów informacji w większe bardziej złożone jednostki zwane &quot;chunkami&quot;. Owe łączenie pozwala na bardziej efektywne wykorzystywanie ograniczonej pojemności pamięci operacyjnej.  Zamiast zapamiętywać np. dziewięć oddzielnych cyfr, można je pogrupować w trzy podgrupy składające się z trzech znaków (np. numer telefonu). Według koncepcji Thalmanna i in., chunking częściowo zależy od wiedzy długotrwałej, łatwiej jest bowiem nam tworzyć &quot;chunki&quot;, gdy informacja ma dla nas już jakieś znaczenie. Łatwiej będzie nam zapamiętać ciąg znaków np. “2000181965” gdy poszczególne podgrupy będą miały dla nas znaczenie np. 2000 to rok naszego urodzenia, 18 to nasza ulubiona liczba, a 1965 to np. rok urodzenia jednego z naszych rodziców. Dodatkowo, badania pokazują, że stosowanie chunkingu odciąża pamięć roboczą, co ułatwia zapamiętywanie innych, &quot;niezchunkowanych&quot; informacji w tym samym czasie. Efekt ten jest szczególnie wyraźny, gdy &quot;chunk&quot; pojawia się w sekwencji wcześniej, przed elementami &quot;niezchunkowanymi&quot;.  
          </Typography>
                  <Typography
            variant="h6"
            sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "500", color: "#364c63", mx: 1, my:2, fontSize: {xs: "1rem", sm: "1.2rem", md: "1.3rem"},  textAlign: "justify"}}
          >
          Metodę chunkingu można wykorzystać w aplikacji w ćwiczeniu Number Span. Po pojawieniu się sekwencji cyfr wystarczy podzielić ją na kilka &quot;chunków&quot;, co w znaczący sposób ułatwi zapamiętanie.  
          </Typography>

          <Box sx={{ textAlign: "center", my: 1, fontFamily: "Montserrat, sans-serif" }}>
           
            <Typography variant="body1" display="block" sx={{fontSize: "18px", color: "#364c63", padding: "20px 0", fontFamily: "Montserrat, sans-serif" }}>
              Filmik wyjaśniający strategie chunkingu:
            </Typography>
            <iframe  className="memory-strategies--iframe"
src="https://www.youtube.com/embed/hydCdGLAh00">
</iframe>
          </Box>
          <Typography variant="caption" display="block" sx={{mx: 2,  fontFamily: "Montserrat, sans-serif"}}>
            Źródło: <a href="https://www.youtube.com/watch?v=hydCdGLAh00">https://www.youtube.com/watch?v=hydCdGLAh00</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "700", color: "#364c63", m: 1 }}
          >
                Metoda obrazów interaktywnych 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography
            variant="h6"
            sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "500", color: "#364c63", mx: 1, fontSize: {xs: "1rem", sm: "1.2rem", md: "1.3rem"},  textAlign: "justify"}}
          >
Metoda obrazów interaktywnych jest to technika mnemoniczna bazująca na teorii podwójnego kodowania (ang. dual coding), zaproponowanej przez Paivio. Teoria podwójnego kodowania zakłada, że człowiek reprezentuje rzeczywistość w dwóch systemach: werbalnym i niewerbalnym. Z tych założeń wynika, że łączenie ścieżki słownej z obrazową wzmacnia zapamiętywanie, co w praktyce realizuje metoda obrazów interaktywnych. Metoda ta najczęściej stosowana jest do zapamiętywania list słów lub do nauki słówek w języku obcym. Polega ona łączeniu wyobrażeń wywoływanych przez poszczególne słowa w jedną krótką opowieść. Historyjka ta może być nierealistyczna, jednak ważne jest to, aby była wewnętrze spójna. Przykładowo, dla listy słów: jamnik, lód, truskawki, auto, pączek, balon można stworzyć następującą historyjkę: &quot;Jamnik ślizga się po lodzie i wpada w miskę pełną truskawek; zza miski wyłania się auto, które zamiast opon ma pączki i z impetem uderza w wielki różowy balon&quot;.</Typography>
                  <Typography
            variant="h6"
            sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "500", color: "#364c63", mx: 1, my:2, fontSize: {xs: "1rem", sm: "1.2rem", md: "1.3rem"},  textAlign: "justify"}}
          >
Metoda obrazów interaktywnych może być wykorzystana w aplikacji w ćwiczeniu Verbal Memory. Każde kolejne słowo, które pojawi się na ekranie można połączyć z poprzednim i stworzyć z nich krótką interaktywną historyjkę, która ułatwi zapamiętanie.           </Typography>
          <Box sx={{ textAlign: "center", my: 1, fontFamily: "Montserrat, sans-serif" }}>
           
            <Typography variant="body1" display="block" sx={{fontSize: "18px", color: "#364c63", padding: "20px 0", fontFamily: "Montserrat, sans-serif" }}>
              Filmik wyjaśniający teorię dual codingu:
            </Typography>
            <iframe  className="memory-strategies--iframe"
src="https://www.youtube.com/embed/h9Fuhds6MTU">
</iframe>
          </Box>
          <Typography variant="caption" display="block" sx={{mx: 1,   fontFamily: "Montserrat, sans-serif"}}>
            Źródło: <a href="https://www.youtube.com/watch?v=h9Fuhds6MTU">https://www.youtube.com/watch?v=h9Fuhds6MTU</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
     
     
     

      <Box sx={{ mt: 4 }}>
        <Typography variant="subtitle1" align="center" sx={{fontFamily: "Montserrat", fontSize: "12px"}}>
          Więcej informacji oraz statystyki Twoich wyników znajdziesz w sekcji{" "}
          <Link href="/profile" underline="hover">
            Profil
          </Link>
          .
        </Typography>
      </Box>

      <Box sx={{ mt: 4, pt: 2, borderTop: "1px solid #ccc" }}>
        <Typography variant="caption" display="block" sx={{fontFamily: "Montserrat"}}>
          Literatura:
        </Typography>
        <Typography variant="caption" display="block"  sx={{fontFamily: "Montserrat"}}>
          - Twomey C., Kroneisen M., The effectiveness of the loci method as a mnemonic device: Meta-analysis, Quarterly Journal of Experimental Psychology, 2021, 74(8), s. 1317–1326
        </Typography>
        <Typography variant="caption" display="block"  sx={{fontFamily: "Montserrat"}}>
          - Qureshi A., Rizvi F., Syed, A., et al., The method of loci as a mnemonic device to facilitate learning in endocrinology leads to improvement in student performance as measured by assessments, Advances in Physiology Education, 2014, 38(2), s. 140 – 144.
        </Typography>
        <Typography variant="caption" display="block"  sx={{fontFamily: "Montserrat"}}>
          - Wiechnik R., Zastosowanie mnemotechnik w nauce szkolnej, Annales Universitatis Mariae Curie-Skłodowska, sectio J – Paedagogia-Psychologia, 2019, 31(3), s. 87–99. 
        </Typography>
        <Typography variant="caption" display="block"  sx={{fontFamily: "Montserrat"}}>
          - Nęcka E., Orzechowski J., Szymura B., Psychologia poznawcza, Wydawnictwo Naukowe PWN, Warszawa 2006.
        </Typography>
        <Typography variant="caption" display="block"  sx={{fontFamily: "Montserrat"}}>
          - Zimbardo P. G., Johnson R. L., McCann V., Psychology: Core Concepts (8th ed.), Pearson, New York 2017.
        </Typography>
        <Typography variant="caption" display="block"  sx={{fontFamily: "Montserrat"}}>
          - Thalmann M., Souza A. S., Oberauer K., How does chunking help working memory?, Journal of Experimental Psychology: Learning, Memory, and Cognition, 2019, 45(1), s. 37–55.
        </Typography>
        <Typography variant="caption" display="block"  sx={{fontFamily: "Montserrat"}}>
          - Paivio A., Mental representations: A dual-coding approach, Oxford University Press, New York 1986. 
        </Typography>
        <Typography variant="caption" display="block"  sx={{fontFamily: "Montserrat"}}>
          - Sternberg R. J., Mio J. S., Cognitive psychology, (Wyd. VI), Cengage Learning/Wadsworth, Belmont, 
CA 2011.
        </Typography>
      </Box>
    </div>
  );
}
