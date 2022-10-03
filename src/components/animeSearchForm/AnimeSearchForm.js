import './animeSearchForm.scss';
import filterIcon from '../../assets/filtericon.svg';
import helpIcon from '../../assets/help.svg'

const AnimeSearchForm = () => {
   return (
      <form className='anime-search'>
         <div className="anime-search__header">
            <img src={filterIcon} alt="Filter Icon" className="anime-search__icon" />
            <p className="anime-search__title">Фильтры</p>
         </div>
         <div className="anime-search__body">
            <div className="anime-search__genres">
               <label className='anime-search__label' htmlFor="genres">Жанры</label>
               <div className='anime-search__toggle-wrapper'>
                  <label className="anime-search__toggle" htmlFor='toggle'>
                     <input className="anime-search__checkbox" type="checkbox" name="toggle" id="toggle" />
                     <div className="anime-search__toggle-circle"></div>
                  </label>
                  <img className='anime-search__help-icon' src={helpIcon} alt="help icon" />
               </div>
            </div>
            <div className="anime-search__select-wrapper">
               <select className='anime-search__select' name="genres" id="genres">
                  <option value="">Выберите жанр</option>
                  <option value="action">Экшн</option>
               </select>
            </div>
            <label htmlFor="type" className="anime-search__label">Тип</label>
            <div className="anime-search__select-wrapper">
               <select className='anime-search__select' name="type" id="type">
                  <option value="">Выберите тип</option>
                  <option value="action">Онгоинг</option>
               </select>
            </div>
            <label htmlFor="voice" className="anime-search__label">Тип озвучки</label>
            <div className="anime-search__select-wrapper">
               <select className='anime-search__select' name="voice" id="voice">
                  <option value="">Выберите озвучку</option>
                  <option value="action">AniDub</option>
               </select>
            </div>
            <label htmlFor="status" className="anime-search__label">Статус</label>
            <div className="anime-search__select-wrapper">
               <select className='anime-search__select' name="status" id="status">
                  <option value="">Выберите статус</option>
                  <option value="action">Онгоинг</option>
               </select>
            </div>
            <label htmlFor="age" className="anime-search__label">Возрастное ограничение</label>
            <div className="anime-search__select-wrapper">
               <select className='anime-search__select' name="age" id="age">
                  <option value="">Возрастное ограничение</option>
                  <option value="action">18+</option>
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