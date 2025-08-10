import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/General/Navbar.css';
import logo from '../../assets/logo.png';
import tablebonhomme from '../../assets/bonhommes/tablebonhomme.png';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
        window.scrollTo(0, 0);
    };

    // Barre de progression de scroll optimisée
    useEffect(() => {
        let ticking = false;
        
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.scrollY;
                    const docHeight = document.body.scrollHeight - window.innerHeight;
                    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                    const bar = document.getElementById('scroll-progress');
                    if (bar) bar.style.width = pct + '%';
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // init
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Barre de progression */}
            <div id="scroll-progress" aria-hidden="true"></div>

            <nav className="navbar" role="navigation" aria-label="Navigation principale">
                <div className="navbar-left">
                    <NavLink to="/" onClick={handleLinkClick} className="logo-link" end>
                        <img src={logo} alt="Logo CoComptoir" className="logo" loading="eager" />
                    </NavLink>
                </div>

                <div className="navbar-image" aria-hidden="true">
                    <img src={tablebonhomme} alt="Table Bonhomme" loading="lazy" />
                </div>

                <button
                    className="hamburger"
                    aria-label="Ouvrir le menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </button>

                <div className="navbar-right">
                    <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                        <li>
                            <NavLink
                                to="/about"
                                onClick={handleLinkClick}
                                className={({ isActive }) => (isActive ? 'link active' : 'link')}
                            >
                                À propos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/local"
                                onClick={handleLinkClick}
                                className={({ isActive }) => (isActive ? 'link active' : 'link')}
                            >
                                Le Local
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/benevole"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    isActive ? 'btn-outline active' : 'btn-outline'
                                }
                            >
                                Devenir Bénévole
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donate"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    isActive ? 'don-btn active' : 'don-btn'
                                }
                            >
                                Faire un Don
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
