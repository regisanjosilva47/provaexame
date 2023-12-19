import React, { useState } from 'react';
import Home from '../components/Home';

const HomePage = () => {
 const [specialHighlight, setSpecialHighlight] = useState(true);

 return (
    <div>
      <Home />
      <section style={{ padding: '20px', backgroundColor: specialHighlight ? '#ffd700' : '#fff' }}>
        <h2>Oferta Especial</h2>
        <p>
          Descubra nossos produtos exclusivos com descontos especiais por tempo limitado!
        </p>
      </section>
      <button onClick={() => setSpecialHighlight(!specialHighlight)}>
        {specialHighlight ? 'Desativar Destaque' : 'Ativar Destaque'}
      </button>
    </div>
 );
};

export default HomePage;