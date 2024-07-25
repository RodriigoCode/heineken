import Image from 'next/image';
import fire from '../../public/fire.mp4';
import logo from '../../public/logo.png'; // Importe a logo

export default function Home() {
  return (
    <main style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <video
        src={fire}
        autoPlay
        muted
        loop
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Image
          src={logo}
          alt="Logo"
          width={600} // Ajuste o tamanho da logo conforme necessário
          height={600} // Ajuste a altura da logo conforme necessário
        />
      </div>
    </main>
  );
}
