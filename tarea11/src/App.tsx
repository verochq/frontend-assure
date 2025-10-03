import Notification from './components/Notification'
import NotificationProvider from './components/NotificationProvider'
import TriggerButton from './components/TriggerButton'
import TriggerButtonNav from './components/TriggerButtonNav'

function App() {
  

  return (
    <>
      <NotificationProvider>
        <Notification/>
        
        <header>
          <h1> Use context practica</h1>
          <TriggerButtonNav/>
        </header>

        <main>
          <h3>Contenido</h3>
          <TriggerButton/>
        </main>
      </NotificationProvider>
    </>
  )
}

export default App
