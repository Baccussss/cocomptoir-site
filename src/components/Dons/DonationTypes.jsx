import React from 'react';
import '../../styles/Dons/DonationTypes.css';

import vetementsImg from '../../assets/bonhommes/vetement.png';
import nourritureImg from '../../assets/bonhommes/nourriture.png';
import hygieneImg from '../../assets/bonhommes/hygiene.png';

export default function DonationTypes() {
  return (
    <section className="donation-types-section">
      <h2 className="donation-types-title">Quels types de dons pouvez-vous faire ?</h2>


      <div className="donation-types-cards">
        <article className="donation-type-card">
          <img src={vetementsImg} alt="Vêtements" className="donation-type-img" />
          <h3>Vêtements</h3>
          <p>Les vêtements oubliés dans vos armoires peuvent encore servir ! Nous collectons des vêtements propres et en bon état pour les redistribuer à des étudiant·es dans le besoin : T-shirt, pantalon, vêtements de sport ou même blouse que vous n'utilisez plus, si ils ne sont pas abîmés ils peuvent trouver un nouveau propriétaire. Indiquez pour chaque vêtements dans le formulaire de don (en bas de la page) son type et sa taille.</p>
        </article>

        <article className="donation-type-card">
          <img src={nourritureImg} alt="Nourriture" className="donation-type-img" />
          <h3>Nourriture</h3>
          <p>Faites un geste à votre échelle en faveur de la sécurité alimentaire des étudiant·es en donnant des denrées non périssables : pâtes, riz, conserves, etc. Tout cela nous intéresse et sera redistribué aux étudiant·es qui en ont besoin dans notre local convivial ! Les emballages doivent être intactes. Dites nous dans le formulaire de don le type de produit et la quantité.</p>
        </article>

        <article className="donation-type-card">
          <img src={hygieneImg} alt="Produits d’hygiène" className="donation-type-img" />
          <h3>Produits d’hygiène</h3>
          <p>Les produits d’hygiène sont essentiels pour le bien-être de tous. Savons, dentifrice, protections hygiéniques... Aidez les étudiant·es en situation de précarité à avoir accès à ces produits de première nécessité. Nous récupérons tous types de produits d'hygiène, sous réserve qu'ils soient encore emballés. Précisez nous le type de produit et la quantité dans le formulaire de don en bas de la page.</p>
        </article>
      </div>

      <div className="donation-financial-info">
        <div className="donation-financial-row">
          <p className="donation-financial-text">
            Si vous souhaitez faire un don financier à l'association, cela se passe sur notre page&nbsp;
          </p>
          <a
            href="https://www.helloasso.com/associations/cocomptoir"
            target="_blank"
            rel="noopener noreferrer"
            className="donation-financial-btn"
          >
            HelloAsso
          </a>
        </div>
      </div>
    </section>
  );
}