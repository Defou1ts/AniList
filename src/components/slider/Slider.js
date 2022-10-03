import './slider.scss';
import leftArrow from '../../assets/arrleft.svg';
import rightArrow from '../../assets/arrright.svg';
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSliderItems } from './sliderSlice';
import { v4 as uuidv4 } from 'uuid';

import SliderItem from '../sliderItem/SliderItem';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const Slider = () => {

   const dispatch = useDispatch();
   const sliderItemsLoadingStatus = useSelector(state => state.slider.sliderItemsLoadingStatus)
   const sliderItems = useSelector(state => state.slider.sliderItems)

   useEffect(() => {
      dispatch(fetchSliderItems())
   }, [])

   const [sliderPage, setSliderPage] = useState(1)
   const [sliderFieldWidth, setSliderFieldWidth] = useState(0)

   const sliderFieldRef = useCallback(node => {
      if (node !== null) {
         setSliderFieldWidth(node.offsetWidth + 30)
      }
   }, [])

   if (sliderItemsLoadingStatus === "loading") {
      return <Spinner />;
   } else if (sliderItemsLoadingStatus === "error") {
      return <ErrorMessage />
   }

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

   const renderSliderItems = (arr) => {
      return arr.map(({ id, ...props }) => {
         return <SliderItem key={uuidv4()} id={id} {...props} />
      })
   }

   const renderedSliderItems = renderSliderItems(sliderItems)

   return (
      <div className="slider">
         <div className="slider__container">
            <button onClick={prevSlide} className="slider__prev"><img src={leftArrow} alt="Prev Slide" /></button>
            <button onClick={nextSlide} className="slider__next"><img src={rightArrow} alt="Next Slide" /></button>
            <div className="slider__wrapper">
               <div ref={sliderFieldRef} style={{ left: `-${(sliderPage - 1) * (sliderFieldWidth / 2)}px` }} className="slider__field">
                  {renderedSliderItems}
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