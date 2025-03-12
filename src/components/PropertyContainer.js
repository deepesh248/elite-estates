import style from "../css/propertyContainer.module.css";
import '../css/swiper.css'
import React, { useRef, useState, useEffect, useCallback } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import Property from "./Property";
import house1 from '../resource/images/pexels-binyaminmellish-1396122.jpg'
import house2 from '../resource/images/pexels-emrecan-2079234.jpg'
import house3 from '../resource/images/pexels-expect-best-79873-323776.jpg'
import house4 from '../resource/images/pexels-pixabay-53610.jpg'
import house5 from '../resource/images/pexels-pixabay-259588.jpg'

function PropertyContainer() {
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
  function getSlidesPerView() {
    if (window.innerWidth <= 820) return 1;
    return 2;
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
      houseName: "Dream Villa",
      by: "John Doe",
      bhk: "3BHK",
      location: "Hyderabad",
      price: "30L - 60L",
      image: house1,
    },
    {
      houseName: "Ocean View",
      by: "Mike Smith",
      bhk: "2BHK",
      location: "Goa",
      price: "50L - 1Cr",
      image: house2,
    },
    {
      houseName: "Green Nest",
      by: "Alice Johnson",
      bhk: "4BHK",
      location: "Bangalore",
      price: "70L - 1.5Cr",
      image: house3,
    },
    {
      houseName: "Sky Heights",
      by: "Robert Lee",
      bhk: "3BHK",
      location: "Mumbai",
      price: "1Cr - 2Cr",
      image: house4,
    },
    {
      houseName: "Royal Residency",
      by: "Sophia Brown",
      bhk: "5BHK",
      location: "Delhi",
      price: "2Cr - 5Cr",
      image: house5,
    },
  ]);
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <>
      <div className={style.container}>
        <h1>Featured Property</h1>
        <div className={style.swiper}>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={slidesPerView}
            centeredSlides={false}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            
            {properties.map((property, index) => (
              <SwiperSlide>
        <Property
          key={index}
          houseName={property.houseName}
          by={property.by}
          bhk={property.bhk}
          location={property.location}
          price={property.price}
          imgage={property.image}
                />
                </SwiperSlide>
      ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default PropertyContainer;
