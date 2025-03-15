import "../css/swiper.css";
import style from "../css/propertyContainer.module.css";
import style2 from "../css/propertyContainerTwo.module.css";
import PropertyTwo from "./PropertyTwo";
import React, { useRef, useState, useEffect, useCallback } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import house1 from '../resource/images/apartments-1845884_1280.jpg'
import house2 from '../resource/images/building-7077718_1280.jpg'
import house3 from '../resource/images/graz-7303533_1280.jpg'
import house4 from '../resource/images/house-5148865_1280.jpg'
import house5 from '../resource/images/house-8364394_1280.jpg'
import house6 from '../resource/images/building-8536587_1280.jpg'

function PropertyContainerTwo() {
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
  function getSlidesPerView() {
    if (window.innerWidth <= 820) return 2;
    return 4;
  }

  const handleResize = useCallback(() => {
    setSlidesPerView(getSlidesPerView());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  const [properties, setProperties] = useState([
    {
      img: house1,
      house: "Orchid",
      bhk: "2 BHK",
      location: "Bangalore, India",
      price: "₹25,000/month",
    },
    {
      img: house2,
      house: "Maple",
      bhk: "3 BHK",
      location: "Bangalore, India",
      price: "₹32,000/month",
    },
    {
      img: house3,
      house: "Cedar",
      bhk: "2 BHK",
      location: "Bangalore, India",
      price: "₹18,000/month",
    },
    {
      img: house4,
      house: "Willow",
      bhk: "4 BHK",
      location: "Bangalore, India",
      price: "₹40,000/month",
    },
    {
      img: house5,
      house: "Birch",
      bhk: "2 BHK",
      location: "Bangalore, India",
      price: "₹29,000/month",
    },
    {
      img: house6,
      house: "Pine",
      bhk: "3 BHK",
      location: "Bangalore, India",
      price: "₹35,000/month",
    },
  ]);
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <>
      <div className={style.container}>
        <h1>Rent Near Your Area</h1>
        <div className={style.swiper}>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={slidesPerView}
            centeredSlides={false}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className={`${"mySwiper"} ${style2.swiper}`}
          >
            {properties.map((property, index) => (
              <SwiperSlide>
                <PropertyTwo
                  key={index}
                  img={property.img}
                  house={property.house}
                  bhk={property.bhk}
                  location={property.location}
                  price={property.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default PropertyContainerTwo;
