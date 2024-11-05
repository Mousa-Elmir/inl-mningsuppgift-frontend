import React, { useEffect, useState } from 'react';
import './SectionFive.css';
import quoteIcon from '../../assets/images/quotes.svg';

const SectionFive = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching Testimonials data:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="fifth-section">
      <div className="review-header">
        <h2>Clients are Loving Our App</h2>
      </div>
      <div className="reviews-wrapper">
        {testimonials.length === 0 ? (
          <p>Loading testimonials...</p>
        ) : (
          testimonials.map((item, index) => (
            <div key={index} className="review">
              <div className="quote-icon">
                <img src={quoteIcon} alt="Quote Icon" />
              </div>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`star ${i < item.starRating ? 'filled' : ''}`}>★</span>
                ))}
              </div>
              <p className="review-text">{item.comment || 'No review text available'}</p>
              <div className="reviewer-info">
                <img
                  className="reviewer-photo"
                  src={item.avatarUrl || './images2/svg/default-avatar.svg'}
                  alt={item.author || 'Unknown Reviewer'}
                />
                <div>
                  <p className="reviewer-name">{item.author || 'Unknown Name'}</p>
                  <p className="reviewer-title">{item.jobRole || 'Unknown Title'}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default SectionFive;
