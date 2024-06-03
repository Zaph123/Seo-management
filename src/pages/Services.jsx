import service_icon_1 from '../assets/images/service-icon-01.png'
import service_icon_2 from '../assets/images/service-icon-02.png'
import service_icon_3 from '../assets/images/service-icon-03.png'
import service_icon_4 from '../assets/images/service-icon-04.png'
import svgImg1 from '../assets/images/services-left-dec.png'
import svgImg2 from '../assets/images/services-right-dec.png'

import { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';


// Import Swiper styles


  const Services = () => {
    const serviceItem = [
        {
          id: 1,  
          heading: "Learn More about our Guidelines",
          icon: service_icon_1,
          subheading: "Feel free to use this template for your business",
        },
        {
          id: 2,  
          heading: "Develop The Best Strategy for Business",
          icon: service_icon_2,
          subheading: "Feel free to use this template for your business",
        },
        {
          id: 3,  
          heading: "UI / UX Design and Development",
          icon: service_icon_3,
          subheading: "Feel free to use this template for your business",
        },
        {
          id: 4,  
          heading: "Discover & Explore our SEO Tips",
          icon: service_icon_4,
          subheading: "Feel free to use this template for your business",
        },
        { 
          id: 5,  
          heading: "Optimizing your websites for Speed",
          icon: service_icon_1,
          subheading: "Feel free to use this template for your business",
        },
        {
          id: 6,  
          heading: "Accessibility for mobile viewing",
          icon: service_icon_2,
          subheading: "Feel free to use this template for your business",
        },
        {
          id: 7,  
          heading: "Best Content Ideas for your pages/next project",
          icon: service_icon_3,
          subheading: "Feel free to use this template for your business",
        },
        {
          id: 8,  
          heading: "Discover the digital marketing trend",
          icon: service_icon_4,
          subheading: "Feel free to use this template for your business",  
        },
    ] 
    
    const [screenWidth, setScreenWidth] = useState(0)
    const myWidth = () => {
        setScreenWidth(window.innerWidth)
    }
    const ref = useRef(null)
    
    useEffect(() => {
    console.log(ref.current)
    myWidth()
    console.log(screenWidth)
    // const swiperParams = {
    //     breakpoints: {
    //            640:{
    //                width: 300,  
    //                slidesPerView: 1,
    //                spaceBetween: 20,
    //            },
   
    //            768: {
    //                slidesPerView: 3,
    //                spaceBetween: 40,
    //            },
   
    //            1024: {
    //                slidesPerView: 4,
    //                spaceBetween: 50,
    //            }
    //    },
    // //    on: {
    // //     init(){

    // //     }
    // //    }
    // }
    // Object.assign(ref.current, swiperParams)
    // ref.current.initialize()
   }, [screenWidth])
    

    return (
    <section className="services">
      <div className="svg">
            <img src={svgImg1} alt="An svg image" className='service-svg one'/>
      </div>
       <div className="svg">
            <img src={svgImg2} alt="An svg image" className='service-svg two'/>
       </div>
      <div className="service-cont">
        <div className="section-heading">
            <h2>We <em>Provide</em> The Best Service With <span>Our Tools</span></h2>
            <span>Our Services</span>
        </div>
        <div className="our-services">
        
        <Swiper
        style={
          {
          "--swiper-navigation-color": "#ff4338", 
          "--swiper-pagination-color": "#ff4338"
          }
      } 
      modules={[Navigation, Pagination, A11y, EffectCoverflow]}
      spaceBetween={15}
      // effect={'coverflow'}
      slidesPerView={1}
      grabCursor={true}
      // centeredSlides = {true}
      navigation
      loop = {true}
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      // coverflowEffect={{
      //   rotate : 0,
      //   stretch : 0,
      //   depth : 50,
      //   modifier : 2.5,
      // }}
      autoplay={{delay: 2000}}
      breakpoints = {{
                   640:{
                       
                       slidesPerView: 1,
                       spaceBetween: 20,
                   },
       
                   768: {
                       slidesPerView: 2,
                       spaceBetween: 40,
                   },
       
                   1024: {
                       slidesPerView: 3,
                       spaceBetween: 50,
                   }}
           }
      className='Swiper'
    >
            {serviceItem.map(service => {
                return (
                <SwiperSlide key={service.id} className='SwiperSlide'>
                  <div className="item">
                     <h4>{service.heading}</h4>
                        <div className="icon">
                          <img src={service.icon} alt="our-service" />
                        </div>
                     <p>{service.subheading}</p>
                  </div>    
              </SwiperSlide> 
                )
            })}
            </Swiper>
        </div>
      </div>
   </section>
    )
  }

  export default Services