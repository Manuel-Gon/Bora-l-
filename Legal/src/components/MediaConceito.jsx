import React, { useState } from 'react';

function MediaConceito() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [media, setMedia] = useState(null);
  const [conceito, setConceito] = useState('');

  const calcularMedia = () => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const mediaCalculada = (n1 + n2) / 2;

    let conceito;

    if (mediaCalculada > 9 && mediaCalculada <= 10) {
      conceito = 'A';
    } else if (mediaCalculada > 7.5 && mediaCalculada <= 9) {
      conceito = 'B';
    } else if (mediaCalculada > 6 && mediaCalculada <= 7.5) {
      conceito = 'C';
    } else if (mediaCalculada > 4 && mediaCalculada <= 6) {
      conceito = 'D';
    } else {
      conceito = 'E';
    }

    setMedia(mediaCalculada.toFixed(2));
    setConceito(conceito);
  };

  return (
    <div>
      <h1>Cálculo de Média e Conceito</h1>
      <input 
        type="number" 
        value={nota1} 
        onChange={(e) => setNota1(e.target.value)} 
        placeholder="Nota 1"
      />
      <input 
        type="number" 
        value={nota2} 
        onChange={(e) => setNota2(e.target.value)} 
        placeholder="Nota 2"
      />
      <button onClick={calcularMedia}>Calcular Média e Conceito</button>
      {media !== null && (
        <div>
          <h2>Média: {media}</h2>
          <h3>Conceito: {conceito}</h3>
        </div>
      )}
    </div>
  );
}

export default MediaConceito;
