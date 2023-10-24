import logo from '../../assets/logo/logo.png';
import './Header.css'

export default function Header() {
    return (
        <header>
            <div className='header-banniere'>
                <img src={logo} alt='logo' className='banniere-logo'/>
            </div>
        </header>
    )
}