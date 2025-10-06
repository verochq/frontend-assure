import { useContext } from "react";
import { NotifyContext } from "../context/Notify";
import { noficationTypes } from "../utils/notificationDesign";

export default function Notification() {
  const {message, type, clearNotification} = useContext(NotifyContext);
  if (!message) return null;

  const color = noficationTypes.filter(noti => noti.type === type)[0]?.color || "pink";


  const handleClose= () =>{
    clearNotification();
  };

  return (
    <div style={{background:color}}>Notification
      message: {message}
      type: {type}
      <button onClick={handleClose}>x</button>
    </div>
  )
}
