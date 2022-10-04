import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useKodikService from "../services/KodikService/KodikService";

const initialState = {
   newAnime: [],
   newAnimeLoadingStatus: 'idle',
}

export const fetchNewAnime = createAsyncThunk(
   'newAnime/fetchNewAnime',
   () => {
      const { getNewAnimes } = useKodikService()
      return getNewAnimes()
   }
)


const newAnimeSlice = createSlice({
   name: 'newAnime',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchNewAnime.pending, state => { state.newAnimeLoadingStatus = 'loading' })
      builder.addCase(fetchNewAnime.fulfilled, (state, action) => {
         state.newAnime = action.payload;
         state.newAnimeLoadingStatus = 'idle';
      })
      builder.addCase(fetchNewAnime.rejected, state => { state.newAnimeLoadingStatus = 'error' })
      builder.addDefaultCase(() => { })
   }
})

export default newAnimeSlice.reducer;