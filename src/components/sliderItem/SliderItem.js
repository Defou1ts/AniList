

const SliderItem = ({ title, poster }) => {
   return (
      <div className="slider__slide">
         <img src={poster} alt="slider image" className="slider__image" />
         <p>{title}</p>
      </div>
   )
}

export default SliderItem