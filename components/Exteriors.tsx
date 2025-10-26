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
  images?: string[];
  features?: string[];
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
            <Card
              key={service.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg"
            >
                <div className="relative overflow-hidden rounded-t-lg">
                  <div
                    className="h-64 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors pointer-events-none" />
                </div>
                {service.images && service.images.length > 1 && (
                  <div className="px-4 pt-3">
                    <div className="grid grid-cols-2 gap-3">
                      {service.images.slice(1, 3).map((img, i) => (
                        <div
                          key={i}
                          className="h-28 rounded-md overflow-hidden"
                          style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                          aria-label={`Additional ${service.title} photo ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  {service.features && service.features.length > 0 && (
                    <ul className="text-sm text-gray-600 space-y-1 mb-4 list-disc list-inside">
                      {service.features.slice(0, 5).map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-col gap-2">
                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-gold-600 hover:bg-gold-700 text-white group"
                    >
                      <Link href={`/services/${service.id}`}>
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToEstimate();
                      }}
                      variant="outline"
                      size="sm"
                      className="w-full border-gold-600 text-gold-600 hover:bg-gold-50 group"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
          ))}
        </div>
      </div>
    </section>
  );
}