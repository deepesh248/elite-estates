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
import house6 from '../resource/images/pexels-expect-best-79873-323772.jpg'
import house7 from '../resource/images/pexels-expect-best-79873-323775.jpg'
import house8 from '../resource/images/pexels-expect-best-79873-323780.jpg'
import house9 from '../resource/images/pexels-scottwebb-1022936.jpg'
import house10 from '../resource/images/pexels-valeriiamiller-2587054.jpg'

function TopHighlightedProject() {
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
        houseName: "Sunset Paradise",
        by: "David Williams",
        bhk: "2BHK",
        location: "Pune",
        price: "40L - 80L",
        image: house6,
      },
      {
        houseName: "Elite Mansion",
        by: "Emma Davis",
        bhk: "5BHK",
        location: "Chennai",
        price: "3Cr - 6Cr",
        image: house7,
      },
      {
        houseName: "Urban Heights",
        by: "Liam Wilson",
        bhk: "3BHK",
        location: "Kolkata",
        price: "90L - 1.8Cr",
        image: house8,
      },
      {
        houseName: "Hillside Retreat",
        by: "Sophia Patel",
        bhk: "4BHK",
        location: "Shimla",
        price: "1.2Cr - 2.5Cr",
        image: house9,
      },
      {
        houseName: "Grand Avenue",
        by: "Noah Carter",
        bhk: "6BHK",
        location: "Bangalore",
        price: "5Cr - 10Cr",
        image: house10,
      },
  ]);
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <>
      <div className={style.container}>
        <h1>Top Highlighted Projects</h1>
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

export default TopHighlightedProject;
