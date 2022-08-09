import React from "react";
import { Link} from "react-router-dom";

const Nav=()=>{
    return(
        <div>
            <ul className="nav-ul">
                <li><button className="btn"><Link to="/">Basic information</Link></button></li>
                <li><button className="btn"><Link to="/add">Property detalis</Link></button></li>
                <li><button className="btn"><Link to="/update">General information</Link></button></li>
                <li><button className="btn"><Link to="/logout">logout</Link></button></li>
                <li><button className="btn"><Link to="/location">Location</Link></button></li>
                <li><button className="btn"><Link to="/signup">Sign Up</Link></button></li>

            </ul>
        
        </div>

    )
}
export default Nav