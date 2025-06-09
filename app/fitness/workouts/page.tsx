'use client';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Workout {
  name: string;
  gifUrl: string;
  workoutType: string;
}

export default function Workouts() {
  const [exercises, setExercises] = useState<Workout[]>([]);

  useEffect(() => {
    async function fetchWorkouts() {
      try {
        const res = await axios.get('/api/workout');
        console.log('Axios response data:', res.data);
        setExercises(res.data);
      } catch (error) {
        console.error('Error fetching workouts with axios:', error);
      }
    }

    fetchWorkouts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 bg-black">
      <Head>
        <title>Workouts | My Workout App</title>
        <meta name="description" content="Personalized training experiences" />
      </Head>

      <header
        className="bg-cover bg-center h-96 flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/images/training-header.jpg')" }}
      >
        <div>
          <h1 className="text-4xl font-bold">Training with Indafit R1</h1>
          <p className="mt-4 text-xl">
            Enhance your workouts and be amazed at how quickly you'll achieve your goals.
          </p>
        </div>
      </header>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Trapezoid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                width={320}
                height={192}
                src={exercise.gifUrl}
                alt={exercise.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{exercise.name}</h3>
              </div>
            </div>
          ))}
          {exercises.length === 0 && <p className="text-white">Loading workouts...</p>}
        </div>
      </div>
    </div>
  );
}
