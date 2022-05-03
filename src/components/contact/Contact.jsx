import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {useRef as UseRef} from 'react';
import emailjs from 'emailjs-com'

const contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0bhfmoh', 'template_mqdmltx', form.current, 'EzFiAc-Y0I8w5O_hC')
    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <HiOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>bunyat159@gmail.com</h5>
            <a href="mailto:bunyat159@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Jom Shiba</h5>
            <a href="https://m.me/jomneko" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="eamil" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact