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
  title: 'Privacy Policy | Golden Crown Design and Build',
  description:
    'Privacy Policy for Golden Crown Design and Build LLC, outlining how we collect and use information.',
};

export default function PrivacyPage() {
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
                    <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <Button asChild variant="outline" size="sm">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

            <p className="text-gray-700 leading-relaxed mb-6">
              Golden Crown Design and Build LLC values your privacy and is committed to protecting your personal information.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed">
                  When you request a free estimate or contact us through our website, we may collect your name, phone number, email address, and project details.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use this information solely to respond to your inquiry, provide estimates, and deliver our services. We do not sell or share your information with outside parties, except as required by law.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies & Website Data</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may use cookies or similar technologies to improve functionality and user experience. You can adjust your browser settings to disable cookies at any time.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Privacy Matters</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about how your information is handled, please contact us at:
                </p>
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
        </div>
      </section>
    </main>
  );
}
