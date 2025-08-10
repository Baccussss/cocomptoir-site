import React, { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const LazyReCAPTCHA = ({ onChange, sitekey }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsVisible(true);
          setIsLoaded(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isLoaded]);

  return (
    <div ref={containerRef} style={{ margin: '1.2rem 0', minHeight: '78px' }}>
      {isVisible ? (
        <ReCAPTCHA
          sitekey={sitekey}
          onChange={onChange}
          size="normal"
          theme="light"
          tabIndex={0}
        />
      ) : (
        <div style={{ 
          width: '302px', 
          height: '78px', 
          backgroundColor: '#f9f9f9', 
          border: '1px solid #d3d3d3',
          borderRadius: '3px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          fontSize: '14px'
        }}>
          Chargement du CAPTCHA...
        </div>
      )}
    </div>
  );
};

export default LazyReCAPTCHA; 