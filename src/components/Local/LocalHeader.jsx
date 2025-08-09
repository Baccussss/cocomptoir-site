import React from 'react';
import '../../styles/Local/LocalHeader.css';
import brosse from '../../assets/bonhommes/brosse.png';

const LocalHeader = () => {
  return (
    <section className="local-header-section">
      <div className="local-header-flex">
        <h2 className="local-header-title">Le Local</h2>

        <img
          src={brosse}
          alt="Ambiance conviviale CoComptoir"
          className="local-header-img"
        />

        <p className="local-header-text">
          Un lieu chaleureux, solidaire et ouvert à tous les étudiants !<br />
          Viens partager un café, discuter, t’informer ou simplement te poser dans une ambiance bienveillante.
          Ici, chaque étudiant·e est le·la bienvenu·e.
        </p>
      </div>
    </section>
  );
};

export default LocalHeader;
