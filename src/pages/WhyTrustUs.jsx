import aboutImg from '../assets/images/about-left-image.png'
import countImg1 from '../assets/images/service-icon-01.png'
import countImg2 from '../assets/images/service-icon-02.png'
import countImg3 from '../assets/images/service-icon-03.png'


 const GrowWithUs = () => {
    return (
        <div className="grow section-3">
            <div className="col-1">
               <img src={aboutImg} alt="Two Girls working together" />
            </div>
            <div className="col-2">
              <div className="section-heading">
                 <h2>Grow your website with our <em>SEO Tools</em> & <span>Project</span> Management</h2>
                 <p>You can browse free HTML templates on Too CSS website. Visit the website and explore latest website templates for your projects.</p>
              </div>
              <div className="count-content">
                  <div className="count-area-content">
                      <div className="icon">
                        <img src={countImg1} alt="" />
                      </div>
                      <div className="count-digit">320</div>
                      <div className="count-title">SEO Projects</div>
                      <p>Lorem ipsum dolor sitti amet, consectetur.</p>
                  </div>
                
                  <div className="count-area-content">
                      <div className="icon">
                        <img src={countImg2} alt="" />
                      </div>
                      <div className="count-digit">640</div>
                      <div className="count-title">Websites</div>
                      <p>Lorem ipsum dolor sitti amet, consectetur.</p>
                  </div>
                
                  <div className="count-area-content">
                      <div className="icon">
                        <img src={countImg3} alt="" />
                      </div>
                      <div className="count-digit">120</div>
                      <div className="count-title">Satisfied Clients</div>
                      <p>Lorem ipsum dolor sitti amet, consectetur.</p>
                  </div>
          </div>
          </div>
        </div>
    )
 }

 export default GrowWithUs