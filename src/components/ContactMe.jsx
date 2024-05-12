import React from 'react'
import "../styles/contactMe.css"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
function ContactMe() {
  return (
    <section className='contactMe'>
        <div className="container">
            <div className="contactMe__top">
                <h2>Get in Touch</h2>
                <div className="contactMe__content">
                    <p>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
                    <div className="contactMe__icons">
                        <FaGithub className="contactMe_icon" />
                        <FaTwitter className="contactMe_icon" />
                        <FaLinkedin className="contactMe_icon" />
                    </div>
                </div>
            </div>
            <div className="contactMe__bottom">
                <h2>Contact Me</h2>
                <div className="contactMe__message">
                    <form id='form'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' placeholder='Jane Appleseed' />
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id='email' placeholder='email@example.com' />
                        <label htmlFor="message">Message</label>
                        <input type="message" id='message' placeholder='How can I help?' />
                    </form>
                    <button>SEND MESSAGE</button>
                </div>
            </div>
        </div>  
    </section>
  )
}

export default ContactMe