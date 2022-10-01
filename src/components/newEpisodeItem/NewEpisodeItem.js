import './newEpisodeItem.scss';
import itemImage from '../../assets/newep1.svg';
import { Link } from 'react-router-dom';

const NewEpisodeItem = () => {
   return (
      <Link className="new-ep-today__item" to='/'>
         <div className="new-ep-today__item-main">
            <img className='new-ep-today__item-image' src={itemImage} alt="New episode today!" />
            <div className="new-ep-today__item-titles">
               <p className="new-ep-today__item-title">Новый Принц Тенниса: Чемпионат мира U-17</p>
               <p className="new-ep-today__item-sub-title">The Prince of Tennis II: U-17 World Cup</p>
            </div>
         </div>
         <p className="new-ep-today__episode">13 серия</p>
      </Link>
   )
}

export default NewEpisodeItem