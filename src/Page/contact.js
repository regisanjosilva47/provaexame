import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contato</h2>
      <form>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" name="message" />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;