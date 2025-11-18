import { Link } from 'react-router-dom';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles/Home/HeroSection.css';

import photo1 from '../../assets/images/local2.jpg';

import bonhommeRavi from '../../assets/bonhommes/bonhommeravi.png';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSection = () => {
    return (
        <section className="hero-container">
            <div className="hero-text">
                {/* Badge/étiquette au-dessus du titre */}
                <span className="hero-badge">Association étudiante solidaire</span>

                <h1 className="hero-title">
                    CoComptoir, une association pour les étudiant·es !
                </h1>
                <p className="hero-description">
                    Nous luttons contre la précarité étudiante en offrant un accès à des produits essentiels dans notre local convivial ! <br></br> On ouvre tous les jeudis et dimanches de 13h à 17h !

                </p>
                <div className="hero-buttons">
                    <Link to="/benevole" className="hero-button">Devenir Bénévole</Link>
                    <Link to="/donate" className="hero-button">Faire un Don</Link>
                </div>
            </div>

            <div className="hero-carousel">
                <Swiper
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    speed={400}
                >
                    <SwiperSlide><img src={photo1} alt="Action CoComptoir 1" className="hero-image" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="hero-decoration">
                <img src={bonhommeRavi} alt="Décoration CoComptoir" loading="lazy" />
            </div>
        </section>
    );
};

export default HeroSection;
