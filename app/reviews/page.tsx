"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { toast } from 'sonner';

export default function ReviewsPage() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      setSubmitting(true);
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) throw new Error('Request failed');
      toast.success('Thank you! Your review has been submitted.');
      form.reset();
    } catch (err) {
      toast.error('Sorry, something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-28 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Breadcrumbs */}
            <div className="mb-4 flex items-center justify-between">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Leave a Review</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <Button asChild variant="outline" size="sm">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6">Leave a Review</h1>
            <p className="text-gray-700 mb-8">We appreciate your feedback. Please share your experience with Golden Crown Design and Build.</p>

            <form onSubmit={onSubmit} className="bg-white rounded-lg shadow-md p-6 border border-gray-100 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="project">Project</Label>
                  <Input id="project" name="project" placeholder="e.g., Kitchen Renovation" />
                </div>
                <div>
                  <Label htmlFor="rating">Rating</Label>
                  <select id="rating" name="rating" className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-600">
                    <option value="5">5 - Excellent</option>
                    <option value="4">4 - Great</option>
                    <option value="3">3 - Good</option>
                    <option value="2">2 - Fair</option>
                    <option value="1">1 - Poor</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="text">Your Review</Label>
                <Textarea id="text" name="text" placeholder="Share details about your experience..." className="min-h-32" required />
              </div>

              <div className="flex items-center gap-3">
                <Button type="submit" disabled={submitting} className="bg-gold-600 hover:bg-gold-700 text-white">
                  {submitting ? 'Submitting...' : 'Submit Review'}
                </Button>
                <Button type="button" variant="outline" onClick={() => (window.location.href = 'tel:2026006005')}>
                  Call Us
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
