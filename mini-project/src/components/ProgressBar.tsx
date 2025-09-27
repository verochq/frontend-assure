import "../progressbar.css";
import type { FlashcardType } from "../types/types";

type ProgressBarProps = {
  flashcards: FlashcardType[];
};
function ProgressBar({ flashcards }: ProgressBarProps) {

  const progress = flashcards.filter((flashcard) => flashcard.isLearned).length;
  return (
    <>
      <progress value={progress} max={flashcards.length} id="progress-bar"></progress>
    </>
  );
}

export default ProgressBar;