"use client";
import React, { useState } from "react";
import style from "@/beautician_components/Theme6.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const Navbar = ({ data }) => {
  const [isOpen, setOpen] = useState(false);
  // const BACKEND_URL = "https://api.vosovyapar.com/api/p1";
  const handleToggle = () => {
    setOpen(!isOpen);
  };
  // console.log("Navbar",data)
  return (
    <div className={style.navbar_main}>
      <div className={style.navbar}>
        <div className={style.hamburger} onClick={handleToggle}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div className={style.navbar_img}>
          <Image
            src={`/Assets/logo.svg`}
            alt=""
            width={200}
            height={100}
            loading="lazy"
            onError={(e) => {
              e.target.src = "/Assets/logo.svg";
            }}
          />
        </div>
        <div
          className={`${isOpen ? style.navbar_content : style.navbar_contents}`}
        >
          <div
            className={`${style.navbar_list} ${isOpen ? style.toggled : ""}`}
          >
            <Link href="/">
              <p>Home</p>
            </Link>
            <Link href="/About">
              <p>About</p>
            </Link>
            <Link href="/Services">
              <p>Service</p>
            </Link>
            <Link href="/Contact">
              <p>Contact</p>
            </Link>
            <Link href="/Blog">
              <p>Blog</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
