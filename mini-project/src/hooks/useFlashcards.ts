import { useEffect, useState } from "react";
import type { FlashcardType, FlashcardData } from "../types/types";
import { loadFlashcards, saveFlashcards, saveProgress } from "../data/data";





function useFlashcards(initialFlashcards: FlashcardType[]) {
  // obteniendo datos de localStorage
  //Lista de tarjetas
  const [flashcards, setFlashcards] = useState<FlashcardType[]>(() => {
    const saved = loadFlashcards();
    return saved && Array.isArray(saved) ? saved : initialFlashcards;
  });

  // estamos editando una tarjeta?
  const [editingFlashcard, setEditingFlashcard] =
    useState<FlashcardType | null>(null);

  // estamos agregando una tarjeta
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    saveFlashcards(flashcards);
    const learnedCount = flashcards.filter((flashcard) => flashcard.isLearned).length;
    saveProgress(learnedCount);
  }, [flashcards]);

  //Crear una tarjeta
  const createFlashcard = (data: FlashcardData) => {
    const newFlashcard: FlashcardType = {
      ...data,
      id: Date.now().toString(),
      isLearned: false,
    };
    setFlashcards((prev) => [...prev, newFlashcard]);
    setIsAdding(false);
  };

  //Actualizar una tarjeta
  const updateFlashcard = (data: FlashcardData) => {
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

  //Eliminar una tarjeta
  const removeFlashcard = (id: string) => {
    setFlashcards((prev) => prev.filter((flascard) => flascard.id !== id));
  };

  // EDITANDO UNA TARJETA
  const startEdit = (id: string) => {
    const cardToEdit = flashcards.find((card) => card.id === id);
    if (cardToEdit) {
      setEditingFlashcard(cardToEdit);
    }
  };

  // UPDATE LEARNED
  const updateLearned = (id: string, hasLearned: boolean) => {
    setFlashcards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, isLearned: hasLearned } : card
      )
    );
  };

  // Acciones de mostrado
  const startAdd = () => {
    setIsAdding(true);
  };

  const cancelEdit = () => {
    setEditingFlashcard(null);
  };

  const cancelAdd = () => {
    setIsAdding(false);
  };

  

  

  return {
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
    updateLearned,
  };
}

export default useFlashcards;
