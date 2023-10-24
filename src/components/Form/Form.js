// CSS
import './Form.css'
// EmailJS
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("PortfolioContact", "template_portfolio", form.current, "LXBWqb7aKKAacDPe4")
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        )
        .then(
            form.current.reset()
        )
    };

    return (
        <div className='contact-form'>
            <h3 className='contact-form-title'>Formulaire de contact</h3>
            <form ref={form} onSubmit={sendEmail}>
                <input 
                    type="text" 
                    id="nom" 
                    name="nom" 
                    placeholder='Nom *' 
                    required 
                />
                <input 
                    type="text" 
                    id="tel" 
                    name="tel" 
                    placeholder='Téléphone' 
                />
                <input 
                    type="email" 
                    id="email" 
                    name="email"  
                    placeholder='Votre Email *' 
                    required 
                />
                <input 
                    type="text" 
                    id="text" 
                    name="objet"  
                    placeholder='Objet *' 
                    required 
                />
                <textarea 
                    type="textarea" 
                    id="message" 
                    name="message" 
                    placeholder='Message *' 
                    required 
                />
                <button type="submit" value='submit' className='contact-form-btn'>Envoyer</button>
            </form>
        </div>
    )
}