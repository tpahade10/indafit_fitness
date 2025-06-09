'use client';

import { useState } from 'react';
import axios from 'axios';

const exercises = [
  { name: "Alzate Laterali Su Panca 45 Gradi", gifUrl: "https://www.puregym.com/media/ouap4a5a/bodyweight.jpg?quality=80" },
  { name: "Crossed Butterfly", gifUrl: "https://www.puregym.com/media/ouap4a5a/bodyweight.jpg?quality=80" },
  { name: "Squat Front and Press", gifUrl: "https://www.puregym.com/media/ouap4a5a/bodyweight.jpg?quality=80" },
  { name: "Wood Chopper", gifUrl: "https://www.puregym.com/media/ouap4a5a/bodyweight.jpg?quality=80" },
  { name: "Donkey Kick", gifUrl: "https://www.puregym.com/media/ouap4a5a/bodyweight.jpg?quality=80" },
  { name: "Bear Walking", gifUrl: "https://www.puregym.com/media/ouap4a5a/bodyweight.jpg?quality=80" },
  { name: "Box", gifUrl: "https://www.puregym.com/media/ouap4a5a/bodyweight.jpg?quality=80" },
  { name: "Kick Back Stability", gifUrl: "https://www.puregym.com/media/ouap4a5a/bodyweight.jpg?quality=80" },
  { name: "Prone Position Lat Machine", gifUrl: "https://www.puregym.com/media/ouap4a5a/bodyweight.jpg?quality=80" },
];

export default function UploadWorkoutsPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string[]>([]);

  const uploadWorkouts = async () => {
    setLoading(true);
    setStatus([]);

    for (const workout of exercises) {
      try {
        const res = await axios.post('http://localhost:3000/api/workout', {
          name: workout.name,
          gifUrl: workout.gifUrl,
          workoutType: 'full-body', // you can modify this as needed
        });
        setStatus(prev => [...prev, `✅ ${res.data.name}`]);
      } catch (err:unknown) {
        console.error(err);
        // setStatus(prev => [...prev, `❌ ${workout.name}: ${err.response?.data?.error || err.message}`]);
      }
    }

    setLoading(false);
  };

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Upload Workouts</h1>
      <button
        onClick={uploadWorkouts}
        disabled={loading}
        className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
      >
        {loading ? 'Uploading...' : 'Upload All Workouts'}
      </button>

      <ul className="mt-6 space-y-2">
        {status.map((line, idx) => (
          <li key={idx} className="text-sm">{line}</li>
        ))}
      </ul>
    </div>
  );
}
