'use client';

import { useState } from 'react';
import styles from './CorporateForm.module.scss';

export default function CorporateForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
    company: '',
    employees: '',
    program: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitMessage('Thank you for your application! Our team will contact you within 24 hours to begin your onboarding process and schedule your 1-week pilot.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        designation: '',
        company: '',
        employees: '',
        program: '',
      });

      // Scroll to top of form
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        window.scrollTo({
          top: formElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    } catch (error) {
      setSubmitMessage('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.formSection} id="contact-form">
      <div className="container">
        <div className={styles.formHeader}>
          <h2>Ready to bring wellness to your workplace?</h2>
          <p>Schedule a Consultation</p>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.consultationForm}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="designation">Your Designation *</label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
                placeholder="e.g., HR Manager, CEO"
              />
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="company">Company Name *</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="Enter your company name"
            />
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="employees">Number of Employees</label>
              <select
                id="employees"
                name="employees"
                value={formData.employees}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1-50">1-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="501+">501+</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="program">Interested Program</label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
              >
                <option value="">Select a program</option>
                <option value="privilege">Employee Privilege Program</option>
                <option value="subscription">Get Health @ Workplace Subscription</option>
                <option value="engagement">Employee Engagement & Visibility</option>
                <option value="partnership">Partner Branding & Recognition</option>
                <option value="notsure">Not sure, need consultation</option>
              </select>
            </div>
          </div>

          {submitMessage && (
            <div className={`${styles.message} ${submitMessage.includes('Thank you') ? styles.success : styles.error}`}>
              {submitMessage}
            </div>
          )}
          
          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className={styles.spinner}></span>
                Processing...
              </>
            ) : (
              'Start My Onboarding Process'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}