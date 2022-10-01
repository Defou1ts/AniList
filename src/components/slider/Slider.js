import './slider.scss';
import leftArrow from '../../assets/arrleft.svg';
import rightArrow from '../../assets/arrright.svg';
import slide1 from '../../assets/slide1.svg';
import slide2 from '../../assets/slide2.svg';
import slide3 from '../../assets/slide3.svg';
import slide4 from '../../assets/slide4.svg';
import slide5 from '../../assets/slide5.svg';
import slide6 from '../../assets/slide6.svg';

const Slider = () => {
   return (
      <div className="slider">
         <div className="slider__container">
            <button className="slider__prev"><img src={leftArrow} alt="Prev Slide" /></button>
            <button className="slider__next"><img src={rightArrow} alt="Next Slide" /></button>
            <div className="slider__wrapper">
               <div className="slider__field">
                  <div className="slider__slide">
                     <img src={slide1} alt="slider image" className="slider__image" />
                     <p>Я стала злодейкой..</p>
                  </div>
                  <div className="slider__slide">
                     <img src={slide1} alt="slider image" className="slider__image" />
                     <p>Я стала злодейкой..</p>
                  </div>
                  <div className="slider__slide">
                     <img src={slide1} alt="slider image" className="slider__image" />
                     <p>Я стала злодейкой..</p>
                  </div>
                  <div className="slider__slide">
                     <img src={slide1} alt="slider image" className="slider__image" />
                     <p>Я стала злодейкой..</p>
                  </div>
                  <div className="slider__slide">
                     <img src={slide1} alt="slider image" className="slider__image" />
                     <p>Я стала злодейкой..</p>
                  </div>
                  <div className="slider__slide">
                     <img src={slide1} alt="slider image" className="slider__image" />
                     <p>Я стала злодейкой..</p>
                  </div>
                  <div className="slider__slide">
                     <img src={slide1} alt="slider image" className="slider__image" />
                     <p>Я стала злодейкой..</p>
                  </div>
                  <div className="slider__slide">
                     <img src={slide1} alt="slider image" className="slider__image" />
                     <p>Я стала злодейкой..</p>
                  </div>
                  <div className="slider__slide">
                     <img src={slide1} alt="slider image" className="slider__image" />
                     <p>Я стала злодейкой..</p>
                  </div>
                  <div className="slider__slide">
                     <img src={slide1} alt="slider image" className="slider__image" />
                     <p>Я стала злодейкой..</p>
                  </div>
                  <div className="slider__slide">
                     <img src={slide1} alt="slider image" className="slider__image" />
                     <p>Я стала злодейкой..</p>
                  </div>
                  <div className="slider__slide">
                     <img src={slide1} alt="slider image" className="slider__image" />
                     <p>Я стала злодейкой..</p>
                  </div>
               </div>
            </div>
            <div className="slider__dots">
               <button className="slider__dot active"></button>
               <button className="slider__dot"></button>
            </div>
         </div>

      </div>
   )
}

export default Slider