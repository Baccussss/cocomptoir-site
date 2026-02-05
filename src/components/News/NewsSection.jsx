import React from 'react';
import '../../styles/News/NewsSection.css';
import bonhommeBlaBla from '../../assets/bonhommes/conseil.png';


/* Section déroulante des dernières actualités de l'asso
    chaque élement de la section et un componnent du dossier articles 
*/


import Article_2026_02_04, { metadata as meta1 } from './articles/2026_02_04';
//futur article
//import Article_YYYY_MM_DD, { metadata as metaX } from './articles/YYYY_MM_DD';


const articles = [
  { component: Article_2026_02_04, metadata: meta1 },
  //{ component: Article_YYYY_MM_DD, metadata: metaX },
].sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));


export default function NewsSection() {
    return (
        <section className="news-container">
            <h2 className="news-title">Dernières actualités du CoComptoir</h2>
            <div className="news-cards">
                {articles.map((article, index) => {
                    const ArticleComponent = article.component;
                    return <ArticleComponent key={article.metadata.date || index} />;
                })}
            </div>
            <div className="news-decoration">
                <img src={bonhommeBlaBla} alt="Décoration CoComptoir" loading="lazy" />
            </div>
        </section>
    );
}