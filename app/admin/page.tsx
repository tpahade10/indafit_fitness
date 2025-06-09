'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

interface Workout {
  id: string;
  name: string;
  gifUrl: string;
  workoutType: string;
}

interface Contact {
  id: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [form, setForm] = useState({ name: '', gifUrl: '', workoutType: '' });
  const [editingId, setEditingId] = useState<string | null>(null);

  // Contact state
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [contactsLoading, setContactsLoading] = useState(true);
  const [contactsError, setContactsError] = useState('');

  const fetchWorkouts = () => {
    axios
      .get('/api/workout')
      .then((res) => {
        setWorkouts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch workouts:', err);
        setError('Something went wrong while fetching workouts.');
        setLoading(false);
      });
  };

  const fetchContacts = () => {
    setContactsLoading(true);
    axios
      .get('/api/contact')
      .then((res) => {
        setContacts(res.data);
        setContactsLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch contacts:', err);
        setContactsError('Something went wrong while fetching contacts.');
        setContactsLoading(false);
      });
  };

  useEffect(() => {
    fetchWorkouts();
    fetchContacts();
  }, []);

  const handleSubmit = async () => {
    if (!form.name || !form.gifUrl || !form.workoutType) return;

    try {
      if (editingId) {
        await axios.patch(`/api/workout/${editingId}`, form);
        setEditingId(null);
      } else {
        await axios.post('/api/workout', form);
      }
      setForm({ name: '', gifUrl: '', workoutType: '' });
      fetchWorkouts();
    } catch (err) {
      console.error('Failed to save workout:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this workout?')) return;
    await axios.delete(`/api/workouts/${id}`);
    fetchWorkouts();
  };

  const handleEdit = (workout: Workout) => {
    setEditingId(workout.id);
    setForm({
      name: workout.name,
      gifUrl: workout.gifUrl,
      workoutType: workout.workoutType,
    });
  };

  return (
    <div className="p-6 mt-5 space-y-8 text-white bg-black min-h-screen">
      <section>
        <h2 className="text-xl font-bold mb-4">🏋️ All Workouts</h2>

        {loading && <p>Loading workouts...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="space-y-4">
          {workouts.map((w) => (
            <div key={w.id} className="p-4 bg-gray-800 rounded space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <strong className="text-lg">{w.name}</strong>
                  <p className="text-sm text-gray-300 capitalize">
                    {w.workoutType}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="bg-yellow-500 px-3 py-1 rounded"
                    onClick={() => handleEdit(w)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 px-3 py-1 rounded"
                    onClick={() => handleDelete(w.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mt-10 mb-2">
          {editingId ? '✏️ Edit Workout' : '➕ Add Workout'}
        </h2>
        <div className="space-y-4 bg-gray-900 text-white p-4 rounded">
          <input
            type="text"
            placeholder="Workout name"
            className="w-full p-2 rounded text-black"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="GIF URL"
            className="w-full p-2 rounded text-black"
            value={form.gifUrl}
            onChange={(e) => setForm({ ...form, gifUrl: e.target.value })}
          />
          <input
            type="text"
            placeholder="Workout Type (e.g. shoulders)"
            className="w-full p-2 rounded text-black"
            value={form.workoutType}
            onChange={(e) => setForm({ ...form, workoutType: e.target.value })}
          />

          <button
            className="bg-green-600 px-4 py-2 rounded text-white"
            onClick={handleSubmit}
          >
            {editingId ? 'Update Workout' : 'Add Workout'}
          </button>
        </div>
      </section>

      {/* Contact Messages Section */}
      <section>
        <h2 className="text-xl font-bold mt-10 mb-4">📬 Contact Messages</h2>
        {contactsLoading && <p>Loading contacts...</p>}
        {contactsError && <p className="text-red-500">{contactsError}</p>}
        <div className="space-y-4">
          {contacts.map((c) => (
            <div key={c.id} className="p-4 bg-gray-800 rounded">
              <div className="flex items-center justify-between">
                <div>
                  <strong className="text-lg">{c.email}</strong>
                  <p className="text-gray-300 mt-1">{c.message}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(c.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {contacts.length === 0 && !contactsLoading && (
            <p className="text-gray-400">No contact messages yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}