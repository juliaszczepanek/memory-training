import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";

export default function Home() {
  const navigate = useNavigate();
  const refExer = useRef(null);
  const refTop = useRef(null);

  const handleNavigate = (route) => {
    switch (route) {
      case "number_span":
        navigate("/number-span");
        break;
      case "verbal_memory":
        navigate("/verbal-memory");
        break;
      case "corsi_block":
        navigate("/corsi-block");
        break;
      case "test_module":
        navigate("/test_module");
        break;
    }
  };

  const handleScrollExer = () => {
    refExer.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollTop = () => {
    refTop.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="home" ref={refTop}>
        <div className="home__up" onClick={handleScrollTop}>
          <VerticalAlignTopIcon
            sx={{ fontSize: "2.0rem" }}
          ></VerticalAlignTopIcon>
        </div>
        <section className="header">
          <img src="logo-1.png" className="header__logo" />
          <h1 className="header__heading">
            Aplikacja webowa do trenowania pamięci operacyjnej
          </h1>
        </section>
        <section className="welcome-section">
          <h2 className="welcome-section__heading heading heading--2">
            Odkryj, popraw i zbadaj swoją pamięć operacyjną
          </h2>
          <h4 className="welcome-section__heading--sub heading heading--4">
            Zaprojektowana z myślą o testach pamięci, aplikacja pozwala w prosty
            sposób odkryć, jak dobrze radzisz sobie z zapamiętywaniem i
            odtwarzaniem informacji
          </h4>
          <a
            onClick={handleScrollExer}
            className="welcome-section__button button button--light"
          >
            Zobacz dostępne ćwiczenia
          </a>
        </section>
        <section className="exercises" ref={refExer}>
          <h2 className="exercises__heading heading heading--cap">
            Dostępne Ćwiczenia
          </h2>
          {[
            {
              img: "number.png",
              heading: "Number Span",
              text: "Zapamiętaj ciąg liczb i odtwórz go w pokazanej kolejności. Ćwiczenie pomaga poprawić pamięć sekwencyjną i zdolności poznawcze poprzez zwiększanie trudności w miarę postępu.",
              route: "number_span",
            },
            {
              img: "verbal.png",
              heading: "Verbal Memory",
              text: "Sprawdź swoją pamięć werbalną, zapamiętując wyrazy i określając, czy widziałeś je wcześniej. Ćwiczenie poprawia zdolność szybkiego przypominania i zapamiętywania nowych informacji.",
              route: "verbal_memory",
            },
            {
              img: "corsi.png",
              heading: "Corsi Block",
              text: "Śledź migające bloczki i odtwórz ich kolejność w poprawnym układzie. Corsi Block to znane ćwiczenie poprawiające zdolności przestrzenno-wizualne i pamięć krótkotrwałą.",
              route: "corsi_block",
            },
          ].map(({ img, heading, text, route }) => (
            <div className="exercises__content" key={route}>
              <div className="exercises__title--box">
                <img className="exercises__img" src={img} alt="" />
                <h3 className="exercises__content--heading heading heading--1">
                  {heading}
                </h3>
              </div>
              <p className="exercises__content--text typo typo--text">{text}</p>
              <button
                className="exercises__content--button button button--dark"
                onClick={() => handleNavigate(route)}
              >
                Start
              </button>
            </div>
          ))}
        </section>
        <section className="test-section">
          <h2 className="test-section__heading heading heading--cap">
            Moduł Testowy
          </h2>
          <div className="test-section__content">
            <h3 className="test-section__content--heading heading heading--1">
              Test pojemności pamięci operacyjnej
            </h3>
            <p className="test-section__content--text typo typo--text">
              Ten moduł oferuje sprawdzone ćwiczenia do pomiaru pamięci
              operacyjnej:
              <br />
              <br />
              <strong className="test-section__test--name">
                Number Span
              </strong>{" "}
              — Zapamiętaj ciąg liczb i odtwórz go w pokazanej kolejności.
              <br />
              <strong className="test-section__test--name">
                Corsi Block Test
              </strong>{" "}
              — Śledź migające bloczki i kliknij je w wyświetlonej kolejności.
              <br />
              <strong className="test-section__test--name">
                Verbal Memory
              </strong>{" "}
              — Sprawdź swoją pamięć, zapamiętując wyświetlane słowa.
              <br />
              <br />
              Wyniki ze wszystkich testów posłużą do oszacowania średniej
              pojemności Twojej pamięci operacyjnej. Im więcej testów ukończysz,
              tym pełniejszy obraz Twoich zdolności poznawczych. Powodzenia!
            </p>
            <button
              className="test-section__content--button button button--dark"
              onClick={() => handleNavigate("test_module")}
            >
              Rozpocznij Test
            </button>
          </div>
        </section>
        <section className="about-us">
          <h2 className="about-us__heading heading heading--cap">
            O Aplikacji
          </h2>
          <div className="about-us__text--box">
            <p className="about-us__text typo typo--text">
              Aplikacja powstała w ramach pracy magisterskiej pt.
              &quot;Aplikacja webowa do trenowania pamięci operacyjnej&quot; na
              kierunku kognitywistyka. Jej głównym celem jest dostarczenie
              narzędzia, które umożliwia użytkownikom badanie i rozwijanie
              pamięci operacyjnej poprzez angażujące i przystępne ćwiczenia.
            </p>
            <p className="about-us__text typo typo--text">
              Projekt został opracowany w oparciu o wiedzę zdobytą podczas
              studiów, wiedzę z zakresu programowania oraz badania naukowe
              dotyczące procesów poznawczych. Aplikacja ma na celu nie tylko
              wsparcie rozwoju zdolności poznawczych użytkowników, ale również
              stanowi praktyczny przykład zastosowania teorii kognitywistycznych
              w środowisku technologicznym.
            </p>
            <p className="about-us__text typo typo--text">
              Dziękuję za zainteresowanie i zachęcam do korzystania z aplikacji.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
// przyciski start na testach mogłyby być minimalnie wyżej
// wszystkie teksty wyśrodkować
//
