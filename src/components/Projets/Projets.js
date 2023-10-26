// CSS
import './Projets.css'
// Data
import projets from '../../data/projets.json'
// Composant(s)
import ProjetsData from './ProjetsData'

export default function Projets() {
    return (
        <div className='projets-grid'>
            {projets[0].formation.map((projet) => 
                <ProjetsData 
                    key={projet.id}
                    title={projet.title}
                    sub={projet.subtitle}
                    cover={projet.cover}
                    alt={projet.alt}
                    banner={projet.banner}
                    altBanner={projet.altBanner} 
                    client={projet.client}
                    description={projet.description}
                    github={projet.github}
                    ghpages={projet.ghpages}
                    figma={projet.figma}
                    skills={projet.skills}
                    finished={projet.finished}
                />
            )}
        </div>
    )
}