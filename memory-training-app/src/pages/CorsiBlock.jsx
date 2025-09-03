import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";
import { ModalCorsiBlock } from "./../small-components";

export default function CorsiBlock() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const levels = [4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
  const [isGameOn, setIsGameOn] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [levelIndex, setLevelIndex] = useState(0);
  const [blocksToShow, setBlocksToShow] = useState([]);
  const [canClick, setCanClick] = useState(false);
  const [userSequence, setUserSequence] = useState([]);
  const [hasSequenceStarted, setHasSequenceStarted] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [livesHistory, setLivesHistory] = useState([1, 1]);
  const [currentMaxLevel, setCurrentMaxLevel] = useState(0);
  const startLockRef = useRef(false);
  const isWrongSequenceHandled = useRef(false);
  const isGameEnded = useRef(false);
  const timeoutsRef = useRef([]);

  const [currentLevel, setCurrentLevel] = useState(0)
  const clearAllTimeouts = () => {
  timeoutsRef.current.forEach((t) => clearTimeout(t));
  timeoutsRef.current = [];
  };

  const lastResultByLenRef = useRef({}); 


  const levelIndexRef = useRef(0);
  useEffect(() => { levelIndexRef.current = levelIndex; }, [levelIndex]);


  const pulseBlock = (id) => {
    const block = document.getElementById(`item--${id}`);
    if (!block) return;
    block.classList.remove("highlight");
    void block.offsetWidth; 
    block.classList.add("highlight");
    const t = setTimeout(() => block.classList.remove("highlight"), 1000); 
    timeoutsRef.current.push(t);
  };

  const bumpLevel = () => {
    levelIndexRef.current = levelIndexRef.current + 1;
    setLevelIndex(levelIndexRef.current);
  };

  const saveResultToFirestore = async (score, user) => {
    if (!user) {
      console.warn("Użytkownik niezalogowany – pomijam zapis do Firestore.");
      return;
    }
    try {
      const userDocRef = doc(db, "userResults", user.uid);
      await setDoc(userDocRef, {}, { merge: true });

      const resultsCollectionRef = collection(userDocRef, "corsiBlockResults");
      await addDoc(resultsCollectionRef, {
        level: score,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Błąd zapisywania wyniku w Firestore:", error);
    }
  };

  const handleGameStart = () => {
    clearAllTimeouts();
    isGameEnded.current = false;
    levelIndexRef.current = 0;
    lastResultByLenRef.current = {};
    startLockRef.current = false;
    setIsGameOn(true);
    setIsGameOver(false);
    setLevelIndex(0);
    setCurrentMaxLevel(0);
    setLivesHistory([1, 1]);
    setFeedbackMessage("");
    setUserSequence([]);
    setHasSequenceStarted(false);
  };

  const generateSequence = (length) => {

    const seq = [];
    for (let i = 0; i < length; i++) {
      seq.push(Math.floor(Math.random() * 9));
    }
    return seq;
  };

  const handleStartSequence = () => {
        setCurrentLevel(prev => prev +1)
    if (startLockRef.current || hasSequenceStarted || !isGameOn || isGameOver) return;

    startLockRef.current = true; 

    if (levelIndexRef.current >= levels.length) {
        handleEndGame();
        return;
    }

    isWrongSequenceHandled.current = false;
    setHasSequenceStarted(true);
    setFeedbackMessage("");
    setUserSequence([]);
    setCanClick(false);

    setTimeout(() => {
    const idx = levelIndexRef.current;             
    const sequence = generateSequence(levels[idx]); 
      setBlocksToShow(sequence);
      showSequenceToUser(sequence);
    }, 1000);
  };



  const showSequenceToUser = (sequence) => {
  clearAllTimeouts();
  const step = 1000 + 200; 
  sequence.forEach((num, idx) => {
    const t = setTimeout(() => pulseBlock(num), step * idx);
    timeoutsRef.current.push(t);
  });

  const done = setTimeout(() => setCanClick(true), step * sequence.length);
  timeoutsRef.current.push(done);
  };

  const handleBlockClick = (id, e) => {
    if (e.detail > 1) {
      return;
    }
    if (!canClick) return;

    setCanClick(true);
    highlightUserClick(id, 500);

    setUserSequence((prev) => {
      const updated = [...prev, id];
      const clickIndex = updated.length - 1;
      const isCorrect = blocksToShow[clickIndex] === id;
      if (!isCorrect) {
        if (!isWrongSequenceHandled.current) {
          isWrongSequenceHandled.current = true;
          indicateWrongBlock(id);
          handleWrongSequence();
        }
      } else {
        if (updated.length === blocksToShow.length) {
          handleCorrectSequence();
          isWrongSequenceHandled.current = false;
        }
      }
      return updated;
    });
  };

  const highlightUserClick = (blockId, duration) => {
    const block = document.getElementById(`item--${blockId}`);
    if (!block) return;
    block.classList.add("clicked");

    setTimeout(() => {
      block.classList.remove("clicked");
    }, duration);
  };

  const indicateWrongBlock = (id) => {
    const block = document.getElementById(`item--${id}`);
    if (block) {
      block.classList.add("wrong");
      setTimeout(() => block.classList.remove("wrong"), 600);
    }
  };

  const handleCorrectSequence = () => {
  setFeedbackMessage(<>Brawo! Prawidłowa sekwencja. Kliknij przycisk Rozpocznij aby przejść dalej.</>);
  setHasSequenceStarted(false);
  setCanClick(false);


 const lengthThisLevel = levels[levelIndexRef.current];
  if (lengthThisLevel > currentMaxLevel) {
    setCurrentMaxLevel(lengthThisLevel);
  }

  lastResultByLenRef.current[lengthThisLevel] = 'ok';

  startLockRef.current = false; 
  bumpLevel()

};


const handleWrongSequence = () => {

  setFeedbackMessage(<>Błędna sekwencja! Kliknij przycisk Rozpocznij, aby przejść dalej.</>);
  setHasSequenceStarted(false);
  setCanClick(false);

  const lengthThisLevel = levels[levelIndexRef.current];


  if (lastResultByLenRef.current[lengthThisLevel] === 'wrong') {

      setFeedbackMessage("Koniec gry!");
      startLockRef.current = false;
      handleEndGame();
      return;

  }


 lastResultByLenRef.current[lengthThisLevel] = 'wrong';

   startLockRef.current = false; 

bumpLevel()
};

  const handleEndGame = async () => {
    if (isGameEnded.current) {
      console.warn("Gra już zakończona – pomijam zapis.");
      return;
    }
    isGameEnded.current = true;
    clearAllTimeouts()
    setCanClick(false)
    startLockRef.current = false;
    
    await saveResultToFirestore(currentMaxLevel, currentUser);

    setIsGameOn(false);
    setIsGameOver(true);
    setCanClick(false);
  };

  const currentLevelNumber = levelIndex + 1;

  return (
    <div className="corsi-block">
      {!isGameOn && !isGameOver && (
        <div className="corsi-block__container">
          <h1 className="corsi-block__title typo typo--title">
            Corsi Block Test
          </h1>
          <h2 className="corsi-block__heading typo typo--subtitle">
            Trenuj swoją pamięć wzrokowo-przestrzenną w prosty sposób
          </h2>
          <p className="corsi-block__instruction typo typo--instruction">
            Zapamiętaj sekwencję wyświetlanych klocków i odtwórz ją.
            <br />
            Naciśnij START, aby rozpocząć.
          </p>
          <button
            onClick={handleGameStart}
            className="corsi-block__button button button--games button--dark"
          >
            START
          </button>
        </div>
      )}

      {isGameOn && !isGameOver && (
        <div className="corsi-block__container">
          <h1 className="corsi-block__title heading heading--1">
            Poziom: {currentLevel}
          </h1>
          <div
            className="corsi-block__feedback"
            style={{
              visibility: feedbackMessage ? "visible" : "hidden",
              minHeight: "1rem",
              marginBottom: "1rem",
            }}
          >
            {feedbackMessage || ""}
          </div>

          <div className="corsi-block__box">
            {Array.from({ length: 9 }, (_, i) => (
              <div
                key={i}
                className={`corsi-block__item corsi-block__item--${i + 1}`}
                id={`item--${i}`}
                onClick={(e) => handleBlockClick(i, e)}
              >
                &nbsp;
              </div>
            ))}
          </div>

          <button
            onClick={handleStartSequence}
            className="corsi-block__button button button--dark button--games"
            style={{
              visibility: hasSequenceStarted ? "hidden" : "visible",
              marginTop: "1.5rem",
            }}
          >
            Rozpocznij
          </button>
        </div>
      )}

      {isGameOver && (
        <div className="corsi-block__container">
          <h1 className="corsi-block__title typo typo--title">Koniec Gry!</h1>
          <div className="corsi-block__score--container">
          <ModalCorsiBlock score={currentMaxLevel} />
          <h2 className="corsi-block__heading typo typo--subtitle" style={{display: "inline-block"}}>
            Twój wynik:
          </h2></div>
          <h2 className="corsi-block__answer">{currentMaxLevel}</h2>  

          <button
            onClick={() => navigate("/")}
            className="corsi-block__button button button--light"
          >
            ZAKOŃCZ
          </button>
        </div>
      )}
    </div>
  );
}
