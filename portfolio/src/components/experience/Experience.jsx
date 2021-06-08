import "./experience.scss"
import python from "../../assets/logos/icons8-python-144.png";
import c from "../../assets/logos/C++-01.png";
import java from "../../assets/logos/Java.png";
import android from "../../assets/logos/Andriod.png";
import flutter from "../../assets/logos/icons8-flutter-96.png";
import django from "../../assets/logos/icons8-django (3).svg";
import tf from "../../assets/logos/tf.png";
import github from "../../assets/logos/icons8-github-96 (1).png";
import cloud from "../../assets/logos/cloud-logo1.png";
import node from "../../assets/logos/nodejs.png";

export default function Experience() {
    return (
        <div className="experience" id="experience" >
            <div className="layer">
                <div className="skill-head">
                    <div className="blk">
                    </div>
                    <h1>SKILLS</h1>
                </div>
                <div className="skill-row">
                    <div className="skill-block">
                        <img className="skill-img" src={c} alt="" />
                    </div>
                    <div className="skill-block">
                        <img className="skill-img" src={python} alt="" />
                    </div>
                    <div className="skill-block">
                        <img className="skill-img" src={java} alt="" />
                    </div>
                    <div className="skill-block">
                        <img className="skill-img" src={github} alt="" />
                    </div>
                </div>
                <div className="skill-row">
                    <div className="skill-block">
                        <img className="skill-img" src={tf} alt="" />
                    </div>
                    <div className="skill-block">
                        <img className="skill-img" src={cloud} alt="" />
                    </div>
                    <div className="skill-block">
                        <img className="skill-img" src={django} alt="" />
                    </div>
                    <div className="skill-block">
                        <img className="skill-img" src={node} alt="" />
                    </div>
                </div>    
            </div>
        </div>
    )
}
