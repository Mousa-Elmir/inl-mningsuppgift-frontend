import React from 'react';
import './SectionThree.css';
import phone1 from '../../assets/images/sektion3phone1.svg';
import phone2 from '../../assets/images/sektion3phone2.svg';
import phone3 from '../../assets/images/sektion3phone3.svg';

const SectionThree = () => {
  return (
    <section className="third-section">
      <h2>How Does It Work?</h2>
      <div className="phones-ex">
        <img src={phone1} alt="Phone Image 1" className="phone-example" />
        <img src={phone2} alt="Phone Image 2" className="phone-example" />
        <img src={phone3} alt="Phone Image 3" className="phone-example" />
      </div>
      <p className="section-footer">Latest transaction history</p>
      <p className="section-des">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
    </section>
  );
};

export default SectionThree;
