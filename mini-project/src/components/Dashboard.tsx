import Flashcard from "./Flashcard";
import FlashcardForm from "./FlashcardForm";
import "../flashcard.css";
import "../dashboard.css";
import ProgressBar from "./ProgressBar";
import type { FlashcardData, FlashcardType } from "../types/types";

type DashboardProps = {
  flashcards: FlashcardType[];
  editingFlashcard: FlashcardType | null;
  isAdding: boolean;
  createFlashcard: (data: FlashcardData) => void;
  updateFlashcard: (data: FlashcardData) => void;
  removeFlashcard: (id: string) => void;
  startEdit: (id: string) => void;
  startAdd: () => void;
  cancelEdit: () => void;
  cancelAdd: () => void;
};

function Dashboard({
  flashcards,
  editingFlashcard,
  isAdding,
  createFlashcard,
  updateFlashcard,
  removeFlashcard,
  startEdit,
  startAdd,
  cancelEdit,
  cancelAdd,
}: DashboardProps) {
  const handleDelete = (id: string) => {
    if (confirm("¿Eliminar esta tarjeta?")) {
      removeFlashcard(id);
    }
  };

  return (
    <>
      <header>
        <h1>Dashboard</h1>
        <h2>Flashcards</h2>
        <ProgressBar flashcards={flashcards} />
      </header>

      <div className="flashcards-container">
        {flashcards.map((flashcard) => (
          <Flashcard
            key={flashcard.id}
            {...flashcard}
            onEdit={startEdit}
            onDelete={handleDelete}
          />
        ))}

        <div className="flashcards-add-button flashcard" onClick={startAdd}>
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
          onSubmit={updateFlashcard}
          onCancel={cancelEdit}
        />
      )}

      {isAdding && (
        <FlashcardForm onSubmit={createFlashcard} onCancel={cancelAdd} />
      )}
    </>
  );
}

export default Dashboard;
