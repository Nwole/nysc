import {Link} from 'react-router-dom'
import React from 'react'
import './style.css'

const NavBar = () => {
    return (
        <div className="hero-section">
            <div className="logo-wrapper">
                <div className="logo-heading">
                    <h2>NATIONAL YOUTH SERVICE CORPS</h2>
                    <p className="service-humility">SERVICE AND HUMILITY</p>
                </div>
                <div className="nav-wrapper">
                    <ul>
                        <li>
                            <Link className="link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/payment">Payment Status</Link>
                        </li>
                        <li>
                            <Link className="link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
