"use client";

import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/logo.jpg"
                alt="Golden Crown Design and Build"
                width={72}
                height={72}
                className="rounded-lg"
              />
              <div className="ml-3">
                <h3 className="text-xl md:text-2xl font-bold">Golden Crown</h3>
                <p className="text-base text-gray-300">Design and Build</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Premium home construction and renovation services with unmatched 
              quality and attention to detail.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-gold-400 transition-colors">Whole House Renovations</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold-400 transition-colors">Kitchen Renovations</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold-400 transition-colors">Bathroom Renovations</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold-400 transition-colors">Basement Finishing</a></li>
              <li><a href="#exteriors" className="text-gray-300 hover:text-gold-400 transition-colors">Exterior Services</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold-400 transition-colors">Custom Homes</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <Button
                  onClick={() => (window.location.href = 'tel:2026006005')}
                  className="bg-gold-600 hover:bg-gold-700 text-white px-4 py-2"
                  size="sm"
                >
                  Call Us
                </Button>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-gray-300">info@goldencrown.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">44228 Big Trail Terrace<br />Ashburn, VA 20147</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6">Business Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <div>
                  <div className="text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM</div>
                  <div className="text-gray-300">Sat: 9:00 AM - 4:00 PM</div>
                  <div className="text-gray-300">Sun: 12–4 PM</div>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                Emergency services available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Licensing / Insurance */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 text-emerald-300 px-3 py-1 text-sm font-medium border border-emerald-500/20">
                Licensed
              </span>
              <span className="inline-flex items-center rounded-full bg-sky-500/10 text-sky-300 px-3 py-1 text-sm font-medium border border-sky-500/20">
                Insured
              </span>
              <span className="inline-flex items-center rounded-full bg-gold-500/10 text-gold-300 px-3 py-1 text-sm font-medium border border-gold-500/20">
                Bonded
              </span>
            </div>
            <div className="text-sm text-gray-400">
              License No: <span className="text-gray-300 font-medium">2705190625</span>
            </div>
          </div>
          {/* Service Area & Warranty */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center rounded-full bg-gold-500/10 text-gold-300 px-3 py-1 text-sm font-medium border border-gold-500/20">
              We serve the DMV Area
            </span>
            <span className="inline-flex items-center rounded-full bg-gold-500/10 text-gold-300 px-3 py-1 text-sm font-medium border border-gold-500/20">
              Workmanship Warranty
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Golden Crown Design and Build. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                Licensing
              </a>
              <a
                href="https://www.instagram.com/goldencrowndb/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-400 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/19ucnqx1Ln/?mibextid=wwXIfr"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-400 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}