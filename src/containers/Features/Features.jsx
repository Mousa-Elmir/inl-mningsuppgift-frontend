import React from 'react';
import './Features.css';
import visaCardImage from '../../assets/images/sektion2phone.svg';
import logo1 from '../../assets/images/logo1.svg';
import logo2 from '../../assets/images/logo2.svg';
import logo3 from '../../assets/images/logo3.svg';
import logo4 from '../../assets/images/logo4.svg';
import logo5 from '../../assets/images/logo5.svg';
import logo6 from '../../assets/images/logo6.svg';
import easyPaymentIcon from '../../assets/images/easypayment.svg';
import dataSecurityIcon from '../../assets/images/datasecurity.svg';
import costStatisticsIcon from '../../assets/images/coststatics.svg';
import supportIcon from '../../assets/images/support247.svg';
import cashbackIcon from '../../assets/images/regularcashback.svg';
import topStandardsIcon from '../../assets/images/topstandard.svg';

const Features = () => {
  return (
    <section className="features">
      <div className="features__logos">
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo3} alt="Logo 3" />
        <img src={logo4} alt="Logo 4" />
        <img src={logo5} alt="Logo 5" />
        <img src={logo6} alt="Logo 6" />
      </div>

      <div className="features__wrapper">
        <div className="features__image">
          <img src={visaCardImage} alt="Visa card preview" />
        </div>

        <div className="features__content">
          <h1 className='h1-sektion-2'>App Features</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas...</p>
          <div className="features__list">
            <div className="features__item">
              <img src={easyPaymentIcon} alt="Easy Payments" />
              <div>
                <h3>Easy Payments</h3>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>
            <div className="features__item">
              <img src={dataSecurityIcon} alt="Data Security" />
              <div>
                <h3>Data Security</h3>
                <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
              </div>
            </div>
            <div className="features__item">
              <img src={costStatisticsIcon} alt="Cost Statistics" />
              <div>
                <h3>Cost Statistics</h3>
                <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
              </div>
            </div>
            <div className="features__item">
              <img src={supportIcon} alt="Support 24/7" />
              <div>
                <h3>Support 24/7</h3>
                <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
              </div>
            </div>
            <div className="features__item">
              <img src={cashbackIcon} alt="Regular Cashback" />
              <div>
                <h3>Regular Cashback</h3>
                <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
              </div>
            </div>
            <div className="features__item">
              <img src={topStandardsIcon} alt="Top Standards" />
              <div>
                <h3>Top Standards</h3>
                <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
