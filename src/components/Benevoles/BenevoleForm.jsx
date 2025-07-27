import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import '../../styles/Benevole/BenevoleForm.css'

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
        setForm({
          ...form,
          investissement: { ...form.investissement, [name]: checked },
        });
      } else {
        setForm({
          ...form,
          investissement: { ...form.investissement, [name]: value },
        });
      }
    } else {
      setForm({ ...form, [name]: value });
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
    // Envoi EmailJS
    emailjs.sendForm(
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
        setError("Erreur lors de l'envoi : " + err.text + "réessayez plus tard.");
      } else {
        setError("Erreur lors de l'envoi, réessayez plus tard.");
      }
    });
  }

  return (
    <section className="benevole-form-section">
      <h2>Devenir bénévole</h2>
      <p className="benevole-form-desc">Rejoignez notre équipe de bénévoles et participez à nos actions solidaires. Remplissez ce formulaire et nous vous recontacterons rapidement.</p>
      <form ref={formRef} className="benevole-form full-width-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Prénom :
            <input
              type="text"
              name="prenom"
              value={form.prenom}
              onChange={handleChange}
              required
              placeholder="Votre prénom"
            />
          </label>
          <label>
            Nom :
            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              required
              placeholder="Votre nom"
            />
          </label>
        </div>
        <label>
          Âge :
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
            placeholder="Votre âge"
            min="16"
            max="100"
          />
        </label>
        <label>
          Adresse mail :
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Votre email"
          />
        </label>
        <label>
          Numéro de téléphone :
          <input
            type="tel"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            required
            placeholder="Votre numéro de téléphone"
          />
        </label>
        <div className="investissement-row">
          <span className="investissement-label">Ce que vous souhaitez faire :</span>
          <div className="investissement-checkbox-row">
            <label>
              Faire des permanences au local
              <input
                type="checkbox"
                name="permanences"
                checked={form.investissement.permanences}
                onChange={handleChange}
              />
            </label>
            <label>
              Aider à chercher des dons
              <input
                type="checkbox"
                name="collecte_dons"
                checked={form.investissement.collecte_dons}
                onChange={handleChange}
              />
            </label>
          </div>
          <label>
            Disponibilités régulières :
            <input
              type="text"
              name="disponibilites"
              value={form.investissement.disponibilites}
              onChange={handleChange}
              placeholder="Ex : mardis et jeudis après-midi, week-ends..."
            />
          </label>
        </div>
        <label>
          Motivation pour devenir bénévole :
          <textarea
            name="motivation"
            value={form.motivation}
            onChange={handleChange}
            rows={4}
            placeholder="Parlez-nous de votre motivation et de ce qui vous intéresse dans le bénévolat..."
            required
          />
        </label>
        {/* Champs cachés pour envoyer les données d'investissement */}
        <input type="hidden" name="permanences" value={form.investissement.permanences ? 'Oui' : 'Non'} />
        <input type="hidden" name="collecte_dons" value={form.investissement.collecte_dons ? 'Oui' : 'Non'} />
        <input type="hidden" name="disponibilites" value={form.investissement.disponibilites} />
        <div style={{margin: '1.2rem 0'}}>
          <ReCAPTCHA
            sitekey="6LeqJHkrAAAAAGnVc8aL3A7hBd8HtNaLiRkYHSaw"
            onChange={handleCaptcha}
          />
        </div>
        {error && <p className="form-error">{error}</p>}
        {!submitted && <button type="submit">Envoyer ma candidature</button>}
        {submitted && <p className="form-success">Merci pour votre candidature ! Nous vous contacterons rapidement.</p>}
      </form>
    </section>
  );
} 