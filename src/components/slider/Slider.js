import './slider.scss';
import leftArrow from '../../assets/arrleft.svg';
import rightArrow from '../../assets/arrright.svg';
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSliderItems } from '../../slices/sliderSlice';
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

   const [sliderFieldWidth, setSliderFieldWidth] = useState(0)
   const [sliderWrapperWidth, setSliderWrapperWidth] = useState(0)

   const sliderFieldRef = useCallback(node => {
      if (node !== null) {
         setSliderFieldWidth(node.offsetWidth)

      }
   }, [])

   const sliderWrapperRef = useCallback(node => {
      if (node !== null) {
         setSliderWrapperWidth(node.offsetWidth)
      }
   }, [])

   if (sliderItemsLoadingStatus === "loading") {
      return <Spinner />;
   } else if (sliderItemsLoadingStatus === "error") {
      return <ErrorMessage />
   }

   const nextSlide = () => {

   }

   const prevSlide = () => {

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
            <div ref={sliderWrapperRef} className="slider__wrapper">
               <div ref={sliderFieldRef} className="slider__field">
                  {renderedSliderItems}
               </div>
            </div>
            <div className="slider__dots">
               <button className='slider__dot active'></button>
               <button className='slider__dot'></button>
            </div>
         </div>

      </div >
   )
}

export default Slider