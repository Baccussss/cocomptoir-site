import React from 'react';
/*import hamac from '../assets/bonhommes/hamac.png'; */
import ravi from '../../assets/bonhommes/raviblanc.png'; // image décorative principale
import '../../styles/General/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-title-row">
          <span className="footer-title">Adresse&nbsp;:</span>
          <span className="footer-address">2 Rue Jean-Baptiste Clément, Villeurbanne</span>
        </div>
        <div className="footer-title-row">
          <span className="footer-title">Contact&nbsp;:</span>
          <div className="footer-contact-insta">
            <a href="mailto:contact@cocomptoir.com" className="footer-contact">association@cocomptoir.com</a>
            <a href="https://instagram.com/cocomptoir" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-insta-inline">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="#fff"/>
                <path d="M16.98 3H7.02C4.25 3 3 4.25 3 7.02V16.98C3 19.75 4.25 21 7.02 21H16.98C19.75 21 21 19.75 21 16.98V7.02C21 4.25 19.75 3 16.98 3ZM19.5 16.98C19.5 18.43 18.43 19.5 16.98 19.5H7.02C5.57 19.5 4.5 18.43 4.5 16.98V7.02C4.5 5.57 5.57 4.5 7.02 4.5H16.98C18.43 4.5 19.5 5.57 19.5 7.02V16.98Z" fill="#111"/>
                <path d="M12 7.5C9.24 7.5 7.5 9.24 7.5 12C7.5 14.76 9.24 16.5 12 16.5C14.76 16.5 16.5 14.76 16.5 12C16.5 9.24 14.76 7.5 12 7.5ZM12 15C10.07 15 9 13.93 9 12C9 10.07 10.07 9 12 9C13.93 9 15 10.07 15 12C15 13.93 13.93 15 12 15Z" fill="#111"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="#111"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-center">
      {/* <img src={ravi} alt="Décoration" className="footer-deco-inline" /> */}
        <span className="footer-copyright">
          © 2025 CoComptoir. Tous droits réservés
        </span>
      </div>
      <div className="footer-right">
        {/* <img src={hamac} alt="Logo" className="footer-hamac" /> */}
        <img src={ravi} alt="Décoration" className="footer-hamac" />
      </div>
    </footer>
  );
} 