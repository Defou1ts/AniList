import './animeSidebar.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGenres } from '../../slices/genresSlice';
import { v4 as uuidv4 } from 'uuid';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import AnimeSearchInput from '../animeSearchInput/AnimeSearchInput';
import SidebarGenreItem from '../sidebarGenreItem/SidebarGenreItem';

const AnimeSidebar = () => {

   const dispatch = useDispatch()

   const genres = useSelector(state => state.genres.genres)
   const genresLoadingStatus = useSelector(state => state.genres.genresLoadingStatus)

   useEffect(() => {
      dispatch(fetchGenres())
   }, [])

   if (genresLoadingStatus === "loading") {
      return <Spinner />;
   } else if (genresLoadingStatus === "error") {
      return <ErrorMessage />
   }

   const renderGenres = (arr) => {
      return arr.map(({ title }) => {
         return <SidebarGenreItem key={uuidv4()} title={title} />
      })
   }

   const renderedGenres = renderGenres(genres)

   return (
      <div className="sidebar">
         <div className="sidebar__menu">
            <div className="sidebar__menu-item">
               <span className="sidebar__menu-link">Жанры</span>
               <div className="sidebar__sub-menu">
                  <div className="sidebar__genres">
                     {renderedGenres}
                  </div>
               </div>
            </div>
            <div className="sidebar__menu-item">
               <span className="sidebar__menu-link">Статус</span>
               <div className="sidebar__sub-menu">
                  <div className="sidebar__statuses">
                     <Link className='sidebar__status'>Онгоинги</Link>
                     <Link className='sidebar__status'>Завершенные</Link>
                     <Link className='sidebar__status'>Анонс</Link>
                  </div>
               </div>
            </div>
            <div className="sidebar__menu-item">
               <span className="sidebar__menu-link">Тип</span>
               <div className="sidebar__sub-menu">
                  <div className="sidebar__types">
                     <Link className='sidebar__type'>ТВ-сериал</Link>
                     <Link className='sidebar__type'>OVA</Link>
                     <Link className='sidebar__type'>ONA</Link>
                     <Link className='sidebar__type'>Фильм</Link>
                     <Link className='sidebar__type'>Спешл</Link>
                  </div>
               </div>
            </div>
         </div>
         <AnimeSearchInput />
      </div>

   )
}

export default AnimeSidebar