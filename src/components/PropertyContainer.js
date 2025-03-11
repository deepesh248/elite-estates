import style from "../css/propertyContainer.module.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import Property from "./Property";
import house1 from '../resource/images/pexels-scottwebb-1029599.jpg'

function PropertyContainer() {
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
      image: house1,
    },
    {
      houseName: "Green Nest",
      by: "Alice Johnson",
      bhk: "4BHK",
      location: "Bangalore",
      price: "70L - 1.5Cr",
      image: house1,
    },
    {
      houseName: "Sky Heights",
      by: "Robert Lee",
      bhk: "3BHK",
      location: "Mumbai",
      price: "1Cr - 2Cr",
      image: house1,
    },
    {
      houseName: "Royal Residency",
      by: "Sophia Brown",
      bhk: "5BHK",
      location: "Delhi",
      price: "2Cr - 5Cr",
      image: house1,
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
            slidesPerView={2}
            centeredSlides={false}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              530: {   // 👈 When screen width is 530px or less
                slidesPerView: 1
              },
              768: {   // 👈 When screen width is 768px or more
                slidesPerView: 2
              },
              1024: {  // 👈 When screen width is 1024px or more
                slidesPerView: 2
              }
            }}
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
