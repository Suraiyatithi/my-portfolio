import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zm7dbtk', 'template_zyqv1h5', form.current, '0rD0mPyzEuiVSeezp')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
<div className="">
    <div className="">
        
        <div className=""></div>
        <div className=" p-4">
        <form ref={form} onSubmit={sendEmail}>
   <div className='mt-3'>
   <p>Name</p>
      <input className='w-50 p-2' type="text" name="user_name" />
   </div>
   <div className="mt-3">
   <p>Email</p>
      <input className='w-50 p-2 ' type="email" name="user_email" />
   </div>
  <div className="mt-3">
  <p>Message</p>
      <textarea style={{height:"12rem"}} className='w-50 p-2' name="message" />
  </div>
      <input style={{background:"#66179a"}} className='btn p-2 ps-4 pe-4 text-white' type="submit" value="Send" />
    </form>
        </div>
    </div>
</div>
  );
};