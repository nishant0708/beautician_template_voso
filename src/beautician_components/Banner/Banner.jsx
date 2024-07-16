"use client";
import React from "react";
import style from "@/beautician_components/Theme6.module.css";
import Image from "next/image";

const Banner = () => {

  return (
    <div className={style.banner_main}>
      <Image
        src="/Assets/bannerimg.png"
        alt=""
        fill
        loading="lazy"
        onError={(e) => {
          e.target.src = "/Assets/bannerimg.png";
        }}
      />
      <div className={style.banner}>
        <div className={style.bannerContent}>
          <h1>HOME BASED ORGANIC SKIN CARE</h1>
          <p>
            Bringing you a range of high-quality skin care made from 100%
            organic
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
