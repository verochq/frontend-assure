import "../flashcard.css";
import { useState } from "react";

type FlashcardProps = {
  question: string;
  answer: string;
  topic: string;
  isLearned: boolean;
};

function Flashcard({ question, answer, topic }: FlashcardProps) {
  const [isAnswerShow, setIsAnswerShow] = useState(false);

  const handleClickCard = () => {
    setIsAnswerShow(!isAnswerShow);
  };

  return (
    <>
      <div
        className={`flashcard ${isAnswerShow ? "flashcard--showing-answer" : ""}`}
        onClick={handleClickCard}
      >
        <p className="flashcard__contain">{isAnswerShow ? answer : question}</p>
        <p className="flashcard__topic">{topic}</p>
      </div>
    </>
  );
}

export default Flashcard;
