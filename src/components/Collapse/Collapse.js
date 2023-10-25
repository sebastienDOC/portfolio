// CSS
import './Collapse.css'
// Hooks
import { useState } from 'react';
// Images
import GitHub from '../../assets/contact/github.png'
import Link from '../../assets/contact/link.png'
import Figma from '../../assets/contact/figma.png'

export default function Collapse({key, title, sub, cover, alt, description, github, ghpages, figma, skills}) {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
      };

    function getImgCover(img) {
        let images = require("../../assets/projets/formation" + img);
        return images;
    }

    return (
        <div key={key} className='collapse-ctn'>
            <button onClick={toggle} className='collapse-btn'>
                <img src={getImgCover(cover)} alt={alt} className='collapse-img'/>
            </button>

            <div className={`collapse-content ${open ? 'open' : ''}`}>
                <div className='collapse-content-bg'></div>
                <div className='collapse-content-txt'>
                    <i class="fa-solid fa-xmark" onClick={toggle}></i>
                    <h3 className='collapse-title'>{title}</h3>
                    <h4 className='collapse-title'>{sub}</h4>
                    <p className='collapse-txt'>{description}</p>
                    
                    <div className='collapse-skills'>
                        {skills.map((image, id) => {
                        return <img 
                                src={image} 
                                alt={image} 
                                key={id} 
                                className='collapse-skills-icons'
                            />
                        })}
                    </div>

                    <div>
                        <a 
                            href={github} 
                            className='collapse-github' 
                            target='_blank' 
                            rel='noreferrer'
                            title='Lien GitHub'
                        >
                            <img src={GitHub} alt='Logo GitHub' className='collapse-icons'/>
                        </a>
                        <a 
                            href={ghpages} 
                            className='collapse-ghpages' 
                            target='_blank' 
                            rel='noreferrer'
                            title='Lien GitHub Pages'
                        >
                            <img src={Link} alt='Logo GitHub' className='collapse-icons'/>
                        </a>
                        <a 
                            href={figma} 
                            className='collapse-figma' 
                            target='_blank' 
                            rel='noreferrer'
                            title='Lien Figma'
                        >
                            <img src={Figma} alt='Logo GitHub' className='collapse-icons'/>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}