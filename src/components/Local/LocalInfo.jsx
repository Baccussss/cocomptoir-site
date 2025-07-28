import React from 'react';
import '../../styles/Local/LocalInfo.css';
import localPhoto from '../../assets/images/local1.png';

const LocalInfos = () => {
  return (
    <section className="local-infos-section">
      <div className="local-infos-flex">
        <div className="local-infos-content">
          <h3 className="local-infos-title">En pratique</h3>
          <p className="local-infos-text">
            Le Local CoComptoir, c'est un <strong>café solidaire</strong> ouvert à toutes et tous, sans condition. Viens discuter, te poser, rencontrer d'autres étudiant·es ou simplement profiter d'un moment convivial autour d'un café ou d'un goûter.<br /><br />
            Si tu en ressens le besoin, tu peux aussi y prendre gratuitement de la <strong>nourriture</strong>, des <strong>produits d'hygiène</strong> ou des <strong>vêtements</strong> selon tes besoins, en toute discrétion et bienveillance.<br /><br />
          </p>
        </div>
        <div className="local-infos-img-block">
          <img src={localPhoto} alt="local CoComptoir " className="local-infos-img" />
        </div>
      </div>
    </section>
  );
};

export default LocalInfos; 