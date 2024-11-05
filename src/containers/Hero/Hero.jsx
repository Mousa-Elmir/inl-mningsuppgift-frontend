import React from 'react';
import './Hero.css';
import googlePlayLogo from '../../assets/images/googleplay.svg';  // Uppdatera sökvägen om det behövs
import appStoreLogo from '../../assets/images/appstore.svg';     // Uppdatera sökvägen om det behövs
import phoneImage from '../../assets/images/2in1phones.svg';     // Uppdatera sökvägen om det behövs

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Manage All Your Money in One App</h1>
        <p>We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.</p>
        <div className="hero__buttons">
          <img src={appStoreLogo} alt="Download on the App Store" className="hero__store-button" />
          <img src={googlePlayLogo} alt="Get it on Google Play" className="hero__store-button" />
        </div>
      </div>
      <div className="hero__image">
        <img src={phoneImage} alt="Phone showing app" />
      </div>
      <div className="hero__discover">
        <a href="#discover-more" className="hero__discover-link">Discover more</a>
      </div>
    </section>
  );
};

export default Hero;
