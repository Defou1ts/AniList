import slide1 from '../../assets/slide1.svg';

const SliderItem = () => {
   return (
      <div className="slider__slide">
         <img src={slide1} alt="slider image" className="slider__image" />
         <p>Я стала злодейкой..</p>
      </div>
   )
}

export default SliderItem