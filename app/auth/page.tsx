'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const [form, setForm] = useState({
    email: '',
    password: '',
    userType: 'user',
    address: '',
    number: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const endpoint = isLogin ? '/api/login' : '/api/register';

    const payload = isLogin
      ? { email: form.email, password: form.password }
      : form;

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const { userType } = await res.json();
      router.push(userType === 'admin' ? '/admin' : '/userReview');
    } else {
      const { error } = await res.json();
      alert(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle>{isLogin ? 'Login' : 'Register'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            {!isLogin && (
              <>
                <Input
                  name="address"
                  type="text"
                  placeholder="Address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="number"
                  type="number"
                  placeholder="Phone Number"
                  value={form.number}
                  onChange={handleChange}
                  required
                />
                <select
                  name="userType"
                  onChange={handleChange}
                  value={form.userType}
                  className="w-full border rounded p-2"
                  required
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </>
            )}
            <Button type="submit" className="w-full">
              {isLogin ? 'Sign In' : 'Register'}
            </Button>
            <p
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-center text-blue-500 hover:underline cursor-pointer"
            >
              {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
