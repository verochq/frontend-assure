import { TOPICS } from "../../data/topics";
import "./flashcardfilter.css";

type FlashcardFilterProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedTopic: string;
  setSelectedTopic: (value: string) => void;
};

export default function FlashcardFilter({
  searchTerm,
  setSearchTerm,
  selectedTopic,
  setSelectedTopic,
}: FlashcardFilterProps) {
  return (
    <div className="filter-header">
      <input
        className="search-input"
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
          {TOPICS.map((t) => (
            <option key={t.name} value={t.name}>
              {t.name} {t.icon}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}