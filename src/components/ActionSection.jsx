import React from 'react';
import '../styles/ActionSection.css';
import bikeIcon from '../assets/bonhommes/bike.png';
import canIcon from '../assets/bonhommes/can.png';
import tableIcon from '../assets/bonhommes/table.png';
import { Link } from 'react-router-dom';

const actions = [
    {
        icon: bikeIcon,
        title: 'Une collecte chez les particuliers',
        description: "Participez en offrant des vêtements, de la nourriture ou des produits d'hygiène. Pas besoin de vous déplacer : nous venons les chercher chez vous !"
    },
    {
        icon: canIcon,
        title: 'Une redistribution équitable des produits',
        description: "Nous mettons à disposition des étudiant·es qui en ont besoin des produits essentiels : denrées alimentaires, produits d’hygiène et vêtements."
    },
    {
        icon: tableIcon,
        title: 'Un lieu convivial et accueillant',
        description: "Venez passer du temps dans notre local pour échanger, rencontrer et soutenir d'autres étudiants.",
        withButton: true
    }
];

export default function ActionSection() {
    return (
        <section className="action-section">
            <h2>Des actions concrètes</h2>
            <div className="actions-container">
                {actions.map(({ icon, title, description, withButton }, index) => (
                    <div className="action-card" key={index}>
                        <img src={icon} alt={`Icône ${title}`} className="action-icon" />
                        <h3>{title}</h3>
                        <p>{description}</p>
                        {withButton && (
                          <Link to="/local" className="action-btn">Découvrir le local</Link>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}