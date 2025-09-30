import { useEffect, useState } from "react";
import type { FlashcardType } from "../../types/types";
import ProgressBar from "../ProgressBar/ProgressBar";
import Flashcard from "../Flashcard/Flashcard";
import "./studymode.css";
import "../Flashcard/flashcard.css";

type StudyModeProps = {
  flashcards: FlashcardType[];
  updateLearned: (id: string, hasLearned: boolean) => void;
  onModeChange: (studyMode: boolean) => void;
};

function StudyMode({
  flashcards: allFlashcards,
  updateLearned,
  onModeChange,
}: StudyModeProps) {
  const [shuffledFlashcards, setShuffledFlashcards] = useState<FlashcardType[]>(
    []
  );
  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (allFlashcards.length > 0) {
      shuffle();
      setCurrentIndex(0);
      setIsFinished(false);
    }
  }, []);

  const shuffle = () => {
    const shuffled = [...allFlashcards].sort(() => Math.random() - 0.5);
    setShuffledFlashcards(shuffled);
  };

  const currentFlashcard = shuffledFlashcards[currentIndex];

  const handleFlashcardClick = (hasLearned: boolean) => {
    setHasStarted(true);
    if (!currentFlashcard || isFinished) return;
    updateLearned(currentFlashcard.id, hasLearned);
    if (currentIndex >= shuffledFlashcards.length - 1) {
      setIsFinished(true);
      console.log("FINISHED");
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <header>
        <h1>Study Mode</h1>
        <div className="study-mode-container">
          <ProgressBar flashcards={allFlashcards} />
          <button
            className="shuffle-button"
            onClick={shuffle}
            disabled={hasStarted}
          >
            Shuffle
          </button>
        </div>
      </header>

      <div className="study-mode-flashcards-container">
        <div className="study-mode-flashcards">
          {!isFinished ? (
            <Flashcard {...currentFlashcard} />
          ) : (
            <div className="study-mode-flashcards-finished">
              No hay más flashcards!
              <button
                className="study-mode-buttons"
                onClick={() => onModeChange(false)}
              >
                Volver al dashboard
              </button>
            </div>
          )}
        </div>
        <div className="study-mode-buttons-container">
          {!isFinished ? (
            <>
              <button
                className="study-mode-buttons"
                onClick={() => handleFlashcardClick(true)}
              >
                Learned
              </button>
              <button
                className="study-mode-buttons"
                onClick={() => handleFlashcardClick(false)}
              >
                Needs Revision
              </button>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default StudyMode;
