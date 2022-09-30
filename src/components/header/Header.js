import './header.scss';
import profleIcon from '../../assets/profileicon.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <div className="header__body">
               <div className="header__logo">
                  <NavLink to='/'>
                     <span>Ani</span><span>List</span>
                  </NavLink>
               </div>
               <nav className="header__menu">
                  <div className="header__menu-list">
                     <NavLink style={({ isActive }) => ({ color: isActive ? "#FF1F1F" : 'inherit' })} to='/top100'><span className="header__menu-link">ТОП 100</span></NavLink>
                     <NavLink style={({ isActive }) => ({ color: isActive ? "#FF1F1F" : 'inherit' })} to='/year'><span className="header__menu-link">АНИМЕ 2022</span></NavLink>
                     <NavLink style={({ isActive }) => ({ color: isActive ? "#FF1F1F" : 'inherit' })} to='/notes'><span className="header__menu-link">МОИ ЗАКЛАДКИ</span></NavLink>
                  </div>
                  <div className="header__menu-profile">
                     <img src={profleIcon} alt="Profile icon" />
                  </div>
               </nav>
            </div>
         </div>
      </header>
   )
}

export default Header