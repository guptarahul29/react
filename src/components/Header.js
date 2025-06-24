import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Heading = ()=>{

    const [btnlogout,setlogin]=useState("login");

    return (
        <div className="heading">
            <div >
               <img className="logo"src={LOGO_URL}> 
               </img>
            </div>
            <div className="nav-bars">
                <ul>
                    <li> Home  </li>
                    <li> About  </li>
                    <li> Contact Us  </li>
                    <li> Cart  </li>
                    <button className="btnlogoutIn"
                    onClick={()=>{
                       btnlogout==="login" ? setlogin("Logout") : setlogin("login");
                    }}
                    >{btnlogout}
                    </button>
                </ul>

            </div>
        </div>
    )
}


export default Heading;