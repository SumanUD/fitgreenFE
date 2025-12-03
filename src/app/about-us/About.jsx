import React from 'react';
import Image from 'next/image';

import mem1 from '@/assets/images/team1.jpg';
import mem2 from '@/assets/images/tm2.jpg';
import img from '@/assets/images/salad.jpg';
import Link from 'next/link';

export const About = () => {

    const values = [
        {
            title: "Taste First",
            description:
            "We believe healthy food should never be boring. Every bowl we create is packed with bold flavors, carefully balanced spices, and textures that make every bite exciting, so you can enjoy food without ever feeling like you’re compromising on taste."
        },
        {
            title: "Nutrition Always",
            description:
            "Every recipe is designed to fuel your body efficiently. From portion sizes to macro balance, our meals are built to energize your day, support overall wellness, and ensure that every ingredient contributes meaningfully to your health goals."
        },
        {
            title: "No Compromise",
            description:
            "We never cut corners. Only top-quality, nutrition-rich ingredients make it into our bowls. Every choice from grains and proteins to dressings and toppings is made to maximize health benefits while keeping flavor front and center."
        },
        {
            title: "Look Good, Feel Good",
            description:
            "Our food is crafted to help you feel vibrant, confident, and energized while supporting your body inside and out. Eating well shouldn’t just be about nutrition, it should make you look and feel your best every day."
        },
        {
            title: "Thoughtful Craft",
            description:
            "Each recipe is meticulously planned, tested, and refined. We consider everyday dietary needs, balance of macros, and sensory appeal, so that every bowl you eat is consistent, satisfying, and thoughtfully designed to keep you energized and nourished."
        },
        {
            title: "Made for Daily Life",
            description:
            "Our bowls are built to be your everyday go-to meal — balanced, repeatable, and never boring. With flavors that stay exciting and nutrition that keeps pace with your lifestyle, FitGreen is food you can count on, day after day."
        }
    ];

  return (
    <section className="section2">
        <div className="container">
            <div className="stroke-title">what fitgreen is about</div>

            <div className="content-split">
                <div className="group">
                    <h3>Born to Break Healthy Food Myth</h3>
                    <p>FitGreen was born from a simple idea - healthy food doesn’t have to be boring. In a city that celebrates indulgence at every corner, we wondered, why should eating well mean compromise? Our mission is to bring nutrition-dense, flavor-packed bowls to everyday life, so that looking after your body feels joyful, not restrictive. Every bowl we serve carries a promise: taste that excites, nutrition that fuels, and a ritual that fits seamlessly into your day.</p>
                </div>
                <div className="group">
                    <h3>How We Make It Happen</h3>
                    <p>At FitGreen, we do things differently. Every recipe is meticulously crafted — portioned, balanced, and designed for everyday health. We use top-quality ingredients to maximize nutrition, minimize compromises, and keep flavors bold. Our bowls are macro-balanced, portion-controlled, and designed to energize your day without guilt. From sourcing the freshest ingredients to building meals that are repeatable and satisfying, our approach is taste-forward and always approachable.</p>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="stroke-title">our values</div>
            <div className="values">
            {
                values.map((value, index)=>(
                    <div className="value-card" key={index}>
                        <div className="title">{value.title}</div>
                        <div className="description">{value.description}</div>
                    </div>
                ))
            }   
            </div>
        </div>

        <div className="container">
            <div className="stroke-title">meet our team</div>
            <div className="our-team">
                <div className="member">
                    <div className="profile">
                        <Image src={mem1} alt='member'/>
                    </div>
                    <div className="info">
                        <div className="name">anindya datta</div>
                        <div className="title"><span>principal investor</span>, <span>fitGreen</span></div>
                        <div className="description">
                            <p>Anindya Datta is a leading technologist and innovator, with core contributions in best-in-class large-scale data management solutions and internet technologies. As Founder, CEO and Chairman of Mobilewalla, Anindya has pioneered consumer behavioural and identity analysis by applying groundbreaking data science techniques on the industry's largest database of consumer data. Prior to Mobilewalla, Anindya founded and ran Chutney Technologies, acquired by Cisco Systems in 2005. He has also been on the faculties of major research universities and institutes in the United States and abroad, including Georgia Institute of Technology, University of Arizona, National University of Singapore, and Bell Laboratories. Anindya obtained his undergraduate degree from the Indian Institute of Technology (IIT) Kharagpur, and his MS and Ph.D. degrees from the University of Maryland, College Park. He resides in Atlanta, USA and is the Principal Investor in FitGreen, bringing his entrepreneurial vision and passion for innovation to help redefine how everyday food can be both healthy and delightful</p>
                        </div>
                    </div>
                </div>
                <div className="member">
                    <div className="profile">
                        <Image src={mem2} alt='member'/>
                    </div>
                    <div className="info">
                        <div className="name">Soumita Roy Choudhury</div>
                        <div className="title"><span>investor</span>, <span>fitGreen</span></div>
                        <div className="description">
                            <p>Soumita Roy Choudhury is the Vice President for APAC at Mobilewalla, where she brings over two decades of experience in sales, operations, and business leadership across technology and consulting industries. </p>
                            <p>She holds an MBA from INSEAD, France, and a degree in engineering from the National Institute of Technology, Silchar, India. Currently based in Singapore, Soumita has built a reputation for driving growth, fostering innovation, and leading high-impact teams across diverse markets. </p>
                            <p>Beyond her corporate achievements, Soumita is deeply passionate about healthy living and wellness. Her values align strongly with Fitgreen, reflecting her belief in integrating health, fitness, and balance into both professional and personal life.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="stroke-title">explore fitgreen bowls</div>
            <div className="banner">
                <Image src={img} alt='banner-img'/>
                <Link href={'/'}>
                    <div className="btn-primary">view bowls</div>
                </Link>
            </div>
        </div>        
    </section>
  )
}
