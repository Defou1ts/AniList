import AnimeSearchForm from "../components/animeSearchForm/AnimeSearchForm";
import AnimeSidebar from "../components/animeSidebar/AnimeSidebar";
import NewAnimeList from "../components/newAnimeList/NewAnimeList";
import NewEpisodesList from "../components/newEpisodesList/NewEpisodesList";
import Slider from "../components/slider/Slider";
import { useMobile } from "../hooks/useMobile";

const MainPage = () => {

   const { isMobile } = useMobile()

   return (
      <div className="main">
         {isMobile ? null : <AnimeSidebar />}
         <div className="main__content">
            <Slider />
            <NewEpisodesList />
            <div className="main__grid">
               <div className="main__news">
                  <NewAnimeList />
               </div>
               <div className="main__filter">
                  <AnimeSearchForm />
               </div>
            </div>
         </div>
      </div>

   )
}

export default MainPage 