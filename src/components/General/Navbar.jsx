import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/General/Navbar.css';
import logo from '../../assets/logo.png';
import tablebonhomme from '../../assets/bonhommes/tablebonhomme.png'; // Import the image you uploaded

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Fonction pour fermer le menu et remettre en haut de page
    const handleLinkClick = () => {
        setMenuOpen(false);
        window.scrollTo(0, 0);
    };

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
                    <li><Link to="/about" onClick={handleLinkClick}>À propos</Link></li>
                    <li><Link to="/local" onClick={handleLinkClick}>Le Local</Link></li>
                    <li><Link to="/benevole" className="btn-outline" onClick={handleLinkClick}>Devenir Bénévole</Link></li>
                    <li><Link to="/donate" className="don-btn" onClick={handleLinkClick}>Faire un Don</Link></li>
                </ul>
            </div>
        </nav>
    );
}