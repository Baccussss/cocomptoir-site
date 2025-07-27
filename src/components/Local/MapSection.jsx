import React from 'react';
import '../../styles/Local/MapSection.css';

const MapSection = () => {
  return (
    <section className="map-section map-section-beige">
      <div className="map-cards-row">
        <div className="map-ou-card">
          <h2 className="map-title">Où nous retrouver ?</h2>
          <div className="map-ou-adresse-row">
            <span className="map-address-title">Adresse :</span>
            <span className="map-address-inline">2 Rue Jean-Baptiste Clément, 69100 Villeurbanne</span>
          </div>
          <div className="map-ou-iframe-block">
            <iframe
              title="Carte Google Maps du local CoComptoir"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.073964479836!2d4.872497476697282!3d45.77249597108009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea6e2e2e2e2b%3A0x2e2e2e2e2e2e2e2e!2s2%20Rue%20Jean-Baptiste%20Cl%C3%A9ment%2C%2069100%20Villeurbanne!5e0!3m2!1sfr!2sfr!4v1718030000000!5m2!1sfr!2sfr"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-ou-iframe"
            ></iframe>
          </div>
        </div>
        <div className="map-planning-card">
          <h2 className="map-title">Planning du Local</h2>
          <p className="map-planning-text">
            Les horaires d'ouverture du local sont publiés chaque semaine sur notre Instagram.<br />
            Nous y annonçons également tous les événements conviviaux organisés au local !<br />
            Suis-nous pour ne rien manquer de la vie du local et rester informé·e de toutes nos actualités.
          </p>
          <a
            href="https://instagram.com/cocomptoir"
            target="_blank"
            rel="noopener noreferrer"
            className="map-planning-insta-btn"
            aria-label="Instagram CoComptoir"
          >
            Voir le planning sur Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection; 