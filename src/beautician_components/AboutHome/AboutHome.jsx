"use client";
import React from 'react'
import style from "@/beautician_components/Theme6.module.css"
import Image from 'next/image'

const AboutHome = () => {
  return (
    <div className={style.aboutHome_main}>
        <div className={style.AboutHome}>
        <div className={style.imagebigcontainer}>
         <div className={style.abouthomeimgcontainer}>
          <Image src="/Assets/try1.jpg" alt=""  width={500} height={500} loading='lazy'onError={(e)=>{e.target.src = "/Assets/try1.jpg";}}/> 
         </div>

         </div>
         <div className={style.aboutContent}>
          <h1>ABOUT US</h1>
           <p className={style.about}>
          Welcome to Glass Skin Effect, Home based organic skin care
 manufacturer,bringing you a range of high-quality skin care made
 from 100% organic. Lorem ipsum dolor sit amet, consectetur
 adipiscing elit, sed do eiusmod tempor incididunt ut labore magn.
 </p><p className={style.about}>
 Diam volutpat commodo sed egestas.Nisi quis eleifend quam
adipiscing vitae proin sagittis nisl. Nulla malesuada pellentes elit
eget gravida cum sociis natoque penatibus.
          </p>
        <p className={style.aboutbutton}>View More</p>
         </div>
        </div>
        
    </div>
  )
}

export default AboutHome