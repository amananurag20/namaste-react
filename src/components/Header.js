import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    const [btnName, setBtnname]=useState("Login");
    const onlineStatus= useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status {(onlineStatus) ? "✅": "❌"}</li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About us</Link></li>
                    <li><Link to={"/contact"}>Contact us</Link></li>
                    <li>Cart</li>
                    <button className="Login" onClick={()=>{
                       btnName==="Login"?setBtnname("Logout"):setBtnname("Login");}                        
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;