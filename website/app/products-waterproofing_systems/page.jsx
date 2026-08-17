import ProductCategoryPage from '@/components/ProductCategoryPage';

export const metadata = {
  title: 'Waterproofing Systems - Swaati Enterprises',
  description: 'Integral, cementitious, membrane and specialty waterproofing solutions for all applications.',
};

export default function WaterproofingSystemsPage() {
  const products = [
    {
      name: 'Fosroc',
      description: 'Fosroc waterproofing systems provide reliable protection against water ingress in concrete structures. These products are widely used in infrastructure, commercial buildings and underground construction.',
      features: ['High resistance to water penetration', 'Long lasting protection for concrete', 'Suitable for demanding construction environments'],
      applications: ['Basements', 'Water retaining structures', 'Podium slabs'],
    },
    {
      name: 'Dr. Fixit',
      description: 'Dr. Fixit waterproofing products are widely used in residential and commercial construction to protect buildings from water leakage and moisture damage.',
      features: ['Easy application for contractors', 'Creates a strong waterproof barrier', 'Suitable for exterior and interior areas'],
      applications: ['Terraces', 'Bathrooms and wet areas', 'External walls'],
    },
    {
      name: 'MC-Bauchemie',
      description: 'MC-Bauchemie provides advanced waterproofing and concrete protection systems designed for demanding construction environments.',
      features: ['High performance construction chemicals', 'Strong bonding with concrete surfaces', 'Long term durability'],
      applications: ['Concrete structures', 'Infrastructure projects', 'Water retaining structures'],
    },
    {
      name: 'Penetron',
      description: 'Penetron crystalline waterproofing technology protects concrete by forming crystals within the pores to block water penetration.',
      features: ['Deep penetrating crystalline protection', 'Permanent waterproofing effect', 'Improves durability of concrete'],
      applications: ['Basements', 'Water tanks', 'Underground structures'],
    },
    {
      name: 'MYK Arment',
      description: 'MYK Arment offers waterproofing and construction chemical solutions designed for modern infrastructure and building projects.',
      features: ['Reliable construction chemical systems', 'Good adhesion with concrete surfaces', 'Improves structural durability'],
      applications: ['Concrete surfaces', 'Structural repair areas', 'Industrial buildings'],
    },
    {
      name: 'Kemper',
      description: 'Kemper liquid waterproof membranes create seamless waterproof protection on exposed surfaces.',
      features: ['Seamless liquid applied membrane', 'Flexible waterproof protection', 'Strong weather resistance'],
      applications: ['Terraces', 'Roof slabs', 'Balconies'],
    },
    {
      name: 'CICO',
      description: 'CICO waterproofing chemicals help protect structures from moisture damage and water leakage.',
      features: ['Improves water resistance in concrete', 'Simple application methods', 'Reliable performance in construction'],
      applications: ['Concrete', 'Mortar', 'Plaster'],
    },
    {
      name: 'Apcotex Industries',
      description: 'Apcotex polymer solutions are used in construction chemicals to improve bonding, waterproofing and surface protection.',
      features: ['Polymer based technology', 'Improves bonding strength', 'Enhances durability of coatings'],
      applications: ['Concrete surfaces', 'Waterproof coatings', 'Repair mortars'],
    },
  ];

  return (
    <ProductCategoryPage
      title="Waterproofing Systems"
      description="Swaati Enterprises supplies trusted waterproofing solutions from leading construction chemical manufacturers. Our product range includes waterproofing compounds, membranes, coatings, crystalline systems and repair materials used in residential, commercial and infrastructure projects."
      products={products}
    />
  );
}
