import { useContext } from "react";
import { NotifyContext } from "../context/Notify";

export default function TriggerButton() {
  const {showNotification} = useContext(NotifyContext);

  const handleClick = () => {
    showNotification("Mensaje customificado, buenas tarde", "success")
  }
  return (
    <button onClick={handleClick}>
      Trigger Button1
    </button>
  )
}
