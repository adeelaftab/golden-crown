"use client";

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  images?: string[];
  features: string[];
}

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  const scrollToEstimate = () => {
    const element = document.getElementById('estimate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From complete renovations to custom builds, we deliver exceptional craftsmanship 
            and attention to detail in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
            >
                <div className="relative overflow-hidden rounded-t-lg">
                  <div
                    className="h-80 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
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
                          className="h-32 rounded-md overflow-hidden"
                          style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                          aria-label={`Additional ${service.title} photo ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-gold-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3">
                    <Button
                      asChild
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