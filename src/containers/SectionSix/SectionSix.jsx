import React, { useEffect, useState } from 'react';
import './SectionSix.css';
import phoneIcon from '../../assets/images/littlephoneicon.svg';
import chatIcon from '../../assets/images/messageicon.svg';

const SectionSix = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await res.json();
        console.log(data); 
        setFaqs(data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };

    fetchFaqs();
  }, []);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-left">
          <h2>Any questions? Check out the FAQs</h2>
          <p>Still have unanswered questions and need to get in touch?</p>
          <div className="contact-options">
            <div className="contact-box contact-phone">
              <img src={phoneIcon} alt="Phone Icon" />
              <p>Still have questions?</p>
              <a href="/contact">Contact us →</a>
            </div>
            <div className="contact-box contact-chat">
              <img src={chatIcon} alt="Chat Icon" />
              <p>Don't like phone calls?</p>
              <a href="/contact">Contact us →</a>
            </div>
          </div>
        </div>
        <div className="faq-right">
          <div className="faq-list">
            {faqs.length === 0 ? (
              <p>Loading FAQs...</p>
            ) : (
              faqs.map((faq, index) => (
                <div key={faq.id} className="faq-item">
                  <div className="faq-question" onClick={() => toggleFaq(index)}>
                    <p>{faq.title}</p> 
                    <span className={`faq-icon ${activeIndex === index ? 'open' : ''}`}>
                      {activeIndex === index ? '▲' : '▼'}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <div className="faq-answer">
                      <p>{faq.content}</p> 
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
