import NewEpisodeItem from '../newEpisodeItem/NewEpisodeItem';
import './newEpisodesList.scss';

const NewEpisodesList = () => {
   return (
      <div className="new-ep-today">
         <h2 className="new-ep-today__title">Новые серии на <span>ANI</span>LIST</h2>
         <p className="new-ep-today__date">Сегодня, 29 сентября </p>
         <div className="new-ep-today__list">
            <NewEpisodeItem />
            <NewEpisodeItem />
            <NewEpisodeItem />
            <NewEpisodeItem />
         </div>
      </div>
   )
}

export default NewEpisodesList