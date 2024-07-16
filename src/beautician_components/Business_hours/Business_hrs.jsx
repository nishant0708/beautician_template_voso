"use client";
import React from 'react'
import style from "@/beautician_components/Theme6.module.css"
import { FaRegCalendarAlt } from "react-icons/fa";
import Image from 'next/image';

// Sample business hours data
const businessHoursData = [
  { day: "Monday", hours: "9:00 AM - 5:00 PM" },
  { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
  { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
  { day: "Friday", hours: "9:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
  { day: "Sunday", hours: "9:00 AM - 5:00 PM" }
];

const Business_hrs = () => {
  return (
    <div className={style.business_hrs_main}>
      {/* Buisness Hours */}
      <div className={style.business_hrs}>
        <div className={style.business_hrs_heading}>
          <h1>Business Hours</h1>
        </div>
        <div className={style.timing_container_main}>
          {businessHoursData.map((businessHour, index) => (
            <div key={index} className={style.timing_box}>
              <div className={style.time_icon_container}>
                <FaRegCalendarAlt />
              </div>
              <div className={style.timings}>
                <p>{businessHour.day}</p>
                <p>{businessHour.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Book Appointment */}
      <div className={style.bookAppointment_container}>
        <div className={style.bookAppointment_img_container}>
          <Image
            src="/Assets/try1.jpg"
            alt=""
            width={200}
            height={200}
            loading="lazy"
            onError={(e) => {
              e.target.src = "/Assets/try1.jpg";
            }}
          />
        </div>
        <div className={style.calendar}></div>
      </div>
    </div>
  );
}

export default Business_hrs;
