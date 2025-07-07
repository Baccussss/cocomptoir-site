import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import '../../styles/Dons/DonationForm.css'

export default function DonationForm() {
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    address: '',
    email: '',
    dons: {
      vetements: false,
      nourriture: false,
      hygiene: false,
    },
    description: '',
    disponibilites: '',
    telephone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [captcha, setCaptcha] = useState(null);
  const formRef = useRef();

  function handleChange(e) {
    const { name, value, checked } = e.target;
    if (name in form.dons) {
      setForm({
        ...form,
        dons: { ...form.dons, [name]: checked },
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  function handleCaptcha(value) {
    setCaptcha(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const donsChecked = Object.values(form.dons).some(Boolean);
    if (!donsChecked) {
      setError('Veuillez sélectionner au moins un type de don.');
      return;
    }
    if (!captcha) {
      setError('Veuillez valider le CAPTCHA.');
      return;
    }
    setError('');
    // Envoi EmailJS
    emailjs.sendForm(
      'service_3wmjjrg',
      'template_c07oxqq',
      formRef.current,
      '1rYHPhS65bpP8ZSMH'
    )
    .then(() => {
      setSubmitted(true);
      setForm({
        prenom: '',
        nom: '',
        address: '',
        email: '',
        dons: { vetements: false, nourriture: false, hygiene: false },
        description: '',
        disponibilites: '',
        telephone: '',
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
    <section className="donation-form-section">
      <h2>Faire un don</h2>
      <p className="donation-form-desc">Après avoir rempli ce formulaire, nous vous recontacterons pour convenir d’un horaire et nous viendrons récupérer les produits directement chez vous.</p>
      <form ref={formRef} className="donation-form full-width-form" onSubmit={handleSubmit}>
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
          Adresse postale :
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            placeholder="Votre adresse complète"
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
        <div className="donation-type-row">
          <span className="donation-type-label">Type(s) de don :</span>
          <div className="donation-checkbox-row">
            <label>
              Vêtements
              <input
                type="checkbox"
                name="vetements"
                checked={form.dons.vetements}
                onChange={handleChange}
              />
            </label>
            <label>
              Nourriture
              <input
                type="checkbox"
                name="nourriture"
                checked={form.dons.nourriture}
                onChange={handleChange}
              />
            </label>
            <label>
              Produits d’hygiène
              <input
                type="checkbox"
                name="hygiene"
                checked={form.dons.hygiene}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <label>
          Détail de ce que vous souhaitez donner :
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            placeholder="Ex : 2 manteaux, 1 paquet de pâtes, 3 savons..."
            required
          />
        </label>
        <label>
          Disponibilités pour la collecte :
          <input
            type="text"
            name="disponibilites"
            value={form.disponibilites}
            onChange={handleChange}
            required
            placeholder="Ex : soirs, week-end, etc."
          />
        </label>
        {/* Champs cachés pour envoyer les types de dons sous forme de texte */}
        <input type="hidden" name="dons_vetements" value={form.dons.vetements ? 'Oui' : 'Non'} />
        <input type="hidden" name="dons_nourriture" value={form.dons.nourriture ? 'Oui' : 'Non'} />
        <input type="hidden" name="dons_hygiene" value={form.dons.hygiene ? 'Oui' : 'Non'} />
        <div style={{margin: '1.2rem 0'}}>
          <ReCAPTCHA
            sitekey="6LeqJHkrAAAAAGnVc8aL3A7hBd8HtNaLiRkYHSaw"
            onChange={handleCaptcha}
          />
        </div>
        {error && <p className="form-error">{error}</p>}
        {!submitted && <button type="submit">Envoyer</button>}
        {submitted && <p className="form-success">Merci pour votre don ! Nous vous contacterons rapidement.</p>}
      </form>
    </section>
  );
} 