import logo2 from '../../assets/logo/logo2.png';
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <a href='#root'>
                <img src={logo2} alt='logo' className='nav-logo'/>
            </a>
            <div className='nav-txt'>
                <a href='#root' className='nav-txt-link'>
                    <i className="fa-solid fa-house-chimney"></i>
                </a>
                <a href='#home-presentation' className='nav-txt-link'>Présentation</a>
                <a href='#home-skills' className='nav-txt-link'>Compétences</a>
                <a href='#home-projets' className='nav-txt-link'>Projets</a>
                <a href='#home-contact' className='nav-txt-link'>Contact</a>
            </div>
            <div className='nav-txt-burger'>Burger</div>
            <div className='nav-txt-cv'>CV</div>
        </nav>
    )
}  
