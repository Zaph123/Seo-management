 import first_plan_svg from '../assets/images/first-plan-bg.png'
 import second_plan_svg from '../assets/images/second-plan-bg.png'
 import third_plan_svg from '../assets/images/third-plan-bg.png'
 import svgImg1 from '../assets/images/tables-left-dec.png'
 import svgImg2 from '../assets/images/tables-right-dec.png'
 import { motion } from 'framer-motion'
 
const fadeInAnimation = {
   hide: {
     opacity: 0,
     y: "50px",
   },
   animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      type: "spring",
      delay: .2 * custom
    }
   })
}

 const OurPricingPlans = () => {
      const allPlans = [
          {
              id: 1,
              planType: "Starter Plan",
              prevAmount: "$160/mo",
              newAmount: "$140",
              offers: ["10 projects", "100GB space", "20 SEO checkups", "Basic Support"],
              bgImg: first_plan_svg,
          },
          {
              id: 2,
              planType: "Standard Plan",
              prevAmount: "$240/mo",
              newAmount: "$200",
              offers: ["20 projects", "200GB space", "50 SEO checkups", "Pro Support"],
              bgImg: second_plan_svg,
          },
          {
              id: 3,
              planType: "Advanced Plan",
              prevAmount: "$360/mo",
              newAmount: "$280",
              offers: ["30 projects", "300GB space", "100 SEO checkups", "Better Support"],
              bgImg: third_plan_svg,
          },
    ]

    return (
        <div className="seo-plans">
            <div className="table-svg tables-left-dec">
              <img src={svgImg1} alt="An svg image" />
          </div>
            <div className="table-svg tables-right-dec">
              <img src={svgImg2} alt="An svg image" />
            </div>
        <div className="pricing-tables" id="pricing">
          <div className="section-heading">
            <h2>Select a suitable <em>plan</em> for your next <span>projects</span></h2>
            <span>Our Plans</span>
          </div>
         <div className="tables-container"> 
        {allPlans.map((plan, index) => {
     return(
        <motion.div
        variants={fadeInAnimation}
        initial={"hide"}
        whileInView={"animate"} 
        viewport={{
          once: true,
          margin: "-100px"
        }}
        className="table"
        custom={index} 
        key={plan.id}>
            <img src={plan.bgImg} alt="An svg image" />
          <div className="item price-plans">
            <h4>{plan.planType}</h4>
            <em>{plan.prevAmount}</em>
            <span>{plan.newAmount}</span>
            <ul>
                {plan.offers.map(offer => {
                    return(
                        <>
                        <li>{offer}</li>
                        </>   
                    )
                })}
            </ul>
            <div className="get-plan-button">
              <a href="#">Get Started</a>
            </div>
          </div>
        </motion.div>
            )
        })}
        </div>
        </div>
    </div>
    )
 }

 export default OurPricingPlans