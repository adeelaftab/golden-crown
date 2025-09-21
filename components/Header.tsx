"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm text-gray-600 border-b border-gray-100">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-600" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-600" />
              <span>info@goldencrown.com</span>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Golden Crown Design and Build"
              width={60}
              height={60}
              className="rounded-lg"
            />
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900">Golden Crown</h1>
              <p className="text-sm text-gray-600">Design and Build</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('exteriors')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Exteriors
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection('estimate')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2"
            >
              Free Estimate
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('exteriors')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors"
              >
                Exteriors
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors"
              >
                Testimonials
              </button>
              <Button
                onClick={() => scrollToSection('estimate')}
                className="bg-amber-600 hover:bg-amber-700 text-white w-full mt-2"
              >
                Free Estimate
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}