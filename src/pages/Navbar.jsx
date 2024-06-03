/* eslint-disable react/prop-types */
import logo from '../assets/images/logo.png'
import { useState, useEffect } from 'react'
// import service from '../assets/services.svg'
import { FaInfoCircle, FaBriefcase, FaVideo, FaHome, FaWrench } from 'react-icons/fa'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'


const toggleBar = {
    initial: {rotate: "45deg", y: "10px"},
    initial1: {rotate: "-45deg", y: "-50%"},
    exit: {rotate: "0"},
    hide: {display: "none"},
    show: {display: "block"},
    transition: {
        duration: .5, 
        ease: "easeInOut", 
    }
 }
 const Navbar = ({ themeBtn }) => {

    const Link = [
        {
            id: "1",
            name: "Home",
            icon: <FaHome /> 
        },
        {
            id: "2",
            name: "Services",
            icon: <FaWrench />
        },
        {
            id: "3",
            name: "About",
            icon: <FaInfoCircle />
        },
        {
            id: "4",
            name: "Portfolios",
            icon: <FaBriefcase />
        },
        {
            id: "5",
            name: "Videos",
            icon: <FaVideo />
        }
    ]
    

    const [hidden, setHidden] = useState(false)

    const { scrollY, scrollYProgress } = useScroll()

    useMotionValueEvent(scrollY, "change", 
    latest => {
        const previous = scrollY.getPrevious();
        if(latest > previous && latest > 150){
            setHidden(true)
        }
        else{
            setHidden(false)
        }
        
    })
    // useMotionValueEvent(scrollYProgress, "change", 
    // latest => {
    //     console.log(latest)
    // })

    // const scale = useTransform(scrollYProgress, [0, 1], [0, 1])
    
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const allwidth = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', allwidth)
        console.log(width)

    },[width])

    const [active, activeToggle] = useState(false)
    const toggleActive = () => {
       activeToggle(width <= 940 ? !active : active)
   
       console.log(active)
    }
    //   useEffect(() => {
    //         activeToggle(width > 1080 && active)
    //   },[width, active])

    
     const menuToggle = {
        show: {x: 0},
        hide: {x: width <= 940 ? "-100%" : 0}
     }
    return (
        <motion.header
        variants={{
            visible: {
                y: 0
            },
            hidden: {
                y: "-100%"
            }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{duration: .125, ease: "easeInOut"}}
        >
            
            <motion.div className="scroll-indicator" 
            style={{scaleX: scrollYProgress}}
            />
            <div className="logo">
                <img src={logo} alt="mylogo" />
            </div>
            
            <motion.nav
            variants={menuToggle}
            // initial={"hide"}
            animate={active ? "show" : "hide"}
            transition={{duration: .2, ease: "easeInOut"}}
            >
                <div className="page-links">
                {Link.map(link => (
                    <a key={link.id} href="/" className="link">
                        {link.icon}
                        {link.name}
                    </a>
                ))}
                </div>
            
        </motion.nav>
        <div className="other-nav">
                {/* <div className="search-bar">
                    <div className="icon-box search">
                     <FaSearch className='search-icon' />
                    </div>
                    <SearchInput />
              </div> */}
                 <motion.a
                 whileTap={{scale: .95}}
                 href="/" 
                 className="link contact-btn"
                 >Contact us</motion.a>
                 <HamburgerMenu toggle={toggleActive} active={active}/>
            <ToggleMode theme={themeBtn}/>
            </div>
        </motion.header>
    )
 }
    // const SearchInput = () => {
    //     return (
    //         <>
    //          <input type="text" name="search" placeholder="Search" />
    //                 <div className="icon-box submit">
    //                  <FaArrowRight className='search-icon submit-search' />
    //                 </div>
    //         </>
    //     )
    // }

    const HamburgerMenu = ({toggle, active}) => {
        return(
            <motion.div 
            className="menu-bar" 
            onClick={toggle}
            whileTap={{scale: .95}}
            >
                <motion.span 
                className='line one' 
                variants={toggleBar}
                animate={active ? "initial" : "exit"}
                />
                <motion.span 
                style={{transform: 'scaleX(0.5)',
                    transformOrigin: "right"}}
                className='line two'
                variants={toggleBar}
                animate={active ? "hide" : "show"}
                />
                <motion.span 
                className='line three'
                variants={toggleBar}
                animate={active ? "initial1" : "exit"}
                />
            </motion.div>
        )
    }

    const ToggleMode = ({theme}) => {
        const [mode, setMode] = useState(false)
      const changeMode = () => {
       theme((theme) => (theme === "light" ? "dark" : 'light'))
       setMode(!mode)
       console.log(mode)
      }
        return (
            <div className="toggle-btn" onClick={changeMode}>
            <motion.span 
            style={{scale: .8}}
            initial={{x: 0}}
            variants={{
                initial: {x : 0},
                animate: {
                    x: "35px",
                    transition: {
                        duration: .15,
                        ease: "linear"
                    }
                }
            }}
            animate={mode ? "animate" : "initial"}
            className="toggle-bob"
            >

            </motion.span>
         </div>
        )
    }
 export default Navbar