"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import banner from "@/assets/images/food2.webp";

export const AboutBanner = () => {

    const phrases = [
    { text: "Nutrition-dense", color: "#759639" },
    { text: "Flavour-rich", color: "#759639" },
    { text: "Macro-balanced", color: "#7BC143" },
    { text: "Smart eating", color: "#759639" },
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
    <div className="about-banner">
        <div className="text-content">
            <h1>Making the world a healthier place with <br /> <p style={{ color: phrases[phraseIndex].color }}>{displayedText}</p></h1>
            
        </div>
        <div className="image">
            <Image src={banner} alt="plate-of-veggies" priority={true}/>
        </div>
    </div>
  )
}
