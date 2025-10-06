import { useState } from 'react'
import './App.css'
import Toogle from './components/Toggle'
import { ThemeContext } from './context/ThemeContext';

function App() {

  const [theme, setTheme] = useState('light');
  return (
    <>
      {/* <ColorSwitch />
      <DisplaySize />
      <ValidatingInputs /> */}

      <ThemeContext value={{theme: theme, setTheme: setTheme}}>
        <Toogle/>
      </ThemeContext>
    </>
  )
}

export default App
