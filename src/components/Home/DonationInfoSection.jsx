import React from 'react';
import '../../styles/Home/DonationInfoSection.css'; // Assurez-vous d'avoir ce fichier CSS pour le style;
import Armoire from '../../assets/bonhommes/armoire.png'; // adapte le chemin

const steps = [
    {
        title: "Comment fonctionne notre collecte de dons ?",
        description: "Nous recueillons des dons directement chez des particuliers. Vous pouvez signaler les produits que vous souhaitez donner sur notre site internet puis nous conviendrons d’une date pour la collecte."
    },
    {
        title: "Où et quand redistribuons-nous les dons ?",
        description: "Les produits sont mis à disposition des étudiants dans notre local solidaire. Les horaires d’ouverture sont disponibles sur la page Local ou sur nos réseaux sociaux."
    }
];

export default function ProcessSection() {
    return (
        <section className="process-section">
            <div className="process-top">
                <div className="process-image">
                    <img src={Armoire} alt="Processus collecte et redistribution" />
                </div>
                <div className="process-text">
                    <h2>Découvrez notre processus de collecte et redistribution</h2>
                    <p>Chez CoComptoir, chaque don compte. Nous facilitons la collecte et la redistribution de produits essentiels pour soutenir les étudiants dans le besoin.</p>
                </div>
                
            </div>

            <div className="process-steps">
                {steps.map(({ title, description }, index) => (
                    <div key={index} className="process-step">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}