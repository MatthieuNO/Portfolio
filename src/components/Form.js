import Style from "./Form.module.scss"
import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };
  
      try {
        await emailjs.send(
          'service_48ipitb',
          'template_c31gd08',
          templateParams,
          'ksoQrUc8zYvRbV6YD'
        );
  
        alert('Email envoyé avec succès');
      } catch (error) {
        console.error(error);
        alert('Une erreur s\'est produite lors de l\'envoi de l\'email');
      }
    };

    return (
        <div className={Style.form}>
        <article id="contact">Contact Me</article>
        <form action="" method='POST' onSubmit={handleSubmit}>
            <div className={Style.formRow}>
                <div className={Style.formInput}>
                    <label htmlFor="full-name">Your Name</label>
                    <input id="full-name" className={Style.formStyle} placeholder="Enter your name" name="from_name" type="text"          
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={Style.formInput}>
                    <label htmlFor="email" email="from_email">Email Address</label>
                    <input id='email' className={Style.formStyle} placeholder='Enter your email address' type="email" 
                     value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <div className={Style.formInput}>
                <label htmlFor="message">Your Message</label>
                <textarea className={Style.formStyle} 
                    name="" id="" cols="30" rows="7" 
                    placeholder='Enter your message' 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}>
                </textarea>
            </div>
            <div className={Style.formBTN}>
                <button type='submit' className='submitBTN'>SUBMIT</button>
            </div>
        </form>
    </div>
    );
};

export default Form;