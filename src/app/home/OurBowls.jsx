"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { ownBowl, bowls } from "../../../data/home";

export const OurBowls = () => {

  const [activeCate, setActiveCate] = useState('bases');
  const [currentCateItems, setCurrentCate] = useState([])
  const [fadeKey, setFadeKey] = useState(0);

  function currentItems(cate){
    const arr = ownBowl.filter(obj => obj.category == cate)
    setCurrentCate(arr)
  }
  useEffect(()=>{
    currentItems(activeCate)
  }, [activeCate])
  const handleCateChange = (cate) =>{
    if(cate != activeCate){
      setActiveCate(cate)           
    }
  }

  const [bowlType, setBowlType ]= useState('curated');
  const handleBowlType = (type) =>{
    if(type != bowlType){
      setBowlType(type)
      setFadeKey(prev => prev + 1);
      setActiveCate('bases')
    }
  }

  return (
    <section className="section3" id="our_bowl">
      <div className="container">
        <h2 className="stroke-title">our bowls</h2>
        <p>At FitGreen, you get to eat the way you like it. Pick from our Curated Bowls, thoughtfully crafted by our chefs to be nutrition-dense, balanced, and bursting with flavour. Or, go for Make Your Own Bowl — choose your base, protein, sides, sauce, and toppings to put together a bowl that’s made just for you.</p>

        <div className="content-split">
          <div className={`btn-primary ${bowlType == "curated" && 'active'}`} onClick={()=>handleBowlType('curated')}>curated bowls</div>
          <div className={`btn-primary ${bowlType == "own-bowl" && 'active'}`} onClick={()=>handleBowlType('own-bowl')}>make your own bowl</div>
        </div>

        <div className="slide-contents fadeIn" key={fadeKey}>
          {
            bowlType == 'curated' ?
            <div className="curated-bowls">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="curated-bowls-carousal"
                breakpoints={{
                  320: {   // mobile
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {   // small tablets
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {  // desktop
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {
                  bowls.map((item, index)=>(
                    <SwiperSlide key={index}>
                      <article className="slide" role="listitem">
                        <div className="flip-card" >
                          <div className="flip-card-inner">
                            <div className="flip-card-front">
                              <Image className="flip-image" src={item.image}
                                alt="Power Bowl dish" />
                              <div className="card-front-content">
                                <h3 id="power-bowl-title">{item.title}</h3>
                                <p>{item.description}</p>
                                <small>{item.highlight}</small>
                              </div>
                            </div>
                            <div className="flip-card-back">
                              <h3>Ingredients</h3>                                
                              <div className="ingredients-list" aria-label="Power Bowl Ingredients">
                                {
                                  Object.entries(item?.back?.ingredients || {}).map(([key, value], idx) => (
                                    <div key={idx}>
                                      <b>{key}:</b> {value}<br />
                                    </div>
                                  ))
                                }
                                
                              </div>
                              <Link href={'https://order.fitgreen.in/'} target="_blank">
                                <button className="order-button" type="button" aria-label="Order Power Bowl">Order Now</button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>:          
            <div className="make-your-own-bowl">
              <div className="bowl-categories">
                <div className={`btn-primary ${activeCate == "bases" && 'active'}`} onClick={()=>handleCateChange('bases')}>Bases</div>
                <div className={`btn-primary ${activeCate == "proteins" && 'active'}`} onClick={()=>handleCateChange('proteins')}>Proteins</div>
                <div className={`btn-primary ${activeCate == "sides" && 'active'}`} onClick={()=>handleCateChange('sides')}>sides</div>
                <div className={`btn-primary ${activeCate == "toppings" && 'active'}`} onClick={()=>handleCateChange('toppings')}>toppings</div>
                <div className={`btn-primary ${activeCate == "sauces" && 'active'}`} onClick={()=>handleCateChange('sauces')}>sauces & dressings</div>
              </div>
              <div className="own-bowl-carousal">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  navigation={true}
                  modules={[Navigation]}
                  className="own-bowls-carousal"
                  breakpoints={{
                    320: {   // mobile
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    640: {   // small tablets
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {  // desktop
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {
                    currentCateItems?.map((item, index)=>(
                      <SwiperSlide>
                        <article className="slide" role="listitem" 
                          aria-label="Olive Oil Balsamic Dressing">
                          <div className="flip-card" >
                            <div className="flip-card-inner">
                              <div className="flip-card-front">
                                  <Image className="flip-image"
                                      src={item.image}
                                      alt="Olive Oil Balsamic Dressing" width={100} height={100}/>
                                  <div className="card-front-content">
                                      <h3>{item.title}</h3>
                                  </div>
                              </div>
                              <div className="flip-card-back">
                                  <h3>{item.title}</h3>
                                  <p>{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </article>  
                      </SwiperSlide>                
                    ))
                  }
                </Swiper>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  )
}
