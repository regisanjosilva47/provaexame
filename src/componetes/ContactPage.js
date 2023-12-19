import React from 'react';

import './styles/Contact.css';

const Contact = () => {
 return (
    <div className="contact-container">
      <h2>Página de Contato</h2>
      <p>Entre em contato conosco através do formulário abaixo:</p>
      <form className="contact-form">
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" name="message" required />

        <button type="submit">Enviar</button>
      </form>
    </div>
 );
};

export default Contact;