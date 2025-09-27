import { useEffect, useState } from "react";
import "../addflashcard.css";
import type { FlashcardFormProps } from "../types/types";

function FlashcardForm({ initialData, onSubmit, onCancel }: FlashcardFormProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [topic, setTopic] = useState("");

  useEffect(() => {
    if (initialData) {
      setQuestion(initialData.question);
      setAnswer(initialData.answer);
      setTopic(initialData.topic);
    }
  }, [initialData]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim() && answer.trim() && topic) {
      onSubmit({question, answer, topic});
    }
  };

  const isEditing = !!initialData;
  const title = isEditing ? "Edit flash card" : "Add a flash card";
  const submitText = isEditing ? "Update" : "Save";

  
  return (
    <form className="addCardForm" onSubmit={handleSubmit}>
      <fieldset className="fieldCardForm">
        <legend>{title}</legend>
        <label>Question:</label>
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <label>Answer:</label>
        <input
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <label>Topic:</label>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        >
          <option value="">-- Select a topic --</option>
          <option value="Math">Math 🟥</option>
          <option value="Science">Science 🟨</option>
          <option value="Programming">Programming 🟩</option>
          <option value="Music">Music 🟦</option>
          <option value="Philosophy">Philosophy 🟪</option>
        </select>
        <button type="submit">{submitText}</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </fieldset>
    </form>
  );
}

export default FlashcardForm;
