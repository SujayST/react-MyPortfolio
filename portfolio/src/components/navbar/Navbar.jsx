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
                    <Button className="button" id="resume" href="https://drive.google.com/file/d/1M1j0xoP_KUfe3k-wpf9FyJLWf2llFNJu/view?usp=sharing" color="white">Resume</Button>
                </div>
                <div className="mright" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
            <div className="nav-btn">
                    <div id="myDIV" >
                        <div className="nav-block nv1" >
                            <a href = "#home" >
                                <h1 className="nv-txt" >Home</h1>
                            </a>
                        </div>
                        <div className="nav-block">
                            <a href = "#aboutme" >
                                <h1 className="nv-txt" >About Me</h1>
                            </a>
                        </div>
                        <div className="nav-block">
                            <a href="#experience">
                                    <h1 className="nv-txt" >Experience</h1>
                            </a>
                            
                        </div>
                        <div className="nav-block">   
                            <a href="#projects">
                                    <h1 className="nv-txt" >Projects</h1>
                            </a>
                        </div>
                        <div className="nav-block">
                            <a href="https://drive.google.com/file/d/1M1j0xoP_KUfe3k-wpf9FyJLWf2llFNJu/view?usp=sharing">
                                <h1 className="nv-txt" >Resume</h1>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    )
}
