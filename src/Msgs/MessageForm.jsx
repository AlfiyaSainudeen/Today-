import React, { useState } from 'react';

const MessageForm = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(message);
    setMessage('');
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Message:
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default MessageForm;