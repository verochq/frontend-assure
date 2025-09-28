import { useState } from "react";
import type { FlashcardType } from "../types/types";
import FlashcardList from "./FlashcardList";

type FlashcardFilterProps = {
  flashcards: FlashcardType[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onAdd?: () => void;
};

export default function FlashcardFilter({
  flashcards,
  onEdit,
  onDelete,
  onAdd,
}: FlashcardFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("all");

  const isFiltered = searchTerm.trim() !== "" || selectedTopic !== "all";


  const filteredFlashcards = flashcards.filter((flashcard) => {
    // Filtro por tema
    if (selectedTopic !== "all" && flashcard.topic !== selectedTopic) {
      return false;
    }
    // Filtro por texto
    const text = searchTerm.toLowerCase();
    return (
      flashcard.question.toLowerCase().includes(text) ||
      flashcard.answer.toLowerCase().includes(text)
    );
  });

  return (
    <div className="flashcard-filter">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="filter-controls">
        <select
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          className="filter-topic"
        >
          <option value="all">Todos los temas</option>
          <option value="Math">Math 🟥</option>
          <option value="Science">Science 🟨</option>
          <option value="Programming">Programming 🟩</option>
          <option value="Music">Music 🟦</option>
          <option value="Philosophy">Philosophy 🟪</option>
        </select>
      </div>

       <div className="flashcards-container">
        {filteredFlashcards.length > 0 || !isFiltered ? (
          <FlashcardList
            flashcards={filteredFlashcards}
            onEdit={onEdit}
            onDelete={onDelete}
            onAdd={onAdd}
            isShowAddButton={!isFiltered} 
          />
        ) : (
          <p className="no-results">No se encontraron flashcards.</p>
        )}
      </div>
    </div>
  );
}
