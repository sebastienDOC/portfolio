// CSS
import './Header.css'
// Image
import logo from '../../assets/logo/logo.webp';

export default function Header() {
    return (
        <header>
            <div className='header-banniere'>
                <img src={logo} alt='logo' className='banniere-logo'/>
            </div>
        </header>
    )
}