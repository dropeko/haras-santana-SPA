// src/components/Body/index.jsx
import React from 'react';
import './style.css';
import AnimalCard from './AnimalCard';
import { animals } from '../../database/animals'
import { Minus } from 'lucide-react'

const Body = () => {

  return (
    <main className="mt-[calc(header-height)] bg-black flex flex-col justify-center items-center">
      <section className="flex flex-col my-8 max-w-7xl p-4">
        <h1 className='self-center text-white'>Sobre o Criatório</h1>
        <p className='text-white'>
          Tudo começou em <strong>Senhora do Porto</strong>, onde o titular <strong>Cristiano Mello</strong> comprou seus primeiros animais e os alocou na fazenda Paiol, de seu tio Juca. Com o foco sempre voltado para a busca de animais de qualidade, visando construir uma base genética forte e confiável.
        </p>
        <p className='text-white'>
          Em 2018, um passo importante foi dado: a propriedade em <strong>Inácia De Carvalho, São José da Lapa/MG</strong>, foi arrendada, iniciando o processo de trazer os animais já possuídos para o novo local. Isso marcou o início das melhorias estruturais para acomodar o plantel e de esforços contínuos para enriquecer a seleção do haras com novos animais.
        </p>
        <p className='text-white'>
          Hoje, o haras é referência de criatório na região de <strong>Pedro Leopoldo</strong> e <strong>São José da Lapa</strong>, com animais de genética forte e confiável, além de competidores de marcha de destaque. A evolução dos indivíduos e a melhoria contínua da raça permanecem como objetivos primordiais.
        </p>
      </section>

      <Minus className="h-" color='white'/>

      <section className="my-8 flex flex-col justify-center">
        <h2 className='self-center text-white'>Animais do Plantel</h2>
        <div className="flex flex-wrap justify-center">
          {animals.map((animal, index) => (
            <AnimalCard key={index} {...animal} />
          ))}
        </div>
      </section>

      <Minus className="h-" color='white'/>

      <section className="my-8 p-4 flex flex-col justify-center max-w-7xl">
        <h2 className="text-2xl font-bold mb-4 text-orange-500 self-center">Sobre o Mangalarga Marchador</h2>
        <article className='flex flex-col'>
          <h3 className="text-xl font-semibold text-orange-500 self-center">Origem</h3>
          <p className='self-center text-white'>
            Início: A raça teve origem no início do século XIX, no estado de Minas Gerais, Brasil. 
            Descende de cavalos ibéricos trazidos ao Brasil pela família real portuguesa e por colonizadores. 
            O desenvolvimento inicial da raça é atribuído à Fazenda Campo Alegre, propriedade do Barão de Alfenas. 
            Ele começou a cruzar cavalos de raça Alter Real, trazidos de Portugal, com éguas selecionadas de sua própria fazenda, 
            que já possuíam uma andadura naturalmente cômoda e ágil.
          </p>
          <p className='self-center text-white'>
            Nome: O nome "Mangalarga Marchador" tem origens curiosas. "Mangalarga" refere-se à Fazenda Mangalarga, 
            no estado do Rio de Janeiro, para onde alguns dos primeiros exemplares da raça foram levados e onde se desenvolveu uma linhagem própria, 
            mais tarde diferenciada como Mangalarga Paulista. Já o termo "Marchador" descreve a característica mais distintiva da raça: 
            sua capacidade de executar uma marcha batida ou picada, que são variações de andaduras além do trote e do galope, 
            proporcionando um movimento suave e confortável para o cavaleiro.
          </p>
          
          <h3 className="text-xl font-semibold text-orange-500 self-center">Características</h3>
          <p className='self-center text-white'>
            Marcha: A principal característica da raça é a sua andadura, conhecida como marcha, que pode ser classificada principalmente em dois tipos: 
            a marcha picada, que é lateral e extremamente suave, e a marcha batida, que é diagonal e também proporciona um bom conforto. 
            Esta habilidade de marchar, diferente do trote tradicional de outras raças, 
            permite longos períodos de cavalgada com menor cansaço para o cavalo e o cavaleiro.
          </p>
          <p className='self-center text-white'>
            Temperamento: Os cavalos Mangalarga Marchador são conhecidos por seu temperamento dócil, inteligência e facilidade de treinamento, 
            o que os torna adequados para cavaleiros de todas as idades e níveis de experiência.
          </p>
          <p className='self-center text-white'>
            Físico: Eles possuem um porte elegante, com um corpo bem proporcional, cabeça expressiva e membros fortes. 
            A altura média varia de 1,40 a 1,55 metros na cernelha.
          </p>
          
          <h3 className="text-xl font-semibold text-orange-500 self-center">Curiosidades</h3>
          <p className='self-center text-white'>
            Reconhecimento e Exportação: Embora seja uma raça desenvolvida e aprimorada no Brasil, 
            o Mangalarga Marchador tem ganhado reconhecimento internacional, sendo exportado para vários países, 
            onde é valorizado tanto por sua capacidade de marcha quanto por seu temperamento.
          </p>
          <p className='self-center text-white'>
            Eventos e Associações: Existe uma associação dedicada exclusivamente à raça, 
            a Associação Brasileira dos Criadores do Cavalo Mangalarga Marchador (ABCCMM), 
            que organiza eventos, competições e exposições para promover e preservar a raça.
          </p>
          <p className='self-center text-white'>
            Versatilidade: Além de serem excelentes cavalos de sela, os Mangalarga Marchadores são usados em diversas atividades, 
            incluindo esportes equestres, trabalho com gado e como cavalos de estimação, devido à sua versatilidade, resistência e fácil manejo.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Body;
