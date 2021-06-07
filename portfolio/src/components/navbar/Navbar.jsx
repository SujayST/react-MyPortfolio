import "./navbar.scss"
import { Button } from '@material-ui/core';



export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"navbar " + ( menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                   <h1> MyPortfolio </h1>
                </div>
                <div className="right">
                    <Button className="button" href="#home" >Home</Button>
                    <Button className="button" href="#aboutme" >Aboutme</Button>
                    <Button className="button" href="#experience" color="secondary">Experience</Button>
                    <Button className="button" href="#projects" color="white">Projects</Button>
                    <Button className="button" href="#contact" color="white">Contact</Button>
                    <Button className="button" id="resume" href="https://drive.google.com/file/d/1M1j0xoP_KUfe3k-wpf9FyJLWf2llFNJu/view?usp=sharing" color="white">Resume</Button>

                </div>
                <div className="mright" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>

            </div>
        </div>
    )
}
