// CSS
import './home.css'
// Data
import skills from '../../data/skills.json'
// Composants
import Presentation from '../../components/Presentation/Presentation'
import Skills from '../../components/Skills/Skills'
import Filter from '../../components/Filter/Filter'
import Contact from '../../components/Contact/Contact'

export default function Home() {
    return (
        <main id='main'>
            <section id='home-presentation'>
                <h2>Présentation</h2>
                <Presentation />
            </section>
            <div className='separate'></div>
            <section id='home-skills'>
                <h2>Compétences</h2>
                <div className='home-skills-grid'>
                    {skills.map((skill) => 
                        <Skills 
                            key={skill.id}
                            cover={skill.cover}
                            alt={skill.alt}
                            title={skill.title}
                        />
                    )}
                </div>
            </section>
            <div className='separate'></div>
            <section id='home-projets'>
                <h2>Projets</h2>
                <Filter />
            </section>
            <div className='separate'></div>
            <section id='home-contact'>
                <h2>Contact</h2>
                <Contact />
            </section>
        </main>
    )
}