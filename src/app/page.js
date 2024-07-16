import AboutHome from '@/beautician_components/AboutHome/AboutHome';
import Banner from '@/beautician_components/Banner/Banner';
import Business_hrs from '@/beautician_components/Business_hours/Business_hrs';
import Services from '@/beautician_components/Services/Services';
import Stayintouch from '@/beautician_components/Stayintouch/stayintouch';
import Testimonial from '@/beautician_components/testimonisal/testimonial';
import React from 'react'

const page = () => {
  const colorScheme = {
    primary: "#CDA29B",  //pink
    background: "#fdfafa", //lighwhite
    secondary: "#59453c", //brown
    ternary: "#F7F1F1", //lightgreyback
    primary_text: "#F3E9E7",//light white text
    secondary_text: "#908684",//light brown text
  };
  return (
    <div>
      <Banner />
      <AboutHome />
      <Services />
      <Testimonial />
      <Business_hrs />

      <Stayintouch />
    </div>
  );
}

export default page
