import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/General/Navbar.css';
import logo from '../../assets/logo.png';
import tablebonhomme from '../../assets/bonhommes/tablebonhomme.png'; // Import the image you uploaded

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src={logo} alt="Logo CoComptoir" className="logo" />
                </Link>
            </div>

            <div className="navbar-image">
                <img src={tablebonhomme} alt="Table Bonhomme" />
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={`navbar-right`}>
                <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    <li><Link to="/about">À propos</Link></li>
                    <li><Link to="/local">Le Local</Link></li>
                    <li><Link to="/volunteer" className="btn-outline">Devenir Bénévole</Link></li>
                    <li><Link to="/donate" className="don-btn">Faire un Don</Link></li>
                </ul>
            </div>
        </nav>
    );
}