import { configureStore } from "@reduxjs/toolkit";
import slider from '../components/slider/sliderSlice';
import newEpisodes from "../components/newEpisodesList/newEpisodesSlice";
import newAnime from "../components/newAnimeList/newAnimeSlice";

const store = configureStore({
   reducer: { slider, newEpisodes, newAnime },
   devTools: process.env.NODE_ENV !== 'production',
})

export default store;