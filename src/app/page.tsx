import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <video
        src="/fire.mp4" // Caminho relativo ao diretório `public`
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/logo.png" // Caminho relativo ao diretório `public`
          alt="Logo"
          width={600} // Ajuste o tamanho conforme necessário
          height={600} // Ajuste a altura conforme necessário
        />
      </div>
    </main>
  );
}
