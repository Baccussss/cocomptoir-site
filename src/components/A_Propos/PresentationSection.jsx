import React from 'react';
import '../../styles/A_Propos/PresentationSection.css';
import ekip from '../../assets/images/ekip.jpg';

const PresentationSection = () => {
  return (
    <section className="presentation-section">
      {/* décor doux au-dessus du vert (sans changer la couleur de base) */}
      <div className="presentation-bg" aria-hidden="true" />

      <div className="presentation-flex">
        <div className="presentation-left">
          <span className="presentation-badge">Qui sommes‑nous ?</span>

          <h2 className="presentation-title">
            Découvrez CoComptoir : une association solidaire pour les étudiants en situation de précarité.
          </h2>

          <div className="presentation-card">
            <p className="presentation-text">
              CoComptoir est né de la volonté d'étudiants de lutter contre la précarité, et l'isolement étudiant, qui vont souvent de pair.
              Ainsi, plus qu’un simple point de distribution, CoComptoir se veut être un espace de solidarité et de convivialité,
              où les étudiant·es peuvent se retrouver, échanger et participer à des initiatives collectives.
            </p>
          </div>
        </div>

        <div className="presentation-right">
          <figure className="presentation-figure">
            <img src={ekip} alt="Conseil CoComptoir" className="presentation-img" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
