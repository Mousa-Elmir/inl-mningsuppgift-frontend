import React, { useState } from 'react';
import './Newsletter.css';
import bellIcon from '../../assets/images/ringklocka.svg';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError('');
      // Gör något med e-posten, t.ex. skicka den till servern
      console.log('E-post inskickad:', email);
    } else {
      setError('Ange en giltig e-postadress.');
    }
  };

  const validateEmail = (email) => {
    // Enkel e-postvalidering
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <img src={bellIcon} alt="Bell Icon" />
          <h3>Subscribe to our newsletter to stay informed about latest updates</h3>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your Email"
              aria-label="Email"
            />
            <button type="submit">Subscribe</button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
