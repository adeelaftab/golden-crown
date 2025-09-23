"use client";

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ExteriorService {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ExteriorsProps {
  content: {
    title: string;
    subtitle: string;
    services: ExteriorService[];
  };
}

export default function Exteriors({ content }: ExteriorsProps) {
  const scrollToEstimate = () => {
    const element = document.getElementById('estimate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="exteriors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.map((service, index) => (
            <Link key={service.id} href={`/services/${service.id}`} className="block">
              <Card
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <div
                    className="h-48 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToEstimate();
                    }}
                    variant="outline"
                    size="sm"
                    className="w-full border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}