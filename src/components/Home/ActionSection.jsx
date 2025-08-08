import React from 'react';
import '../../styles/Home/ActionSection.css';
import bikeIcon from '../../assets/bonhommes/bike.png';
import canIcon from '../../assets/bonhommes/can.png';
import tableIcon from '../../assets/bonhommes/table.png';
import { Link } from 'react-router-dom';

const actions = [
  {
    icon: bikeIcon,
    title: 'Une collecte chez les particuliers',
    description:
      "Participez en offrant des vêtements, de la nourriture ou des produits d'hygiène. Pas besoin de vous déplacer : nous venons les chercher chez vous !",
  },
  {
    icon: canIcon,
    title: 'Une redistribution équitable des produits',
    description:
      "Nous mettons à disposition des étudiant·es qui en ont besoin des produits essentiels : denrées alimentaires, produits d’hygiène et vêtements.",
  },
  {
    icon: tableIcon,
    title: 'Un lieu convivial et accueillant',
    description:
      "Venez passer du temps dans notre local pour échanger, rencontrer et soutenir d'autres étudiants.",
    withButton: true,
  },
];

export default function ActionSection() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section className="action-section" aria-labelledby="actions-title">
      <div className="action-bg" aria-hidden="true" />
      <h2 id="actions-title" className="action-title">
        Des actions concrètes
      </h2>

      <div className="actions-grid">
        {actions.map(({ icon, title, description, withButton }, i) => (
          <article className="action-card" key={i}>
            <span className="card-accent" aria-hidden="true" />
            <div className="icon-pill">
              <img src={icon} alt="" className="action-icon" aria-hidden="true" />
            </div>

            <h3 className="card-title">{title}</h3>
            <p className="card-desc">{description}</p>

            {withButton && (
              <Link
                to="/local"
                className="action-btn"
                onClick={scrollTop}
              >
                Découvrir le local 
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
