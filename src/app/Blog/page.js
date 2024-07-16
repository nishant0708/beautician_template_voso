"use client";
import React from "react";
import { FaCalendarAlt, FaComments } from "react-icons/fa";
import style from "../../beautician_components/Theme6.module.css";
import Image from "next/image";

const Page = () => {
  const blogs = [
    {
      image: "/Assets/blog1.png", // replace with actual paths to your images
      title: "Skin Care advice from a surgeon",
      date: "Apr 25, 2023",
      comments: 5,
      description:
        "We believe that the beauty is aeneset risusvitae semper ullamcorpe tellus felis sollicitus.",
    },
    {
      image: "/Assets/blog1.png",
      title: "Inner Beauty is the best beauty",
      date: "Apr 25, 2023",
      comments: 3,
      description:
        "We believe that the beauty is aeneset risusvitae semper ullamcorpe tellus felis sollicitus.",
    },
    {
      image: "/Assets/blog1.png",
      title: "Skin Care advice from a surgeon",
      date: "Apr 25, 2023",
      comments: 5,
      description:
        "We believe that the beauty is aeneset risusvitae semper ullamcorpe tellus felis sollicitus.",
    },
    {
      image: "/Assets/blog1.png",
      title: "Skin Care advice from a surgeon",
      date: "Apr 25, 2023",
      comments: 5,
      description:
        "We believe that the beauty is aeneset risusvitae semper ullamcorpe tellus felis sollicitus.",
    },

    {
      image: "/Assets/blog1.png",
      title: "Skin Care advice from a surgeon",
      date: "Apr 25, 2023",
      comments: 5,
      description:
        "We believe that the beauty is aeneset risusvitae semper ullamcorpe tellus felis sollicitus.",
    },
    {
      image: "/Assets/blog1.png",
      title: "Skin Care advice from a surgeon",
      date: "Apr 25, 2023",
      comments: 5,
      description:
        "We believe that the beauty is aeneset risusvitae semper ullamcorpe tellus felis sollicitus.",
    },
    {
      image: "/Assets/blog1.png",
      title: "Skin Care advice from a surgeon",
      date: "Apr 25, 2023",
      comments: 5,
      description:
        "We believe that the beauty is aeneset risusvitae semper ullamcorpe tellus felis sollicitus.",
    },
    {
      image: "/Assets/blog1.png",
      title: "Skin Care advice from a surgeon",
      date: "Apr 25, 2023",
      comments: 5,
      description:
        "We believe that the beauty is aeneset risusvitae semper ullamcorpe tellus felis sollicitus.",
    },
   
  ];

  return (
    <div className={style.blogmain}>
      <div className={style.blog_div}>
        <h1>Blogs</h1>
        <div className={style.blogcontainer}>
          {blogs.map((blog, index) => (
            <div key={index} className={style.blog_card}>
              <div className={style.blog_image_container}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className={style.blog_image}
                  width={300}
                  height={300}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/Assets/blog1.png";
                  }}
                />
              </div>
              <div className={style.blog_content}>
                <h3>{blog.title}</h3>
                <div className={style.blog_meta}>
                  <div className={style.blog_date}>
                    <FaCalendarAlt /> {blog.date}
                  </div>
                  <div className={style.blog_comments}>
                    <FaComments /> {blog.comments} Comments
                  </div>
                </div>
                <p>{blog.description}</p>
                <a href="#" className={style.read_more}>
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
