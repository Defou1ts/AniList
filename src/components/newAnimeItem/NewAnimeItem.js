import './newAnimeItem.scss';
import newAnime from '../../assets/newanime.svg';
import { Link } from 'react-router-dom';

const NewAnimeItem = () => {
   return (
      <Link className="new-anime__list-item" tp='/'>
         <div className="new-anime__list-item-image">
            <img src={newAnime} alt="Title anime picture" />
         </div>
         <div className="new-anime__list-item-info">
            <p className="new-anime__list-item-title">Арифурэта: Сильнейший ремесленник в мире 2 OVA</p>
            <p className="new-anime__list-item-sub-title">Arifureta: Phantom Adventure and Miraculous Encounter</p>
            <p className="new-anime__list-item-types">OVA / 2022 / Гарем, Приключение, Фэнтези, Экшен</p>
         </div>
      </Link>
   )
}

export default NewAnimeItem