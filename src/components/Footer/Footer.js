import './Footer.css'
import logo2 from '../../assets/logo2.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className='footer-coordonnees'>
                <img 
                    src={logo2} 
                    alt='logo' 
                    className='footer-coordonnees-logo'
                />
                <h4>SÉBASTIEN DECHAND</h4>
                <h5>DÉVELOPPEUR WEB FRONT-END</h5>
                <div className='footer-coordonnees-adresse'>
                    <p>12 B rue Jean Jaurès</p>
                    <p>21000 DIJON</p>
                    <p>FRANCE</p>
                </div>
                <div className='footer-coordonnees-tel'>
                    <p>Port : +33 6 23 21 38 15</p>
                    <p>E-mail : sebastiendechand@gmail.com</p>
                </div>
            </div>
            <div className='footer-navigation'>
                <h4>Navigation</h4>
                <div className='footer-navigation-links'>
                    <Link to='/' className=''>Acceuil</Link>
                    <Link to='/services' className=''>Services</Link>
                    <Link to='/competences' className=''>Compétences</Link>
                    <Link to='/projets' className=''>Projets</Link>
                    <Link to='/contact' className=''>Contact</Link>
                </div>
            </div>
            <div className='footer-reseaux'>
                <h4>Réseaux</h4>
                <div className='footer-reseaux-links'>
                    <a href='' className=''>Linkedin</a>
                    <a href='' className=''>Github</a>
                </div>
            </div>
        </footer>
    )
}