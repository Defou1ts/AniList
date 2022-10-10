import './newAnimeList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchNewAnimeByOptions } from '../../slices/newAnimeSlice';
import { useMobile } from '../../hooks/useMobile';
import { v4 as uuidv4 } from 'uuid';

import NewAnimeItem from '../newAnimeItem/NewAnimeItem';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';



const NewAnimeList = () => {

   const dispatch = useDispatch();

   const newAnimeList = useSelector(state => state.newAnime.newAnime)
   const newAnimeLoadingStatus = useSelector(state => state.newAnime.newAnimeLoadingStatus)

   const { isMobile } = useMobile();

   useEffect(() => {
      dispatch(fetchNewAnimeByOptions({
         genres: '',
         type: 'tv',
         voice: '610',
         status: 'ongoing',
         ageRating: ''
      }))
   }, [])

   const renderAnimeList = (arr) => {
      return arr.map(({ id, ...props }) => {
         return <NewAnimeItem key={uuidv4()} isMobile={isMobile} id={id} {...props} />
      })
   }

   if (newAnimeLoadingStatus === "loading") {
      return <Spinner />;
   } else if (newAnimeLoadingStatus === "error") {
      return <ErrorMessage />
   }

   const renderedNewAnime = renderAnimeList(newAnimeList)

   return (
      <div className="new-anime">
         <h2 className="new-anime__title">
            Новые аниме на сайте
         </h2>
         <div className="new-anime__list">
            {renderedNewAnime.length > 0 ? renderedNewAnime : <p>По данным критериям ничего не найдено</p>}
         </div>
      </div>
   )
}

export default NewAnimeList