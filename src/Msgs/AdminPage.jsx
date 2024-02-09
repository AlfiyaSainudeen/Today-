import React from 'react';
import { useMessageContext } from './MessageContext';
import MessageForm from './MessageForm';

const AdminPage = () => {
  const { sendMessage } = useMessageContext();

  return (
    <div>
      <h1>Admin Page</h1>
      <MessageForm onSubmit={(message) => sendMessage('admin', message)} />
    </div>
  );
};

export default AdminPage;