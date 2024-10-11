import React, { useState } from 'react';

function VendaProduto() {
  const [valorCompra, setValorCompra] = useState('');
  const [valorVenda, setValorVenda] = useState(null);

  const calcularValorVenda = () => {
    const valor = parseFloat(valorCompra);
    let lucro;

    if (valor < 20) {
      lucro = 0.45;
    } else {
      lucro = 0.30;
    }

    const venda = valor + (valor * lucro);
    setValorVenda(venda.toFixed(2));
  };

  return (
    <div>
      <h1>Calculadora de Venda</h1>
      <input 
        type="number" 
        value={valorCompra} 
        onChange={(e) => setValorCompra(e.target.value)} 
        placeholder="Valor de compra"
      />
      <button onClick={calcularValorVenda}>Calcular Valor de Venda</button>
      {valorVenda !== null && <h2>Valor de Venda: R$ {valorVenda}</h2>}
    </div>
  );
}

export default VendaProduto;
