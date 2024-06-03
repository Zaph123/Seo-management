 import { FaFacebook, FaTwitter, FaBehance, FaInstagram, FaPaperPlane } from "react-icons/fa"
 import logo from '../assets/images/logo.png'
 import svgImg from '../assets/images/footer-dec.png'

 const Footer = () => {
    return (
        <footer>
          <div className="footer-svg">
          <img src={svgImg} alt="An svg image" />
          </div>
         <div className="footer-container">
           <About />
           <Service />
           <Community />
           <OurNewsletter />
         </div>
           <Copyright />
        </footer>
    )
 }
 
 const About = () => {
  return(
    <div className="about footer-item">
            <div className="logo">
              <a href="#"><img src={logo} alt="Onix Digital TemplateMo" /></a>
            </div>
            <a href="#">info@company.com</a>
            <ul>
              <li><a href="#">{<FaFacebook />}</a></li>
              <li><a href="#">{<FaTwitter />}</a></li>
              <li><a href="#">{<FaBehance />}</a></li>
              <li><a href="#">{<FaInstagram />}</a></li>
            </ul>
          </div>
  )
 }

 const Service = () => {
  return(
    <div className="service footer-item">
      <h4>Services</h4>
      <ul>
        <li><a href="#">SEO Development</a></li>
        <li><a href="#">Business Growth</a></li>
        <li><a href="#">Social Media Managment</a></li>
        <li><a href="#">Website Optimization</a></li>
     </ul>
  </div>
  )
 }

 const Community = () => {
  return (
    <div className="community footer-item">
       <h4>Community</h4>
       <ul>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Business Ideas</a></li>
              <li><a href="#">Website Checkup</a></li>
              <li><a href="#">Page Speed Test</a></li>
       </ul>
     </div>
  )
 }

 const OurNewsletter = () => {
  return(
    <div className="subscribe-newsletters footer-item">
       <h4>Subscribe Newsletters</h4>
       <p>Get our latest news and ideas to your inbox</p>
       <form action="#" method="get">
         <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required />
         <button type="submit" id="form-submit" className="main-button ">{<FaPaperPlane />}</button>
      </form>
  </div>
  )
 }

 const Copyright = () => {
  return (
    <div className="copyright">
        <p>Copyright © 2021 Onix Digital Co., Ltd. All Rights Reserved. 
       <br />
        Designed by <a rel="nofollow" href="https://templatemo.com" title="free CSS templates">TemplateMo</a></p>
      </div>
  )
 }
  export default Footer