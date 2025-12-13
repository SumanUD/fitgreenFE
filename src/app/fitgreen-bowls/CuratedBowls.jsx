import Image from 'next/image';
import React from 'react';

// imports
import imgPower from '../../assets/bowls-slider/Pwer Bowl.webp';
import imgVitality from '../../assets/bowls-slider/Vitality Bowl.webp';
import imgHarmony from '../../assets/bowls-slider/05 Hermony Bowl.webp';
import imgLean from '../../assets/bowls-slider/04 Lean Bowl.webp';
import imgSukoon from '../../assets/bowls-slider/02 Sukoon Bowl.webp';
import imgSabzi from '../../assets/bowls-slider/03 Sabzi Bowl.webp';
import imgUtsav from '../../assets/bowls-slider/01 Utsav bowl.webp';
import imgJanta from '../../assets/bowls-slider/janta.webp';
import imgJeevan from '../../assets/bowls-slider/jeevan.webp';
import Link from 'next/link';

// object array
const products = [
  {
    title: "Power Bowl",
    desc: "Protein-packed for strength and peak performance.",
    img: imgPower
  },
  {
    title: "Vitality Bowl",
    desc: "Wholesome, energizing for thriving all day.",
    img: imgVitality
  },
  {
    title: "Harmony Bowl",
    desc: "Gut-friendly blend for balanced wellness.",
    img: imgHarmony
  },
  {
    title: "Lean Bowl",
    desc: "Light, nutrient-dense for wellness goals.",
    img: imgLean
  },
  {
    title: "Sukoon Bowl",
    desc: "Soulful, homestyle, biryani-inspired with healthy twist.",
    img: imgSukoon
  },
  {
    title: "Sabzi Bowl",
    desc: "Colorful medley of seasonal vegetables.",
    img: imgSabzi
  },
  {
    title: "Utsav Bowl",
    desc: "Vibrant, energy-boosting bowl for celebration.",
    img: imgUtsav
  },
  {
    title: "Janta Bowl",
    desc: "A wholesome, budget-friendly bowl",
    img: imgJanta
  },
  {
    title: "Jeevan Bowl",
    desc: "A wholesome bowl packed with everyday nutrition.",
    img: imgJeevan
  }
];

export const CuratedBowls = () => {
  return (
    <div className="curated-bowls">
        {products.map((item, index)=>(
            <div className="product-card" key={index}>
                <div className="image-section">
                    <Image src={item.img} alt={item.title} placeholder='blur'/>
                </div>
                <div className="text-contetn">
                    <div className="title">{item.title}</div>
                    <div className="desc">{item.desc}</div>
                    <div className="action-buttons">
                        <Link href={'https://order.fitgreen.in/onlineorder/'} target='_blank'>
                            <div className="btn-primary green">order</div>
                        </Link>                        
                        <Link href={`/fitgreen-bowls/${item.title.toLowerCase().split(" ").join("-")}`}>
                          <div className="btn-primary gray">view</div>
                        </Link>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
