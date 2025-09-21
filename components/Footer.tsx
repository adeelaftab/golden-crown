"use client";

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

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
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div className="ml-3">
                <h3 className="text-lg font-bold">Golden Crown</h3>
                <p className="text-sm text-gray-300">Design and Build</p>
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
              <li><a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors">Whole House Renovations</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors">Kitchen Renovations</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors">Bathroom Renovations</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors">Basement Finishing</a></li>
              <li><a href="#exteriors" className="text-gray-300 hover:text-amber-400 transition-colors">Exterior Services</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors">Custom Homes</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">info@goldencrown.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Main Street<br />Your City, State 12345</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6">Business Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div>
                  <div className="text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM</div>
                  <div className="text-gray-300">Sat: 9:00 AM - 4:00 PM</div>
                  <div className="text-gray-300">Sun: Closed</div>
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

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Golden Crown Design and Build. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Licensing
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}