import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-royal-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img src="/images/se-full-white-logo.webp" alt="Swaati Enterprises Logo" className="h-8 mb-4" />
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Trusted construction chemical solutions for modern building projects.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/swaatienterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12.073C22 6.504 17.523 2 12 2S2 6.504 2 12.073c0 5.019 3.657 9.177 8.438 9.927v-7.025H7.898v-2.902h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.774-1.63 1.566v1.88h2.773l-.443 2.902h-2.33V22c4.78-.75 8.437-4.908 8.437-9.927z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/swaatienterprises/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5c3.176 0 5.75-2.574 5.75-5.75v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5C20 18.216 18.216 20 16.25 20h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm9.25 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/swaati-enterprises/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors hover:scale-110"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452H16.89v-5.569c0-1.327-.025-3.037-1.849-3.037-1.849 0-2.131 1.445-2.131 2.939v5.667H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.604 0 4.269 2.372 4.269 5.456v6.284zM5.337 7.433a1.984 1.984 0 110-3.967 1.984 1.984 0 010 3.967zM7.119 20.452H3.556V9h3.563v11.452z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-300 hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products-waterproofing_systems" className="text-slate-300 hover:text-white">
                  Waterproofing Systems
                </Link>
              </li>
              <li>
                <Link href="/products-concrete_admixtures" className="text-slate-300 hover:text-white">
                  Concrete Admixtures
                </Link>
              </li>
              <li>
                <Link href="/products-epoxy_systems" className="text-slate-300 hover:text-white">
                  Epoxy Flooring
                </Link>
              </li>
              <li>
                <Link href="/products-structural_repair" className="text-slate-300 hover:text-white">
                  Structural Repair
                </Link>
              </li>
              <li>
                <Link href="/products-grouts_anchors" className="text-slate-300 hover:text-white">
                  Grouts & Anchors
                </Link>
              </li>
              <li>
                <Link href="/products-industrial_solution" className="text-slate-300 hover:text-white">
                  Industrial Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li>
                📍 Office No. 2, Building No. D,<br />
                Shraddha Garden, Gawade Park,<br />
                Opp Tata Motors, Chinchwad<br />
                Pune – 411033
              </li>
              <li>
                📞 <a href="tel:+919370011133" className="hover:text-white">+91 93700 11133</a><br />
                📞 <a href="tel:+918380017333" className="hover:text-white">+91 83800 17333</a>
              </li>
              <li>
                ✉ <a href="mailto:swaatienterprises@gmail.com" className="hover:text-white">
                  swaatienterprises@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2026 Swaati Enterprises. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
