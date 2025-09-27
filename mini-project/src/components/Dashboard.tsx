import { useState } from "react";
import Flashcard from "./Flashcard";
import FlashcardForm from "./FlashcardForm";
import { initialFlashcards } from "../data/data";
import type { FlashcardType, FlashcardData } from "../types/types";
import "../flashcard.css";
import "../dashboard.css";

function Dashboard() {
  const [isAddShown, setIsAddShown] = useState(false);
  const [editingFlashcard, setEditingFlashcard] =
    useState<FlashcardType | null>(null);
  const [flashcards, setFlashcards] =
    useState<FlashcardType[]>(initialFlashcards);

  const handleCreate = (data: FlashcardData) => {
    const newFlashcard: FlashcardType = {
      ...data,
      id: Date.now().toString(),
      isLearned: false,
    };
    setFlashcards((prev) => [...prev, newFlashcard]);
    setIsAddShown(false);
  };

  const handleUpdate = (data: FlashcardData) => {
    if (!editingFlashcard) return;
    setFlashcards((prev) =>
      prev.map((flashcard) =>
        flashcard.id === editingFlashcard.id
          ? { ...flashcard, ...data }
          : flashcard
      )
    );
    setEditingFlashcard(null);
  };

  const handleDelete = (id: string) => {
    if (confirm("¿Eliminar esta tarjeta?")) {
      setFlashcards((prev) => prev.filter((flascard) => flascard.id !== id));
    }
  };

  const handleEdit = (id: string) => {
    const currentFlashcard = flashcards.find((flashcard) => flashcard.id === id);
    setEditingFlashcard(currentFlashcard || null);
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
            {...flashcard}
            onEdit={(id) => {handleEdit(id)}}
            onDelete={(id) => {handleDelete(id)}}
          />
        ))}

        <div
          className="flashcards-add-button flashcard"
          onClick={() => setIsAddShown(true)}
        >
          +
        </div>
      </div>

      {editingFlashcard && (
        <FlashcardForm
          initialData={{
            question: editingFlashcard.question,
            answer: editingFlashcard.answer,
            topic: editingFlashcard.topic,
          }}
          onSubmit={handleUpdate}
          onCancel={() => setEditingFlashcard(null)}
        />
      )}

      {isAddShown && (
        <FlashcardForm
          onSubmit={handleCreate}
          onCancel={() => setIsAddShown(false)}
        />
      )}
    </>
  );
}

export default Dashboard;
