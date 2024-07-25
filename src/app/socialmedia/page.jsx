import React from 'react';
import { FaYoutube, FaInstagram } from 'react-icons/fa'; // Importa os ícones do YouTube e Instagram

const SocialMediaPage = () => {
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
        <h1 className="text-2xl font-semibold mb-4">Redes Sociais (Em Breve)</h1>
        <p className="text-base mb-6">
          {/* descrição */}
        </p>
        <div className="flex justify-center gap-5">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-red-600">
            <FaYoutube size={60} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-pink-600">
            <FaInstagram size={60} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPage;
