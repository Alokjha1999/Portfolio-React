import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import vit from "../../img/vit.png";
import BNMU from "../../img/BNMU.jpg";
import BSEB from "../../img/BSEB.jpg";
// import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: vit,
      review:
        "Vellore instittue of Technology(VIT) (2021-23)",
        course:"Master of Computer Application(MCA)",
        marksheetLink: "https://example.com/marksheet-vit",
    },
    {
      img: BNMU,
      review:
        "BNMU Madhepura (2017-20).",
        course:"Bachelor of Computer Application ",
        marksheetLink: "https://drive.google.com/file/d/1w0LwI8yXjhwJvQxEBu6IlesNe0pdiTla/view?usp=drive_link",
    },
    {
      img: BSEB,
      review:
      "BSEB Bihar (2015-17).",
      course:"XIIth ",
      marksheetLink: "https://drive.google.com/file/d/1w0LwI8yXjhwJvQxEBu6IlesNe0pdiTla/view?usp=drive_link",
  },
    
    
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Academic </span>
        <span>Qulification </span>
        <span></span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
                <p>
                  
                  Course: {client.course} <br />
                  
                  Marksheet Link:{" "}
                  <a href={client.marksheetLink} target="_blank" rel="noopener noreferrer">
                    View Marksheet
                  </a>
                  </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;