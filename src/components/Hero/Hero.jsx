import React from 'react'
import './Hero.css'
import hero from '../../assets/hero-image.png'
function Hero() {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
            <div className="hero-left">
                <div className="hero-title">
                    <h1>
                    Discover <br/>Most Suitable <br/> Property
                    </h1>
                    <div className="hero-des">
                        <span>Find a variety of properties that suit you very easilty
Forget all difficulties in finding a residence for you</span>
                    </div>
                </div>
            </div>
            <div className="flexCenter hero-right">
<div className="image-container">
    <img src={hero} alt="" />
</div>
            </div>
        </div>
    </section>
  )
}

export default Hero