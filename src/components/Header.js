import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    const [btnName, setBtnname] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2" >
            <div className="logo-container">
                <img className="w-32" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex px-4 m-4 ">
                    <li className="px-4">Online Status {(onlineStatus) ? "✅" : "❌"}</li>
                    <li className="px-4"><Link to={"/"}>Home</Link></li>
                    <li className="px-4"><Link to={"/about"}>About us</Link></li>
                    <li className="px-4"><Link to={"/contact"}>Contact us</Link></li>
                    <li className="px-4"><Link to={"/grocery"}>Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="Login" onClick={() => {
                        btnName === "Login" ? setBtnname("Logout") : setBtnname("Login");
                    }
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;