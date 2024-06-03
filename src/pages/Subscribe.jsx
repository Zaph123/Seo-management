import bgImg from '../assets/images/subscribe-bg.png'
import { useState} from 'react'

 const Subscribe = () => {
  
    return (
        <div className="subscribe-section">
            <div className="subscribe-cont">
            <div className="bgImg">
                <img src={bgImg} alt="blue bg image" />
            </div>
              <div className="subscribe-col">
                <h2>Know Your Website SEO Score by Email</h2>
                <Form />
              </div>
            </div>
        </div>
    )
 }


  const Form = () => {
    const [passwd, setpasswd] = useState("")
    const [webUrl, setWebUrl] = useState("")

    const passwdChange = (e) => {
      setpasswd(e.target.value)
    }
    const webUrlChange = (e) => {
      setWebUrl(e.target.value)
    }
   const showModal = (e) => {
    e.preventDefault()
     console.log(passwd)
     console.log(webUrl)
    }

    return (
      <form id="subscribe" action="" method="get">
      <div className="inputBx">
        <input type="text" name="website" id="website" placeholder='Your Website URL' required  onChange={webUrlChange}/>
      </div>
      <div className="inputBx">
        <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required  onChange={passwdChange}/>
      </div>
      <button onClick={showModal} id="form-submit" className="main-button ">Subscribe</button>
    </form>
    )
  }

  
 export default Subscribe