import React from "react";
import "./Portifolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Hoc from "../../img/hoc.png";
import figma1 from "../../img/figma1.PNG";
import figma2 from "../../img/figma2.PNG";
import figma3 from "../../img/figma3.PNG";

import MusicApp from "../../img/musicapp.png";
import "swiper/css";

function Portifolio() {
  return (
    <>
      <div className="portifolio">
        {/* heading */}
        <span>Recent Projects </span>
        <span>Portifolio</span>

        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portifolio-slider"
        >
          <SwiperSlide>
            <img src={figma1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={figma2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={figma3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MusicApp} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Portifolio;
