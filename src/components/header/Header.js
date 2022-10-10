import './header.scss';
import profleIcon from '../../assets/profileicon.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useMobile } from '../../hooks/useMobile';

import AnimeSearchInput from '../animeSearchInput/AnimeSearchInput';
import AnimeSidebar from '../animeSidebar/AnimeSidebar';
import { useEffect } from 'react';

const Header = () => {

   const [isActive, setIsActive] = useState(false)

   const { isMobile } = useMobile();

   useEffect(() => {
      if (isActive) {
         document.body.style = `overflow:hidden`
      } else {
         document.body.style = ``
      }
   }, [isActive])

   return (
      <>
         <header className="header">
            <div className="container">
               <div className="header__body">
                  <div className="header__logo">
                     <NavLink to='/'>
                        <span>Ani</span><span>List</span>
                     </NavLink>
                  </div>
                  <nav className="header__menu">
                     <div className="black-wrapper" onClick={() => setIsActive(isActive => !isActive)} style={{ display: isActive ? "block" : "none" }}>
                     </div>
                     <div style={{ left: isActive ? `0px` : `-110%`, top: '0px' }} className="header__menu-list">
                        <NavLink style={({ isActive }) => ({ color: isActive ? "#FF1F1F" : 'inherit' })} to='/top100'><span className="header__menu-link">ТОП 100</span></NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "#FF1F1F" : 'inherit' })} to='/year'><span className="header__menu-link">АНИМЕ 2022</span></NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "#FF1F1F" : 'inherit' })} to='/notes'><span className="header__menu-link">МОИ ЗАКЛАДКИ</span></NavLink>
                        {isMobile ? <AnimeSidebar /> : null}
                     </div>
                     <div className="header__menu-profile">
                        <img src={profleIcon} alt="Profile icon" />
                     </div>
                     <div onClick={() => setIsActive(isActive => !isActive)} className={`header__menu-burger ${isActive ? 'active' : ''}`}>
                        <span></span>
                     </div>
                  </nav>
               </div>
               {isMobile ? <AnimeSearchInput /> : null}
            </div>
         </header>
      </>

   )
}

export default Header