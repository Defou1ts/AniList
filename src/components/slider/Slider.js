import './slider.scss';
import leftArrow from '../../assets/arrleft.svg';
import rightArrow from '../../assets/arrright.svg';
import { useCallback, useState } from 'react';
import SliderItem from '../sliderItem/SliderItem';



const Slider = () => {

   const [sliderPage, setSliderPage] = useState(1)
   const [sliderFieldWidth, setSliderFieldWidth] = useState(0)

   const sliderFieldRef = useCallback(node => {
      if (node !== null) {
         setSliderFieldWidth(node.offsetWidth + 30)
      }
   }, [])

   const position = (sliderPage - 1) * (sliderFieldWidth / 2);

   const nextSlide = () => {
      if ((sliderPage) * (sliderFieldWidth / 2) >= sliderFieldWidth) {
         setSliderPage(1)
      } else {
         setSliderPage(sliderPage + 1)
      }
   }

   const prevSlide = () => {
      if ((sliderPage - 1) * (sliderFieldWidth / 2) > 0) {
         setSliderPage(sliderPage - 1)
      } else {
         setSliderPage(2)
      }
   }

   return (
      <div className="slider">
         <div className="slider__container">
            <button onClick={prevSlide} className="slider__prev"><img src={leftArrow} alt="Prev Slide" /></button>
            <button onClick={nextSlide} className="slider__next"><img src={rightArrow} alt="Next Slide" /></button>
            <div className="slider__wrapper">
               <div ref={sliderFieldRef} style={{ left: `-${(sliderPage - 1) * (sliderFieldWidth / 2)}px` }} className="slider__field">
                  <SliderItem />
                  <SliderItem />
                  <SliderItem />
                  <SliderItem />
                  <SliderItem />
                  <SliderItem />
                  <SliderItem />
                  <SliderItem />
                  <SliderItem />
                  <SliderItem />
                  <SliderItem />
                  <SliderItem />
               </div>
            </div>
            <div className="slider__dots">
               <button onClick={() => setSliderPage(1)} className={`slider__dot ${sliderPage === 1 ? 'active' : ''}`}></button>
               <button onClick={() => setSliderPage(2)} className={`slider__dot ${sliderPage === 2 ? 'active' : ''}`}></button>
            </div>
         </div>

      </div >
   )
}

export default Slider