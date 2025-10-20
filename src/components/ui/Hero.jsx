import React from 'react'
import "./Hero.css";
function Hero() {
  return (
   <>
   
   <section className="hero1">
  <div className="hero-content1">
    <h1>Make your business more profitable</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
    </p>
    <a href="#" className="btn-hero1">Get Started</a>
  </div>
  <div className="hero-image1">
    <img src="./public/1st bg.svg" alt="Business Illustration"/>
  </div>
</section>

<div className="hero-2">
<h1>Imagine Features</h1>
<p className="hero-2-txt">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Nobis, nemo! Maiores eos, sapiente consequatur optio numquam officiis.
</p>
</div>
   </>
  )
}

export default Hero
