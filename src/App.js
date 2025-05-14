import React, { useState } from 'react';

function App() {
  const [texto, setTexto] = useState('');

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Generador de Etiquetas 🏷️</h1>

      <input
        type="text"
        placeholder="Escribí tu etiqueta acá"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '1rem',
        }}
      />

      <div
        style={{
          border: '1px dashed #888',
          padding: '1rem',
          fontSize: '1.5rem',
          background: '#f9f9f9',
          maxWidth: '400px',
        }}
      >
        {texto ? texto : 'Tu etiqueta aparecerá acá'}
      </div>
    </div>
  );
}

export default App;
