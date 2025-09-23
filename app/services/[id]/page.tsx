import Image from 'next/image'
import Link from 'next/link'
import contentData from '@/data/content.json'

interface ServiceLike {
  id: string
  title: string
  description: string
  image: string
  features?: string[]
}

function findServiceById(id: string): { item: ServiceLike | null; type: 'service' | 'exterior' | null } {
  const svc = (contentData.services as ServiceLike[]).find((s) => s.id === id)
  if (svc) return { item: svc, type: 'service' }
  const ext = (contentData.exteriors.services as ServiceLike[]).find((s) => s.id === id)
  if (ext) return { item: ext, type: 'exterior' }
  return { item: null, type: null }
}

// Pre-generate all routes for static export
export function generateStaticParams() {
  const serviceIds = (contentData.services as ServiceLike[]).map((s) => s.id)
  const exteriorIds = (contentData.exteriors.services as ServiceLike[]).map((s) => s.id)
  const all = [...serviceIds, ...exteriorIds]
  const unique = all.filter((id, index) => all.indexOf(id) === index)
  return unique.map((id) => ({ id }))
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const { id } = params
  const { item, type } = findServiceById(id)

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The page you are looking for doesn\'t exist or was moved.</p>
          <Link href="/" className="inline-block bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-md">Go Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] w-full">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">{item.title}</h1>
            <p className="mt-3 text-white/90 max-w-2xl">{item.description}</p>
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
                <li>
                  <Link href="/#services" className="hover:text-gold-600 transition-colors">Services</Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium" aria-current="page">{item.title}</li>
              </ol>
            </nav>

            <Link
              href="/#services"
              className="inline-flex items-center text-sm text-gray-700 hover:text-gold-700"
            >
              <span className="mr-1">←</span> Back to Services
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {item.features && item.features.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What\'s Included</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {item.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-gold-600 rounded-full mt-2" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Gallery (uses the same image as placeholder variations) */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[item.image, item.image, item.image].map((img, idx) => (
                <div key={idx} className="relative h-56 rounded-lg overflow-hidden shadow">
                  <Image src={img} alt={`${item.title} ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Interested in {item.title}?</h3>
            <p className="text-gray-600 mb-4">Get in touch and we\'ll provide a detailed estimate and timeline for your project.</p>
            <Link href="#estimate" className="inline-block bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-md">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
