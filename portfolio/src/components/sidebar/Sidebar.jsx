import "./sidebar.scss"
import github from "../../assets/logos/github-logo.svg";
import linkedin from "../../assets/logos/linkedin.svg";
import insta from "../../assets/logos/insta.png";

export default function Sidebar() {
    return (
        <div className="sidebar" id="sidebar">
            <div className="lyr" id="s1" >
                <a href="https://www.linkedin.com/in/sujay-tadahal/" >
                    <img className="logo" src={linkedin} alt="Linkedin" />
                </a>
            </div>
            <div className="lyr" id="s2" >
                <a href="https://www.github.com/SujayST" >
                    <img className="logo" src={github} alt="Github" />
                </a>
            </div>
            <div className="lyr" id="s3" >
                <a href="https://www.instagram.com/sujay_tadahal" >
                    <img className="logo" id="i1" src={insta} alt="Instagram" />
                </a>
            </div>
            
        </div>
    )
}
