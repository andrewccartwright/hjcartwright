'use client'

import Link from "next/link";
import '../css/Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props: {}) => {
    return (
        <div id="navbar-container">
            <div id="navbar-section">
                <strong><h1 id="navbar-title">H.J. CARTWRIGHT <FontAwesomeIcon id="circle" icon={faCircle} /> AUTHOR</h1></strong>

                <div id="nav-links-section">
                    <Link className="nav-links" href="/">Home</Link>
                    <Link className="nav-links" href="/connect">Connect</Link>
                    <Link className="nav-links" href="/about">About</Link>
                    <Link className="nav-links" href="/shop">Shop</Link>
                    <Link className="nav-links" href="/contact">Contact</Link>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;