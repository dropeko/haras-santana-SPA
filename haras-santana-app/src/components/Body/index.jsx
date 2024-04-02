// src/components/Body/index.jsx
import React from 'react';
import './style.css';
import AnimalCard from './AnimalCard';
import { animals } from '../../database/animals'

const Body = () => {

  return (
    <main className="mt-[calc(header-height)] bg-black flex flex-col justify-center items-center">
      <section className="flex flex-col my-8 max-w-6xl justify-center">
        <h1 className='self-center text-white border-red-600 justify-center'>Sobre o Criatório</h1>
        <p className='self-center text-white'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque posuere enim odio, dictum dignissim risus dictum id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Phasellus consequat fermentum finibus. Etiam a mauris sed risus tristique mollis. Aliquam cursus mi in dui aliquam, vitae posuere orci pretium. 
        Phasellus eu turpis non sapien congue consectetur vel eget tortor. Sed aliquet consequat enim, in facilisis lectus posuere a. Vivamus molestie sagittis faucibus. 
        Sed a felis sollicitudin, porta dolor vel, dictum nibh. Nunc iaculis lacus ut metus suscipit, sed imperdiet nunc tristique. 
        Sed eget mauris et libero dictum convallis in in ipsum. In lacinia sit amet leo vitae ultrices. Maecenas egestas dolor a eros imperdiet finibus. 
        Donec aliquet bibendum nunc. Curabitur pretium neque at felis suscipit, a molestie arcu sodales. Vivamus posuere ante eu ultrices tincidunt.
        </p>
      </section>
      <section className="my-8 flex flex-col justify-center">
        <h2 className='self-center text-white'>Animais do Plantel</h2>
        <div className="flex flex-wrap justify-center">
          {animals.map((animal, index) => (
            <AnimalCard key={index} {...animal} />
          ))}
        </div>
      </section>
      <section className="my-8 flex flex-col justify-center border-red-600 border-8 max-w-6xl">
        <h2 className='self-center text-white'>Sobre a Raça Mangalarga Marchador</h2>
        <p className='self-center text-white'>
          O Mangalarga Marchador é uma raça de cavalo de sela originária do Brasil,
          conhecida por sua andadura característica, a marcha, que oferece um andar confortável e ágil.
          Esta raça possui uma história rica e diversas curiosidades que ilustram sua importância e sua evolução ao longo dos anos.
        </p>
      </section>
    </main>
  );
}

export default Body;
