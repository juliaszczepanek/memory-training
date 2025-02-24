import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";
import { ModalNumberSpan } from "./../small-components";

export default function NumberSpan() {
  const [randomNumber, setRandomNumber] = useState("");
  const [level, setLevel] = useState(3);
  const [isGameOn, setIsGameOn] = useState(false);
  const [showSequence, setShowSequence] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [showInput, setShowInput] = useState(true);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const saveResultToFirestore = async (level, currentUser) => {
    if (!currentUser) {
      throw new Error("Can't save results, user is not logged in");
    }

    try {
      const userDocRef = doc(db, "userResults", currentUser.uid);

      await setDoc(userDocRef, {}, { merge: true });

      const resultsCollectionRef = collection(userDocRef, "numberSpanResults");

      await addDoc(resultsCollectionRef, {
        level: level,
      });
    } catch (error) {
      console.error(
        "Error occur while trying to save data to firestore",
        error
      );
    }
  };

  useEffect(() => {
    if (isGameOn) {
      startNumberSpan();
    }
  }, [level, isGameOn]);

  const handleClick = () => {
    setIsGameOn(true);
  };

  const endNumberSpan = async () => {
    if (currentUser) {
      try {
        await saveResultToFirestore(level - 1, currentUser);
      } catch (error) {
        console.error(
          "Error occur wh8ile trying to save data to firestore",
          error
        );
      }
    } else {
      console.warn("User is not logged in, results will not be saved");
    }

    navigate("/");
  };

  function generateRandomNumber(level) {
    let result = "";
    for (let i = 0; i < level; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  }

  function startNumberSpan() {
    const generatedNumber = generateRandomNumber(level);
    setRandomNumber(generatedNumber);
    setShowSequence(true);

    const displayTime = 1000 * level;
    console.log(displayTime);

    setTimeout(() => {
      setShowSequence(false);
      setShowInput(true);
      setInputValue("");
      setIsCorrect(null);
    }, displayTime);
  }

  function guessNumber() {
    if (inputValue === randomNumber) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowInput(false);
  }

  function goToNextLevel() {
    setLevel((prevLevel) => prevLevel + 1);
  }

  function handleGuessChange(e) {
    setInputValue(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      guessNumber();
    }
  };

  return (
    <div className="number-span">
      {!isGameOn ? (
        <div className="number-span__container">
          <h1 className="number-span__title typo typo--title">
            Number Span Test
          </h1>
          <h2 className="number-span__heading typo typo--subtitle">
            Popraw swoją pamięć liczbową poprzez zapamiętywanie sekwencji liczb
          </h2>
          <p className="number-span__instruction typo typo--instruction">
            Zapamiętaj ciąg wyświetlanych liczb i odtwórz go w odpowiedniej
            kolejności.
            <br /> Naciśnij START, aby rozpocząć
          </p>
          <button
            onClick={handleClick}
            className="number-span__button button button--games button-dark"
          >
            START
          </button>
        </div>
      ) : (
        <>
          {showSequence && (
            <div className="number-span__container">
              <div className="number-span__number--box">
                <h1 className="number-span__number heading heading--1">
                  {randomNumber}
                </h1>
              </div>
            </div>
          )}

          {!showSequence && showInput && (
            <div className="number-span__container">
              <h2 className="number-span__heading typo typo--subtitle">
                Odtwórz sekwencję liczb w odpowiedniej kolejności
              </h2>
              <input
                className="number-span__input heading heading--2"
                autoFocus
                value={inputValue}
                onChange={handleGuessChange}
                onKeyDown={handleKeyDown}
              />
              <button
                className="number-span__button button button--light"
                onClick={guessNumber}
              >
                Zatwierdź
              </button>
            </div>
          )}

          {isCorrect && !showSequence && (
            <div className="number-span__container number-span__container--result">
              <h1 className="number-span__heading typo typo--title">
                Prawidłowa odpowiedź!
              </h1>
              <h2 className="number-span__heading typo typo--subtitle">
                Twoja odpowiedź
              </h2>
              <h2 className="number-span__answer">{inputValue}</h2>
              <h2 className="number-span__heading typo typo--subtitle">
                Poprawna sekwencja
              </h2>
              <h2 className="number-span__answer">{randomNumber}</h2>
              <button
                className="number-span__button number-span__button--result button button--light"
                onClick={goToNextLevel}
              >
                Przejdź do kolejnej sekwencji
              </button>
            </div>
          )}

          {isCorrect === false && (
            <div className="number-span__container number-span__container--result">
              <h1 className="number-span__result typo typo--title">
                Błędna odpowiedź!
              </h1>
              <h2 className="number-span__heading typo typo--subtitle">
                Twój wynik to: {level - 1}
              </h2>
              <h2 className="number-span__heading typo typo--subtitle">
                Twoja odpowiedź
              </h2>
              <h2 className="number-span__answer">{inputValue}</h2>
              <h2 className="number-span__heading typo typo--subtitle">
                Poprawna sekwencja
              </h2>
              <h2 className="number-span__answer">{randomNumber}</h2>
              <div className="number-span__buttons--box">
                <button
                  className="number-span__button number-span__button--result button button--light"
                  onClick={endNumberSpan}
                >
                  Zakończ
                </button>
                <ModalNumberSpan number={level - 1} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
