import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Heading = ()=>{

    const [btnlogout,setlogin]=useState("login");

    useEffect(()=>{
        console.log("useEffect called header")
    },[btnlogout]);

    return (
        <div className="heading">
            <div >
               <img className="logo"src={LOGO_URL}> 
               </img>
            </div>
            <div className="nav-bars">
                <ul>
                    <li><Link to="/"> Home </Link> </li>
                    <li><Link to="/aboutus"> About </Link> </li>
                    <li><Link to="/contact"> Contact Us </Link> </li>
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