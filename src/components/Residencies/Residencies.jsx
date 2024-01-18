import React from 'react';
import './Residencies.css';

import 'swiper/css'; // Import Swiper styles
import sliderData from '../../utils/sliderData';
import {Swiper,SwiperSlide, useSwiper}from 'swiper/react'
import { sliderSettings } from '../../utils/common';

function Residencies() {
  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper
         {...sliderSettings}
         >
         <SliderButtons/>

          {sliderData.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" style={{ maxWidth: '100%' }} />
                <span className="secondaryText r-price">
                  <span style={{ color: 'orange' }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Residencies;
const SliderButtons=()=>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>

        </div>
    )
}