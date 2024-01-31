import React from 'react';
import AboutImage from '../Media/about.png';
import logo2 from '../Media/Logo2.png';
import {Link} from 'react-router-dom'


function About() {
  return (
    <>
      <div className='flex'>
        <div className=' h-screen w-1/2'>
          <img src={AboutImage} alt="about-image" className='h-full w-full object-cover'></img>
        </div>
        <div className=' h-screen w-1/2'>
           <div className=' flex flex-col items-center '>
           <Link to='/'>
            <img src={logo2} alt='logo2-nutrihive' className='w-70 h-20'></img>
          <p className='text-bolder text-sm m-2 '>WHERE NATURE MEETS NOURISHMENT</p>
          </Link> 
            </div> 
            <div className=' flex flex-col items-center text-2xl mt-20 text-center'>
                <p className='text-3xl m-3'><b>Our Vision </b></p>
                <p>"At Nutrihive, we are committed to revolutionizing the health supplementation industry by offering a diverse range of meticulously formulated products. Our dedication extends beyond just providing supplements; we aim to educate and inspire individuals on the journey to better health.
<br/><br/>
Driven by the belief that everyone deserves access to premium nutrition, we prioritize transparency, scientific innovation, and a customer-centric approach. Our team of experts is passionate about delivering solutions that cater to unique health needs, ensuring that our customers feel empowered on their wellness journey.
<br/><br/>
By fostering a community that values health and fitness, we strive to create a positive impact on lives. Nutrihive is not just a brand; it's a lifestyle choice—a commitment to holistic well-being. Join us in spreading the message of vitality, resilience, and the pursuit of a healthier, happier life. Together, let's build a community that thrives on the principles of wellness and supports each other in achieving peak health."</p>
<p className='mt-5'><b>- Aditya Bhattacharjee , Developer NutriHive 2024</b></p>
            </div>
         
        </div>
      </div>
     
    </>
  );
}

export default About;
