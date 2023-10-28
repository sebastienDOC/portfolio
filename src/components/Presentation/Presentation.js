// CSS
import './Presentation.css'
// Image
import Seb from '../../assets/photo/seb.webp'

export default function Presentation() {
    return (
        <div className='presentation-ctn'>
            <img src={Seb} alt='Photo de Sébastien' className='presentation-img'/>
            <div className='presentation-flex_col'>
                <h3>Je m'appelle Sébastien Dechand, Développeur Web Front-End</h3>
                <p>
                    Suite à 10 ans d'expérience dans la grande distribution, j'ai souhaité me reconvertir dans le développement web. <br/>
                    <br/>
                    C'est donc naturellement que j'ai suivi une formation avec OpenClassRooms qui m'a permis d'acquérir les compétences nécessaires à la création de sites web.<br/>
                    Cette formation m'a familiarisé avec ReactJS, Node.js, Redux ou encore Sass, ce qui me permet aujourd'hui de pouvoir réaliser des applications web performantes.<br/>
                    <br/>
                    N'hésitez pas à parcourir mon portfolio pour découvrir mon travail et si vous souhaitez que nous collaborions ou simplement discuter de projets, contactez moi !.
                </p>
            </div>
        </div>
    )
}

