// Composants 
import Collapse from '../Collapse/Collapse'

export default function ProjetsData({id, title, sub, cover, alt, description, github, ghpages, figma, skills}) {
    return (
        <Collapse  
            key={id}
            title={title}
            sub={sub}
            cover={cover}
            alt={alt}
            description={description}
            github={github}
            ghpages={ghpages}
            figma={figma}
            skills={skills}            
        />
    )
}