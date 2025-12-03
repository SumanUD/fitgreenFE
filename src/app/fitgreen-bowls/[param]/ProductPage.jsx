"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactUs } from "@/app/home/ContactUs";

export default function ProductPage({ product }) {
  if (!product) {
    return (
      <div className="container" style={{ padding: "100px 20px" }}>
        <h1>Product Not Found</h1>
        <Link href="/fitgreen-bowls">
          <div className="btn-primary">Go Back</div>
        </Link>
      </div>
    );
  }

  return (
    <div className="product-single">
      <div className="container">
        <div className="content-split">

          {/* LEFT */}
          <div className="left">
            <div className="image-container">
              <Image src={product.image} alt={product.title} />
            </div>

            <div className="thumb">
              <Image src={product.image} alt={product.title} />
            </div>
          </div>

          {/* RIGHT */}
          <div className="right">
            <h2>{product.title}</h2>

            <div className="price">
              <div className="old">Rs. {product.price?.old}</div>
              <div className="current">
                <span>Rs. {product.price?.current}</span>{" "}
                <span>{product.price?.discount}</span>
              </div>
            </div>

            <div className="action-group">
              <Link href="https://order.fitgreen.in/" target="_blank">
                <div className="btn-primary green">order now</div>
              </Link>

              <Link href="https://wa.me/+919147741444" target="_blank">
                <div className="btn-primary gray">whatsapp us</div>
              </Link>
            </div>

            <hr />

            <div className="title">meet your bowl</div>
            <div className="text">{product.description}</div>

            <div className="title">bowl superpowers</div>
            <ul className="text">
              {product.highlights?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="title">bowl anatomy</div>
            <ul className="text">
              {product.ingredients?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="title">macro map</div>
            <div className="text">
              {Object.entries(product.nutrition || {}).map(
                ([key, val], i) => (
                  <div className="calories" key={i}>
                    <span>{key}</span> <span>{val}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <ContactUs />
      </div>
    </div>
  );
}
