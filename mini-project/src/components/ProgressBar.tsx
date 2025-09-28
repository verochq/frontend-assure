import "../progressbar.css";
import type { FlashcardType } from "../types/types";

type ProgressBarProps = {
  flashcards: FlashcardType[];
};
function ProgressBar({ flashcards }: ProgressBarProps) {
  const learnedCount = flashcards.filter((flashcard) => flashcard.isLearned).length;
  const totalCount = flashcards.length;

  return (
    <>
      <div className="progress-bar-container" style={{ display: "flex" }}>
        <progress style={{ margin: 0, fontSize: "1rem", padding: 0 }}
          value={learnedCount}
          max={totalCount}
          id="progress-bar"
        ></progress>
        <p style={{ margin: 0, fontSize: "1rem", padding: 0 }}>
          {learnedCount}/{totalCount}
        </p>
      </div>
    </>
  );
}

export default ProgressBar;
