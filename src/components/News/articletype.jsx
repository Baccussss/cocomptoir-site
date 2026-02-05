import React from 'react';

export const metadata = {
  date: 'YYYY-MM-DD',
  title: 'Titre de l\'article',
  description: 'Description courte',
  image: '/path/to/image.jpg' // optionnel
};

export default function Article_YYYY_MM_DD() {
  return (
    <article className="news-card">
      <h3>{metadata.title}</h3>
      <p className="news-date">{metadata.date}</p>
      <p>{metadata.description}</p>
      
      {/* 
                le contenu
       */}
       <div>
        <h4>Détails de l'actualité</h4>
        <p>Voici le contenu de l'article. Ajoutez ici vos informations, images, etc.</p>
      </div>


    </article>
  );
}