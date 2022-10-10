import './newAnimeItem.scss';
import { Link } from 'react-router-dom';

const NewAnimeItem = ({ title, titleEn, poster, id, kind, year, genres, isMobile }) => {



   return (
      <Link to={`/anime/${id}`} className="new-anime__list-item" tp='/'>
         <div className="new-anime__list-item-image">
            <img src={poster} alt="Title anime picture" />
         </div>
         <div className="new-anime__list-item-info">
            <p className="new-anime__list-item-title">{isMobile ? title.slice(0, 15) + '...' : title}</p>
            {isMobile ? null :
               <>
                  <p className="new-anime__list-item-sub-title">{titleEn}</p>
                  <p className="new-anime__list-item-types">{kind.toUpperCase()} / {year} / {genres.join(', ')}</p>
               </>
            }
         </div>
      </Link>
   )
}

export default NewAnimeItem