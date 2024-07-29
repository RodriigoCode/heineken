import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <video
        src="/fire.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Jersey (Em Breve...)</h1>
        <p className="text-lg mb-6">Estaremos a contactar todas as entidades que façam jerseys, caso alguém tiver um conhecido, estaremos gratos em dizerem a nós.
        </p>
      </div>
    </main>
  );
}
