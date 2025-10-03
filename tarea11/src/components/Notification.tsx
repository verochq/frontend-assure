import { useContext } from "react";
import { NotifyContext } from "../context/Notify";

export default function Notification() {
  const {message, type} = useContext(NotifyContext);

  if (!message) return null;

  return (
    <div style={{background:"green"}}>Notification
      message: {message}
      type: {type}
    </div>
  )
}
