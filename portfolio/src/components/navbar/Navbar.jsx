import "./navbar.scss"
import { Button } from '@material-ui/core';



export default function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                   <h1> MyPortfolio </h1>
                </div>
                <div className="right">
                    <Button className="button" href="#home" >Home</Button>
                    <Button className="button" href="#aboutme" >Aboutme</Button>
                    <Button className="button" href="#experience" color="secondary">Experience</Button>
                    <Button className="button" href="#projects" color="white">Projects</Button>
                </div>

            </div>
        </div>
    )
}
