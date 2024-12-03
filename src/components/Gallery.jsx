import './Gallery.css'
import { data } from '../data'

/**
 * Gallery Component
 * ------------------
 * This component displays a gallery of images sourced from the `data` array.
 * It maps over the `data` array to create a grid of items, where each item 
 * consists of an image and an overlay displaying the image name.
 * 
 * Dependencies: 
 * - Requires `data` to be imported, structured as an array of objects with `id`, 
 *   `pictureURL`, `altText`, and `pictureName` fields.
*/

const Gallery = () => {
    return (
        <div className="gallery">
            {data.map((person) => (
                <div key={person.id} className="gallery-item">
                    <img src={person.pictureURL} alt={person.altText} />
                    <div className="overlay">{person.pictureName}</div>
                </div>
            ))}
        </div>   
    )
}

export default Gallery