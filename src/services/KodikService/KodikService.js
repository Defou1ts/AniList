import { useHttp } from "../../hooks/http.hook";

const useKodikService = () => {

   const { request } = useHttp()

   const _apiBase = 'https://kodikapi.com/';
   const _apiToken = '2d343183c2f3cfb3c557e409460875e2';
   const sliderItemsLimit = 12;

   const getSliderItems = async () => {
      const res = await request(`${_apiBase}list?token=${_apiToken}&limit=${sliderItemsLimit}&sort=shikimori_rating&year=2022&translation_id=610&types=anime-serial`)
      return await res.results.map(_transformSliderItems)
   }

   const _transformSliderItems = (item) => {
      return {
         title: item.material_data.title.length > 17 ? item.material_data.title.slice(0, 17) + '...' : item.material_data.title,
         poster: item.material_data.poster_url,
         id: item.shikimori_id,
      }
   }

   return {
      getSliderItems,
   }
}

export default useKodikService;