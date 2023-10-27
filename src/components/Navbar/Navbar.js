// CSS
import './Navbar.css'
// React
import { useState } from 'react';
// Images
import logo2 from '../../assets/logo/logo2.png';

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false)

    function handleShowLinks() {
        setShowLinks(!showLinks)
    }
    return (
        <nav className={showLinks ? 'nav-show' : ''}>
            <a href='#root'>
                <h1>
                    <img src={logo2} alt='logo' className='nav-logo'/>
                </h1>
            </a>
            <ul className='nav-txt'>
                <li className='nav-txt-items slideInDown-1'>
                    <a href='#root' className='nav-txt-link'>
                        <i className="fa-solid fa-house-chimney"></i>
                    </a>
                </li>
                <li className='nav-txt-items slideInDown-2'>
                    <a href='#home-presentation' className='nav-txt-link'>
                        Présentation
                    </a>
                </li>
                <li className='nav-txt-items slideInDown-3'>
                    <a href='#home-skills' className='nav-txt-link'>
                        Compétences
                    </a>
                </li>
                <li className='nav-txt-items slideInDown-4'>
                    <a href='#home-projets' className='nav-txt-link'>
                        Projets
                    </a>
                </li>
                <li className='nav-txt-items slideInDown-5'>
                    <a href='#home-contact' className='nav-txt-link'>
                        Contact
                    </a>
                </li>
                <li className='nav-txt-items slideInDown-6'>
                    <div className='nav-txt-link nav-txt-link-cv'>
                        CV
                    </div>
                </li> 
            </ul>
            <button className='nav-txt-burger' onClick={handleShowLinks}>
                <span className='nav-txt-burger-bar'></span>
            </button>
            <div className='nav-txt-cv'>CV</div>
        </nav>
    )
}  
