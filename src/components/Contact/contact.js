import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../Assets1/walmart.png';
import Adobe from '../../Assets1/adobe.png';
import Microsoft from '../../Assets1/microsoft.png';
import Facebook from '../../Assets1/facebook.png';
import FacebookIcon from '../../Assets1/facebook-icon.png';
import TwitterIcon from '../../Assets1/twitter.png';
import YouTubeIcon from '../../Assets1/youtube.png';
import InstagramIcon from '../../Assets1/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
   const form = useRef();
   const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_cdpzg81', 'template_44aiqi2', form.current, {publicKey: 'Z2fwvoUKTwZlOl02X',})
        .then(() => {
            console.log('SUCCESS!');
            e.target.reset();
            alert('Email Sent !');
          },(error) => {
            console.log('FAILED...', error.text);
          });
    };
  return (
    <section id="contactPage">
        <div className="clients">
           <h1 className="contactPage">My Clients</h1>
           <p className="clientDesc">
            I have had the opportunity to work with a diverse group of companies.
            some of the notable companies I have worked with includes.
           </p>
           <div className="clientImgs">
              <img src={Walmart} alt="Client" className="clientImg" />
              <img src={Adobe} alt="Client" className="clientImg" />
              <img src={Microsoft} alt="Client" className="clientImg" />
              <img src={Facebook} alt="Client" className="clientImg" />
           </div>
        </div>
        <div id="contact">
           <h1 className="contactPageTitle">Contact Me</h1>
           <span className="contactDesc">Please fill out the below to discuss any work opportunities.</span>
           <form className="contactForm" ref={form} onSubmit={sendEmail}>
               <input type="text" className="name" placeholder="Your Name" name='your_name' />
               <input type="email" className="email" placeholder="Your Email" name='your_email' />
               <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
               <button type="submit" value="Send" className="submitBtn">Submit</button>
               <div className="links">
                <img src={FacebookIcon} alt="Facebook" className="link" />
                <img src={TwitterIcon} alt="Twitter" className="link" />
                <img src={YouTubeIcon} alt="Youtube" className="link" />
                <img src={InstagramIcon} alt="Instagram" className="link" />
               </div>
           </form>
        </div>
    </section>
  );
}

export default Contact;