import "./progressbar.css";
import type { FlashcardType } from "../../types/types";
import { loadProgress } from "../../data/data";
import { useEffect, useState } from "react";

type ProgressBarProps = {
  flashcards: FlashcardType[];
};

function ProgressBar({ flashcards }: ProgressBarProps) {

  const [learnedCount, setLearnedCount] = useState<number>(0);

  useEffect(()=>{
    const fetch = async() => {
      const data = await loadProgress();
      console.log(typeof data);
      setLearnedCount(data);
    }

    fetch().catch(console.error)
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
