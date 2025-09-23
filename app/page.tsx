"use client";

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Exteriors from '@/components/Exteriors';
import Portfolio from '@/components/Portfolio';
import EstimateForm from '@/components/EstimateForm';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

export default function Home() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load content from JSON file
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setLoading(false);
      })
      .catch(() => {
        // Fallback content if API fails
        import('@/data/content.json').then(data => {
          setContent(data.default);
          setLoading(false);
        });
      });
  }, []);

  if (loading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      <Hero content={content.heroSlides ?? [content.hero]} />
      <Services services={content.services} />
      <Exteriors content={content.exteriors} />
      <Portfolio content={content.portfolio} />
      <EstimateForm content={content.form} />
      <Testimonials testimonials={content.testimonials} />
      <Footer />
      <Toaster position="top-right" />
    </main>
  );
}