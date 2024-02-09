import React from 'react';
import {useNavigate} from 'react-router-dom';

const Page1 = () => {
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/page2');
  };

  return (
    <div>
      <h1>Page 1</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page1;