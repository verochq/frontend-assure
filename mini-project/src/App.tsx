//import Dashboard from './components/Dashboard'

import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import StudyMode from "./components/StudyMode/StudyMode"
import { initialFlashcards } from "./data/data";
import useFlashcards from "./hooks/useFlashcards";

function App() {
  const [onStudyMode, setOnStudyMode] = useState(false);

  const handleModeChange = (studyMode: boolean) => {
    if (studyMode) {
      setOnStudyMode(true);
    } else {
      setOnStudyMode(false);
    }
  };
  
  const flashcardsData = useFlashcards(initialFlashcards);
  
  return (
    <>
      {/* <AddFlashcard/> */}
      {/* <Flashcard/> */}
      {onStudyMode ? <StudyMode {...flashcardsData} onModeChange={handleModeChange}/> : <Dashboard {...flashcardsData} onModeChange={handleModeChange} />}
    </>
  )
}

export default App
