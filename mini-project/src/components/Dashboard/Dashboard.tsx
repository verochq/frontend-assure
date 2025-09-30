import FlashcardForm from "../FlashcardForm/FlashcardForm";
import "./dashboard.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import FlashcardGrid from "../FlashcardGrid/FlashcardGrid";
import FlashcardFilter from "../FlashcardFilter/FlashcardFilter";
import type { FlashcardData, FlashcardType } from "../../types/types";

type DashboardProps = {
  flashcards: FlashcardType[];
  filteredFlashcards: FlashcardType[];
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedTopic: string;
  setSelectedTopic: (value: string) => void;
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
  filteredFlashcards,
  searchTerm,
  setSearchTerm,
  selectedTopic,
  setSelectedTopic,
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
        <h1>Study App</h1>

        <div className="dashboard-header">
          <FlashcardFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
          />
          
            <ProgressBar flashcards={flashcards} />
            <button
              className="study-mode-button"
              onClick={() => onModeChange(true)}
            >
              Study Mode
            </button>
          
        </div>
      </header>

      <main className="main-dashboard">
        <FlashcardGrid
          flashcards={filteredFlashcards}
          onEdit={startEdit}
          onDelete={handleDelete}
          onAdd={startAdd}
          showAddButton={selectedTopic === "all" && searchTerm === ""}
        />
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
      </main>
    </>
  );
}

export default Dashboard;
