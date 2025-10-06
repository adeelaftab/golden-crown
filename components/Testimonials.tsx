"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  project: string;
  text: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

type PersistedReview = {
  id: string;
  name: string;
  email: string;
  project?: string | null;
  rating: number;
  text: string;
  createdAt: string;
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [reviews, setReviews] = useState<PersistedReview[]>([]);

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && Array.isArray(data.reviews)) {
          setReviews(data.reviews);
        }
      })
      .catch(() => {
        // ignore errors; UI will still render static testimonials
      });
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience with Golden Crown Design and Build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Persisted reviews (most recent first) */}
          {reviews.map((r) => (
            <Card key={r.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-gold-400">
                    {[...Array(Math.max(1, Math.min(5, r.rating || 5)))].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-gold-600 opacity-30" />
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 italic">"{r.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{r.name}</p>
                  {r.project ? (
                    <p className="text-sm text-gold-600">{r.project}</p>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Static testimonials from content.json */}
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-gold-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-gold-600 opacity-30" />
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gold-600">{testimonial.project}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}