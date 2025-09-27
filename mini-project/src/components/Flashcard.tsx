import "../flashcard.css";
import { useState } from "react";
import type { FlashcardProps } from "../types/types";

function Flashcard({
  id,
  question,
  answer,
  topic,
  isLearned,
  onEdit,
  onDelete,
}: FlashcardProps) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isAnswerShow, setIsAnswerShow] = useState(false);

  const toggleOptions = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOptionsOpen(!isOptionsOpen);
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit?.(id);
    setIsOptionsOpen(false);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.(id);
    setIsOptionsOpen(false);
  };

  const handleClickCard = () => {
    setIsAnswerShow(!isAnswerShow);
    if (isOptionsOpen) setIsOptionsOpen(false);
  };

  const learned = isLearned ? "learned" : "not-learned";
  const content = isAnswerShow ? answer : question;

  return (
    <>
      <div
        className={`flashcard ${
          isAnswerShow ? "flashcard--showing-answer" : ""
        }`}
        onClick={handleClickCard}
      >

        <button className="flashcard__options" onClick={toggleOptions}>
          ...
        </button>

        {isOptionsOpen && (
          <div className="flashcard__options flashcard__options--content">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
        <p className="flashcard__contain">{content}</p>
        <p className="flashcard__topic">{topic}</p>
        <p className="flashcard__isLearned">{learned}</p>
      </div>
    </>
  );
}

export default Flashcard;
