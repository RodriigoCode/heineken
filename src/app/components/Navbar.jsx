import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-transparent fixed top-0 left-0 w-full z-10">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <img src="/logo.png" alt="Heineken Logo" width="60" height="40" className="object-contain cursor-pointer" />
        </Link>
        <h1 className="text-xl text-white font-semibold">H E I N E K E N</h1>
      </div>
      <div className="flex space-x-4">
        <Link href='/tryout' className="text-white hover:text-white transition-transform transform hover:scale-105">Tryout</Link>
        <Link href='/bootcamp' className="text-white hover:text-white transition-transform transform hover:scale-105">Bootcamp</Link>
        <Link href='/socialmedia' className="text-white hover:text-white transition-transform transform hover:scale-105">Social Media</Link>
      </div>
    </nav>
  );
}
