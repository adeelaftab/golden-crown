import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

export const metadata = {
  title: 'Licensing | Golden Crown Design and Build',
  description:
    'Golden Crown Design and Build LLC is a fully licensed, bonded, and insured residential general contractor serving VA, MD, and DC.',
};

export default function LicensingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-28 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumbs */}
            <div className="mb-4 flex items-center justify-between">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Licensing</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <Button asChild variant="outline" size="sm">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Licensing & Credentials</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Golden Crown Design and Build LLC is a fully licensed, bonded, and insured
              residential general contractor proudly serving Virginia, Maryland, and Washington, DC.
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-gold-600"></span>
                  Virginia Class A General Contractor License
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-gold-600"></span>
                  Licensed & Insured in multiple jurisdictions
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-gold-600"></span>
                  Compliance with all local, state, and federal building codes
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-gold-600"></span>
                  Commitment to safety, quality, and professional standards in every project
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mt-8">
              Our licensing ensures that every project we deliver meets industry requirements and
              exceeds client expectations. For more information or verification, please contact us directly.
            </p>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact</h2>
              <div className="space-y-2 text-gray-700">
                <p>
                  <a href="mailto:info@goldencrowndb.com" className="text-gold-600 hover:text-gold-700 underline">
                    info@goldencrowndb.com
                  </a>
                </p>
                <p>
                  <a href="tel:2026006005" className="text-gold-600 hover:text-gold-700 underline">
                    202-600-6005
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
