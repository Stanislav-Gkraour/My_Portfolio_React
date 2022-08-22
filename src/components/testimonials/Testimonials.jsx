import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const testimonialData = [
  {
    avatar: AVTR1,
    client_name: "Alicia Doumont",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur minima, vero accusamus aliquid nam voluptates ex blanditiis eveniet nulla eaque quibusdam possimus cumque atque, eligendi at quisquam sit veritatis quas?"
  },
  {
    avatar: AVTR2,
    client_name: "Felix Baresch",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur minima, vero accusamus aliquid nam voluptates ex blanditiis eveniet nulla eaque quibusdam possimus cumque atque, eligendi at quisquam sit veritatis quas?"
  },
  {
    avatar: AVTR3,
    client_name: "Daniel Cirap",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur minima, vero accusamus aliquid nam voluptates ex blanditiis eveniet nulla eaque quibusdam possimus cumque atque, eligendi at quisquam sit veritatis quas?"
  },
  {
    avatar: AVTR4,
    client_name: "Toni Captain",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur minima, vero accusamus aliquid nam voluptates ex blanditiis eveniet nulla eaque quibusdam possimus cumque atque, eligendi at quisquam sit veritatis quas?"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonialData.map(({ avatar, client_name, review }) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{client_name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
