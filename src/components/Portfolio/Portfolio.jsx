import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Amazonp from "../../img/amazonp.png";
import Travel from "../../img/Travel.png";
import Trendy from "../../img/Trendy.png";
import forcast from "../../img/forcast.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Amazon Clone</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Amazonp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Travel} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Trendy} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={forcast} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
