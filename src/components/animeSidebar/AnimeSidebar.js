import './animeSidebar.scss';
import AnimeSearchInput from '../animeSearchInput/AnimeSearchInput';
import { Link } from 'react-router-dom';

const AnimeSidebar = () => {
   return (
      <div className="sidebar">
         <div className="sidebar__menu">
            <div className="sidebar__menu-item">
               <span className="sidebar__menu-link">Жанры</span>
               <div className="sidebar__sub-menu">
                  <div className="sidebar__genres">
                     <Link className='sidebar__genre' to="/">
                        Апокалиптика
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Боевик
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Боевые искусства
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Детектив
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Драма
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Демоны
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Игры
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Исторический
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Магия
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Китайские
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        3D
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Cёнен
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Cёнен-ай
                     </Link>

                     <Link className='sidebar__genre' to="/">
                        Cейнен
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Cёдзё
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Cёдзё-ай
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Комедия
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Романтика
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Школа
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Безумие
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Вампиры
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Военное
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Гарем
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Детское
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Машины
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Меха
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Музыка
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Пародия
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Повседневность
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Полиция
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Приключение
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Психологическое
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Самураи
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Сверхъестественное
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Спорт
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Супер сила
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Ужасы
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Фантастика
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Фэнтези
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Экшен
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Этти
                     </Link>
                     <Link className='sidebar__genre' to="/">
                        Триллер
                     </Link>
                  </div>
               </div>
            </div>
            <div className="sidebar__menu-item">
               <span className="sidebar__menu-link">Статус</span>
            </div>
            <div className="sidebar__menu-item">
               <span className="sidebar__menu-link">Тип</span>
            </div>
         </div>
         <AnimeSearchInput />
      </div>

   )
}

export default AnimeSidebar