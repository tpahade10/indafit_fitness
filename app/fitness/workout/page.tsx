'use client'
import Head from 'next/head';
import Image from 'next/image';

export default function Workouts() {
  const exercises = [
    { name: "Alzate Laterali Su Panca 45 Gradi", image: "/images/alzate-laterali-su-panca-45-gradi.png" },
    { name: "Crossed Butterfly", image: "/images/crossed-butterfly.png" },
    { name: "Squat Front and Press", image: "/images/squat-front-and-press.png" },
    { name: "Wood Chopper", image: "/images/wood-chopper.png" },
    { name: "Donkey Kick", image: "/images/donkey-kick.png" },
    { name: "Bear Walking", image: "/images/bear-walking.png" },
    { name: "Box", image: "/images/box.png" },
    { name: "Kick Back Stability", image: "/images/kick-back-stability.png" },
    { name: "Prone Position Lat Machine", image: "/images/prone-position-lat-machine.png" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Workouts | My Workout App</title>
        <meta name="description" content="Personalized training experiences" />
      </Head>

      <header className="bg-cover bg-center h-96 flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('/images/training-header.jpg')" }}>
        <div>
          <h1 className="text-4xl font-bold">Training with Sintesi</h1>
          <p className="mt-4 text-xl">Enhance your workouts and be amazed at how quickly youll achieve your goals.</p>
        </div>
      </header>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Trapezoid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={exercise.image} alt={exercise.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{exercise.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
