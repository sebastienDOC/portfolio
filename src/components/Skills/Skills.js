// CSS
import './Skills.css'

export default function Skills({id, cover, alt, title }) {
    function getImgCover(img) {
        let images = require("../../assets/skills" + img);
        return images;
    }
	return (
		<div key={id} className='skills-ctn'>
            <img 
                src={getImgCover(cover)}
                alt={alt}  
                className='skills-img'
            />
            <h3 className='skills-title'>{title}</h3>
        </div>
	)
}