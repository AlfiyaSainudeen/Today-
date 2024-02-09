import React from 'react'
import emailjs from 'emailjs-com';
const Mailer=()=> {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_72gib7o',
        'template_nrrbtt3',
        e.target,
        'yR1v6BxTVpy_AC1mT').then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));

    }
    return (  
        <div>
       {/* <div className='container my-5 d-flex justify-content-center'>
//             <Form id='contact-form' onSubmit={sendEmail}>
//                 <Row className='mb-3'>
//                     <Col sm={12} md={6} className='mb-3 mb-md-0'>
//                         <Form.Label >First Name</Form.Label>
//                         <Form.Control placeholder='First name' name="name" />
//                     </Col>
//                     <Col sm={12} md={6}>
//                         <Form.Label>Last Name</Form.Label>
//                         <Form.Control placeholder='Last name' />
//                     </Col>
//                 </Row>

//                 <Form.Group className='mb-3'>
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control type='email' placeholder='Enter email' name="useremail"/>
//                     <Form.Text className='text-muted'>
//                         We'll never share your email with anyone else.
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group className='mb-3'>
//                     <Form.Label>Address</Form.Label>
//                     <Form.Control placeholder='Your address' />
//                 </Form.Group>

//                 <Row className='mb-3'>
//                     <Col sm={12} md={6} className='mb-3 mb-md-0'>
//                         <Form.Label>Location</Form.Label>
//                         <Form.Select defaultValue="London">
//                             <option>London</option>
//                             <option>Manchester</option>
//                             <option>Liverpool</option>
//                         </Form.Select>
//                     </Col>
//                     <Col sm={12} md={6}>
//                         <Form.Label>Postcode</Form.Label>
//                         <Form.Control placeholder='Postcode' />
//                     </Col>
//                 </Row>

//                 <Form.Group className='mb-3'>
//                     <Form.Label>Your Message</Form.Label>
//                     <Form.Control as="textarea" rows={3} name="message"/>
//                 </Form.Group>

//                 <Button variant="danger btn-lg" type='submit'  >
//                 <a href="#" className='text-decoration-none'>submit</a></Button>
//             </Form>
//         </div> */}
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
        {/* <button
          className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
          type="submit" value="send"
        >
          Send a message
        </button> */}
         <input
          type="submit"
         value={"send"}
          
        />
      </div>
    </form>
//     </div>
    );
}

export default Mailer;
// export default function Mailer() {
//   return (
//     <div>
//          <div className='container my-5 d-flex justify-content-center'>
//             <Form id='contact-form' onSubmit={senEmail}>
//                 <Row className='mb-3'>
//                     <Col sm={12} md={6} className='mb-3 mb-md-0'>
//                         <Form.Label>First Name</Form.Label>
//                         <Form.Control placeholder='First name' />
//                     </Col>
//                     <Col sm={12} md={6}>
//                         <Form.Label>Last Name</Form.Label>
//                         <Form.Control placeholder='Last name' />
//                     </Col>
//                 </Row>

//                 <Form.Group className='mb-3'>
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control type='email' placeholder='Enter email' />
//                     <Form.Text className='text-muted'>
//                         We'll never share your email with anyone else.
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group className='mb-3'>
//                     <Form.Label>Address</Form.Label>
//                     <Form.Control placeholder='Your address' />
//                 </Form.Group>

//                 <Row className='mb-3'>
//                     <Col sm={12} md={6} className='mb-3 mb-md-0'>
//                         <Form.Label>Location</Form.Label>
//                         <Form.Select defaultValue="London">
//                             <option>London</option>
//                             <option>Manchester</option>
//                             <option>Liverpool</option>
//                         </Form.Select>
//                     </Col>
//                     <Col sm={12} md={6}>
//                         <Form.Label>Postcode</Form.Label>
//                         <Form.Control placeholder='Postcode' />
//                     </Col>
//                 </Row>

//                 <Form.Group className='mb-3'>
//                     <Form.Label>Your Message</Form.Label>
//                     <Form.Control as="textarea" rows={3} />
//                 </Form.Group>

//                 <Button variant="danger btn-lg" type='submit'  >
//                 <a href="#" className='text-decoration-none'>submit</a></Button>
//             </Form>
//         </div>
//     </div>
//   )
// }
