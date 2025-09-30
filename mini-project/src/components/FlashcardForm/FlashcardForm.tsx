import { useEffect, useState } from "react";
import "./flashcardform.css";
import type { FlashcardFormProps } from "../../types/types";
import { TOPICS } from "../../data/topics";

function FlashcardForm({
  initialData,
  onSubmit,
  onCancel,
}: FlashcardFormProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [topic, setTopic] = useState("");

  useEffect(() => {
    if (initialData) {
      setQuestion(initialData.question);
      setAnswer(initialData.answer);
      setTopic(initialData.topic);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ question, answer, topic });
  };

  const isEditing = !!initialData;
  const title = isEditing ? "Edit flash card" : "Add a flash card";
  const submitText = isEditing ? "Update" : "Save";

  return (
    <form className="addCardForm" onSubmit={handleSubmit}>
      <fieldset className="fieldCardForm">
        <legend>{title}</legend>
        <label  htmlFor="question">Question:</label>
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <label  htmlFor="answer">Answer:</label>
        <input
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <label htmlFor="topic">Topic:</label>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        >
          <option value="">-- Select a topic --</option>
          {TOPICS.map((t) => (
            <option key={t.name} value={t.name}>
              {t.name} {t.icon}
            </option>
          ))}
        </select>
        <button type="submit">{submitText}</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </fieldset>
    </form>
  );
}

export default FlashcardForm;
