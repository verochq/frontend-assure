import { useEffect, useState, type ReactNode } from "react";
import { NotifyContext, type notificationProps } from "../context/Notify";

interface NotificationProviderProps {
  children: ReactNode;
}

export default function NotificationProvider({
  children,
}: NotificationProviderProps) {
  const [notification, setNotification] = useState<notificationProps>({
    message: "",
    type: "",
  });

  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        clearNotification();
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification.message]);

  const showNotification = (message: string, type: string) => {
    const newNotification = { message, type };
    setNotification(newNotification);
  };

  const clearNotification = () => {
    setNotification({ message: "", type: "" });
  };

  return (
    <NotifyContext.Provider
      value={{
        message: notification.message,
        type: notification.type,
        showNotification,
        clearNotification,
      }}
    >
      {children}
    </NotifyContext.Provider>
  );
}
