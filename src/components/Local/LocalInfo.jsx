import React from 'react';
import '../../styles/Local/LocalInfo.css';
import localPhoto from '../../assets/images/local1.png';

const LocalInfos = () => {
  return (
    <section className="local-infos-section">
      {/* décor doux au-dessus du vert */}
      <div className="local-infos-bg" aria-hidden="true" />

      <div className="local-infos-flex">
        <div className="local-infos-left">
          <span className="local-infos-badge">À Villeurbanne</span>

          <h2 className="local-infos-title">En pratique</h2>

          <div className="local-infos-card">
            <p className="local-infos-text">
              Le Local CoComptoir, c'est un <strong>café solidaire</strong> ouvert à toutes et tous, sans condition.
              Viens discuter, te poser, rencontrer d'autres étudiant·es ou simplement profiter d'un moment convivial
              autour d'un café ou d'un goûter.<br /><br />
              Si tu en ressens le besoin, tu peux aussi y prendre gratuitement de la <strong>nourriture</strong>,
              des <strong>produits d'hygiène</strong> ou des <strong>vêtements</strong> selon tes besoins,
              en toute discrétion et bienveillance.
            </p>
          </div>
        </div>

        <div className="local-infos-right">
          <img src={localPhoto} alt="Local CoComptoir" className="local-infos-img" />
        </div>
      </div>
    </section>
  );
};

export default LocalInfos;
