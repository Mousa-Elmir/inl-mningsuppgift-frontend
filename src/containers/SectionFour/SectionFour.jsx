import React from 'react';
import './SectionFour.css';
import learnMoreIcon from '../../assets/images/learnmore.svg';
import sendMoneyImage from '../../assets/images/sendmoney.svg';
import visaImage from '../../assets/images/visa.svg';
import easyPaymentIcon from '../../assets/images/easypayment.svg';
import dataSecurityIcon from '../../assets/images/datasecurity.svg';

const SectionFour = () => {
  return (
    <section className="fourth-section">
      <div className="content-wrapper">
        <div className="transfer-section">
          <h2>Make your money transfer simple and clear</h2>
          <ul>
            <li>Banking transactions are free for you</li>
            <li>No monthly cash commission</li>
            <li>Manage payments and transactions online</li>
          </ul>
          <button className="picture-button">
            <img src={learnMoreIcon} alt="Learn more" />
          </button>
        </div>
        <div className="image-section">
          <img src={sendMoneyImage} alt="Grafisk bild" className="graph-image" />
        </div>
      </div>

      <div className="content-wrapper">
        <div className="image-section">
          <img src={visaImage} alt="Contacts" className="contacts-image" />
        </div>
        <div className="payment-section">
          <h2>Receive payment from international bank details</h2>
          <div className="benefits-list">
            <div className="plus-item">
              <img src={easyPaymentIcon} alt="Betala online" />
              <p>Manage your payments online, Mollis congue egestas egestas fermentum fames.</p>
            </div>
            <div className="plus-item">
              <img src={dataSecurityIcon} alt="Säker betalning" />
              <p>A elementum et imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
            </div>
          </div>
          <button className="picture-button">
            <img src={learnMoreIcon} alt="Learn More" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;


