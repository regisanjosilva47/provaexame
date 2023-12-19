import React from 'react';

const Products = () => {
  // Lista de produtos
  const productsList = [
    {
      id: 1,
      name: 'Mouse',
      description: 'mause dell',
      price: 19.99,
    },
    {
      id: 2,
      name: 'Teclado',
      description: 'teclado dell',
      price: 29.99,
    },
    
  ];

  return (
    <div>
      <h2>Nossos Produtos/Serviços</h2>
      <ul>
        {productsList.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Preço: R${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;