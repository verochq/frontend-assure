import FlashcardForm from "./FlashcardForm";
import "../flashcard.css";
import "../dashboard.css";
import ProgressBar from "./ProgressBar";
import type { FlashcardData, FlashcardType } from "../types/types";
import FilterFlashcard from "./FilterFlashcard";

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
  onModeChange: (studyMode: boolean) => void;
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
  onModeChange,
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
        <div className="dashboard-header">
          <ProgressBar flashcards={flashcards} />
          <button onClick={()=> onModeChange(true)}>Study Mode</button>
          
        </div>      
      </header>

      <FilterFlashcard flashcards={flashcards} onEdit={startEdit} onDelete={handleDelete} onAdd={startAdd} />

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
