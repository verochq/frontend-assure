import Flashcard from "../Flashcard/Flashcard";
import type { FlashcardType } from "../../types/types";
import "./flashcardgrid.css";

type FlashcardGridProps = {
  flashcards: FlashcardType[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onAdd?: () => void;
  showAddButton?: boolean;
};

export default function FlashcardGrid({
  flashcards,
  onEdit,
  onDelete,
  onAdd,
  showAddButton = false,
}: FlashcardGridProps) {
  if (flashcards.length === 0 && !showAddButton) {
    return <p>No hay flashcards para mostrar.</p>;
  }

  return (
    <div className="flashcards-container">
      {flashcards.map((f) => (
        <Flashcard
          key={f.id}
          {...f}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}

      {showAddButton && (
        <div className="flashcards-add-button flashcard" onClick={onAdd}>
          +
        </div>
      )}
    </div>
  );
}
