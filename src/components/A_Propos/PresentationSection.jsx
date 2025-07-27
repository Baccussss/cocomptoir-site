import React from 'react';
import '../../styles/A_Propos/PresentationSection.css';
import ekip from '../../assets/images/ekip.png';

const PresentationSection = () => {
  return (
    <section className="presentation-section">
      <div className="presentation-flex">
        <div className="presentation-left">
          <h2 className="presentation-title">
            Découvrez CoComptoir : une association solidaire pour les étudiants en situation de précarité.
          </h2>
          <p className="presentation-text">
            CoComptoir est né de la volonté d'étudiant de lutter contre la précarité, et l'isolement étudiant, qui vont souvent de pair. Ainsi, plus qu’un simple point de distribution, CoComptoir se veut être un espace de solidarité et de convivialité, où les étudiant·es peuvent se retrouver, échanger et participer à des initiatives collectives.
          </p>
        </div>
        <div className="presentation-right">
          <img src={ekip} alt="Conseil CoComptoir" className="presentation-img" />
        </div>
      </div>
    </section>
  );
};

export default PresentationSection; 