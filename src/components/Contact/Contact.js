// Data
import contact from '../../data/contact.json'
// Composants
import ContactData from './ContactData'
import Form from '../Form/Form'
// CSS
import './Contact.css'

export default function Contact() {
    return (
        <div className='contact-ctn'>
            <div className='contact-coordonnees'>
                <div className='contact-icons'>
                    <h3 className='contact-icons-title'>Coordonnées</h3>
                    {contact[0].contact.map((contact) => 
                        <ContactData 
                            key={contact.id}
                            cover={contact.cover}
                            alt={contact.alt}
                            href={contact.href}
                            title={contact.title}
                            description={contact.description}
                        />
                    )}
                </div>
                <div className='contact-icons'>
                    <h3 className='contact-icons-title'>Réseaux</h3>
                    <div className='contact-reseaux'>
                        {contact[0].reseaux.map((contact) => 
                            <ContactData 
                                key={contact.id}
                                cover={contact.cover}
                                alt={contact.alt}
                                href={contact.href}
                                title={contact.title}
                            />
                        )}
                    </div>
                </div>
            </div>
            <Form />
        </div>
    )
}