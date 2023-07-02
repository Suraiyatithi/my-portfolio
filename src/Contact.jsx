import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import gifimg from './assets/mail-800_256.gif';
import styled from 'styled-components';


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

  const GradientBorder = styled.div`
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right,  #66179a, #0000ff);

`;
  return (
<div className="">
  <h1 className='text-center'>Contact With me</h1>
    <div className="row">
        
        <div className="col-sm-12 col-lg-6">
          <img className='' src={gifimg} alt="" />
        </div>
        <div className="col-sm-12 col-lg-6 p-5 mt-5 pt-4">
        <form ref={form} onSubmit={sendEmail}>
   <div className='mt-3'>
   <p>Name</p>
     <GradientBorder> <input className='w-100 p-2 bg-dark shadow-lg' type="text" name="user_name" /></GradientBorder>
   </div>
   <div className="mt-3">
   <p>Email</p>
     <GradientBorder> <input className='w-100 p-2 shadow-lg bg-dark' type="email" name="user_email" /></GradientBorder>
   </div>
  <div className="mt-3">
  <p>Message</p>
    <GradientBorder>  <textarea style={{height:"12rem"}} className='w-100 bg-dark shadow-lg p-2' name="message" /></GradientBorder>
  </div>
      <input style={{background:"#66179a"}} className='btn p-2 ps-4 pe-4  text-white mt-4' type="submit" value="Send" />
    </form>
        </div>
    </div>
</div>
  );
};