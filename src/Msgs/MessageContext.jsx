import React, { createContext, useContext, useState } from 'react';

const MessageContext = createContext();

export const useMessageContext = () => {
  return useContext(MessageContext);
};

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState({ admin: [], student: [], teacher: [] });

  const sendMessage = (role, message) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [role]: [...prevMessages[role], message],
    }));
  };

  return (
    <MessageContext.Provider value={{ messages, sendMessage }}>
      {children}
    </MessageContext.Provider>
  );
};