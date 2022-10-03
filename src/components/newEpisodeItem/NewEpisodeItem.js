import './newEpisodeItem.scss';
import { Link } from 'react-router-dom';

const NewEpisodeItem = ({ title, titleEn, poster, id, lastEpisode }) => {
   return (
      <Link className="new-ep-today__item" to={`/anime/${id}`}>
         <div className="new-ep-today__item-main">
            <img className='new-ep-today__item-image' src={poster} alt={title} />
            <div className="new-ep-today__item-titles">
               <p className="new-ep-today__item-title">{title}</p>
               <p className="new-ep-today__item-sub-title">{titleEn}</p>
            </div>
         </div>
         <p className="new-ep-today__episode">{lastEpisode} серия</p>
      </Link>
   )
}

export default NewEpisodeItem