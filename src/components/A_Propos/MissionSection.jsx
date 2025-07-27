// src/components/MissionSection.jsx
import React from 'react';
import '../../styles/A_Propos/MissionSection.css';
import conseilImg from '../../assets/bonhommes/conseil.png';

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="mission-flex">
        <h2 className="mission-title">Notre Mission</h2>
        <img src={conseilImg} alt="Conseil CoComptoir" className="mission-img" />
        <p className="mission-text">
          CoComptoir s'engage à lutter contre la précarité et l'isolement des étudiants en leur offrant un accès gratuit à des produits essentiels et en leur proposant un espace solidaire où chacun peut se sentir soutenu et valorisé.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;