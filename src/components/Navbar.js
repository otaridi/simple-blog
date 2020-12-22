import React from "react"
import {NavLink} from "react-router-dom";

const Navbar = ()=>{
    return (
            <nav className='nav-container'>
                <ul>
                    <li>
                        <NavLink to='/' >
                            BLOG
                        </NavLink>
                    </li>
                </ul>
            </nav>
    )
}
export default Navbar