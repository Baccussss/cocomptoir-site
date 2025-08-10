import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import '../../styles/Benevole/BenevoleForm.css';

export default function BenevoleForm() {
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    age: '',
    email: '',
    telephone: '',
    investissement: {
      permanences: false,
      collecte_dons: false,
      disponibilites: '',
    },
    motivation: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [captcha, setCaptcha] = useState(null);
  const formRef = useRef();

  function handleChange(e) {
    const { name, value, checked } = e.target;
    if (name in form.investissement) {
      if (name === 'permanences' || name === 'collecte_dons') {
        setForm(prev => ({
          ...prev,
          investissement: { ...prev.investissement, [name]: checked },
        }));
      } else {
        setForm(prev => ({
          ...prev,
          investissement: { ...prev.investissement, [name]: value },
        }));
      }
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  }

  function handleCaptcha(value) {
    setCaptcha(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!captcha) {
      setError('Veuillez valider le CAPTCHA.');
      return;
    }
    setError('');

    emailjs
      .sendForm(
        'service_3wmjjrg',
        'template_jehorzo',
        formRef.current,
        '1rYHPhS65bpP8ZSMH'
      )
      .then(() => {
        setSubmitted(true);
        setForm({
          prenom: '',
          nom: '',
          age: '',
          email: '',
          telephone: '',
          investissement: { permanences: false, collecte_dons: false, disponibilites: '' },
          motivation: '',
        });
        setCaptcha(null);
        if (formRef.current) formRef.current.reset();
      })
      .catch((err) => {
        if (err && err.text) {
          setError("Erreur lors de l'envoi : " + err.text + " Réessayez plus tard.");
        } else {
          setError("Erreur lors de l'envoi, réessayez plus tard.");
        }
      });
  }

  return (
    <section className="benevole-form-section">
      <h2 className="benevole-form-title">Devenir bénévole</h2>
      <p className="benevole-form-desc">
        Rejoignez notre équipe de bénévoles et participez à nos actions solidaires.
        Remplissez ce formulaire et nous vous recontacterons rapidement.
      </p>

      <form ref={formRef} className="benevole-form" onSubmit={handleSubmit}>
        {/* Bandeaux d’état */}
        {/* Messages d'état */}
        {error && <p className="form-error">{error}</p>}

        {/* Champs principaux */}
        <div className="form-grid">
          <label className="field">
            <span className="field-label">Prénom</span>
            <input
              type="text"
              name="prenom"
              value={form.prenom}
              onChange={handleChange}
              required
              placeholder="Votre prénom"
            />
          </label>

          <label className="field">
            <span className="field-label">Nom</span>
            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              required
              placeholder="Votre nom"
            />
          </label>

          <label className="field">
            <span className="field-label">Âge</span>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              required
              min="1"
              max="100"
              placeholder="Votre âge"
            />
          </label>

          <label className="field">
            <span className="field-label">Adresse mail</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Votre email"
            />
          </label>

          <label className="field field--full">
            <span className="field-label">Numéro de téléphone</span>
            <input
              type="tel"
              name="telephone"
              value={form.telephone}
              onChange={handleChange}
              required
              placeholder="Votre numéro de téléphone"
            />
          </label>
        </div>

        {/* Bloc “Ce que vous souhaitez faire” — même logique visuelle que DonationForm */}
        <div className="choice-row">
          <span className="choice-label">Ce que vous souhaitez faire :</span>

          <div className="choice-checkbox-row">
            <label className="choice">
              <span className="choice-text">Faire des permanences au local</span>
              <input
                type="checkbox"
                name="permanences"
                checked={form.investissement.permanences}
                onChange={handleChange}
              />
            </label>

            <label className="choice">
              <span className="choice-text">Aider à chercher des dons</span>
              <input
                type="checkbox"
                name="collecte_dons"
                checked={form.investissement.collecte_dons}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        {/* Disponibilités */}
        <label className="field field--full">
          <span className="field-label">Disponibilités régulières</span>
          <input
            type="text"
            name="disponibilites"
            value={form.investissement.disponibilites}
            onChange={handleChange}
            placeholder="Ex : mardis et jeudis après‑midi, week‑ends…"
          />
        </label>

        {/* Motivation */}
        <label className="field field--full">
          <span className="field-label">Motivation</span>
          <textarea
            name="motivation"
            value={form.motivation}
            onChange={handleChange}
            rows={4}
            placeholder="Parlez‑nous de votre motivation et de ce qui vous intéresse dans le bénévolat…"
            required
          />
        </label>

        {/* Champs cachés pour EmailJS */}
        <input type="hidden" name="permanences" value={form.investissement.permanences ? 'Oui' : 'Non'} />
        <input type="hidden" name="collecte_dons" value={form.investissement.collecte_dons ? 'Oui' : 'Non'} />
        <input type="hidden" name="disponibilites" value={form.investissement.disponibilites} />

        {/* CAPTCHA + bouton plein largeur dessous */}
        <div className="captcha-row">
          <ReCAPTCHA
            sitekey="6LeqJHkrAAAAAGnVc8aL3A7hBd8HtNaLiRkYHSaw"
            onChange={handleCaptcha}
          />
        </div>

        {!submitted && <button type="submit">Envoyer ma candidature</button>}
        {submitted && <p className="form-success">Merci pour votre candidature ! Nous vous contacterons rapidement.</p>}
      </form>
    </section>
  );
}