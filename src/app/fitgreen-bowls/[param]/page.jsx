"use client";
import React, { useEffect, useState } from 'react'
import { useParams } from "next/navigation";
import { products } from '../../../../data/home';
import Image from 'next/image';
import { ContactUs } from '@/app/home/ContactUs';
import Link from 'next/link';

const page = () => {
    const params = useParams();
    const [theProd, setProd] = useState(products.find(obj => obj.title == params.param.split("-").join(" ")))
    useEffect(()=>{
        setProd(products.find(obj => obj.title == params.param.split("-").join(" ")))
    }, [params.param])
    
    console.log(theProd)
  return (
    <div className="product-single">
        <div className="container">
            <div className="content-split">
                <div className="left">
                    <div className="image-container">
                        <Image src={theProd.image} alt={theProd.title}/>
                    </div>
                    <div className="thumb">
                        <Image src={theProd.image} alt={theProd.title}/>
                    </div>

                </div>
                <div className="right">
                    <h2>{theProd.title}</h2>
                    <div className="price">
                        <div className="old">Rs. {theProd.price?.old}</div>
                        <div className="current"><span>Rs. {theProd.price?.current}</span> <span>{theProd.price.discount}</span></div>
                    </div>
                    <div className="action-group">
                        <Link href={"https://order.fitgreen.in/"} target='_blank'>
                            <div className="btn-primary green">order now</div>
                        </Link>
                        <Link href={"https://wa.me/+919147741444"} target='_blank'>
                            <div className="btn-primary gray">whatsapp us</div>
                        </Link>                        
                    </div>

                    <hr />

                    <div className="title">meet your bowl</div>
                    <div className="text">{theProd.description}</div>

                    <div className="title">bowl superpowers</div>
                    <div className="text">
                        <ul>
                            {
                                theProd.highlights?.map((item, index)=>(
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="title">bowl antomy</div>
                    <div className="text">
                        <ul>
                            {
                                theProd.ingredients?.map((item, index)=>(
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="title">macro map</div>
                    <div className="text">
                        {
                            Object.entries(theProd.nutrition || {}).map(([key, pair], index)=>(
                                <div className="calories" key={index}><span>{key}</span> <span>{pair}</span></div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <ContactUs/>
        </div>        
    </div>    
  )
}

export default page