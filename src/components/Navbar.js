import { Link } from "react-router-dom";
import {BiLogoLinkedinSquare,BiLogoInstagram,BiLogoFacebookSquare} from "react-icons/bi"
import logo from "../images/Untitled.png"

const Nav = () => {

    const handleLinkedClick=()=>{
        window.location.href='https://www.linkedin.com/in/yash-garg-6156341a4/'
    }
    const handleinstagramClick=()=>{
        window.location.href='https://www.instagram.com/akagami_.__/'
    }
    const handlefacebookClick=()=>{
        window.location.href='https://www.facebook.com/profile.php?id=100009726729636'
    }
    return (
        <nav className="navbar-container">
            <div className="navbar">
                <Link to="/" className="navbar-item"><img src={logo} alt="logo" width="80px"/></Link>
            </div>
            <div className="navbar">
                <Link to="/about" className="navbar-item">About</Link>
                <Link to="/contact" className="navbar-item">Contact</Link>
                <Link to="/portfolio" className="navbar-item">Portfolio</Link>
            </div>
            <div className="navbar">
                <div className="navbar-item" onClick={handleLinkedClick}><BiLogoLinkedinSquare/></div>
                <div className="navbar-item" onClick={handleinstagramClick}><BiLogoInstagram/></div>
                <div className="navbar-item" onClick={handlefacebookClick}><BiLogoFacebookSquare/></div>
            </div>
        </nav>
    )
}
export default Nav;