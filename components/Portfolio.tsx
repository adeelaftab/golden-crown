"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Calendar, DollarSign, Eye, X } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  features: string[];
  budget: string;
}

interface PortfolioProps {
  content: {
    title: string;
    subtitle: string;
    projects: Project[];
  };
}

export default function Portfolio({ content }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');
  const [showBefore, setShowBefore] = useState<Record<string, boolean>>({});

  const categories = ['All', ...Array.from(new Set(content.projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'All' 
    ? content.projects 
    : content.projects.filter(p => p.category === filter);

  const scrollToEstimate = () => {
    const element = document.getElementById('estimate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleBeforeAfter = (projectId: string) => {
    setShowBefore(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <>
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? "default" : "outline"}
                className={filter === category 
                  ? "bg-gold-600 hover:bg-gold-700 text-white" 
                  : "border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={showBefore[project.id] ? project.beforeImage : project.afterImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    
                    {/* Before/After Toggle */}
                    <Button
                      onClick={() => toggleBeforeAfter(project.id)}
                      size="sm"
                      className="absolute top-4 left-4 bg-white/90 text-gray-900 hover:bg-white text-xs"
                    >
                      {showBefore[project.id] ? 'BEFORE' : 'AFTER'}
                    </Button>

                    {/* View Details Button */}
                    <Button
                      onClick={() => setSelectedProject(project)}
                      size="sm"
                      className="absolute top-4 right-4 bg-gold-600 hover:bg-gold-700 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-gold-100 text-gold-800">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <Button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-gold-600 hover:bg-gold-700 text-white group"
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let us transform your space with the same attention to detail and craftsmanship 
              you see in our portfolio. Get your free estimate today.
            </p>
            <Button
              onClick={scrollToEstimate}
              size="lg"
              className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 text-lg group"
            >
              Get Your Free Estimate
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
              <Button
                onClick={() => setSelectedProject(null)}
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            
            <div className="p-6">
              {/* Project Images (labels removed) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={selectedProject.beforeImage}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={selectedProject.afterImage}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                        {selectedProject.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {selectedProject.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      Completed in {selectedProject.year}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="w-4 h-4" />
                      Budget: {selectedProject.budget}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Description</h5>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-gold-600 rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      onClick={() => {
                        setSelectedProject(null);
                        scrollToEstimate();
                      }}
                      className="w-full bg-gold-600 hover:bg-gold-700 text-white group"
                    >
                      Start Your Similar Project
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}