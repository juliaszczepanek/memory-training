import React, { useState } from "react";
import words from "./../assets/wordswithweight.json";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";
import { ModalVerbalMemory } from "./../small-components";

export default function VerbalMemory() {
  const [lisOfWords, setListOfWords] = useState([]);
  const [isGameOn, setIsGameOn] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [randomWord, setRandomWord] = useState("");
  const [level, setLevel] = useState(0);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const saveResultToFirestore = async (level, currentUser) => {
    if (!currentUser) {
      throw new Error("Nie można zapisać wyniku - użytkownik niezalogowany.");
    }

    try {
      const userDocRef = doc(db, "userResults", currentUser.uid);

      await setDoc(userDocRef, {}, { merge: true });

      const resultsCollectionRef = collection(
        userDocRef,
        "verbalMemoryResults"
      );

      await addDoc(resultsCollectionRef, {
        level: level,
      });
    } catch (error) {
      console.error("Błąd podczas zapisywania wyniku w Firestore:", error);
    }
  };

  const handleClick = () => {
    chooseRandomeWord();
    setIsGameOver(false);
    setIsGameOn(true);
  };

  const handleEndGame = async () => {
    setIsGameOn(false);
    setIsGameOver(true);
    if (currentUser) {
      try {
        await saveResultToFirestore(level, currentUser);
      } catch (error) {
        console.error("Błąd podczas zapisywania wyniku w Firestore:", error);
      }
    } else {
      console.warn("Użytkownik niezalogowany - wynik nie zostanie zapisany.");
    }
    navigate("/");
  };

  const chooseRandomeWord = () => {
    const wordEntries = Object.entries(words);

    const amplifiedWeights = wordEntries.map(([word, weight]) => [
      word,
      Math.pow(weight, 2),
    ]);

    const totalWeight = amplifiedWeights.reduce(
      (sum, [_, weight]) => sum + weight,
      0
    );

    const pickFromSeenChance = Math.min(0.3 + lisOfWords.length * 0.015, 0.6);
    const pickFromSeen = Math.random() < pickFromSeenChance;

    let selectedWord = "";

    if (pickFromSeen && lisOfWords.length > 0) {
      let attempts = 0;
      do {
        const randomIndex = Math.floor(Math.random() * lisOfWords.length);
        selectedWord = lisOfWords[randomIndex];
        attempts++;
      } while (selectedWord === randomWord && attempts < 10);
    } else {
      let randomWeight;
      let weightSum = 0;
      let attempts = 0;

      do {
        randomWeight = Math.random() * totalWeight;
        for (const [word, weight] of amplifiedWeights) {
          weightSum += weight;
          if (randomWeight <= weightSum) {
            selectedWord = word;
            break;
          }
        }
        attempts++;
      } while (selectedWord === randomWord && attempts < 10);
    }

    if (selectedWord === randomWord) {
      const alternativeList = lisOfWords.filter((word) => word !== randomWord);

      if (alternativeList.length > 0) {
        const randomIndex = Math.floor(Math.random() * alternativeList.length);
        selectedWord = alternativeList[randomIndex];
      } else {
        const allWords = Object.keys(words);
        do {
          const randomIndex = Math.floor(Math.random() * allWords.length);
          selectedWord = allWords[randomIndex];
        } while (selectedWord === randomWord);
      }
    }

    setRandomWord(selectedWord);
    setListOfWords((oldArray) => [...oldArray, selectedWord]);
    setLevel((level) => level + 1);
  };

  const checkIfWordIsInList = () => {
    if (lisOfWords.slice(0, -1).includes(randomWord)) {
      chooseRandomeWord();
    } else {
      setIsGameOn(false);
      setIsGameOver(true);
    }
  };

  const checkIfWordIsNew = () => {
    if (!lisOfWords.slice(0, -1).includes(randomWord)) {
      chooseRandomeWord();
    } else {
      setIsGameOn(false);
      setIsGameOver(true);
    }
  };

  return (
    <div className="verbal-memory">
      {!isGameOn && !isGameOver && (
        <div className="verbal-memory__container">
          <h1 className="verbal-memory__title typo typo--title">
            Verbal Memory Test
          </h1>
          <h2 className="verbal-memory__heading typo typo--subtitle">
            Popraw swoją pamięć operacyjną, łącząc zapamiętywanie informacji z
            wykonywaniem prostych zadań obliczeniowych
          </h2>
          <p className="verbal-memory__instruction typo typo--instruction">
            Zapamiętaj sekwencję wyświetlanych klocków i odtwórz ją.
            <br /> Naciśnij START, aby rozpocząć
          </p>
          <button
            onClick={handleClick}
            className="verbal-memory__button button  button--games button--dark"
          >
            START
          </button>
        </div>
      )}
      {isGameOn && (
        <div className="verbal-memory__container">
          <div className="verbal-memory__points heading heading--3">
            Poziom: {level}
          </div>
          <h2 className="verbal-memory__word heading heading--1">
            {randomWord}
          </h2>
          <div className="verbal-memory__buttons--container">
            <button
              onClick={checkIfWordIsInList}
              className="verbal-memory__button button button--light"
            >
              ZNANE
            </button>
            <button
              onClick={checkIfWordIsNew}
              className="verbal-memory__button button button--light"
            >
              NOWE
            </button>
          </div>
        </div>
      )}
      {isGameOver && (
        <div className="verbal-memory__container">
          <h1 className="verbal-memory__title heading heading--1">
            Koniec Gry!
          </h1>
          <h2 className="verbal-memory__heading heading heading--2">
            Twój wynik:
          </h2>
          <h2 className="verbal-memory__answer">{level}</h2>
          <button
            onClick={handleEndGame}
            className="verbal-memory__button button button--dark"
          >
            ZAKOŃCZ
          </button>
          <ModalVerbalMemory number={level} />
        </div>
      )}
    </div>
  );
}
