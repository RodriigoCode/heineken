import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { FaSheetPlastic } from 'react-icons/fa6'; // Supondo que o ícone correto seja FaFileExcel

const TryoutPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src="/fire.mp4" // Use o caminho relativo do diretório `public`
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="flex flex-col items-center justify-center h-full gap-10">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm">
          <h1 className="text-2xl font-semibold mb-4">Tryout | Form</h1>
          <p className="text-base mb-6">
            Join Discord and Form | Tryout Season starting soon
          </p>
          <div className="flex justify-center gap-5">
            <a href="https://discord.gg/7hnmg3tq" target="_blank" rel="noopener noreferrer" className="text-black">
              <FaDiscord size={60} />
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfP4rRakC_RNfxfacwlxFGj3spKNf5gQI7XfXTQoZL5N1o8_g/viewform" target="_blank" rel="noopener noreferrer" className="text-black">
              <FaSheetPlastic size={50} />
            </a>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm">
          <h1 className="text-2xl font-semibold mb-4">Como entrar na Peneira</h1>
          <video
            src="/tutorial.mp4" // Use o caminho relativo do diretório `public`
            controls
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TryoutPage;
