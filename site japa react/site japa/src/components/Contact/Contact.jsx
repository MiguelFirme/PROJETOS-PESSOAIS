import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Vamos conversar?</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Seu Nome" />
        <input type="email" placeholder="Seu E-mail" />
        <textarea rows="5" placeholder="Sua Mensagem"></textarea>
        <button type="submit">Enviar Proposta</button>
      </form>
    </section>
  );
};

export default Contact;