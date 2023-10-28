// CSS
import './Skills.css'

export default function Skills({id, cover, alt, title }) {
	return (
		<div key={id} className='skills-ctn'>
            <img 
                src={cover}
                alt={alt}  
                className='skills-img'
            />
            <h4 className='skills-title'>{title}</h4>
        </div>
	)
}