"use client";
import React from 'react'
import style from "@/beautician_components/Theme6.module.css"
import Image from 'next/image'

// Sample services data
const servicesData = [
  {
    id: 1,
    imageSrc: "/Assets/service1.png",
    title: "Only pay if your condition improves after treatment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eligendi vitae totam fugit cum dolore quia ipsum earum molestiae, nulla nemo! Atque dicta quia culpa nobis est in, dolores explicabo?"
  },
  {
    id: 2,
    imageSrc: "/Assets/service1.png",
    title: "Only pay if your condition improves after treatment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eligendi vitae totam fugit cum dolore quia ipsum earum molestiae, nulla nemo! Atque dicta quia culpa nobis est in, dolores explicabo?"
  },
  {
    id: 3,
    imageSrc: "/Assets/service1.png",
    title: "Only pay if your condition improves after treatment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eligendi vitae totam fugit cum dolore quia ipsum earum molestiae, nulla nemo! Atque dicta quia culpa nobis est in, dolores explicabo?"
  },
  {
    id: 4,
    imageSrc: "/Assets/service1.png",
    title: "Only pay if your condition improves after treatment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eligendi vitae totam fugit cum dolore quia ipsum earum molestiae, nulla nemo! Atque dicta quia culpa nobis est in, dolores explicabo?"
  }
  // Add more services as needed
];

const Services = () => {
  return (
    <div className={style.services_main}>
      <div className={style.beau_services_Container}>
        <h1 className={style.service_heading}>Our Services</h1>

        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className={`${style.oddservices} ${
              index % 2 === 1 ? style.even : ""
            }`}
          >
            {index % 2 === 1 && <div className={style.ternary_back}></div>}
            <div className={style.service_imgcontainer}>
              <Image
                src={service.imageSrc}
                alt={service.title}
                width={300}
                height={300}
                loading="lazy"
                onError={(e) => {
                  e.target.src = "/Assets/service1.png";
                }}
              />
            </div>
            <div className={style.service_detail}>
              <h1>{service.title}</h1>
              <p className={style.service_desc}>{service.description}</p>
              <p className={style.service_but}>View More</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services
