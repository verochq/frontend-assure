import type { FlashcardType } from "../types/types";

export const initialFlashcards: FlashcardType[] = [
  {
    id: "1",
    question: "What is the capital of France?",
    answer: "Paris",
    topic: "Music",
    isLearned: true,
  },
  {
    id: "2",
    question: "What is the capital of Spain?",
    answer: "Madrid",
    topic: "Music",
    isLearned: false,
  },
  {
    id: "3",
    question: "What is the capital of Germany?",
    answer: "Berlin",
    topic: "Music",
    isLearned: false,
  },
];

const FLASHCARDS_STORAGE_KEY = "flashcards_data";
const PROGRESS_STORAGE_KEY = "progress_data";


export const saveFlashcards = (flashcards: FlashcardType[]) => {
  try {
    localStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(flashcards));
  } catch (error) {
    console.error("No se pudo guardar en localStorage:", error);
  }
};

export const loadFlashcards = (): FlashcardType[] | null => {
  try {
    const data = localStorage.getItem(FLASHCARDS_STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("No se pudo cargar de localStorage:", error);
    return null;
  }
};

//SAVED PROGRESS

export const saveProgress = (progress: number) => {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("No se pudo guardar el progreso:", error);
  }
};

export const loadProgress = (): number => {
  try {
    const data =  localStorage.getItem(PROGRESS_STORAGE_KEY);
    return data ? JSON.parse(data) : 0;
  } catch (error) {
    console.error("No se pudo cargar progress:", error);
    return 0;
  }
};
