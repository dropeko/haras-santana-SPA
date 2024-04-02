// src/components/Header/index.jsx
import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header className="flex top-0 w-full bg-orange-500 text-harasWhite z-10 justify-center">
      <nav>
        {/* Adicione links de navegação ou logotipo aqui */}
        <div className="container mx-auto p-4 self-center">
          <h1>Haras Santana BH</h1>
        </div>
      </nav>
    </header>
  );
}

export default Header;
