"use client";
import React from "react";
import style from "@/beautician_components/Theme6.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {


  return (
    <div className={style.footer_new}>
      <div className={style.footer_new_contents}>
        <div className={style.footer_left_social}>
          <div className={style.footer_left_social_image_container}>
            <Image
              src={`/Assets/logo1.png`}
              width={50}
              height={50}
              alt="footer-logo"
              className={style.footer_logo_image}
              loading="lazy"
              onError={(e) => {
                e.target.src = "/Assets/logo1.png";
              }}
            />
          </div>
        </div>
        <div className={style.footer_center_right_products}>
          <div className={style.footer_center_right_productlist}>
            <h3>Different Pages</h3>
            <div className={style.footer_center_right_productlist_item}>
              <p>
                <Link href="#" className={style.link}>
                  About
                </Link>
              </p>
              <p>
                <Link href="" className={style.link}>
                  Services
                </Link>
              </p>
              <p>
                <Link href="#" className={style.link}>
                  Blog
                </Link>
              </p>
              <p>
                <Link href="#" className={style.link}>
                  Privacy & Policy
                </Link>
              </p>
              <p>
                <Link href="#" className={style.link}>
                  Terms & Condition
                </Link>
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className={style.footer_center_left_products}>
          <div className={style.footer_center_left_productlist}>
            <h3>Treatments</h3>
            <div className={style.footer_center_left_productlist_item}>
              <p>
                <Link href="#" className={style.link}>
                  SkinCare
                </Link>
              </p>
              <p>
                <Link href="#" className={style.link}>
                  BodyCare
                </Link>
              </p>
              <p>
                <Link href="#" className={style.link}>
                  Nails
                </Link>
              </p>
              <p>
                <Link href="#" className={style.link}>
                 appliances
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className={style.footer_right_products}>
          <div className={style.footer_center_productlist}>
            <h3>Contact US</h3>
            <div className={style.footer_center_productlist_item}>
              <p>
                {" "}
                <span>
                  <FaHome />
                </span>{" "}
                New York, NY 10012, US
              </p>
              <p>
                <span>
                  <IoIosMail />
                </span>
                krishiconnect@gmail.com
              </p>
              <p>
                <span>
                  <IoCall />
                </span>
                082723 67238
              </p>
              <div className={style.footer_left_Social_icon_container}>
                <div className={style.footer_left_social_icons}>
                  <Link href="#">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      fill="#007b00"
                      viewBox="0 0 32 32"
                    >
                      <path d="M 19.253906 2 C 15.311906 2 13 4.0821719 13 8.8261719 L 13 13 L 8 13 L 8 18 L 13 18 L 13 30 L 18 30 L 18 18 L 22 18 L 23 13 L 18 13 L 18 9.671875 C 18 7.884875 18.582766 7 20.259766 7 L 23 7 L 23 2.2050781 C 22.526 2.1410781 21.144906 2 19.253906 2 z"></path>
                    </svg>
                  </Link>
                </div>
                <div className={style.footer_left_social_icons}>
                  <Link href="#">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      fill="#007b00"
                      viewBox="0 0 32 32"
                    >
                      <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
                    </svg>
                  </Link>
                </div>
                <div className={style.footer_left_social_icons}>
                  <Link href="#">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      fill="#007b00"
                      viewBox="0 0 24 24"
                    >
                      <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footer_new_copyright}>
        © 2024 Copyright: vosovyapar All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
