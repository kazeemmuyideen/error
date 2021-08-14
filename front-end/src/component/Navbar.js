import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="nav-wrapper red darken-3">
                <div>
                    <Link to="/" className="brand-logo">Poketimes </Link>
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contacts">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
