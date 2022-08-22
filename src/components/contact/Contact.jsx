import React from 'react'
import './Contact.css'
import {FiMail} from 'react-icons/fi'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'

const contactData = [
  {
    icon: <FiMail className="contact__option-icon" />,
    option: "Email",
    user_name: "sts.graur@gmail.com",
    link: "mailto:sts.graur@gmail.com",
  },
  {
    icon: <RiMessengerLine className="contact__option-icon" />,
    option: "Messenger",
    user_name: "stg_customs",
    link: "https://m.me/StanislavGkraour/",
  },
  {
    icon: <FaWhatsapp className="contact__option-icon" />,
    option: "WhatsApp",
    user_name: "+32491308234",
    link: "https://api.whatsapp.com/send?phone=32491308234",
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {contactData.map(({icon, option,user_name, link}) =>{
            return(
              <div className="contact__option">
                {icon}
                <h4>{option}</h4>
                <h5>{user_name}</h5>
                <a target='_blank' href={link}>Send a message</a>
            </div>
            )
          })}
        </div>
        {/* END of CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message'  required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  );
}
