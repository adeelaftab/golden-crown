'use client';

import Image from 'next/image'
import Link from 'next/link'

const partners = [
  {
    name: 'Build.com',
    url: 'https://www.build.com',
    logo: '/partners/build.png'
  },
  {
    name: 'Carter Lumber',
    url: 'https://www.carterlumber.com/',
    logo: '/partners/carter-lumber.png'
  },
  {
    name: 'Lansing Building Products',
    url: 'https://lansingbp.com/',
    logo: '/partners/lansing.png'
  },
  {
    name: 'TW Perry',
    url: 'https://lansingbp.com/',
    logo: '/partners/tw-perry.png'
  },
  {
    name: 'Sislers Stone',
    url: 'https://sislersstone.com/',
    logo: '/partners/sislers.png'
  },
  {
    name: 'ABC Supply',
    url: 'https://www.abcsupply.com/',
    logo: '/partners/abc-supply.png'
  },
  {
    name: 'General Shale Brick',
    url: 'https://generalshalebrickmanassas.com/',
    logo: '/partners/general-shale.png'
  },
  {
    name: 'AJ Madison',
    url: 'https://www.ajmadison.com/',
    logo: '/partners/aj-madison.png'
  },
  {
    name: 'Thos. Somerville Co.',
    url: 'https://www.tsconline.com/',
    logo: '/partners/somerville.png'
  },
  {
    name: 'Sherwin-Williams',
    url: 'https://www.sherwin-williams.com/',
    logo: '/partners/sherwin-williams.png'
  },
]

// Product categories with company details
const productCategories = [
  {
    name: 'Cabinetry',
    description: 'At Golden Crown Design & Build, we work directly with some of the most reputable cabinet manufacturers in the industry. As an authorized dealer, we\'re able to offer our clients exclusive access to high-quality products, competitive pricing, and a wide range of design options — from budget-friendly stock cabinets to fully custom solutions — ensuring the perfect match for every project.',
    companies: [
      {
        name: 'Showplace Cabinetry',
        description: 'Premium cabinetry for every room with exceptional quality',
        logo: '/products/cabinetry/showplace.png',
        url: 'https://showplacecabinetry.com/'
      },
      {
        name: 'Decora Cabinets',
        description: 'Premium cabinetry designs for modern homes',
        logo: '/products/cabinetry/decora.png',
        url: 'https://www.decoracabinets.com/'
      },
      {
        name: 'Kemper Cabinets',
        description: 'Distinctly cabinetry solutions with style and quality',
        logo: '/products/cabinetry/kemper.png',
        url: 'https://www.kempercabinets.com/'
      },
      {
        name: 'KraftMaid Cabinetry',
        description: 'Quality cabinets with endless design possibilities',
        logo: '/products/cabinetry/kraftmaid.png',
        url: 'https://www.kraftmaid.com/'
      },
      {
        name: 'Crestwood Cabinetry',
        description: 'Stylish and affordable cabinet solutions',
        logo: '/products/cabinetry/crestwood.png',
        url: 'https://crestwood-inc.com/'
      },
      {
        name: 'Forevermark Cabinetry',
        description: 'Sustainable and stylish cabinetry options',
        logo: '/products/cabinetry/forevermark.png',
        url: 'https://www.forevermarkcabinetry.com/'
      },
      {
        name: 'Fabuwood Cabinets',
        description: 'Beautiful and durable cabinet solutions',
        logo: '/products/cabinetry/fabuwood.png',
        url: 'https://www.fabuwood.com/'
      },
      {
        name: 'Mantra Cabinets',
        description: 'Contemporary cabinetry with exceptional craftsmanship',
        logo: '/products/cabinetry/mantra.png',
        url: 'https://www.mantracabinets.com/'
      },
      {
        name: 'UltraCraft Cabinets',
        description: 'Custom cabinetry built to perfection',
        logo: '/products/cabinetry/ultracraft.png',
        url: 'https://www.ultracraft.com/'
      },
      {
        name: 'Urban Effects Cabinetry',
        description: 'Modern urban-inspired cabinet designs',
        logo: '/products/cabinetry/urban-effects.png',
        url: 'https://urbaneffectscabinetry.com/'
      },
    ]
  },
  {
    name: 'Flooring & Carpet',
    description: 'We proudly work with some of the most trusted names in the flooring industry—offering our clients a wide selection of premium hardwood, luxury vinyl, laminate and carpet options. From timeless craftsmanship to modern designs, these brands provide durable, stylish, and high-quality materials to fit every home and lifestyle.',
    companies: [
      {
        name: 'Armstrong Flooring',
        description: 'Premium hardwood and resilient flooring solutions',
        logo: '/products/flooring/armstrong.png',
        url: 'https://info.armstrongflooring.com/'
      },
      {
        name: 'Bruce',
        description: 'Trusted hardwood flooring for generations',
        logo: '/products/flooring/bruce.png',
        url: 'https://www.bruce.com/en-us'
      },
      {
        name: 'Mohawk Flooring',
        description: 'Innovative flooring solutions for every space',
        logo: '/products/flooring/mohawk.png',
        url: 'https://www.mohawkflooring.com/'
      },
      {
        name: 'Mirage Flooring',
        description: 'Exceptional hardwood floors crafted with passion',
        logo: '/products/flooring/mirage.png',
        url: 'https://www.miragefloors.com/en-us/'
      },
      {
        name: 'Karndean Flooring',
        description: 'Luxury vinyl flooring with stunning designs',
        logo: '/products/flooring/karndean.png',
        url: 'https://www.karndean.com/en/floors/'
      },
      {
        name: 'Shaw Floors',
        description: 'Quality carpet and resilient flooring options',
        logo: '/products/flooring/shaw.png',
        url: 'https://shawfloors.com/en-us'
      },
    ]
  },
  {
    name: 'Tile',
    description: 'At Golden Crown Design and Build, we work with some of the most trusted tile manufacturers in the industry to provide our clients with high-quality porcelain, ceramic, natural stone, and mosaic tiles. Our partnerships ensure access to the latest designs, durable materials, and a wide variety of styles — allowing us to deliver exceptional finishes and timeless beauty in every project.',
    companies: [
      {
        name: 'MSI Surfaces',
        description: 'Premium porcelain, ceramic, and natural stone tiles',
        logo: '/products/tile/msi.png',
        url: 'https://www.msisurfaces.com/'
      },
      {
        name: 'Emser Tile',
        description: 'Designer tile and natural stone collections',
        logo: '/products/tile/emser.png',
        url: 'https://www.emser.com/collections/floor'
      },
      {
        name: 'Daltile',
        description: 'America\'s favorite tile and stone source',
        logo: '/products/tile/daltile.png',
        url: 'https://www.daltile.com/'
      },
      {
        name: 'Decovita USA',
        description: 'Innovative and stylish tile solutions',
        logo: '/products/tile/decovita.png',
        url: 'https://www.decovitausa.com/homepage/en'
      },
      {
        name: 'Marazzi USA',
        description: 'Italian-inspired porcelain and ceramic tiles',
        logo: '/products/tile/marazzi.png',
        url: 'https://www.marazziusa.com/'
      },
      {
        name: 'Conestoga Tile',
        description: 'Quality tile products with expert service',
        logo: '/products/tile/conestoga.png',
        url: 'https://www.conestogatile.com/'
      },
    ]
  },
  {
    name: 'Countertop',
    description: 'We work with the most trusted names in the industry to deliver surfaces that define luxury and performance. Our curated selection of premium materials sourced from leading brands known for their innovation, durability, and timeless beauty ensures every kitchen and bathroom we design reflects true elegance and lasting quality.',
    companies: [
      {
        name: 'MSI Surfaces',
        description: 'Premium quartz, granite, and natural stone surfaces',
        logo: '/products/countertop/msi.png',
        url: 'https://www.msisurfaces.com/'
      },
      {
        name: 'Daltile',
        description: 'Innovative countertop solutions and surfaces',
        logo: '/products/countertop/daltile.png',
        url: 'https://www.daltile.com/'
      },
      {
        name: 'Caesarstone',
        description: 'Luxury quartz surfaces with exceptional durability',
        logo: '/products/countertop/caesarstone.png',
        url: 'https://www.caesarstoneus.com/'
      },
      {
        name: 'Cosentino',
        description: 'Silestone and Dekton surfaces for superior performance',
        logo: '/products/countertop/cosentino.png',
        url: 'https://www.cosentino.com/'
      },
      {
        name: 'Cambria USA',
        description: 'American-made quartz surfaces with timeless designs',
        logo: '/products/countertop/cambria.png',
        url: 'https://www.cambriausa.com/'
      },
    ]
  },
  {
    name: 'Appliance',
    description: 'We work with trusted appliance retailers who offer the finest selection of high-performance and designer-grade products. From professional kitchen ranges to smart home solutions, our suppliers provide exceptional quality and innovation to match every style and space.',
    companies: [
      {
        name: 'AJ Madison',
        description: 'Premium appliances from top brands with expert service',
        logo: '/products/appliance/aj-madison.png',
        url: 'https://www.ajmadison.com/'
      },
      {
        name: 'ABW',
        description: 'Designer appliances and professional kitchen equipment',
        logo: '/products/appliance/abw.png',
        url: 'https://www.abwappliances.com/'
      },
    ]
  },
  {
    name: 'Fixture',
    description: 'We collaborate with leading plumbing fixture brands known for their innovation, craftsmanship, and timeless design. From elegant faucets and sinks to luxurious showers and bath collections, these trusted manufacturers bring unmatched quality and style to every space we create.',
    companies: [
      {
        name: 'Delta',
        description: 'Innovative faucets and fixtures for kitchen and bath',
        logo: '/products/fixture/delta.png',
        url: 'https://www.deltafaucet.com/'
      },
      {
        name: 'Moen',
        description: 'Premium faucets and showerheads with smart technology',
        logo: '/products/fixture/moen.png',
        url: 'https://www.moen.com/'
      },
      {
        name: 'Kohler',
        description: 'Luxury bath and kitchen fixtures with timeless design',
        logo: '/products/fixture/kohler.png',
        url: 'https://www.kohler.com/en'
      },
      {
        name: 'American Standard',
        description: 'Reliable bathroom and kitchen plumbing solutions',
        logo: '/products/fixture/american-standard.png',
        url: 'https://www.americanstandard-us.com/'
      },
      {
        name: 'TOTO',
        description: 'High-performance toilets and wellness products',
        logo: '/products/fixture/toto.png',
        url: 'https://www.totousa.com/'
      },
      {
        name: 'Brizo',
        description: 'Fashion-forward luxury bath and kitchen collections',
        logo: '/products/fixture/brizo.png',
        url: 'https://www.brizo.com/'
      },
      {
        name: 'Kraus',
        description: 'Modern sinks, faucets, and kitchen fixtures',
        logo: '/products/fixture/kraus.png',
        url: 'https://www.kraususa.com/'
      },
    ]
  },
  {
    name: 'Window & Door',
    description: 'We work with the most respected manufacturers to provide windows and doors that blend craftsmanship, performance, and design excellence. From energy-efficient windows to elegant entry and patio doors, these trusted brands deliver lasting beauty, comfort, and value to every home.',
    companies: [
      {
        name: 'Pella',
        description: 'Premium windows and doors with innovative design',
        logo: '/products/window-door/pella.png',
        url: 'https://www.pella.com/'
      },
      {
        name: 'Marvin',
        description: 'Luxury windows and doors crafted with precision',
        logo: '/products/window-door/marvin.png',
        url: 'https://www.marvin.com/'
      },
      {
        name: 'Andersen',
        description: 'America\'s most trusted window and door brand',
        logo: '/products/window-door/andersen.png',
        url: 'https://www.andersenwindows.com/'
      },
      {
        name: 'Simonton',
        description: 'Energy-efficient vinyl windows and doors',
        logo: '/products/window-door/simonton.png',
        url: 'https://www.simonton.com/'
      },
      {
        name: 'Ply Gem',
        description: 'Quality windows and doors for every home',
        logo: '/products/window-door/plygem.png',
        url: 'https://www.plygem.com/'
      },
      {
        name: 'MI',
        description: 'Affordable and durable window solutions',
        logo: '/products/window-door/mi.png',
        url: 'https://miwindows.com/'
      },
      {
        name: 'ProVia',
        description: 'Premium entry doors and replacement windows',
        logo: '/products/window-door/provia.png',
        url: 'https://www.provia.com/'
      },
      {
        name: 'Harvey',
        description: 'High-performance windows built for New England',
        logo: '/products/window-door/harvey.png',
        url: 'https://harveywindows.com/'
      },
      {
        name: 'Therma-Tru',
        description: 'Leading manufacturer of fiberglass entry doors',
        logo: '/products/window-door/thermatru.png',
        url: 'https://www.thermatru.com/'
      },
      {
        name: 'Reeb',
        description: 'Quality millwork and door solutions',
        logo: '/products/window-door/reeb.png',
        url: 'https://reeb.com/'
      },
      {
        name: 'Jeld-Wen',
        description: 'Reliable windows and doors for residential projects',
        logo: '/products/window-door/jeldwen.png',
        url: 'https://www.jeld-wen.com/en-us'
      },
    ]
  },
  {
    name: 'Deck & Railing',
    description: 'We work with leading composite decking brands known for their durability, low maintenance, and timeless appeal. Our trusted suppliers provide high-performance materials that combine natural beauty with lasting strength—perfect for creating outdoor spaces built to be enjoyed for years to come.',
    companies: [
      {
        name: 'Trex',
        description: 'World\'s #1 composite decking brand',
        logo: '/products/deck-railing/trex.png',
        url: 'https://www.trex.com/'
      },
      {
        name: 'TimberTech',
        description: 'Premium composite decking and railing systems',
        logo: '/products/deck-railing/timbertech.png',
        url: 'https://www.timbertech.com/'
      },
      {
        name: 'Wolf',
        description: 'Quality decking and porch materials',
        logo: '/products/deck-railing/wolf.png',
        url: 'https://www.wolfhomeproducts.com/decking-porch/'
      },
      {
        name: 'Fiberon',
        description: 'Eco-friendly composite decking solutions',
        logo: '/products/deck-railing/fiberon.png',
        url: 'https://www.fiberondecking.com/'
      },
    ]
  },
  // Add more categories as needed
]

export default function ProductsPartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] w-full">
        <Image
          src="/logo1.jpg"
          alt="Products and Partners background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Products and Partners</h1>
            <p className="mt-3 text-white/90 max-w-2xl">
              Discover our trusted partners and quality products that make your projects exceptional.
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
                <li className="text-gray-900 font-medium" aria-current="page">Products and Partners</li>
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

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with industry-leading companies to bring you the best materials and services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="relative w-full h-32 mb-4 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain p-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{partner.name}</h3>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated selection of premium products organized by category.
            </p>
          </div>

          {/* Products by category */}
          <div className="space-y-12">
            {productCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.name}</h3>
                {category.description && (
                  <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl">
                    {category.description}
                  </p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.companies.map((company, compIndex) => (
                    <div
                      key={compIndex}
                      className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                    >
                      <div className="relative w-full h-24 mb-4 flex items-center justify-center">
                        <Image
                          src={company.logo}
                          alt={`${company.name} logo`}
                          fill
                          className="object-contain p-2"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{company.name}</h4>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{company.description}</p>
                      <a
                        href={company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium text-center"
                      >
                        Visit Website
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-xl bg-gray-50 border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Ready to start your project?</h3>
              <p className="text-gray-600 mt-1">
                Let's discuss how we can bring your vision to life with quality materials and expert craftsmanship.
              </p>
            </div>
            <Link href="/#estimate" className="inline-block bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-md whitespace-nowrap">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
