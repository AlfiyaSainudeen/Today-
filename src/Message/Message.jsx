import React, { useState } from "react";
import "./Message.css";
import emailjs from 'emailjs-com';
import { isEmail } from 'validator';

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e){
    e.preventDefault();
    if (!isEmail(email)) {
      alert('Please enter a valid sender email address');
      return;
    }
    if (!isEmail(e.target.useremail.value)) {
      alert('Please enter a valid receiver email address');
      return;
    }
    emailjs.sendForm('service_72gib7o',
    'template_nrrbtt3',
    e.target,
    'yR1v6BxTVpy_AC1mT').then(res=>{
        console.log(res);
    }).catch(err=>console.log(err));

}

  return (
    <div className="email-form">
      <h1>Send an Email Message </h1>

      <form onSubmit={sendEmail}>
        <label htmlFor="sender-email">From Email address</label>
        <input
          type="email"
          id="sender-email"
          placeholder="Sender's Email Address"
          name="senderemail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="user-email">To Email address</label>
        <input
          type="email"
          id="user-email"
          placeholder="Receiver's Email Address"
          name="useremail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          placeholder="Enter the subject here..."
          name="subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Enter your message here..."
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">
          Send Email
        </button>
      </form>
    </div>
  );
};

export default EmailForm;