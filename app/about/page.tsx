'use client';

import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic';
import contentData from '@/data/content.json';

const EstimateFormDialog = dynamic(() => import('@/components/EstimateFormDialog'), { ssr: false });

export default function AboutPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] w-full">
        <Image
          src="/logo1.jpg"
          alt="Golden Crown logo background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
            <p className="mt-3 text-white/90 max-w-2xl">
              Premium home construction and renovation services across the DMV. Licensed, insured,
              and bonded — committed to craftsmanship and customer care.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs & Back link */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <nav aria-label="Breadcrumb" className="text-sm">
              <ol className="flex items-center gap-2 text-gray-500">
                <li>
                  <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium" aria-current="page">About</li>
              </ol>
            </nav>

            <Link
              href="/"
              className="inline-flex items-center text-sm text-gray-700 hover:text-gold-700"
            >
              <span className="mr-1">←</span> Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Golden Crown Design and Build, we believe every home should reflect the unique vision of its owner — built with quality, style, and lasting value.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a Licensed Class A General Contractor with nearly a decade of residential remodeling experience in Virginia, Maryland, and Washington, D.C., we bring a proven track record of delivering exceptional results. Our team has successfully managed and completed hundreds of projects — including more than 15 major home additions across the DMV area.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With a foundation in architectural design and years of hands-on project management, we combine creative vision with technical expertise to oversee every detail from concept to completion. From full house renovations, kitchens, and bathrooms to basement finishing, siding, roofing, decks, patios, and outdoor living spaces — Golden Crown Design and Build delivers craftsmanship you can trust, backed by our licensed, insured, and bonded commitment to safety and quality.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We also offer free estimates and design consultations for every project, ensuring our clients receive expert guidance and a tailored approach to fit their needs and budget. Whether you’re reimagining a single room or transforming your entire home, we’re here to build your dream and enhance your life.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Golden Crown Design and Build — Building Dreams, Enhancing Lives.
              </p>
            </div>
            <div className="relative h-80 md:h-96 lg:h-[32rem] w-full md:w-11/12 lg:w-10/12 mx-auto rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/about-intro.jpg"
                alt="Golden Crown Design and Build team craftsmanship"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 text-emerald-700 px-3 py-1 text-sm font-medium border border-emerald-500/20">
              Licensed • Insured • Bonded
            </span>
            <span className="inline-flex items-center rounded-full bg-gold-500/10 text-gold-700 px-3 py-1 text-sm font-medium border border-gold-500/20">
              We serve the DMV area
            </span>
            <span className="inline-flex items-center rounded-full bg-gold-500/10 text-gold-700 px-3 py-1 text-sm font-medium border border-gold-500/20">
              Workmanship Warranty
            </span>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Craftsmanship</h3>
              <p className="text-gray-600">Attention to detail and pride in every cut, joint, and finish.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600">Clear expectations, honest timelines, and proactive updates.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600">We show up, follow through, and stand behind our work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="rounded-xl bg-gray-50 border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Ready to discuss your project?</h3>
              <p className="text-gray-600 mt-1">
                Tell us about your vision — we’ll provide a detailed estimate and timeline.
              </p>
            </div>
            <button 
              onClick={() => setIsDialogOpen(true)}
              className="inline-block bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-md"
            >
              Get a Free Estimate
            </button>
          </div>
        </div>
      </section>

      {/* Estimate Form Dialog */}
      <EstimateFormDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        content={contentData.form}
      />
    </main>
  )
}
