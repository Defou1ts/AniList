import { useHttp } from "../../hooks/http.hook";

const useKodikService = () => {

   const { request } = useHttp()

   const _apiBase = 'https://kodikapi.com/';
   const _apiToken = '2d343183c2f3cfb3c557e409460875e2';
   const sliderItemsLimit = 12;
   const newEpisodesLimit = 4;

   const getSliderItems = async () => {
      const res = await request(`${_apiBase}list?token=${_apiToken}&limit=${sliderItemsLimit}&sort=shikimori_rating&year=2022&translation_id=610&types=anime-serial`)
      return await res.results.map(_transformSliderItems)
   }

   const getNewEpisodes = async () => {
      const res = await request(`${_apiBase}list?token=${_apiToken}&limit=${newEpisodesLimit}&translation_type=voice&types=anime-serial&with_material_data=true`)
      return await res.results.map(_transformNewEpisodes)
   }

   const _transformSliderItems = (item) => {
      return {
         title: item.material_data.title.length > 17 ? item.material_data.title.slice(0, 17) + '...' : item.material_data.title,
         poster: item.material_data.poster_url,
         id: item.shikimori_id,
      }
   }

   const _transformNewEpisodes = (episode) => {
      return {
         title: episode.material_data.title,
         poster: episode.material_data.poster_url,
         lastEpisode: episode.last_episode,
         id: episode.shikimori_id,
      }
   }

   return {
      getSliderItems,
      getNewEpisodes
   }
}

export default useKodikService;