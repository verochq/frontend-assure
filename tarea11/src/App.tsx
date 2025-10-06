import Notification from './components/Notification'
import NotificationProvider from './provider/NotificationProvider'
import TriggerButton from './components/TriggerButton'
import TriggerButtonNav from './components/TriggerButtonNav'

function App() {
  

  return (
    <>
      <NotificationProvider>
        <Notification/>
        
        <header>
          <h1> Use context practica</h1>
          <nav>
              <TriggerButtonNav/>
          </nav>
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
