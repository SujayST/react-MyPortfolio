import { useState } from "react";
import "./contact.scss";
import shake from "../../assets/images/shake.png";
import globe  from "../../assets/images/globe.png"; 
import linkedin from "../../assets/images/linkedin.png";
import youtube from "../../assets/images/youtube.png";
import mobile from "../../assets/images/mobile.png";
import twitter  from "../../assets/images/twitter.png";

import github from "../../assets/logos/github-logo.svg";

import insta from "../../assets/logos/insta.png";
export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact" >
  
      <div className="left" >
        <img src={shake} width="600" alt="" />
      </div>

      <div className="right">

      <div className="row">
            <div className="column">
            <a href="https://www.linkedin.com/in/sujay-tadahal/" >
                    <img className="logo" src={twitter} width="30" height="30"  alt="Linkedin" />
                </a>
            </div>
            <div className="column">
            <a href="https://www.linkedin.com/in/sujay-tadahal/" >
                    <img className="logo" src={globe} width="30" height="30"  alt="Linkedin" />
                </a>
             </div>
             <div className="column">
             <a href="https://www.linkedin.com/in/sujay-tadahal/" >
                    <img className="logo" src={linkedin} width="30" height="30"  alt="Linkedin" />
                </a>
            </div>
            <div className="column" id="s1" >
                <a href="https://www.linkedin.com/in/sujay-tadahal/" >
                    <img className="logo" src={mobile} width="30" height="30" alt="Linkedin" />
                </a>
            </div>
             <div className="column">
             <a href="https://www.linkedin.com/in/sujay-tadahal/" >
                    <img className="logo" src={youtube} width="30" height="30"  alt="Linkedin" />
                </a>
             </div>
         </div>



        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
