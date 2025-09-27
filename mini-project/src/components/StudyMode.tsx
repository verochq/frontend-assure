import { useEffect, useState } from "react";
import type { FlashcardType } from "../types/types";
import ProgressBar from "./ProgressBar";
import Flashcard from "./Flashcard";
import "../flashcard.css";

type StudyModeProps = {
  flashcards: FlashcardType[];
  updateLearned: (id: string, hasLearned: boolean) => void;
};

function StudyMode({ flashcards : allFlashcards , updateLearned }: StudyModeProps) {

  const [shuffledFlashcards, setShuffledFlashcards] =
    useState<FlashcardType[]>([]);
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


  const currentFlashcard =  shuffledFlashcards[currentIndex];
  
  const handleFlashcardClick = (hasLearned: boolean) => {
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
        <div className="study-mode-container">
          <h1>Study Mode</h1>
          <ProgressBar flashcards={allFlashcards}/>
        </div>
        <button onClick={shuffle}>Shuffle</button>
      </header>

      
      <div className="study-mode-flashcards-container">
        <div className="study-mode-flashcards">
          {!isFinished ? <Flashcard {...currentFlashcard}/> : <div className="flashcard">No hay más flashcards!
          <button>Volver al dashboard</button>
          </div>
          }
        </div>
        <div className="study-mode-buttons">
          <button onClick={() => handleFlashcardClick(true)}>Learned</button>
          <button onClick={() => handleFlashcardClick(false)} >Needs Revision</button>
        </div>
      </div>
    </>
  );
}

export default StudyMode;
