import React from 'react';
import '../../styles/Benevole/BenevoleActions.css';
import table from '../../assets/bonhommes/table.png';
import bike from '../../assets/bonhommes/bike.png';

export default function BenevoleActions() {
  return (
    <section className="benevole-actions-section">
      <div className="container">
        <h2>Actions en tant que bénévole</h2>
        <p className="benevole-actions-desc">
          Découvrez les différentes façons de vous investir dans notre association et de participer à nos actions solidaires.
        </p>
        
        <div className="actions-grid">
          <div className="action-card">
            <img src={table} alt="Local" className="donation-type-img" />
            <h3>Permanence dans le local</h3>
            <p>
              Participez à l'accueil et à l'accompagnement des étudiant.es dans notre local. 
              Vous pourrez aider à la distribution de nourriture, de vêtements et de produits d'hygiène, 
              tout en créant un lien humain avec les bénéficiaires.
            </p>
          </div>

          <div className="action-card">
            <img src={bike} alt="Collecte" className="donation-type-img" />
            <h3>Aider à chercher les dons</h3>
            <p>
              Participez à la collecte et au transport des dons auprès de nos  donateurs. 
              Cette mission est essentielle pour maintenir nos stocks et assurer la continuité de nos actions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 