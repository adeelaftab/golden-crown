"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Send } from 'lucide-react';
import { toast } from 'sonner';

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
  options?: string[];
}

interface EstimateFormProps {
  content: {
    title: string;
    subtitle: string;
    fields: FormField[];
  };
}

export default function EstimateForm({ content }: EstimateFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Your request has been submitted successfully! We'll contact you within 24 hours.");
  };

  if (isSubmitted) {
    return (
      <section id="estimate" className="py-20 bg-gold-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center bg-white border-0 shadow-xl">
            <CardContent className="pt-12 pb-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-6">
                Your request has been submitted successfully. Our team will review your project details 
                and contact you within 24 hours to schedule your free consultation.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white"
              >
                Submit Another Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="estimate" className="py-20 bg-gold-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-white border-0 shadow-xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
              {content.title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 max-w-2xl mx-auto">
              {content.subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.fields.map((field) => (
                  <div
                    key={field.name}
                    className={field.type === 'textarea' ? 'md:col-span-2' : ''}
                  >
                    <Label htmlFor={field.name} className="text-gray-700 font-medium">
                      {field.label}
                      {field.required && <span className="text-red-500 ml-1">*</span>}
                    </Label>
                    
                    {field.type === 'textarea' ? (
                      <Textarea
                        id={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.name] || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        className="mt-2 min-h-[120px] resize-y"
                      />
                    ) : field.type === 'select' ? (
                      <Select
                        value={formData[field.name] || ''}
                        onValueChange={(value) => handleInputChange(field.name, value)}
                        required={field.required}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options?.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input
                        id={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.name] || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        className="mt-2"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-600 hover:bg-gold-700 text-white py-4 text-lg font-semibold group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  By submitting this form, you agree to be contacted by Golden Crown Design and Build 
                  regarding your project inquiry. We respect your privacy and will not share your information.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}