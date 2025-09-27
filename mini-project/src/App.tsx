//import Dashboard from './components/Dashboard'

import Dashboard from "./components/Dashboard";
import StudyMode from "./components/StudyMode"
import { initialFlashcards } from "./data/data";
import useFlashcards from "./hooks/useFlashcards";

function App() {
  const flashcardsData = useFlashcards(initialFlashcards);
  
  return (
    <>
      {/* <AddFlashcard/> */}
      {/* <Flashcard/> */}
      <Dashboard {...flashcardsData}/>
      {/* <StudyMode {...flashcardsData}/> */}
    </>
  )
}

export default App
