"use client";
import React, { useState } from 'react'
import { CuratedBowls } from './CuratedBowls'
import { MakeYourOwnBowl } from './MakeYourOwnBowl'

export const Allproducts = () => {

  const [activeType, setType] = useState('curated');
  const [fadeKey, setFadeKey] = useState(0);
  const handleActiveType = (type) =>{
    if(type != activeType){
      console.log(type)
      setType(type)
      setFadeKey(prev => prev + 1);
    }
  }

  return (
    <div className="container">

      <div className="btn-group">
        <div className={`btn-primary ${activeType == "curated" ? 'active':''}`} onClick={()=>handleActiveType('curated')}>curated bowls</div>
        <div className={`btn-primary ${activeType == "own_bowl" ? 'active':''}`} onClick={()=>handleActiveType('own_bowl')}>make your own bowl</div>
      </div>
      <div className="fadeIn" key={fadeKey}>
        {
          activeType == 'curated' ? <CuratedBowls/> : <MakeYourOwnBowl/>
        }
      </div>
    </div>
  )
}
