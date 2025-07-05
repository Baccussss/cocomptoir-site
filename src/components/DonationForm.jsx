import React, { useState } from 'react';
import '../styles/DonationForm.css';

export default function DonationForm() {
  const [form, setForm] = useState({
    address: '',
    email: '',
    dons: {
      vetements: false,
      nourriture: false,
      hygiene: false,
    },
    disponibilites: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Ici tu pourras intégrer EmailJS ou autre service d'envoi
  }

  return (
    <section className="donation-form-section">
      <h2>Faire un don</h2>
      <form className="donation-form" onSubmit={handleSubmit}>
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
        <fieldset>
          <legend>Type(s) de don :</legend>
          <label>
            <input
              type="checkbox"
              name="vetements"
              checked={form.dons.vetements}
              onChange={handleChange}
            />
            Vêtements
          </label>
          <label>
            <input
              type="checkbox"
              name="nourriture"
              checked={form.dons.nourriture}
              onChange={handleChange}
            />
            Nourriture
          </label>
          <label>
            <input
              type="checkbox"
              name="hygiene"
              checked={form.dons.hygiene}
              onChange={handleChange}
            />
            Produits d’hygiène
          </label>
        </fieldset>
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
        <button type="submit">Envoyer</button>
        {submitted && <p className="form-success">Merci pour votre don ! Nous vous contacterons rapidement.</p>}
      </form>
    </section>
  );
} 