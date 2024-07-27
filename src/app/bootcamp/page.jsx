import React from 'react';
import Image from 'next/image'; // Importa o componente de imagem do Next.js

const Page = () => {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto">
      <video
        src="/fire.mp4" // Caminho para o vídeo no diretório public
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="flex flex-col items-center justify-start pt-20 gap-10">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-2xl">
          <h1 className="text-3xl font-semibold mb-4">CHAVE DE TORNEIO (EXEMPLO)</h1>
          <div className="mb-6">
            <Image
              src="/bracket.png" // Substitua pelo caminho da imagem da chave de torneio
              alt="Tournament Bracket"
              width={800} // Aumente a largura conforme necessário
              height={600} // Aumente a altura conforme necessário
              layout="responsive" // Garante que a imagem seja responsiva
            />
          </div>
          <p className="text-base text-justify">
            - Best of 3 (BO3) <br />
            - Os jogadores serão escolhidos aleatoriamente <br />
            - O time deve ter um capitão <br />
            - O capitão tem de informar o nome do time ao Staff <br />
            - Cada time terá 7 jogadores máximo 
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-2xl">
          <h1 className="text-3xl font-semibold mb-4">TIMES</h1>
          <div className="mb-6">
            <Image
              src="/time.png" // Substitua pelo caminho da outra imagem
              alt="Another Example Image"
              width={800} // Aumente a largura conforme necessário
              height={600} // Aumente a altura conforme necessário
              layout="responsive" // Garante que a imagem seja responsiva
            />
          </div>
          <p className="text-base text-justify">
            - Sábado 19:00 <br />
            - Refs Scalary & Lis<br />
            - Respeito e Cumprimento <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
