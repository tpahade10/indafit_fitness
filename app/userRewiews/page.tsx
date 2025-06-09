'use client';

import { useState,useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type Review = {
  name: string;
  message: string;
  date: string;
};

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([
    { name: 'Alice', message: 'Great product!', date: '2025-06-08' },
    { name: 'Bob', message: 'Fast delivery and good service.', date: '2025-06-07' },
  ]);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    // Load user name from cookies
    const cookieUser = document.cookie
      .split('; ')
      .find((row) => row.startsWith('user'))
      ?.split('=')[1];

    if (cookieUser) setName(cookieUser);

    // Load existing reviews
    fetch('/api/reviews')
      .then((res) => res.json())
      .then(setReviews);
  }, []);

  const handleSubmit = () => {
    if (name && message) {
      setReviews([
        { name, message, date: new Date().toISOString().split('T')[0] },
        ...reviews,
      ]);
      setName('');
      setMessage('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">User Reviews</h1>

      <Card>
        <CardContent className="space-y-4 pt-6">
          <h2 className="text-lg font-semibold">Leave a Review</h2>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded p-2"
          />
          <Textarea
            placeholder="Write your review..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <Card key={index}>
            <CardContent className="pt-4 space-y-1">
              <p className="font-medium">{review.name}</p>
              <p className="text-gray-600 text-sm">{review.date}</p>
              <p>{review.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
