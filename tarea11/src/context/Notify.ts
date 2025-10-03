import { createContext } from "react";

export interface NotificationContextType {
  message: string;
  type: string;
  showNotification: (message: string, type: string) => void;
  clearNotification: () => void;
}

export interface notificationProps {
  message: string;
  type: string;
}

export const NotifyContext = createContext<NotificationContextType>({
  message: "",
  type: "",
  showNotification: () => {},
  clearNotification: () => {},
});
