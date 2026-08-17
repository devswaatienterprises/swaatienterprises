import Link from 'next/link';

export const metadata = {
  title: 'Products - Swaati Enterprises',
  description: 'Explore our comprehensive range of construction chemicals including waterproofing systems, concrete admixtures, epoxy flooring, structural repair, grouts, anchors and industrial coatings.',
};

export default function ProductsPage() {
  const categories = [
    {
      title: 'Waterproofing Systems',
      count: '15+ Products',
      link: '/products-waterproofing_systems',
      img: '/images/product-waterproofing-systems.webp',
      desc: 'Integral, cementitious, membrane and specialty waterproofing solutions for all applications.',
    },
    {
      title: 'Concrete Admixtures',
      count: '20+ Products',
      link: '/products-concrete_admixtures',
      img: '/images/product-admixtures.webp',
      desc: 'Plasticizers, superplasticizers, accelerators and specialty concrete additives.',
    },
    {
      title: 'Epoxy Flooring',
      count: '12+ Products',
      link: '/products-epoxy_systems',
      img: '/images/product-epoxy.webp',
      desc: 'Self-leveling, anti-static, chemical resistant and decorative flooring systems.',
    },
    {
      title: 'Structural Repair & Strengthening',
      count: '18+ Products',
      link: '/products-structural_repair',
      img: '/images/product-structural-repair-and-strengthening.webp',
      desc: 'Repair mortars, bonding agents, injection systems and CFRP solutions.',
    },
    {
      title: 'Grouts & Anchors',
      count: '10+ Products',
      link: '/products-grouts_anchors',
      img: '/images/product-Grouts-and-Anchors.webp',
      desc: 'Non-shrink grouts, epoxy grouts and chemical anchor systems.',
    },
    {
      title: 'Industrial Solutions',
      count: '25+ Products',
      link: '/products-industrial_solution',
      img: '/images/product-Industrial-Solutions.webp',
      desc: 'Corrosion protection, coatings, sealants and specialty industrial products.',
    },
    {
      title: 'Flooring & Coatings',
      count: '15+ Products',
      link: '/products-flooring_and_coatings',
      img: '/images/product-flooring-and-coating.webp',
      desc: 'Industrial floor coatings, protective layers and decorative flooring systems.',
    },
    {
      title: 'Building & Joint Sealants',
      count: '12+ Products',
      link: '/products-building_and_joint_sealants',
      img: '/images/product-building-and-joint-sealants.webp',
      desc: 'High-performance sealants for expansion joints, glazing, façade and structural applications.',
    },
    {
      title: 'Specialized Coatings',
      count: '10+ Products',
      link: '/products-specialized_coatings',
      img: '/images/product-specialized-coatings.webp',
      desc: 'Protective and performance coatings for chemical resistance, waterproofing and durability.',
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="hero-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-royal-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Products</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Construction Chemical Products
          </h1>

          <p className="text-xl text-royal-200 max-w-3xl">
            Explore our comprehensive range of construction chemicals including waterproofing systems, concrete admixtures, epoxy flooring, structural repair solutions, grouts, anchors and industrial coatings.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                href={cat.link}
                className="card-hover bg-white rounded-xl overflow-hidden border border-slate-200 group"
              >
                <div className="h-48 overflow-hidden">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
                </div>

                <div className="p-6">
                  <span className="text-royal-600 text-sm font-semibold">{cat.count}</span>

                  <h3 className="text-xl font-bold text-slate-800 mt-1 mb-2">{cat.title}</h3>

                  <p className="text-slate-600 text-sm mb-4">{cat.desc}</p>

                  <span className="inline-flex items-center gap-2 text-royal-600 font-semibold text-sm">
                    View Products
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-royal-700 to-royal-900 rounded-2xl p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>

            <p className="text-royal-200 mb-8 max-w-2xl mx-auto">
              Our technical team can help you find the right product for your specific application.
            </p>

            <Link
              href="/contact"
              className="bg-white text-royal-700 px-8 py-4 rounded-lg font-semibold hover:bg-royal-50 transition-all inline-block"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
