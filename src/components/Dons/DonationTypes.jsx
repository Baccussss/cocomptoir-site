import React from 'react';
import '../../styles/Dons/DonationTypes.css';

import vetementsImg from '../../assets/bonhommes/vetement.png';
import nourritureImg from '../../assets/bonhommes/nourriture.png';
import hygieneImg from '../../assets/bonhommes/hygiene.png';

export default function DonationTypes() {
  return (
    <section className="donation-types-section">
      <h2>Quels types de dons pouvez-vous faire ?</h2>
      <div className="donation-types-cards">
        <div className="donation-type-card">
          <img src={vetementsImg} alt="Vêtements" className="donation-type-img" />
          <h3>Vêtements</h3>
          <p>Nous collectons des vêtements propres et en bon état pour les redistribuer à des étudiants dans le besoin.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aspernatur inventore ullam similique tenetur necessitatibus iste. Dicta incidunt necessitatibus, quae harum placeat magnam, ea omnis obcaecati accusamus et, facilis ipsa?</p>
        </div>
        <div className="donation-type-card">
          <img src={nourritureImg} alt="Nourriture" className="donation-type-img" />
          <h3>Nourriture</h3>
          <p>Vous pouvez donner des denrées non périssables (pâtes, riz, conserves, etc.) pour soutenir l’alimentation des étudiants.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aspernatur inventore ullam similique tenetur necessitatibus iste. Dicta incidunt necessitatibus, quae harum placeat magnam, ea omnis obcaecati accusamus et, facilis ipsa?</p>
        </div>
        <div className="donation-type-card">
          <img src={hygieneImg} alt="Produits d’hygiène" className="donation-type-img" />
          <h3>Produits d’hygiène</h3>
          <p>Les produits d’hygiène (savon, dentifrice, protections, etc.) sont essentiels pour le bien-être de tous.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime odit molestiae ad libero quia dolorem, itaque veniam amet quos nesciunt, eligendi corrupti reiciendis nam aperiam nihil laborum officiis ut facilis.</p>
        </div>
      </div>
    </section>
  );
} 