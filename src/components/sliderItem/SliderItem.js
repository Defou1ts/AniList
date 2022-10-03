import { Link } from "react-router-dom"

const SliderItem = ({ title, poster, id }) => {
   return (
      <Link to={`/anime/${id}`} className="slider__slide">
         <img src={poster} alt="slider image" className="slider__image" />
         <p>{title}</p>
      </Link>
   )
}

export default SliderItem