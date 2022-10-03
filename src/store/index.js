import { configureStore } from "@reduxjs/toolkit";
import slider from '../components/slider/sliderSlice';
import newEpisodes from "../components/newEpisodesList/newEpisodesSlice";

const store = configureStore({
   reducer: { slider, newEpisodes },
   devTools: process.env.NODE_ENV !== 'production',
})

export default store;