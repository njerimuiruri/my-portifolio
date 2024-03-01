import React,{ useRef } from 'react'
import './Contact.css'
// import emailjs from '@emailjs/browser';


function Contact() {
    // const form = useRef();

//   const sendEmail = (e) => {
    // e.preventDefault();

    // emailjs.sendForm('service_5vfm63b', 'template_gp32x8s', form.current, 'a6aoGRyVywI8ayhh3')
    //   .then((result) => {
        //   console.log(result.text);
    //   }, (error) => {
        //   console.log(error.text);
    //   });
//   };

  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
    <span>Get In touch</span>
    <span>Contact me</span>
    <div className="blur s-blur1" style={{background:"#ABF1FF94"}}>

    </div>
</div>
</div>
{/* right side */}
<div className="c-right">
    {/* <form ref={form} onSubmit={sendEmail} > */}
    <form>
        <input type="text" name="user_name" className="user" placeholder="Name"></input>
        <input type="text" name="user_email" className="user" placeholder="Email"></input>
<textarea name='message' className='user ' placeholder='Message'/>
<input type="button" value="send"className='button' /> 

<div className="blur c-blur1" style={{background:"var(--purple)"}}></div>
    </form>
     
     
     
     
     
        
        
     </div>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    </div>
    
    
    
  )
}

export default Contact
