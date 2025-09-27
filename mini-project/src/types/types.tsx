export type FlashcardData = {
  question: string;
  answer: string;
  topic: string;
};

export type FlashcardType = {
  id: string;
  isLearned: boolean;
} & FlashcardData;

export type FlashcardFormProps = {
  initialData?: FlashcardData;
  onSubmit: (data: FlashcardData) => void;
  onCancel: () => void;
};

export type FlashcardProps = FlashcardType & {
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
};
