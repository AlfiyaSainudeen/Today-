import React from 'react';
import { useMessageContext } from './MessageContext';

const StudentPage = () => {
  const { messages } = useMessageContext();

  return (
    <div>
      <h1>Student Page</h1>
      <div>
        <h2>Messages:</h2>
        <ul>
          {messages.student.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentPage;