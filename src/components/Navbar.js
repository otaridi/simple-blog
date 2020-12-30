import React, {useRef, useEffect} from "react"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const navRef = useRef()

    function navBarScrollEffect(){
        let prevScrollpos = window.pageYOffset
        window.onscroll = () => {
            let currentScrollPos = window.pageYOffset
            if (prevScrollpos > currentScrollPos) {
                navRef.current.classList.remove('nav-scroll')
            } else if (currentScrollPos > 150) {
                navRef.current.classList.add('nav-scroll')
            }
            prevScrollpos = currentScrollPos + 1
        }
    }

    useEffect(() => {
        navBarScrollEffect()
    }, [])
    return (
        <nav className='nav-container' ref={navRef}>
            <ul>
                <li>
                    <NavLink to='/'>
                        BLOG
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar