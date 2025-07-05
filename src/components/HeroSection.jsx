// src/components/HeroSection.jsx
import { Link } from 'react-router-dom';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/HeroSection.css';

import photo1 from '../assets/images/local2.png';
import photo2 from '../assets/images/local2.png';
import photo3 from '../assets/images/local3.png';

import bonhommeRavi from '../assets/bonhommes/bonhommeravi.png';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSection = () => {
    return (
        <section className="hero-container">
            <div className="hero-text">
                <h1 className="hero-title">
                    CoComptoir, une association pour les étudiant·es !
                </h1>
                <p className="hero-description">
                    Nous luttons contre la précarité étudiante en offrant un accès à des produits essentiels dans notre local convivial !
                </p>
                <div className="hero-buttons">
                    <Link to="/volunteer" className="hero-button">Devenir Bénévole</Link>
                    <Link to="/donate" className="hero-button">Faire un Don</Link>
                </div>
            </div>

            <div className="hero-carousel">
                <Swiper
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                >
                    <SwiperSlide><img src={photo1} alt="Action CoComptoir 1" className="hero-image" /></SwiperSlide>
                    <SwiperSlide><img src={photo2} alt="Action CoComptoir 2" className="hero-image" /></SwiperSlide>
                    <SwiperSlide><img src={photo3} alt="Action CoComptoir 3" className="hero-image" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="hero-decoration">
                <img src={bonhommeRavi} alt="Décoration CoComptoir" />
            </div>
        </section>
    );
};

export default HeroSection;