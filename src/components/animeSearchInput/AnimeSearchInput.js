import './animeSearchInput.scss';
import searchIcon from '../../assets/searchicon.svg';

const AnimeSearchInput = () => {
   return (
      <form onSubmit={() => console.log('Сабмит!')} className="animesearch">
         <button type="submit" className="animesearch__icon">
            <img src={searchIcon} alt="Search" />
         </button>
         <input required className='animesearch__input' placeholder='Поиск...' type="text" />
      </form>
   )
}

export default AnimeSearchInput