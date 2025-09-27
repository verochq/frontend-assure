import { useState } from "react";
import Flashcard from "./Flashcard";
import AddFlashcard from "./AddFlashcard";
import "../flashcard.css";
import "../dashboard.css";

type FlashcardType = {
  id: string;
  question: string;
  answer: string;
  topic: string;
  isLearned: boolean;
};

const initialFlashcards: FlashcardType[] = [
  {
    id: "1",
    question: "What is the capital of France?",
    answer: "Paris",
    topic: "Geography",
    isLearned: false,
  },
  {
    id: "2",
    question: "What is the capital of Spain?",
    answer: "Madrid",
    topic: "Geography",
    isLearned: false,
  },
  {
    id: "3",
    question: "What is the capital of Germany?",
    answer: "Berlin",
    topic: "Geography",
    isLearned: false,
  },
];

function Dashboard() {
  const [isAddShown, setIsAddShown] = useState(false);
  const [flashcards, setFlashcards] = useState<FlashcardType[]>(initialFlashcards);

  const handleAdd = (question: string, answer: string, topic: string) => {
    const newFlashcard: FlashcardType = {
      id: Date.now().toString(),
      question,
      answer,
      topic,
      isLearned: false,
    };
    setFlashcards([...flashcards, newFlashcard]);
    setIsAddShown(false); 
  };

  const toggleAddForm = () => {
    setIsAddShown(!isAddShown);
  };

  return (
    <>
      <header>
        <h1>Dashboard</h1>
        <h2>Flashcards</h2>
        <p>Bar</p>
      </header>

      <div className="flashcards-container">
        {flashcards.map((flashcard) => (
          <Flashcard
            key={flashcard.id}
            question={flashcard.question}
            answer={flashcard.answer}
            topic={flashcard.topic}
            isLearned={flashcard.isLearned}
          />
        ))}

        <div className="flashcards-add-button flashcard" onClick={toggleAddForm}>
          +
        </div>
      </div>

      {/* Mostramos el formulario solo si isAddShown es true */}
      {isAddShown && <AddFlashcard onAdd={handleAdd} onCancel={() => setIsAddShown(false)} />}
    </>
  );
}

export default Dashboard;