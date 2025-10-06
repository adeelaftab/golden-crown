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
  title: 'Terms of Service | Golden Crown Design and Build',
  description:
    'Terms of Service for Golden Crown Design and Build LLC website usage and estimates.',
};

export default function TermsPage() {
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
                    <BreadcrumbPage>Terms of Service</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <Button asChild variant="outline" size="sm">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              By accessing and using the Golden Crown Design and Build LLC website, you agree to the following terms:
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <ul className="space-y-4 text-gray-700">
                <li>
                  <span className="font-semibold">General Use – </span>
                  The information provided on this website is for general purposes only and is subject to change without notice.
                </li>
                <li>
                  <span className="font-semibold">Estimates – </span>
                  Any free estimates provided through the website are preliminary and non-binding until confirmed by a written and signed contract.
                </li>
                <li>
                  <span className="font-semibold">Accuracy of Information – </span>
                  While we strive to keep content current and accurate, Golden Crown Design and Build LLC makes no warranties regarding completeness or suitability of the information for specific purposes.
                </li>
                <li>
                  <span className="font-semibold">Intellectual Property – </span>
                  All images, text, and designs on this site are the property of Golden Crown Design and Build LLC and may not be reproduced without permission.
                </li>
                <li>
                  <span className="font-semibold">Right to Update – </span>
                  We may update these Terms of Service at any time without prior notice.
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mt-8">
              If you have any questions regarding these terms, please contact us directly.
            </p>

            <div className="mt-6 space-y-2 text-gray-700">
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
      </section>
    </main>
  );
}
