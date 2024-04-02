// src/components/Header/index.jsx
import React from 'react';
import './style.css';
import { Instagram, Linkedin, } from 'lucide-react'

const Header = () => {
  return (
    <header className="flex top-0 bg-orange-500 justify-center">
      <nav className='flex items-center justify-end mx-2'>
      <div className=''>
          <ul className="flex mx-2">
            <li className='mr-4'>
              <a href="#about" className=" text-white hover:text-black">
                Sobre Nós
              </a>
            </li>
            <li className='mr-4'>
              <a href="#about" className=" text-white hover:text-black">
                Mangalarga Marchador
              </a>
            </li>
            <li className='mr-4'>
              <a href="#about" className=" text-white hover:text-black">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div className="flex mx-auto p-4 ">
          <img src="https://hsantana.com.br/wordpress/wp-content/uploads/2022/08/hsantana-logo.jpg" alt="HS-logo"
          className="h-20 rounded" />
        </div>
        <div className='flex'>
          <h3>
          Sociais:
          </h3>
          <a href="https://www.instagram.com/harassantanabh/" target='_blank' rel='noreferrer'>
            <Instagram className='ml-2'/>
          </a>
          <a href="https://www.linkedin.com/in/haras-santana-bh/" target='_blank' rel='noreferrer'>
            <Linkedin className='ml-2' />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
