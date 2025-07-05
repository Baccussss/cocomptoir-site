import React from 'react';
import '../styles/DonationTypes.css';

export default function DonationTypes() {
  return (
    <section className="donation-types-section">
      <h2>Quels types de dons pouvez-vous faire ?</h2>
      <div className="donation-types-cards">
        <div className="donation-type-card">
          <h3>Vêtements</h3>
          <p>Nous collectons des vêtements propres et en bon état pour les redistribuer à des étudiants dans le besoin.</p>
        </div>
        <div className="donation-type-card">
          <h3>Nourriture</h3>
          <p>Vous pouvez donner des denrées non périssables (pâtes, riz, conserves, etc.) pour soutenir l’alimentation des étudiants.</p>
        </div>
        <div className="donation-type-card">
          <h3>Produits d’hygiène</h3>
          <p>Les produits d’hygiène (savon, dentifrice, protections, etc.) sont essentiels pour le bien-être de tous.</p>
        </div>
      </div>
    </section>
  );
} 