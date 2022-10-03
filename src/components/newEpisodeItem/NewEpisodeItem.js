import './newEpisodeItem.scss';
import { Link } from 'react-router-dom';

const NewEpisodeItem = ({ title, poster, id, lastEpisode }) => {
   console.log(poster)
   return (
      <Link className="new-ep-today__item" to={`/anime/${id}`}>
         <div className="new-ep-today__item-main">
            <img className='new-ep-today__item-image' src={poster} alt={title} />
            <div className="new-ep-today__item-titles">
               <p className="new-ep-today__item-title">{title}</p>
               <p className="new-ep-today__item-sub-title">The Prince of Tennis II: U-17 World Cup</p>
            </div>
         </div>
         <p className="new-ep-today__episode">{lastEpisode} серия</p>
      </Link>
   )
}

export default NewEpisodeItem