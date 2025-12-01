import React from 'react'

export const ContactUs = () => {
  return (
    <section className="section8">
      <div className="container">
        <h2 className="stroke-title">contact us</h2>

        <div className="cto">
          <div className="text-content">
            <h2>
              Have a question, a collab idea, or just craving a better bowl?
              We&apos;re all ears (and taste buds).
            </h2>
            <div className="contact-block">
              <h6>Where To Find Us</h6>
              <p>
                Ground Floor, SDF Building<br/> GP Block, Sector V, Salt Lake<br/>
                Kolkata, India, West Bengal.
              </p>
            </div>
            <div className="contact-block">
              <h6>Contact Info</h6>
              <ul className="contact-list">
                  <li>Phone: <a href="tel:8450817711" target='_blank'>+91 8450817711</a></li>
                  <li>Email: <a href="mailto:healthybowls@fitgreen.com" target='_blank'>healthybowls@fitgreen.in</a></li>
              </ul>
            </div>
          </div>
          <form className="contact-form" id="contactForm">
              <div className="form-group">
                  <label htmlFor="name">Name <sup>*</sup></label>
                  <input type="text" id="name" name="name" placeholder="Your full name" required/>
              </div>
              <div className="form-group">
                  <label htmlFor="email">Email <sup>*</sup></label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" required />
              </div>
              <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210"
                      pattern="^\+?\d{10,15}$" />
              </div>
              <div className="form-group">
                  <label htmlFor="message">Message <sup>*</sup></label>
                  <textarea id="message" name="message" rows="5" placeholder="Write your message here"
                      required></textarea>
              </div>
              <button type="submit" className="btn btn--primary u-fullwidth">Send Message</button>
              <p id="formMessage" className="form-message"></p>
          </form>

        </div>
      </div>
    </section>
  )
}
