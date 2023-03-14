import React from 'react'
import {BrowserRouter as Router, Link} from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <Router>
        <div>
            <nav className='nav-bar'>
                <h3 className='logo'>Logo</h3>
            <ul className='nav-links'>
                <li>
                <Link to="/" className='home'>HOME</Link>
                </li>

                <li>
                <Link to="/ABOUT" className='about'>ABOUT</Link>
                </li>

                <li>
                <Link to="/CONTACT" className='contact'>CONTACT</Link>
                </li>

                <li>
                <Link to="/VAN SIZE" className='van-size'>VAN SIZE</Link>
                </li>

                <li>
                <Link to="/AREA WE COVER" className='area-we-cover'>AREA WE COVER</Link>
                </li>

                <li>
                <Link to="/FAQ" className='faq'>FAQ</Link>
                </li>

                <li>
                <Link to="/SUPPORT" className='support'>SUPPORT</Link>
                </li>

                <li>
                <Link to="/DRIVER" className='drivers'>DRIVER</Link>
                </li>

                <li>
                <Link to="/Signin" className='my-account'>MY ACCOUNT</Link>
                </li>
            </ul>
            </nav>
        </div>
        </Router>
    );
    }

export default Navbar

