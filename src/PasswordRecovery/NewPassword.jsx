import React from 'react'
import './comm.css';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
export default function NewPassword() {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_72gib7o',
        'template_z8e0rpq',
        e.target,
        'yR1v6BxTVpy_AC1mT').then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));

    }
  return (
    <div className='email'> <form className="contact__form" onSubmit={sendEmail}>
    <label htmlFor="emailFrom">New Password:</label>
    <input type="password" name="userId" id="emailFrom"  className="email__from" placeholder="************"/>
    <label htmlFor="message">Confirm Password:</label>
    <input type="password" name="useremail" id="emailFrom"  className="email__from" placeholder="person@example.com"/>
    <Button variant="contained" endIcon={<SendIcon />} className="submit__btn" style={{marginTop: "5px"}} >
    Submit
  </Button>
  </form></div>
   
  )
}
