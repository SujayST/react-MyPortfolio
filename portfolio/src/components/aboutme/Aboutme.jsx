import "./aboutme.scss";

import video from "../../assets/Videos/butter.mp4";
import 'bootstrap/dist/css/bootstrap.css';

export default function Aboutme() {
    return (
        <div className="con">
            <div className="about">
                <h1 className="text-left font-weight-bold " style={{color: "#CF6679"}}>About Me</h1> <br/>
                <h3 className="text-left font-weight-bold text-white">I'm Sonali Kabadi</h3>
                <h6 className="text-left  text-white">   I'm currently a third year Engineering student majoring in
                Computer Science in Kle Technological University, Hubli, Karnataka, Inida.
                    I'm passionate Frontend developer who focuses on writing clean, elegant and efficient code.User Interface Desinger designing beautifull and functional user interfaces.
                </h6>
            </div>
            <div className="video">
                <video src={video} width="500" height="200" controls style={{marginTop:80}}>
                </video>
            </div>
        </div>
    )
}
