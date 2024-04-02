// src/components/Body/AnimalCard/index.jsx
import React from 'react';
import './style.css';

const AnimalCard = ({ name, image, father, mother, children }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg m-2">
      <img src={image} alt={`Foto de ${name}`} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-white">{name}</h3>
        <p className='self-center text-white'><strong>Pai:</strong> {father}</p>
        <p className='self-center text-white'><strong>Mãe:</strong> {mother}</p>
        {children && (
          <>
            <strong className='self-center text-white'>Filhos:</strong>
            <ul className='self-center text-white'>
              {children.map((child, index) => (
                <li key={index}>{child}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default AnimalCard;
