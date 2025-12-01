"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import image from "@/assets/images/intro-bg.webp";

export const BowlThatBreakRules = () => {
  const phrases = [
    { text: "Nutrition-dense", color: "#759639" },
    { text: "Flavour-rich", color: "#C1A27F" },
    { text: "Macro-balanced", color: "#7BC143" },
    { text: "Smart eating", color: "#C1A27F" },
    { text: "Everyday Craving", color: "#7BC143" },
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const typingRef = useRef(null);

  const typingSpeed = 100; // ms per letter typing
  const deletingSpeed = 50; // ms per letter deleting
  const pauseAfterTyped = 1500; // wait after a word is typed

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex].text;

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentPhrase.length) {
        // typing
        setDisplayedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        typingRef.current = setTimeout(handleTyping, typingSpeed);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        // pause before deleting
        typingRef.current = setTimeout(() => setIsDeleting(true), pauseAfterTyped);
      } else if (isDeleting && charIndex > 0) {
        // deleting
        setDisplayedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        typingRef.current = setTimeout(handleTyping, deletingSpeed);
      } else if (isDeleting && charIndex === 0) {
        // move to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    typingRef.current = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingRef.current);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <div className="container section2">
      <h3 className="stroke-title">Bowl That Break the Rules</h3>
      <p>Eating well is no longer optional</p>
      <p className="text-green">
        But “healthy” shouldn’t mean tasteless salads or bland meals. Food can be
        flavour-rich, joyful to eat, and still be good for you.
      </p>

      <div className="section-split">
        <div className="rotating-text">
          <p style={{ color: phrases[phraseIndex].color }}>{displayedText}</p>
        </div>
        <div className="image">
          <Image src={image} alt="bowl-with-sause-pouring" />
        </div>
      </div>
    </div>
  );
};
