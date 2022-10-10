import './animeSearchForm.scss';
import filterIcon from '../../assets/filtericon.svg';
import helpIcon from '../../assets/help.svg'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchVoiceTranslations } from '../../slices/voiceTranslationsSlice';
import { fetchNewAnimeByOptions } from '../../slices/newAnimeSlice';

const AnimeSearchForm = () => {

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchVoiceTranslations())
   }, [])

   const genres = useSelector(state => state.genres.genres)
   const voiceTranslations = useSelector(state => state.voiceTranslations.voiceTranslations)


   const [manyGenres, setManyGenres] = useState(false)
   const [selectedGenre, setSelectedGenre] = useState('')
   const [selectedGenres, setSelectedGenres] = useState([])
   const [selectedType, setSelectedType] = useState('')
   const [selectedVoice, setSelectedVoice] = useState('')
   const [selectedStatus, setSelectedStatus] = useState('')
   const [ageRating, setAgeRating] = useState('')

   const changeManyGenres = () => {
      setManyGenres(!manyGenres)
   }

   useEffect(() => {
      changeSelectedGenres()
      dispatch(fetchNewAnimeByOptions({
         genres: manyGenres ? selectedGenres.join(',') : selectedGenre,
         type: selectedType,
         voice: selectedVoice,
         status: selectedStatus,
         ageRating: ageRating
      }))
   }, [manyGenres])

   const changeSelectedGenres = (genre) => {
      if (manyGenres) {
         setSelectedGenre('')
         if (genre) {
            setSelectedGenres(selectedGenres => [...selectedGenres, genre])
         }
      } else {
         setSelectedGenres([])
         if (genre) {
            setSelectedGenre(genre)
         }
      }
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(fetchNewAnimeByOptions({
         genres: manyGenres ? selectedGenres.join(',') : selectedGenre,
         type: selectedType,
         voice: selectedVoice,
         status: selectedStatus,
         ageRating: ageRating
      }))
   }

   const renderedSelectedGenres = selectedGenres.length > 0 ? selectedGenres
      .map(genre => <div key={uuidv4()} className='anime-search__selected-genre'>{genre.charAt(0).toUpperCase() + genre.slice(1)}</div>) : null

   const renderedVoiceTranslations = voiceTranslations.map(({ title, id }) => {
      return <option key={uuidv4()} value={id}>{title.charAt(0).toUpperCase() + title.slice(1)}</option >
   }).slice(0, 10)

   const renderedGenres = genres.map(({ title }) => {
      return <option key={uuidv4()} value={title}>{title.charAt(0).toUpperCase() + title.slice(1)}</option >
   })

   return (
      <form onSubmit={(e) => handleSubmit(e)} className='anime-search'>
         <div className="anime-search__header">
            <img src={filterIcon} alt="Filter Icon" className="anime-search__icon" />
            <p className="anime-search__title">Фильтры</p>
         </div>
         <div className="anime-search__body">
            <div className="anime-search__genres">
               <label className='anime-search__label' htmlFor="genres">Жанры</label>
               <div className='anime-search__toggle-wrapper'>
                  <label className="anime-search__toggle" htmlFor='toggle'>
                     <input
                        className="anime-search__checkbox"
                        checked={manyGenres}
                        onChange={changeManyGenres}
                        type="checkbox"
                        name="toggle"
                        id="toggle" />
                     <div className="anime-search__toggle-circle"></div>
                  </label>
                  <div className="anime-search__help-icon-wrapper">
                     <img className='anime-search__help-icon' src={helpIcon} alt="help icon" />
                  </div>

               </div>
            </div>
            {renderedSelectedGenres}
            <div className="anime-search__select-wrapper">
               <select
                  value={selectedGenre}
                  onChange={(e) => changeSelectedGenres(e.target.value)}
                  className='anime-search__select'
                  name="genres"
                  id="genres">
                  <option value="">Выберите жанр</option>
                  {renderedGenres}
               </select>
            </div>
            <label htmlFor="type" className="anime-search__label">Тип</label>
            <div className="anime-search__select-wrapper">
               <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className='anime-search__select'
                  name="type"
                  id="type">
                  <option value="">Выберите тип</option>
                  <option value="tv">ТВ сериал</option>
                  <option value="movie">Фильм</option>
                  <option value="ova">OVA</option>
                  <option value="special">Спешл</option>
               </select>
            </div>
            <label htmlFor="voice" className="anime-search__label">Тип озвучки</label>
            <div className="anime-search__select-wrapper">
               <select
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                  className='anime-search__select'
                  name="voice"
                  id="voice">
                  <option value="">Выберите озвучку</option>
                  {renderedVoiceTranslations}
               </select>
            </div>
            <label htmlFor="status" className="anime-search__label">Статус</label>
            <div className="anime-search__select-wrapper">
               <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className='anime-search__select'
                  name="status"
                  id="status">
                  <option value="">Выберите статус</option>
                  <option value="ongoing">Онгоинг</option>
                  <option value="released">Завершённые</option>
                  <option value="anons">Анонс</option>
               </select>
            </div>
            <label htmlFor="age" className="anime-search__label">Возрастное ограничение</label>
            <div className="anime-search__select-wrapper">
               <select
                  value={ageRating}
                  onChange={(e) => setAgeRating(e.target.value)}
                  className='anime-search__select'
                  name="age"
                  id="age">
                  <option value="">Возрастное ограничение</option>
                  <option value="G">G</option>
                  <option value="PG">PG</option>
                  <option value="PG-13">PG-13</option>
                  <option value="R">R</option>
                  <option value="R+">R+</option>
                  <option value="Rx">Rx</option>
               </select>
            </div>
            <button type='submit' className="anime-search__submit">
               Искать
            </button>
         </div>

      </form>
   )
}

export default AnimeSearchForm