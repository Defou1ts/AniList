import { configureStore } from "@reduxjs/toolkit";
import slider from '../components/slider/sliderSlice'

const store = configureStore({
   reducer: { slider },
   devTools: process.env.NODE_ENV !== 'production',
})

export default store;