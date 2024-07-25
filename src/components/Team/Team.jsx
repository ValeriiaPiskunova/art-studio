import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import data from "@/data/team.json";
import "./Team.scss";

const Team = () => {
  return (
    <div className="team">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="team__card">
              <img
                src={member.photo}
                alt={member.alt}
                className="team__photo"
                loading="lazy"
              />
              <h3 className="team__name">{member.name}</h3>
              <p className="team__position">{member.position}</p>
              <p className="team__text">{member.text}</p>
              <div className="team__socials">
                <a href={member.linkedin} target="_blank">
                  LinkedIn
                </a>
                <a href={member.twitter} target="_blank">
                  Twitter
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
