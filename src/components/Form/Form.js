// CSS
import './Form.css'
// EmailJS
import emailjs from "@emailjs/browser";
// React
import { useRef, useState} from "react";
// Composant
import Modal from '../Modal/Modal';

export default function Form() {
    const [titleMessage, setTitleMessage] = useState('')
    const [statusMessage, setStatusMessage] = useState('')

    // State pour ouverture/fermeture de la modale
    const [isOpen, setIsOpen] = useState(false);

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("PortfolioContact", "template_portfolio", form.current, "LXBWqb7aKKAacDPe4")
        .then(
          (result) => {
            setIsOpen(true);
            if (result.text === 'OK') {
                setTitleMessage("Message envoyé")
                setStatusMessage("Votre message à bien été envoyé ! Je prendrai contact avec vous le plus rapidement possible.")
                form.current.reset()
            };
          },
          (error) => {
            setIsOpen(true);
            setTitleMessage("Message non envoyé")
            setStatusMessage("Une erreur s'est produite, votre message n'a pas été envoyé. Veuillez réessayer.")
            console.log(error.text);
          }
        )
    };

    return (
        <div className='contact-form'>
            <h3 className='contact-form-title'>Formulaire de contact</h3>
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor='nom'>Votre nom</label>
                <input 
                    type="text" 
                    id="nom" 
                    name="nom" 
                    placeholder='Nom *' 
                    required 
                />
                <label htmlFor='tel'>Votre numéro de téléphone</label>
                <input 
                    type="text" 
                    id="tel" 
                    name="tel" 
                    placeholder='Téléphone' 
                />
                <label htmlFor='email'>Votre adresse e-mail</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"  
                    placeholder='E-mail *' 
                    required 
                />
                <label htmlFor='objet'>Objet de la demande</label>
                <input 
                    type="text" 
                    id="objet" 
                    name="objet"  
                    placeholder='Objet *' 
                    required 
                />
                <label htmlFor='message'>Votre message</label>
                <textarea 
                    type="textarea" 
                    id="message" 
                    name="message" 
                    placeholder='Message *' 
                    required 
                />
                <button type="submit" value='submit' className='contact-form-btn' >Envoyer</button>
            </form>           
            {isOpen && <Modal setIsOpen={setIsOpen} title={titleMessage} status={statusMessage}/>}

        </div>
    )
}