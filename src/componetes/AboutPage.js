import React from 'react';
import About from '../components/About';
import './AboutPage.css'; // Importe o arquivo CSS

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <About />
      <section className="history-section">
        <h2>Nossa História</h2>
        <p>
          A TechTrade foi fundada em 20XX com o objetivo de fornecer soluções inovadoras
          e de alta qualidade no campo da tecnologia. Desde então, temos crescido e
          continuamos comprometidos em oferecer os melhores produtos e serviços aos nossos clientes.
        </p>
      </section>
      <section className="values-section">
        <h2>Nossa Missão, Visão e Valores</h2>
        <p>
          <strong>Missão:</strong> Proporcionar excelência em tecnologia, superando as expectativas
          de nossos clientes.
        </p>
        <p>
          <strong>Visão:</strong> Ser líderes inovadores no mercado de tecnologia, impulsionando o
          progresso e a satisfação do cliente.
        </p>
        <p>
          <strong>Valores:</strong> Compromisso com a qualidade, inovação, integridade e satisfação do cliente.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;