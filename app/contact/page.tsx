"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend or API
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950">
      <Card className="w-full max-w-lg shadow-lg bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <div className="text-emerald-400 font-semibold text-center py-8">
              Thank you for contacting us! We will get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-300">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                />
              </div>
              <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                Send Message
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}