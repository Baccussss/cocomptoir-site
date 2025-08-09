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
      <div className="benevole-form-bg" aria-hidden="true" />
      <h2 className="benevole-form-title">Devenir bénévole</h2>
      <p className="benevole-form-desc">
        Rejoignez notre équipe de bénévoles et participez à nos actions solidaires.
        Remplissez ce formulaire et nous vous recontacterons rapidement.
      </p>

      <form ref={formRef} className="benevole-form" onSubmit={handleSubmit}>
        {/* Bandeau d’erreur */}
        {error && <p className="form-banner form-banner--error">{error}</p>}
        {/* Bandeau succès */}
        {submitted && <p className="form-banner form-banner--success">Merci pour votre candidature ! Nous vous contacterons rapidement.</p>}

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
              min="16"
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

   <div className="investissement-card">
    <span className="investissement-title">Votre investissement</span>

    <div className="field field--full" style={{marginBottom: '0.5rem'}}>
      <span className="field-label">Ce que vous souhaitez faire</span>
    </div>

    <div className="investissement-checkbox-row">
      <label className="check">
        <input
          type="checkbox"
          name="permanences"
          checked={form.investissement.permanences}
          onChange={handleChange}
        />
        <span className="check-box" aria-hidden="true"></span>
        <span className="check-text">Faire des permanences au local</span>
      </label>

      <label className="check">
        <input
          type="checkbox"
          name="collecte_dons"
          checked={form.investissement.collecte_dons}
          onChange={handleChange}
        />
        <span className="check-box" aria-hidden="true"></span>
        <span className="check-text">Aider à chercher des dons</span>
      </label>
    </div>



          <label className="field field--full">
            <span className="field-label">Disponibilités régulières</span>
            <input
              type="text"
              name="disponibilites"
              value={form.investissement.disponibilites}
              onChange={handleChange}
              placeholder="Ex : mardis et jeudis après-midi, week-ends…"
            />
          </label>
        </div>

        <label className="field field--full">
          <span className="field-label">Motivation</span>
          <textarea
            name="motivation"
            value={form.motivation}
            onChange={handleChange}
            rows={4}
            placeholder="Parlez-nous de votre motivation et de ce qui vous intéresse dans le bénévolat…"
            required
          />
        </label>

        {/* Champs cachés pour EmailJS */}
        <input type="hidden" name="permanences" value={form.investissement.permanences ? 'Oui' : 'Non'} />
        <input type="hidden" name="collecte_dons" value={form.investissement.collecte_dons ? 'Oui' : 'Non'} />
        <input type="hidden" name="disponibilites" value={form.investissement.disponibilites} />

        <div className="captcha-row">
          <ReCAPTCHA
            sitekey="6LeqJHkrAAAAAGnVc8aL3A7hBd8HtNaLiRkYHSaw"
            onChange={handleCaptcha}
          />
        </div>

        {!submitted && (
          <button type="submit" className="submit-btn">
            Envoyer ma candidature
          </button>
        )}
      </form>
    </section>
  );
}
