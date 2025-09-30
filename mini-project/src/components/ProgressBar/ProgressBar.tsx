import "./progressbar.css";
import type { FlashcardType } from "../../types/types";
import { loadProgress } from "../../data/data";
import { useEffect, useState } from "react";

type ProgressBarProps = {
  flashcards: FlashcardType[];
};

function ProgressBar({ flashcards }: ProgressBarProps) {

  const [learnedCount, setLearnedCount] = useState<number>(loadProgress());
  
  useEffect(()=>{
    setTimeout(()=> {
      const data = loadProgress();
      setLearnedCount(data);
    }, 100 )
    
  }, [flashcards])
  

  const totalCount = flashcards.length;

  return (
    <>
      <div className="progress-bar-container" style={{ display: "flex" }}>
        <progress 
          className="progress-bar"
          value={learnedCount}
          max={totalCount}
          id="progress-bar"
        ></progress>
        <p className="progress-bar-text">
          {learnedCount}/{totalCount} cards
        </p>
      </div>
    </>
  );
}

export default ProgressBar;
