import Link from 'next/link';

export default function ProductCategoryPage({ title, description, products }) {
  return (
    <>
      {/* Header */}
      <section className="hero-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex items-center gap-2 text-royal-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{title}</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-royal-200 max-w-3xl">{description}</p>
        </div>
      </section>

      {/* Products List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="product-card card-hover bg-white rounded-xl p-8 shadow-sm">
                <div className="grid lg:grid-cols-3 gap-10 items-start">
                  {/* LEFT CONTENT */}
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">{product.name}</h3>
                    <p className="text-slate-600 mb-6">{product.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {product.features && (
                        <div>
                          <h4 className="font-semibold text-slate-700 mb-3">Key Features</h4>
                          <ul className="space-y-2 text-sm text-slate-600">
                            {product.features.map((feat, fIdx) => (
                              <li key={fIdx}>{feat}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {product.applications && (
                        <div>
                          <h4 className="font-semibold text-slate-700 mb-3">Applications</h4>
                          <ul className="space-y-2 text-sm text-slate-600">
                            {product.applications.map((app, aIdx) => (
                              <li key={aIdx}>{app}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* RIGHT BUTTON PANEL */}
                  <div className="flex flex-col gap-3 lg:border-l lg:pl-8 border-slate-200">
                    <a
                      href="#"
                      className="btn-primary text-white px-6 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 text-center"
                    >
                      Download Datasheet
                    </a>
                    <Link
                      href={`/contact?product=${encodeURIComponent(product.name)}`}
                      className="btn-secondary text-royal-600 px-6 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2"
                    >
                      Request Quotation
                    </Link>
                    <a
                      href="tel:+919370011133"
                      className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold text-sm text-center hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-royal-700 to-royal-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Need Technical Guidance for Product Selection?
          </h2>
          <p className="text-royal-200 mb-8 max-w-2xl mx-auto">
            Our engineering team is available to assist you with technical recommendations and material selection.
          </p>
          <Link
            href="/contact"
            className="bg-white text-royal-700 px-8 py-4 rounded-lg font-semibold hover:bg-royal-50 transition-all inline-block"
          >
            Get Technical Support
          </Link>
        </div>
      </section>
    </>
  );
}
