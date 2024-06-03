import portfolioImg1 from '../assets/images/portfolio-01.jpg'
import portfolioImg2 from '../assets/images/portfolio-02.jpg'
import portfolioImg3 from '../assets/images/portfolio-03.jpg'
import portfolioImg4 from '../assets/images/portfolio-04.jpg'
import svgImg from '../assets/images/portfolio-left-dec.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';

 const Portfolio = () => {

        const portfolioItem = [
            {
                id: 1,  
                link: <a rel="sponsored" href="https://templatemo.com/tm-564-plot-listing" target="_parent"><h4>Project One</h4></a>,
                subheading: "Plot Listing",
                image: portfolioImg1,
            },
            {
                id: 2,  
                link: <a rel="sponsored" href="https://templatemo.com/tm-564-plot-listing" target="_parent"><h4>Project Two</h4></a>,
                subheading: "SEO & Marketing",
                image: portfolioImg2,
            },
            {
                id: 3,  
                link: <a rel="sponsored" href="https://templatemo.com/tm-564-plot-listing" target="_parent"><h4>Project Three</h4></a>,
                subheading: "Space Dynamic SEO",
                image: portfolioImg3,
            },
            {
                id: 4,  
                link: <a rel="sponsored" href="https://templatemo.com/tm-564-plot-listing" target="_parent"><h4>Project Four</h4></a>,
                subheading: "Website Marketing",
                image: portfolioImg4,
            },
            { 
                id: 5,  
                link: <a rel="sponsored" href="https://templatemo.com/tm-564-plot-listing" target="_parent"><h4>Project Five</h4></a>,
                subheading: "Digital Assets",
                image: portfolioImg1,
            },
           
        ] 

    return(
    <div className="portfolio">
        <div className='p-svg'>
            <img src={svgImg} alt="" />
        </div>
      <div className="portfolio-content">
        <div className="row-1 section-heading">
            <h2>Our Recent <em>Projects</em> & Case Studies <span>for Clients</span></h2>
            <span>Our Portfolio</span>
        </div>
        <div className="row-2">
          <Swiper
           style={
            {
            "--swiper-navigation-color": "#ff4338", 
            "--swiper-pagination-color": "#ff4338"
            }
        } 
          modules={[Navigation, Pagination, A11y, EffectCoverflow]}
          spaceBetween={15}
          slidesPerView={1}
          grabCursor={true}
          navigation
          loop = {true}
          pagination={{ clickable: true }}
          autoplay={{delay: 2000}}
          breakpoints= {{
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
          className='Swiper portfolio'
          >
        {portfolioItem.map(item => {
            return(
                <SwiperSlide
                className='SwiperSlide portfolio'
                key={item.id}
                >
                <div className="item portfolio">
                <div className="thumbNail">
                  <img src={item.image} alt="" />
                </div>
                <div className="inner-content">
                    <div className="inner">
                    {item.link}
                      <span>{item.subheading}</span>
                    </div>
                </div>
              </div>
              </SwiperSlide>
            )
        })}
        </Swiper>
        </div>
     </div>  
  </div> 
    )
 }

 export default Portfolio