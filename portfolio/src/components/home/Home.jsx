import "./home.scss";
import image from "../../assets/images/pb.png";
import me from "../../assets/images/me.png";
import video from "../../assets/Videos/butter.mp4";
import 'bootstrap/dist/css/bootstrap.css';



export default function Home() {
    return (
        <section  style=
        {{ backgroundImage: `url(${image})` }} className="mt-0">

        <div >
          <div className="align-self-end ">

            <h1 className="name1" >Aloha. </h1> <h1 className="name">I'm Sonali Kabadi</h1> <br/>
            <img className="rounded mx-auto d-block" src={me} alt="Oopss!!" /> <hr/>
            <h5 className="text-center font-weight-bold " style={{color: "#CF6679"}}> Web Developer | Data Analist  </h5><br/>
          </div>

        </div>
        <br/><br/>
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
        </section>
    )
}
