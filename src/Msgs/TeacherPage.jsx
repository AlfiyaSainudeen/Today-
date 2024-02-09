import React from 'react';
import { useMessageContext } from './MessageContext';
import MessageForm from './MessageForm';

const TeacherPage = () => {
  const { messages, sendMessage } = useMessageContext();

  return (
    <div>
      <h1>Teacher Page</h1>
      <MessageForm onSubmit={(message) => sendMessage('teacher', message)} />
      <div>
        <h2>Messages:</h2>
        <ul>
          {messages.teacher.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeacherPage;