import React from 'react';
import { ownBowl2 } from '../../../data/home';
import Image from 'next/image';

export const MakeYourOwnBowl = () => {

  return (
    <div className="own-bowl">
        {
            Object.entries(ownBowl2).map(([key, pair],index)=>(
                <div className="category" key={index}>
                    <div className="cate-title">{key}</div>
                    <div className="cate-items">
                        {
                            pair.map((item, index)=>(
                                <div className="item-card" key={index}>
                                    <div className="image-section">
                                        <Image src={item.image} alt={item.title}/>
                                    </div>
                                    <div className="text-section">
                                        <div className="title">{item.title}</div>
                                        <div className="desc">{item.description}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
  )
}
