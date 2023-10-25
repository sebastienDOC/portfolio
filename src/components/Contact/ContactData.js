import './ContactData.css'

export default function ContactData({id, cover, alt, href, title, description}) {
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
                        src={cover}
                        alt={alt} 
                        className="contact_data-img" 
                    />
                </a>
            <div className='contact_data-flex'>
                <h4 className='contact_data-title'>{title}</h4>
                <p className='contact_data-txt'>{description}</p>
            </div>
        </div>
    )
}