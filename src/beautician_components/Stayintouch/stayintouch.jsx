import React from 'react'
import style from "@/beautician_components/Theme6.module.css"

const Stayintouch = () => {
  return (
    <div className={style.sit_main}>
    
        <div className={style.sitcontainer}>
            <h1>Let&apos;s stay in touch</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum amet voluptates assumenda odio fugit at rerum sint voluptatem eos, dolor molestias, velit inventore consectetur nemo itaque esse maiores sunt veritatis.</p>
            <div className={style.sit_form_container}>
            <input type='text' placeholder='Name'/>
            <input type="tel" placeholder="Mobile No."/>
            </div>
            <div className={style.sit_email}>
            <input type="email" placeholder="Email Address"/>
            <p className={style.sit_button}> Subscribe </p>
            </div>

        </div>

    </div>
  )
}

export default Stayintouch