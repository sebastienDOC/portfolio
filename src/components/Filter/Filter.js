// CSS 
import './Filter.css'
// React
import { useState } from 'react'
// Data
import projets from '../../data/projets.json'
// Composant
import Projets from '../Projets/Projets'
// Motion
import { motion, AnimatePresence } from 'framer-motion'

export default function Filter() {
    const [items, setItems] = useState(projets[0].formation)
    function categoryItem(categorieItem) {
        const updatedItems = projets[0].formation.filter((currentElement) => {
            return currentElement.type === categorieItem
        })
        setItems(updatedItems)
    }
    function timingItem(categorieItem) {
        const updatedItems = projets[0].formation.filter((currentElement) => {
            return currentElement.finished === categorieItem
        })
        setItems(updatedItems)
    }

    return (
        <div className='filter'>

            <div className='filter-ctn'>
                <button 
                    type='button' 
                    onClick={() => setItems(projets[0].formation)} 
                    className='filter-btn '
                >
                    Tous
                </button>
                <button 
                    type='button' 
                    onClick={() => categoryItem('Formation')} 
                    className='filter-btn'
                >
                    Formation
                </button>
                <button 
                    type='button' 
                    onClick={() => categoryItem('Professionnel')} 
                    className='filter-btn'
                >
                    Professionnel
                </button>
                <button 
                    type='button' 
                    onClick={() => timingItem(false)} 
                    className='filter-btn'
                >
                    En cours
                </button>
                <button 
                    type='button' 
                    onClick={() => timingItem(true)} 
                    className='filter-btn'
                >
                    Terminé
                </button>
            </div>

            <AnimatePresence>
                <motion.div layout className='projets-grid' style={{margin: "auto"}}>
                    {items.map((projets) =>
                        <Projets
                            key={projets.id}
                            title={projets.title}
                            sub={projets.subtitle}
                            cover={projets.cover}
                            alt={projets.alt}
                            banner={projets.banner}
                            altBanner={projets.altBanner} 
                            client={projets.client}
                            description={projets.description}
                            github={projets.github}
                            ghpages={projets.ghpages}
                            figma={projets.figma}
                            skills={projets.skills}
                            finished={projets.finished}
                        />
                    )}
                </motion.div>
            </AnimatePresence>
            

        </div>
    )
}