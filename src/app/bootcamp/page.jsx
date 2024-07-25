import React from 'react';
import Image from 'next/image'; // Importa o componente de imagem do Next.js

const Page = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src="/fire.mp4" // Caminho para o vídeo no diretório public
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg text-center max-w-lg">
        <h1 className="text-2xl font-semibold mb-4">CHAVE DE TORNEIO (EXEMPLO)</h1>
        <div className="mb-6">
          <Image
            src="/bracket.png" // Substitua pelo caminho da imagem da chave de torneio
            alt=""
            width={600} // Ajuste o tamanho conforme necessário
            height={400} // Ajuste o tamanho conforme necessário
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
    </div>
  );
};

export default Page;
