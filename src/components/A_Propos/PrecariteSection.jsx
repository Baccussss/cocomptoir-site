import React from 'react';
import precarite from '../../assets/bonhommes/precarite.png';
import '../../styles/A_Propos/PrecariteSection.css';
// import placeholder from '../../assets/images/ekip.png'; // À remplacer par la vraie image si besoin

const PrecariteSection = () => {
  return (
    <section className="precarite-section">
      <div className="precarite-flex">
        <div className="precarite-left">
          <img src={precarite} alt="Illustration de la précarité étudiante" className="precarite-img" />
        </div>
        <div className="precarite-right">
          <h2 className="precarite-title">
            La précarité étudiante : une réalité alarmante à laquelle nous devons faire face.
          </h2>
          <div className="precarite-desc">
            <p>Notre objectif est de permettre aux etudiant.es de vivre dignement, en facilitant l’accès à :</p>
            <ul>
              <li>Une alimentation suffisante.</li>
              <li>Des produits d’hygiène ou des vêtements, souvent trop onéreux et donc difficiles d’accès pour les étudiant.es en situation de précarité.</li>

              <li>Un espace convivial, favorisant les rencontres et l’entraide, afin de briser l’isolement et d'améliorer le bien être des étudiant.es.</li>
            </ul>
            <p>En combinant ces aspects, nous espérons créer une communauté solidaire, engagée pour un avenir plus juste et plus durable.</p>
          </div>
          <div className="precarite-stats-row">
            <div className="precarite-stat">
              <span className="precarite-stat-value">36&nbsp;%</span>
              <span className="precarite-stat-text">Des étudiant.es ont déjà sauté des repas par manque d’argent</span>
            </div>
            <div className="precarite-stat">
              <span className="precarite-stat-value">41&nbsp;%</span>
              <span className="precarite-stat-text">des étudiant·es déclarent se sentir souvent seul.es</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrecariteSection; 