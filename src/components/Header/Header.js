import logo2 from '../../assets/logo2.png';
import logo from '../../assets/logo.png';
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <img src={logo2} alt='logo' className='nav-logo'/>
                <div className='nav-txt'>
                    <Link to='/' className='nav-txt-link'>
                        <i className="fa-solid fa-house-chimney"></i>
                    </Link>
                    <Link to='/services' className='nav-txt-link'>Services</Link>
                    <Link to='/competences' className='nav-txt-link'>Compétences</Link>
                    <Link to='/projets' className='nav-txt-link'>Projets</Link>
                    <Link to='/contact' className='nav-txt-link'>Contact</Link>
                </div>
                <div className='nav-txt-burger'>Burger</div>
                <button className='nav-txt-cv'>CV</button>
            </nav>
            <div className='header-banniere'>
                <img src={logo} alt='logo' className='banniere-logo'/>
            </div>
        </header>
    )
}