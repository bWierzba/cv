import React from 'react';
import '../css/Contact.css'
import emailjs from 'emailjs-com';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_m8470jn', e.target, 'user_9WEeRiQq8RpRguMGmYdGY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div className='contactSection' id='contact'>
      <h1>napisz do mnie</h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>imię i nazwisko</label>
        <input type="text" name="name" />
        <label>email</label>
        <input type="email" name="email" />
        <label>wiadomość</label>
        <textarea name="message" />
        <input className='button' type="submit" value="wyślij" />
      </form>
    </div>
  );

}

export default Contact;