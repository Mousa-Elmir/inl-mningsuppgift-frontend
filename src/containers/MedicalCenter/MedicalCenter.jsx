import React from 'react';
import './MedicalCenter.css';
import mapImage from '../../assets/images/googlemaps.svg';
import gpsIcon from '../../assets/images/gpsicon.svg';
import phoneIcon from '../../assets/images/telefonsamtalicon.svg';
import clockIcon from '../../assets/images/klocka.svg';
import facebookIcon from '../../assets/images/facebook.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import instagramIcon from '../../assets/images/kameraicon.svg';
import youtubeIcon from '../../assets/images/youtube.svg';

const MedicalCenter = () => {
  return (
    <section className="medical-centers-section">
      <div className="medical-centers-container">
        <div className="map-container">
          <img src={mapImage} alt="Map showing medical center locations" className="map-image" />
        </div>
        <div className="medical-centers-info">
          <div className="medical-center">
            <h3>Medical Center 1</h3>
            <p><img src={gpsIcon} alt="Location Icon" />4517 Washington Ave. Manchester, Kentucky 39495</p>
            <p><img src={phoneIcon} alt="Phone Icon" />(406) 555-0120</p>
            <p><img src={clockIcon} alt="Clock Icon" /><strong>Mon - Fri:</strong> 9:00 am - 22:00 pm</p>
            <p className="right-2"><strong>Sat - Sun:</strong> 9:00 am - 20:00 pm</p>
          </div>
          <div className="medical-center">
            <h3>Medical Center 2</h3>
            <p><img src={gpsIcon} alt="Location Icon" />2464 Royal Ln. Mesa, New Jersey 45463</p>
            <p><img src={phoneIcon} alt="Phone Icon" />(406) 544-0123</p>
            <p><img src={clockIcon} alt="Clock Icon" /><strong>Mon - Fri:</strong> 9:00 am - 22:00 pm</p>
            <p className="right-2"><strong>Sat - Sun:</strong> 9:00 am - 20:00 pm</p>
          </div>
          <div className="social-icons">
            <a href="#"><img src={facebookIcon} alt="Facebook Icon" /></a>
            <a href="#"><img src={twitterIcon} alt="Twitter Icon" /></a>
            <a href="#"><img src={instagramIcon} alt="Instagram Icon" /></a>
            <a href="#"><img src={youtubeIcon} alt="YouTube Icon" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalCenter;
