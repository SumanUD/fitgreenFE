"use client";
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

import img1 from '../../assets/images/bases/01-Biriyani.webp'
import img2 from '../../assets/images/bases/02-Vitality-bowl.webp'




function useCompareSlider(wrapper, after, scroller) {
  let active = false;

  function scrollIt(xPage) {
    const rect = wrapper.getBoundingClientRect();
    const leftInPage = rect.left + window.pageXOffset;
    const x = xPage - leftInPage;
    const max = wrapper.offsetWidth;
    const pos = Math.max(0, Math.min(x, max));

    after.style.clipPath = `inset(0 calc(100% - ${pos}px) 0 0)`;
    scroller.style.left = pos - 25 + "px";
  }

  // Event handlers
  const onMouseDown = (e) => {
    active = true;
    scroller.classList.add("cmp-scrolling");
    e.preventDefault();
  };
  const onMouseUp = () => {
    active = false;
    scroller.classList.remove("cmp-scrolling");
  };
  const onMouseMove = (e) => {
    if (!active) return;
    scrollIt(e.pageX);
  };

  const onTouchStart = (e) => {
    active = true;
    scroller.classList.add("cmp-scrolling");
    e.preventDefault();
  };
  const onTouchEnd = () => {
    active = false;
    scroller.classList.remove("cmp-scrolling");
  };
  const onTouchMove = (e) => {
    if (!active) return;
    if (e.touches && e.touches.length) {
      scrollIt(e.touches[0].pageX);
    }
  };

  // Attach + cleanup
  scroller.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("mousemove", onMouseMove);

  scroller.addEventListener("touchstart", onTouchStart, { passive: false });
  document.addEventListener("touchend", onTouchEnd);
  document.addEventListener("touchmove", onTouchMove, { passive: false });

  // Initial position
  const start = Math.min(150, wrapper.offsetWidth);
  after.style.clipPath = `inset(0 calc(100% - ${start}px) 0 0)`;
  scroller.style.left = start - 25 + "px";

  return () => {
    scroller.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);

    scroller.removeEventListener("touchstart", onTouchStart);
    document.removeEventListener("touchend", onTouchEnd);
    document.removeEventListener("touchmove", onTouchMove);
  };
}

export const EatingWellHasNeverBeenMoreImportant = () => {

  const wrapperRef = useRef(null);
  const afterRef = useRef(null);
  const scrollerRef = useRef(null);
  useEffect(() => {
    if (wrapperRef.current && afterRef.current && scrollerRef.current) {
      const cleanup = useCompareSlider(wrapperRef.current, afterRef.current, scrollerRef.current);
      return cleanup;
    }
  }, []);
  
  return (
    <section className="section4">
      <div className="container">
        <h2 className="stroke-title">eating well has never been more important</h2>
        <p>Kolkata loves its food but behind the flavors the numbers tell a serious story. More adults here are battling weight, diabetes, high cholesterol, and hypertension than in most other metros.</p>

        <div className="content-split">
          <ul className="health-stats">
            <li>31% of adults are overweight or obese — higher than the urban India average.</li>
            <li>15% live with Type 2 diabetes — more than most Indian metros.</li>
            <li>1 in 3 adults has high cholesterol.</li>
            <li>Nearly 1 in 4 lives with hypertension.</li>
            <li>A growing number are battling metabolic syndrome before they even hit 40.</li>
          </ul>

          <div className="image-container">
            <div className="cmp-carousel">
              <div className="cmp-track">                                
                <section className="cmp-slide">
                  <div className="cmp-wrapper" ref={wrapperRef}>
                      <div className="cmp-before">
                          <Image src={img1} alt="Before 1" fill style={{ objectFit: "cover" }}/>
                      </div> 
                      <div className="cmp-after" ref={afterRef}>
                          <Image src={img2} alt="After 1" fill style={{ objectFit: "cover" }}/>
                      </div>
                      <div className="cmp-scroller" aria-label="Drag to compare" role="slider"  ref={scrollerRef}>
                          <svg className="cmp-scroller__thumb" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100" aria-hidden="true">
                              <polygon points="0,50 37,68 37,32" style={{ fill: "#fff" }} />
                              <polygon points="100,50 64,32 64,68" style={{ fill: "#fff" }} />
                          </svg>
                      </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
