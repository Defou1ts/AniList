import NewAnimeItem from '../newAnimeItem/NewAnimeItem';
import './newAnimeList.scss';

const NewAnimeList = () => {
   return (
      <div className="new-anime">
         <h2 className="new-anime__title">
            Новые аниме на сайте
         </h2>
         <div className="new-anime__list">
            <NewAnimeItem />
            <NewAnimeItem />
            <NewAnimeItem />
         </div>
      </div>
   )
}

export default NewAnimeList