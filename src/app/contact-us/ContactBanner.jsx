"use client";
import React from "react";
import Image from 'next/image';
import banner from "@/assets/images/salad.jpg";

export const ContactBanner = () => {
  return (
    <div className="contact-banner">
        <div className="text-content">
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
        <div className="image">
            <Image src={banner} alt="healthy-food" priority={true}/>
        </div>
    </div>
  )
}
