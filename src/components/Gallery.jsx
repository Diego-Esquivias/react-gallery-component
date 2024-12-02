import './Gallery.css'
import { data } from '../data'
import { useState } from 'react'

const Gallery = () => {
    const [people, setPeople] = useState(data)

    return (
        <div className="gallery">
            {people.map((person) => (
                <div key={person.id} className="gallery-item">
                    <img src={person.pictureURL} alt={person.altText} />
                    <div className="overlay">{person.pictureName}</div>
                </div>
            ))}
        </div>   
    )
}

export default Gallery