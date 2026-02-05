import React from 'react';

export const metadata = {
  date: '2026-02-04',
  title: 'Repas partagée le 8 mars 2026 !',
  description: 'Le CoComptoir organise un repas partagé le dimanche 8 mars 2026 ',
};

export default function Article_2026_02_04() {
  return (
    <article className="news-card">
      <h3>{metadata.title}</h3>
      <p className="news-date">{metadata.date}</p>
      
      {/* 
                le contenu
       */}
      <p>
        Le 8 mars, le CoComptoir vous ouvre ses portes pour une journée permanence avec un Repas partagé ! <br /><br/>
        Le concept ?<br />
        <strong>Pas besoin</strong> de cuisiner à l'avance ou de ramener vos plats : on ramène les produits et on cuisine tous ! <br/>
        Que vous soyez un chef en herbe ou simplement là pour la convivialité, vous êtes les bienvenus pour préparer le repas et le déguster dans la foulée.<br/><br/>
        La donnerie sera également ouverte pendant la permanence !<br/><br/>
        Pour plus d'informations et pour vous <strong>inscrire </strong>cliquer sur le lien juste en dessous !<br/><br/>
      </p>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <a 
          href="https://www.helloasso.com/associations/cocomptoir/evenements/repas-partage-au-cocomptoir"
          target="_blank"
          rel="noopener noreferrer"
          className="news-button"
        >
        Lien HelloAsso
        </a>
        </div>
    </article>
  );
}