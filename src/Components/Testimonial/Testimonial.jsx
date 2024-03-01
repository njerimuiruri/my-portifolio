import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from 'swiper';
import "swiper/css";
// import 'swiper/css/pagination';
import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4 from "../../img/profile4.jpg";
import "./Testimonial.css";

function Testimonial() {
  const clients = [
    {
      img: profilepic1,
      review:
        "Working with Faith Muiruri was an absolute pleasure! Her attention to detail and expertise in web development truly impressed me. She was able to bring my vision to life seamlessly, and the final result exceeded my expectations. I highly recommend Faith for any web development project!",
    },
    {
      img: profilepic2,
      review:
        "I can't thank Faith Muiruri enough for her exceptional work on my project. Her dedication, professionalism, and problem-solving skills were evident throughout the entire process. The website she created for me is not only visually stunning but also highly functional. I wouldn't hesitate to collaborate with Faith again in the future!",
    },
    {
      img: profilepic3,
      review:
        "Choosing Faith Muiruri for my web development needs was one of the best decisions I've made. She delivered beyond my expectations and was a pleasure to work with. Her expertise in both frontend and backend development ensured that my website was top-notch in terms of design and functionality. I highly recommend Faith to anyone looking for a skilled and reliable developer!",
    },
    {
      img: profilepic4,
      review:
        "I had the pleasure of collaborating with Faith Muiruri on a web development project, and I couldn't be happier with the results. Faith's passion for coding and attention to detail are evident in her work. She consistently went above and beyond to ensure that every aspect of the project was executed flawlessly. Her professionalism and expertise make her a valuable asset to any team. I highly recommend Faith for any web development endeavor!",
    },
  ];

  return (
    <>
      <div className="t-wrapper">
        <div className="t-heading">
          <span>Clients always get</span>
          <span>Exceptional work</span>
          <span>from me ....</span>

          <div
            className="blur t-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
          <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        </div>
        {/* slider */}
        <Swiper
          //   modules={[ Pagination ]}
          slidesPerView={1}
          //   pagination={{ clickable: true }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Testimonial;
