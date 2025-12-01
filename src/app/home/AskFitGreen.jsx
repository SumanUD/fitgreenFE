"use client";
import React, { useState } from 'react'

export const AskFitGreen = () => {

  const faqs = [
    {
      question: "What exactly is FitGreen?",
      answer:
        "FitGreen is a new-age food brand that creates nutrition-dense, macro-balanced bowls — designed to be delicious, satisfying, and good for your body, every single day."
    },
    {
      question: "Is this diet food?",
      answer:
        "No. Diet food often means restrictive, bland, and temporary. FitGreen is about real, flavour-packed meals you’d happily eat daily — built with the right balance of protein, carbs, and fats to fuel your lifestyle."
    },
    {
      question: "What makes FitGreen different?",
      answer:
        "Most “healthy” options focus only on calories or trends. We focus on science-backed nutrition, portion control, and taste that rivals comfort food — so healthy eating becomes a habit, not a punishment."
    },
    {
      question: "Why should I care about macros?",
      answer:
        "Macros — protein, carbs, and fats — determine how your body uses energy. Balanced macros help you stay full longer, manage weight, and keep your metabolism strong. FitGreen bowls are designed with ideal macro ratios for daily health."
    },
    {
      question: "I love Kolkata’s street food. How does FitGreen fit in?",
      answer:
        "We get it — Kolkata is a foodie paradise. But our city’s rising rates of diabetes, obesity, and heart disease show it’s time for a smart balance. FitGreen lets you enjoy tasty meals without the health downsides of oily, sugar-heavy food."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section7">
      <div className="container">
        <h2 className="stroke-title">ask fitgreen</h2>
        <div className="accordion">
          <div className="faq-list">
            {
              faqs.map((faq, index)=>(
                <div className={`faq-item ${activeIndex === index ? 'active':''}`} key={index} onClick={() => toggleFAQ(index)}>
                  <span className="faq-question">
                    {faq.question}
                    <span className="faq-icon">+</span>
                  </span>
                  <div className="faq-answer">
                      <p>{faq.answer}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
