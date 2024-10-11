import React, { useState } from 'react';

function Cofrinho() {
  const [valorProduto, setValorProduto] = useState('');
  const [moedas1, setMoedas1] = useState('');
  const [moedas50, setMoedas50] = useState('');
  const [moedas25, setMoedas25] = useState('');
  const [moedas10, setMoedas10] = useState('');
  const [moedas5, setMoedas5] = useState('');
  const [resultado, setResultado] = useState('');

  const verificarCofrinho = () => {
    const produto = parseFloat(valorProduto);
    const totalReais = (moedas1 * 1) + (moedas50 * 0.50) + (moedas25 * 0.25) + (moedas10 * 0.10) + (moedas5 * 0.05);

    if (totalReais >= produto) {
      setResultado('Você pode comprar o produto!');
    } else {
      setResultado('Não tem dinheiro suficiente.');
    }
  };

  return (
    <div>
      <h1>Verificador de Cofrinho</h1>
      <input 
        type="number" 
        value={valorProduto} 
        onChange={(e) => setValorProduto(e.target.value)} 
        placeholder="Valor do produto"
      />
      <input 
        type="number" 
        value={moedas1} 
        onChange={(e) => setMoedas1(e.target.value)} 
        placeholder="Moedas de 1 real"
      />
      <input 
        type="number" 
        value={moedas50} 
        onChange={(e) => setMoedas50(e.target.value)} 
        placeholder="Moedas de 50 centavos"
      />
      <input 
        type="number" 
        value={moedas25} 
        onChange={(e) => setMoedas25(e.target.value)} 
        placeholder="Moedas de 25 centavos"
      />
      <input 
        type="number" 
        value={moedas10} 
        onChange={(e) => setMoedas10(e.target.value)} 
        placeholder="Moedas de 10 centavos"
      />
      <input 
        type="number" 
        value={moedas5} 
        onChange={(e) => setMoedas5(e.target.value)} 
        placeholder="Moedas de 5 centavos"
      />
      <button onClick={verificarCofrinho}>Verificar</button>
      {resultado && <h2>{resultado}</h2>}
    </div>
  );
}

export default Cofrinho;
