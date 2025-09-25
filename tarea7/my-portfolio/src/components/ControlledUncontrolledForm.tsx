import { useState, useRef } from "react";

function ControlledUncontrolledForm() {
  const [password, setPassword] = useState<string>("");

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
    console.log(event.target.value);
  }


  const name = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (name.current?.value) {
      alert(`Name: ${name.current.value} Password:${password}`);
    }
    
  }

  return (
    <form>
        <label htmlFor="name">Name Uncontrolled: </label>
        <input type="text" id="name" name="name" ref={name} />

        <label htmlFor="password">Password Controlled: </label>
        <input type="password" value={password} onChange={handleChangePassword} id="password" name="password"  />

        <button onClick={handleButtonClick}>Click</button>
    </form>
  );
}

export default ControlledUncontrolledForm;
