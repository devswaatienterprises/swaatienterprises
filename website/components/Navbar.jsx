'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <img src="/images/se-logo.webp" alt="Swaati Enterprises Logo" className="h-12 w-auto" />
              <div>
                <img src="/images/se-eng-logo.webp" alt="Swaati Enterprises Logo" className="h-6 w-auto" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="nav-link text-slate-700 hover:text-royal-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="nav-link text-slate-700 hover:text-royal-600 font-medium">
                About Us
              </Link>

              {/* Products Dropdown */}
              <div className="dropdown relative">
                <Link
                  href="/products"
                  className="nav-link text-slate-700 hover:text-royal-600 font-medium flex items-center gap-1"
                >
                  Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                <div className="dropdown-menu absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-100 py-2">
                  <Link
                    href="/products-waterproofing_systems"
                    className="block px-4 py-3 hover:bg-royal-50 text-slate-700 hover:text-royal-600"
                  >
                    Waterproofing Systems
                  </Link>
                  <Link
                    href="/products-concrete_admixtures"
                    className="block px-4 py-3 hover:bg-royal-50 text-slate-700 hover:text-royal-600"
                  >
                    Concrete Admixtures
                  </Link>
                  <Link
                    href="/products-epoxy_systems"
                    className="block px-4 py-3 hover:bg-royal-50 text-slate-700 hover:text-royal-600"
                  >
                    Epoxy Flooring
                  </Link>
                  <Link
                    href="/products-structural_repair"
                    className="block px-4 py-3 hover:bg-royal-50 text-slate-700 hover:text-royal-600"
                  >
                    Structural Repair
                  </Link>
                  <Link
                    href="/products-grouts_anchors"
                    className="block px-4 py-3 hover:bg-royal-50 text-slate-700 hover:text-royal-600"
                  >
                    Grouts & Anchors
                  </Link>
                  <Link
                    href="/products-industrial_solution"
                    className="block px-4 py-3 hover:bg-royal-50 text-slate-700 hover:text-royal-600"
                  >
                    Industrial Solutions
                  </Link>
                  <Link
                    href="/products-flooring_and_coatings"
                    className="block px-4 py-3 hover:bg-royal-50 text-slate-700 hover:text-royal-600"
                  >
                    Flooring & Coatings
                  </Link>
                  <Link
                    href="/products-building_and_joint_sealants"
                    className="block px-4 py-3 hover:bg-royal-50 text-slate-700 hover:text-royal-600"
                  >
                    Building & Joint Sealants
                  </Link>
                  <Link
                    href="/products-specialized_coatings"
                    className="block px-4 py-3 hover:bg-royal-50 text-slate-700 hover:text-royal-600"
                  >
                    Specialized Coatings
                  </Link>
                </div>
              </div>

              <Link href="/services" className="nav-link text-slate-700 hover:text-royal-600 font-medium">
                Services
              </Link>
              <Link href="/projects" className="nav-link text-slate-700 hover:text-royal-600 font-medium">
                Projects
              </Link>
              <Link href="/contact" className="nav-link text-slate-700 hover:text-royal-600 font-medium">
                Contact
              </Link>
            </div>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-4">
                <Link href="/contact" className="btn-primary text-white px-6 py-3 rounded-lg font-semibold text-sm">
                  Get Quote
                </Link>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 shadow-lg animate-fade-in">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 hover:text-royal-600 font-medium py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 hover:text-royal-600 font-medium py-2"
            >
              About Us
            </Link>
            <div>
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className="w-full flex justify-between items-center text-slate-700 hover:text-royal-600 font-medium py-2"
              >
                <span>Products</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productsDropdownOpen && (
                <div className="pl-4 space-y-2 py-2 border-l-2 border-royal-200 my-1">
                  <Link
                    href="/products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-600 hover:text-royal-600 py-1 text-sm font-semibold"
                  >
                    All Products
                  </Link>
                  <Link
                    href="/products-waterproofing_systems"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-600 hover:text-royal-600 py-1 text-sm"
                  >
                    Waterproofing Systems
                  </Link>
                  <Link
                    href="/products-concrete_admixtures"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-600 hover:text-royal-600 py-1 text-sm"
                  >
                    Concrete Admixtures
                  </Link>
                  <Link
                    href="/products-epoxy_systems"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-600 hover:text-royal-600 py-1 text-sm"
                  >
                    Epoxy Flooring
                  </Link>
                  <Link
                    href="/products-structural_repair"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-600 hover:text-royal-600 py-1 text-sm"
                  >
                    Structural Repair
                  </Link>
                  <Link
                    href="/products-grouts_anchors"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-600 hover:text-royal-600 py-1 text-sm"
                  >
                    Grouts & Anchors
                  </Link>
                  <Link
                    href="/products-industrial_solution"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-600 hover:text-royal-600 py-1 text-sm"
                  >
                    Industrial Solutions
                  </Link>
                  <Link
                    href="/products-flooring_and_coatings"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-600 hover:text-royal-600 py-1 text-sm"
                  >
                    Flooring & Coatings
                  </Link>
                  <Link
                    href="/products-building_and_joint_sealants"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-600 hover:text-royal-600 py-1 text-sm"
                  >
                    Building & Joint Sealants
                  </Link>
                  <Link
                    href="/products-specialized_coatings"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-600 hover:text-royal-600 py-1 text-sm"
                  >
                    Specialized Coatings
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 hover:text-royal-600 font-medium py-2"
            >
              Services
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 hover:text-royal-600 font-medium py-2"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-700 hover:text-royal-600 font-medium py-2"
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary block text-center text-white px-6 py-3 rounded-lg font-semibold text-sm"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
