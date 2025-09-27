import { useState } from "react";
import "../addflashcard.css";

type AddFlashcardProps = {
  onAdd: (question: string, answer: string, topic: string) => void;
  onCancel: () => void;
};

function AddFlashcard({ onAdd, onCancel }: AddFlashcardProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [topic, setTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim() && answer.trim() && topic) {
      onAdd(question, answer, topic);
    }
  };

  return (
    <form className="addCardForm" onSubmit={handleSubmit}>
      <fieldset className="fieldCardForm">
        <legend>Add a flash card:</legend>
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
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </fieldset>
    </form>
  );
}

export default AddFlashcard;