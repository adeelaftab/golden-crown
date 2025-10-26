import Link from 'next/link'
import contentData from '@/data/content.json'
import ServiceDetailClient from '@/components/ServiceDetailClient'

interface ServiceLike {
  id: string
  title: string
  description: string
  image: string
  images?: string[]
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
          <p className="text-gray-600 mb-6">The page you are looking for doesn't exist or was moved.</p>
          <Link href="/" className="inline-block bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-md">Go Home</Link>
        </div>
      </div>
    )
  }

  return <ServiceDetailClient item={item} />
}
