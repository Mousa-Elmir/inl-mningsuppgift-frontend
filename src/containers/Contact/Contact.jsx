import React, { useState } from 'react';
import './Contact.css';
import emailIcon from '../../assets/images/emailme.svg';
import careersIcon from '../../assets/images/careers.svg';
import MedicalCenter from '../MedicalCenter/MedicalCenter';


const Contact = () => {
  const [formValues, setFormValues] = useState({ fullName: '', email: '', specialist: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.fullName) newErrors.fullName = 'Full name is required';
    if (!formValues.email) newErrors.email = 'Email is required';
    if (!formValues.specialist) newErrors.specialist = 'Please select a specialist';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Formuläret är korrekt ifyllt:', formValues);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <section className="contact-info">
          <h2 className="contact-title">Contact Us</h2>
          <div className="contact-option">
            <img src={emailIcon} alt="Email Icon" className="contact-icon" />
            <div>
              <h3>Email us</h3>
              <p className="contact-description">
                Please feel free to drop us a line. We will respond as soon as possible.
              </p>
              <a href="#" className="contact-link">Leave a message →</a>
            </div>
          </div>
          <div className="contact-option">
            <img src={careersIcon} alt="Career Icon" className="contact-icon" />
            <div>
              <h3>Careers</h3>
              <p className="contact-description">
                St ac ipsum lorem magna nunc mattis malesuada non vestibulum.
              </p>
              <a href="#" className="contact-link">Send an application →</a>
            </div>
          </div>
        </section>

        <section className="consultation-form">
          <h2 className="form-title">Get Online Consultation</h2>
          <form onSubmit={handleSubmit}>
            <label className="form-label">
              Full name
              <input
                type="text"
                name="fullName"
                value={formValues.fullName}
                onChange={handleInputChange}
                required
              />
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </label>

            <label className="form-label">
              Email address
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </label>

            <label className="form-label">
              Specialist
              <select
                name="specialist"
                value={formValues.specialist}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a specialist</option>
                <option value="dentist">Dentist</option>
                <option value="cardiologist">Cardiologist</option>
                <option value="human_resources">Human Resources</option>
                <option value="vice_president">Vice President</option>
              </select>
              {errors.specialist && <span className="error-text">{errors.specialist}</span>}
            </label>

            <button type="submit" className="appointment-button">Make an appointment</button>
          </form>
          </section> 
      </div>
      <MedicalCenter />
    </div>
    
  );
};

export default Contact;
