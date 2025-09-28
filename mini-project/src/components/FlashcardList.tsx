import type { FlashcardType } from "../types/types";
import Flashcard from "./Flashcard";

type FlashcardListProps = {
  flashcards: FlashcardType[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onAdd?: () => void;
  isShowAddButton?: boolean;
};

function FlashcardList({
  flashcards,
  onEdit,
  onDelete,
  onAdd,
  isShowAddButton,
}: FlashcardListProps) {
  if (flashcards.length === 0) {
    return <p className="no-flashcards">No hay flashcards para mostrar.</p>;
  }

  return (
    <div className="flashcards-container">
      {flashcards.map((flashcard) => (
        <Flashcard
          key={flashcard.id}
          {...flashcard}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
      {isShowAddButton && (
        <div className="flashcards-add-button flashcard" onClick={onAdd}>
          +
        </div>
      )}
    </div>
  );
}

export default FlashcardList;
