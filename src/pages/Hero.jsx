import heroImg from '../assets/images/hero-img.png'
import heroBlob_left from '../assets/images/baner-dec-left.png'
import { FaArrowCircleRight } from 'react-icons/fa'
import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'
     
   const beat = {
    initial: {
        scale: [1, 1, 1]
    },
    scale: {
        scale: [.95, 1.2, .95],
        transition: {
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut",
        }
  }
}
  const Hero = () => {

    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const allwidth = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', allwidth)
       return allwidth()
    },[width])

    return (
        <section className="hero-section">
            <img src={heroBlob_left} alt="svg" className='hero-svg-left'/>
            <div className="hero-cont">
              <div className="col-1 text-col">
                <div className='intro-text'>
                 <h6>Welcome to Onix Digital</h6>
                 <h2>Build <em>your website</em> the best in <span>SEO</span>?</h2>
                 <p>This is a professional looking HTML Bootstrap 5 website template brought to you by TemplateMo website.</p>
                <motion.button id='get-started'
                whileTap={{scale: .95}}
                >
                  <a href="">
                    Get started
                  <motion.span
                  variants={beat}
                  animate={"scale"}
                  whileHover={"initial"}
                  className="icon-box">
                    <FaArrowCircleRight className='btn-icon'/>
                  </motion.span>    
                  </a>
                </motion.button>
                </div>
              </div>
              <motion.div
              style={{scale: width >= 860 ? 1.2 : 1}}
              initial={{y: "-50px"}}
              animate={{
                y: ["-10px", '10px', "-10px"]
                }}
              transition={{
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
              }}
              className="col-2 hero_img-col">
                <img src={heroImg} alt="hero-image" />
              </motion.div>
          </div>
        </section>
    )
  }

  export default Hero