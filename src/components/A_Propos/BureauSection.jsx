import React from 'react';
import '../../styles/A_Propos/BureauSection.css';
import Eliott from '../../assets/teteBureau/Eliott.jpg';
import Milla from '../../assets/teteBureau/Milla.jpg';
import Ernest from '../../assets/teteBureau/Ernest.jpg';
import Noe from '../../assets/teteBureau/Noe.jpg';
import Noa from '../../assets/teteBureau/Noa.jpg';
import Yanis from '../../assets/teteBureau/Yanis.jpeg';

const membres = [
  {
    nom: 'Noémie Craplet',
    role: 'Co-présidente',
    desc: 'Responsable de la logistique : inventaire et gestion des stocks',
    photo: Noe,
  },
  {
    nom: 'Eliott Frechard',
    role: 'Co-président',
    desc: 'Chargé de la communication et de la recherche de financement',
    photo: Eliott,
  },
  {
    nom: 'Milla Thomas',
    role: 'Co-présidente',
    desc: 'Secrétaire générale : lien entre les pôles de l’association et gestion de l’organisation générale',
    photo: Milla,
  },
  {
    nom: 'Ernest Amouroux',
    role: 'Trésorier',
    desc: 'Chargé de la comptabilité et de la gestion des fonds de l’association',
    photo: Ernest,
  },
  {
    nom: 'Noâ Dana',
    role: 'Directrice artistique',
    desc: 'Responsable de la création graphique : logo, identité visuelle, éléments de communication...',
    photo: Noa,
  },
  {
    nom: 'Yanis Gallard',
    role: 'Responsable technique',
    desc: 'Administrateur du site internet pour garantir son bon fonctionnement',
    photo: Yanis,
  },
];

const BureauSection = () => {
  return (
    <section className="bureau-section">
      <div className="bureau-header">
        <h2 className="bureau-title">Le bureau</h2>
        <p className="bureau-subtitle">A l’initiative d’un groupe d’ami.e.s étudiants à l’INSA de Lyon</p>
      </div>
      <div className="bureau-grid">
        {membres.map((m, i) => (
          <div className="bureau-card" key={i}>
            <div className="bureau-photo-wrapper">
              {m.photo ? (
                <img src={m.photo} alt={`${m.nom}`} className="bureau-photo" />
              ) : (
                <div className="bureau-photo bureau-photo-placeholder" />
              )}
            </div>
            <div className="bureau-nom">{m.nom}</div>
            <div className="bureau-role">{m.role}</div>
            <div className="bureau-desc">{m.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BureauSection; 