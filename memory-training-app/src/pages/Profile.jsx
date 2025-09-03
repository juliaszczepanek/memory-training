import { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth } from "../contexts/AuthContext";
import BarChartIcon from "@mui/icons-material/BarChart";
import {
  FetchCorsiBlockResults,
  FetchNumberSpanResults,
  FetchVerbalMemoryResults,
} from "../data";
import Plotly from "plotly.js-dist";

const createPlot = (elementId, data, layoutConfig, config) => {
  const layout = {
    font: {
      family: "Montserrat, sans-serif",
      size: 13,
      color: "#333",
      weight: 500,
    },
    xaxis: { title: "Wyniki Testów" },
    yaxis: {
      title: "Poziomy",
      dtick: layoutConfig.dtick,
      range: layoutConfig.range,
    },
    autosize: true,
    margin: { l: 50, r: 50, t: 50, b: 50 },
  };

  Plotly.newPlot(elementId, data, layout, config);
};

export default function Profile() {
  const { currentUser } = useAuth();
  const [results, setResults] = useState({
    corsiBlock: [],
    numberSpan: [],
    verbalMemory: [],
  });

  const chartConfigs = {
    corsiBlock: {
      elementId: "corsi-block-chart",
      color: "#F7AA1E",
      range: [0, 9],
      dtick: 1,
    },
    numberSpan: {
      elementId: "number-span-chart",
      color: "#EA5C2B",
      range: [0, 15],
      dtick: 2,
    },
    verbalMemory: {
      elementId: "verbal-memory-chart",
      color: "#305F78",
      range: [0, 50],
      dtick: 5,
    },
  };

  useEffect(() => {
    const fetchData = async (fetchFunction, key) => {
      try {
        const fetchedResults = await fetchFunction(currentUser);
        setResults((prev) => ({ ...prev, [key]: fetchedResults }));
      } catch (error) {
        console.error(`Błąd podczas pobierania wyników dla ${key}:`, error);
      }
    };

    if (currentUser) {
      fetchData(FetchCorsiBlockResults, "corsiBlock");
      fetchData(FetchNumberSpanResults, "numberSpan");
      fetchData(FetchVerbalMemoryResults, "verbalMemory");
    }
  }, [currentUser]);

  useEffect(() => {
    Object.entries(results).forEach(([key, data]) => {
      if (data.length > 0) {
        const levels = data.map((result) => result.level);
        const timestamps = data.map((_, index) => `${index + 1}`);

        const chartData = [
          {
            x: timestamps,
            y: levels,
            type: "bar",
            marker: { color: chartConfigs[key].color },
          },
        ];

        createPlot(chartConfigs[key].elementId, chartData, chartConfigs[key], {
          displayModeBar: false,
          responsive: true,
        });
      }
    });
  }, [results]);

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__info">
          <div className="profile__img--box">
            <div className="profile__img">
              <AccountCircleIcon sx={{ fontSize: { xs: "9rem", sm: "10rem", md: "12rem"}}} />
            </div>
          </div>
          <div className="profile__data">
            <p className="profile__name">
              Imię: &nbsp;
              <span className="profile__displayname">
                {currentUser.displayName}
              </span>
            </p>
            <p className="profile__email">
              Adres e-mail: &nbsp;
              <span className="profile__mail">{currentUser.email}</span>
            </p>
          </div>
        </div>

        <div className="profile__statistics">
          <h1 className="profile__title typo typo--title">
            Statystyki Użytkownika
          </h1>
          
          <div className="profile__card profile__statistics--number-span">
            <h2 className="profile__sub">
              Number Span <BarChartIcon sx={{ fontSize: "3rem" }} />
            </h2>
            {results.numberSpan.length === 0 ? (
              <p>
                <br />
                Brak danych
              </p>
            ) : (
              <div
                id="number-span-chart"
                className="profile__chart profile__chart--number-span"
              />
            )}
          </div>

          <div className="profile__card profile__statistics--verbal-memory">
            <h2 className="profile__sub">
              Verbal Memory <BarChartIcon sx={{ fontSize: "3rem" }} />
            </h2>
            {results.verbalMemory.length === 0 ? (
              <p>
                <br />
                Brak danych
              </p>
            ) : (
              <div
                id="verbal-memory-chart"
                className="profile__chart profile__chart--verbal-memory"
              />
            )}
          </div>

          <div className="profile__card profile__statistics--corsi-block">
            <h2 className="profile__sub">
              Corsi Block <BarChartIcon sx={{ fontSize: "3rem" }} />
            </h2>
            {results.corsiBlock.length === 0 ? (
              <p>
                <br />
                Brak danych
              </p>
            ) : (
              <div
                id="corsi-block-chart"
                className="profile__chart profile__chart--corsi-block"
              />
            )}
          </div>
         
        </div>
      </div>
    </div>
  );
}
