import React from 'react'
import emailjs from 'emailjs-com';
const Mail=()=> {
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
    
  <form
      
       onSubmit={sendEmail}
    >
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder="Email"
          name="useremail"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3">
    
         <input
          type="submit"
         value={"send"}
          
        />
      </div>
    </form>
//     </div>
    );
}

export default Mail;