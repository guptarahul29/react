import { LOGO_URL } from "../utils/constants";

const Heading = ()=>{
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
                </ul>

            </div>
        </div>
    )
}


export default Heading;