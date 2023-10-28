// CSS
import './ContactData.css'

export default function ContactData({id, cover, alt, href, title, description}) {
    function getImgCover(img) {
        let images = require("../../assets/contact" + img);
        return images;
    }
    return (
        <div className='contact_data-ctn'>
            <a 
                    key={id} 
                    className='contact_data-link' 
                    href={href}                                
                    target='blank'
                    rel="noreferrer"
                >
                    <img 
                        src={getImgCover(cover)}
                        alt={alt} 
                        className="contact_data-img" 
                    />
                </a>
            <div className='contact_data-flex'>
                <h4 className='contact_data-title'>{title}</h4>
                {description ? <p className='contact_data-txt'>{description}</p> : null}
            </div>
        </div>
    )
}