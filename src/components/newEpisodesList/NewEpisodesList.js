import './newEpisodesList.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNewEpisodes } from './newEpisodesSlice';
import { v4 as uuidv4 } from 'uuid';

import NewEpisodeItem from '../newEpisodeItem/NewEpisodeItem';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';


const NewEpisodesList = () => {

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchNewEpisodes())
   }, [])

   const newEpisodes = useSelector(state => state.newEpisodes.newEpisodes)
   const newEpisodesLoadingStatus = useSelector(state => state.newEpisodes.newEpisodesLoadingStatus)

   if (newEpisodesLoadingStatus === "loading") {
      return <Spinner />;
   } else if (newEpisodesLoadingStatus === "error") {
      return <ErrorMessage />
   }

   const renderEpisodes = (arr) => {
      return arr.map(({ id, ...props }) => {
         return <NewEpisodeItem key={uuidv4()} id={id} {...props} />
      })
   }

   const renderedNewEpisodes = renderEpisodes(newEpisodes)

   return (
      <div className="new-ep-today">
         <h2 className="new-ep-today__title">Новые серии на <span>ANI</span>LIST</h2>
         <p className="new-ep-today__date">Сегодня, 29 сентября </p>
         <div className="new-ep-today__list">
            {renderedNewEpisodes}
         </div>
      </div>
   )
}

export default NewEpisodesList