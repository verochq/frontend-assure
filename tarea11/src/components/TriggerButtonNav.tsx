import { useContext } from "react";
import { NotifyContext } from "../context/Notify";

export default function TriggerButtonNav() {
  const {showNotification} = useContext(NotifyContext);

  const handleClick = () => {
    showNotification("Mensaje nav bar", "info")
  }
  return (
    <button onClick={handleClick}>
      Trigger Button2 nav
    </button>
  )
}
