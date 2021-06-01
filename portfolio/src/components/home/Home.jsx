import "./home.scss";
import image from "../../assets/images/pb.png";
import me from "../../assets/images/me.png";
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
        
        </section>
    )
}
