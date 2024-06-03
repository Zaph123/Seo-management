
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import img1 from '../assets/images/video-thumb-01.png'
import img2 from '../assets/images/video-thumb-02.png'
import img3 from '../assets/images/video-thumb-03.png'
import img4 from '../assets/images/video-thumb-04.png'
import svgImg1 from '../assets/images/videos-right-dec.png'
import svgImg2 from '../assets/images/videos-left-dec.png'

 const Videos = () => {
    const tabRef = useRef(null)
    const [activeTab, setActiveTab] = useState("tab1")
    const handleTab = (tab) => {
        // console.log(tab)
        setActiveTab(tab)
    }

   const videos = [
    {
        id: 1,
        tab: "tab1",
        src: "https://www.youtube.com/embed/JynGuQx4a1Y",
        heading: "Project One",
        subheading: "Seo & Marketing"
    },
    {
        id: 2,
        tab: "tab2",
        src: "https://www.youtube.com/embed/RdJBSFpcO4M",
        heading: "Project Two",
        subheading: "Advertising & Marketing"
    },
    {
        id: 3,
        tab: "tab3",
        src: "https://www.youtube.com/embed/ZlfAjbQiL78",
        heading: "Project three",
        subheading: "Digital & Marketing"
    }, 
    {
        id: 4,
        tab: "tab4",
        src: "https://www.youtube.com/embed/mx1WseE7-0Y",
        heading: "Project Four",
        subheading: "Seo & Advertising"
    }
   ]

   const videoBtns = [
    {
        id: 1,
        click: "tab1",
        imgSrc: img1,
        heading: videos[0].heading,
        subheading: videos[0].subheading,
    },
    {
        id: 2,
        click: "tab2",
        imgSrc: img2,
        heading: videos[1].heading,
        subheading: videos[1].subheading,
    },
    {
        id: 3,
        click: "tab3",
        imgSrc: img3,
        heading: videos[2].heading,
        subheading: videos[2].subheading,
    },
    {
        id: 4,
        click: "tab4",
        imgSrc: img4,
        heading: videos[3].heading,
        subheading: videos[3].subheading,
    }
   ]
    return (
        <div className="our-videos">
            <div className="vid-svg one">
                <img src={svgImg1} alt="svg image" />
            </div>
            <div className="vid-svg two">
                <img src={svgImg2} alt="svg image" />
            </div>
          <div className="video-container">
            <div className="all-videos-col">
                
             <AnimatePresence> {videos.map(video => (video.tab === activeTab &&
                 ( 
                <motion.div
                initial={{opacity: 0, x: "-50px", scaleX: .95}}
                animate={{opacity: 1, x: 0, scaleX: 1}}
                exit={{opacity: 0, x: "-50px", scale: .95}}
                transition={{duration: 1, ease: "backInOut", type: "spring"}}
                className="video-thumb" key={video.id}>
                 <iframe width="100%" height="auto" src={video.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                 <div className="overlay-effect">
                  <a href="#"><h4>{video.heading}</h4></a>
                 <span>{video.subheading}</span>
              </div>
             </motion.div>
                )
              ))}  
              </AnimatePresence>
          </div>
         <div className="video-btn-tabs">
            {videoBtns.map(btn => {
                return(
                <motion.div
                initial={{opacity: 1}}
                whileTap={{scale: .95, rotate: "0deg"}}
                whileHover={{opacity: .9, y: '10px', scale: 1.03}}
                className={`thumb-btn ${activeTab === btn.click ? "active" : ""}`} key={btn.id} onClick={() => handleTab(btn.click)}>
                 <img src={btn.imgSrc} alt="" />
                 <div
                 className="inner-content" ref={tabRef}>
                   <h4>{btn.heading}</h4>
                   <span>{btn.subheading}</span>
                </div>
           </motion.div>
              )
            })}
         </div>
        </div>
    </div>
    )
 }

 export default Videos