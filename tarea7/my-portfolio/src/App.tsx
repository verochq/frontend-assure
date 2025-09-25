import ControlledUncontrolledForm from './components/ControlledUncontrolledForm'
import UserCard from './components/UseCard'
import UserList from './components/UserList';
import KeyboardControlledCounter from './components/KeyboardControlledCounter';

function App() {

  return (
    <>
      <h3>Exercise 1</h3>
      <ControlledUncontrolledForm/>
      <h3>Exercise 2</h3>
      <UserCard name={'Sarah'} age={25} onClick={()=>{console.log(`Boton user card clickeado`)}}/>
      <h3>Exercise 3</h3>
      <UserList/>
      <h3>Exercise 4</h3>
      <KeyboardControlledCounter/>
      
    </>
  );
}

export default App
