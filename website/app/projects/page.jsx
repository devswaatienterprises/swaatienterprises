import Link from 'next/link';

export const metadata = {
  title: 'Projects - Swaati Enterprises',
  description: 'Discover some of the projects where our construction chemical solutions have helped deliver durable, high-performance results.',
};

export default function ProjectsPage() {
  const projects = [
    {
      tag: 'Waterproofing',
      title: 'Metro Station Complex',
      location: 'New Delhi',
      detail: '50,000 sq.m',
    },
    {
      tag: 'Epoxy Flooring',
      title: 'Pharmaceutical Plant',
      location: 'Hyderabad',
      detail: '25,000 sq.m',
    },
    {
      tag: 'Structural Repair',
      title: 'IT Park Tower',
      location: 'Bangalore',
      detail: '12 Floors',
    },
    {
      tag: 'Waterproofing',
      title: 'Shopping Mall',
      location: 'Mumbai',
      detail: '80,000 sq.m',
    },
    {
      tag: 'Epoxy Flooring',
      title: 'Food Processing Unit',
      location: 'Pune',
      detail: '15,000 sq.m',
    },
    {
      tag: 'Structural Strengthening',
      title: 'Highway Bridge',
      location: 'Gujarat',
      detail: '2.5 km',
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
          <div className="flex items-center gap-2 text-royal-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Projects</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Project Portfolio
          </h1>

          <p className="text-xl text-royal-200 max-w-3xl">
            Discover some of the projects where our construction chemical solutions have helped deliver durable, high-performance results across infrastructure, industrial and commercial developments.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="card-hover bg-white rounded-xl overflow-hidden border border-slate-200">
                <div className="h-48 bg-gradient-to-br from-royal-100 to-slate-100 flex items-center justify-center">
                  <svg className="w-20 h-20 text-royal-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 21h18M3 7v1a3 3 0 003 3h12a3 3 0 003-3V7M6 21V11M18 21V11M12 21V11M3 7l9-4 9 4" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-royal-100 text-royal-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {project.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span>{project.location}</span>
                    <span>{project.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold stat-number mb-2">500+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>

            <div>
              <div className="text-4xl font-bold stat-number mb-2">50M+</div>
              <div className="text-slate-600">Sq.m Treated</div>
            </div>

            <div>
              <div className="text-4xl font-bold stat-number mb-2">200+</div>
              <div className="text-slate-600">Satisfied Clients</div>
            </div>

            <div>
              <div className="text-4xl font-bold stat-number mb-2">25+</div>
              <div className="text-slate-600">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-royal-700 to-royal-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>

          <p className="text-royal-200 mb-8 max-w-2xl mx-auto">
            Let us help you achieve the best results with our products and expertise.
          </p>

          <Link
            href="/contact"
            className="bg-white text-royal-700 px-8 py-4 rounded-lg font-semibold hover:bg-royal-50 transition-all inline-block"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
