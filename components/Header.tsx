"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Logo row */}
        <div className="py-4">
          <div className="flex items-center">
            <Image
              src="/logo1.jpg"
              alt="Golden Crown Design and Build"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div className="ml-3">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Golden Crown</h1>
              <p className="text-base text-gray-600">Design and Build</p>
            </div>
          </div>

          {/* Navigation below logo, left-aligned */}
          <nav className="mt-3 flex flex-wrap items-center gap-6">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-gold-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('exteriors')}
              className="text-gray-700 hover:text-gold-600 transition-colors"
            >
              Exteriors
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-gold-600 transition-colors"
            >
              Portfolio
            </button>
            <a
              href="/about"
              className="text-gray-700 hover:text-gold-600 transition-colors"
            >
              About
            </a>
            <a
              href="/products-partners"
              className="text-gray-700 hover:text-gold-600 transition-colors"
            >
              Products & Partners
            </a>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-gold-600 transition-colors"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection('estimate')}
              className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-2"
            >
              Free Estimate
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}