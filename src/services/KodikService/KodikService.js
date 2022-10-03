import { useHttp } from "../../hooks/http.hook";

const useKodikService = () => {

   const { request } = useHttp()

   const _apiBase = 'https://kodikapi.com/';
   const _apiToken = '2d343183c2f3cfb3c557e409460875e2';
   const sliderItemsLimit = 12;
   const newEpisodesLimit = 4;
   const newAnimesLimit = 3;

   const getSliderItems = async () => {
      const res = await request(`${_apiBase}list?token=${_apiToken}&limit=${sliderItemsLimit}&sort=shikimori_rating&year=2022&translation_id=610&types=anime-serial`)
      return await res.results.map(_transformSliderItems)
   }

   const getNewEpisodes = async () => {
      const res = await request(`${_apiBase}list?token=${_apiToken}&limit=${newEpisodesLimit}&translation_type=voice&types=anime-serial&with_material_data=true`)
      return await res.results.map(_transformNewEpisodes)
   }

   const getNewAnimes = async () => {
      const res = await request(`${_apiBase}list?token=${_apiToken}&limit=${newAnimesLimit}&sort=created_at&translation_id=610&translation_type=voice&types=anime-serial&with_material_data=true&anime_kind=tv,movie,ova,ona,special,tv_13,tv_24,tv_48`)
      return await res.results.map(_transformNewAnimes)
   }

   const _transformSliderItems = (item) => {
      return {
         title: item.material_data.title.length > 17 ? item.material_data.title.slice(0, 17) + '...' : item.material_data.title,
         poster: item.material_data.poster_url,
         id: item.shikimori_id,
      }
   }

   const _transformNewEpisodes = (anime) => {
      return {
         title: anime.material_data.title,
         titleEn: anime.material_data.title_en,
         poster: anime.material_data.poster_url,
         lastEpisode: anime.last_episode,
         id: anime.shikimori_id,
      }
   }

   const _transformNewAnimes = (anime) => {
      return {
         title: anime.material_data.title,
         titleEn: anime.material_data.title_en,
         poster: anime.material_data.poster_url,
         id: anime.shikimori_id,
         genres: anime.material_data.anime_genres,
         year: anime.year,
         kind: anime.material_data.anime_kind,
      }
   }

   return {
      getSliderItems,
      getNewEpisodes,
      getNewAnimes
   }
}

export default useKodikService;