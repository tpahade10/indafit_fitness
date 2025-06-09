'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    address: '',
    number: '',
    userType: 'user',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.userType === 'admin') {
        router.push('/admin');
      } else {
        router.push('/userReview');
      }
    } else {
      const error = await res.json();
      alert(error.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mt-10">
      <Input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <Input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <Input name="address" type="text" placeholder="Address" onChange={handleChange} required />
      <Input name="number" type="number" placeholder="Phone Number" onChange={handleChange} required />
      <select name="userType" onChange={handleChange} className="w-full border rounded p-2">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <Button type="submit" className="w-full">Register</Button>
    </form>
  );
}
