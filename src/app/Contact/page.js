import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import style from "@/beautician_components/Theme6.module.css";
import { IoCall } from "react-icons/io5";
const page = () => {
  return (
    <div className={style.contact_main}>
      <div className={style.contact_div}>
        <h1>Contact Us</h1>
        <div className={style.contact_form}>
          <div className={style.contact_left}>
            <div className={style.rowone}>
              <div className={style.inputbox}>
                <label>FirstName</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className={style.inputbox}>
                <label>LastName</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className={style.rowone}>
              <div className={style.inputbox}>
                <label>Email</label>
                <input type="text" placeholder="First Name" />
              </div>
              <div className={style.inputbox}>
                <label>Mobile No.</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className={style.inputbox}>
              <label>Message</label>
              <textarea type="text" placeholder="Message" />
            </div>
            <p className={style.contact_submit}>Submit</p>
          </div>
          <div className={style.contact_right}>
            <p className={style.contact_right_head}> Contact Information</p>
            <div className={style.contact_box}>
              <span>
                <IoCall />
              </span>
              <p>+1012 3456 789</p>
            </div>
            <div className={style.contact_box}>
              <span>
                <FaRegEnvelope />
              </span>
              <p>demo@gmail.com</p>
            </div>
            <div className={style.contact_box}>
              {" "}
              <span>
                <CiLocationOn />
              </span>
              <p>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>
            <div className={style.circle}></div>
            <div className={style.circle2}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
