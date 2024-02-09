import React from 'react'
import './comm.css';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import NewPassword from './NewPassword';
import  Password  from '../Password';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
export default function Forget() {
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
    <div>
    <div className='email'> <form className="contact__form" onSubmit={sendEmail}>
    <label htmlFor="emailFrom">Enter UserId:</label>
    <input type="text" name="userId" id="emailFrom"  className="email__from" placeholder="************"/>
    <label htmlFor="message">Enter EmailId:</label>
    <input type="text" name="useremail" id="emailFrom"  className="email__from" placeholder="person@example.com"/>
    <Button variant="contained" endIcon={<SendIcon />} className="submit__btn" style={{marginTop: "5px"}} >
  
        Send
       
  </Button>
  </form></div>

  </div>
   
  )
}
