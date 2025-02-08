import technologies from '../../../data/technologies.json'
import { getImageUrl } from '../../../utils'
import './Technologies.css'
export const Technologies = ({ translations, currentLang }) => {
    const { tech } = translations[currentLang]
    return <section className="technologies" id='technologies'>
        <h2 className='title'>{tech}</h2>
        <div className='skills'>
            {
                technologies.map((technology, index) => {
                    return <div key={index} className='skill'>
                        <div className='skill-image-container'><img src={getImageUrl(technology.imageSrc)} alt={technology.title} /></div>
                        <p>{technology.title}</p>
                    </div>
                })
            }
        </div>
    </section>
}