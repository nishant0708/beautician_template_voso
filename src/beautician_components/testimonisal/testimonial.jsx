"use client";
import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import style from "@/beautician_components/Theme6.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    image: "/Assets/blog1.png", // replace with actual paths to your images
    text: "Diam volutpat commodo sed egestas. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Nulla malesuada pellentesque elit eget gravida cum sociis natoque et ul labore.",
    name: "Kathryn",
  },
  {
    image: "/Assets/blog1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    name: "John Doe",
  },
  {
    image: "/Assets/blog1.png",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Jane Smith",
  },
];

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${style.arrow} ${style.next}`} onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={`${style.arrow} ${style.prev}`} onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const isLightColor = (color) => {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
};

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={style.testimonial_main}>
      <div className={style.testimonial_div}>
        <h2>Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => {
            const bgColor = getRandomColor();
            const textColor = isLightColor(bgColor) ? "black" : "white";
            return (
              <div key={index} className={style.testimonial_card}>
                <div className={style.testimonial_img_container}>
                  <p
                    className={style.testimonial_image}
                    style={{ backgroundColor: bgColor, color: textColor }}
                  >
                    {testimonial.name.charAt(0)}
                  </p>
                </div>
                <p>{testimonial.text}</p>
                <p className={style.testimonial_author}>~{testimonial.name}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
