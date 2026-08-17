import ProductCategoryPage from '@/components/ProductCategoryPage';

export const metadata = {
  title: 'Concrete Admixtures - Swaati Enterprises',
  description: 'Plasticizers, superplasticizers, accelerators and specialty concrete additives.',
};

export default function ConcreteAdmixturesPage() {
  const products = [
    {
      name: 'Fosroc',
      description: 'Fosroc concrete admixtures improve workability, strength development and durability of concrete used in modern construction projects.',
      features: ['High performance water reducing admixtures', 'Improves concrete strength and durability', 'Consistent performance in RMC and site mixes'],
      applications: ['Ready mix concrete plants', 'High rise building construction', 'Infrastructure projects'],
    },
    {
      name: 'MC Bauchemie',
      description: 'MC Bauchemie offers advanced concrete admixture technologies that enhance concrete workability, performance and long term structural durability.',
      features: ['High efficiency superplasticizers', 'Improves workability and flow', 'Reduces water demand in concrete'],
      applications: ['High strength concrete', 'Precast concrete elements', 'Pumped concrete systems'],
    },
    {
      name: 'Dr. Fixit',
      description: 'Dr. Fixit construction chemicals include admixtures designed to improve concrete quality, workability and protection against moisture and environmental damage.',
      features: ['Improves concrete durability', 'Enhances workability of mixes', 'Reliable site performance'],
      applications: ['Residential construction', 'Waterproof concrete structures', 'Plaster and mortar mixes'],
    },
    {
      name: 'MYK Arment',
      description: 'MYK Arment concrete admixtures improve workability, strength and durability of concrete used in modern construction environments.',
      features: ['High performance plasticizers', 'Improved concrete workability', 'Consistent quality in concrete production'],
      applications: ['Ready mix concrete', 'Infrastructure construction', 'Commercial building projects'],
    },
    {
      name: 'Penetron',
      description: 'Penetron admixtures use crystalline technology to enhance concrete durability and provide protection against water penetration.',
      features: ['Integral waterproofing technology', 'Improves concrete durability', 'Protects concrete from water ingress'],
      applications: ['Basements and foundations', 'Water retaining structures', 'Underground concrete structures'],
    },
  ];

  return (
    <ProductCategoryPage
      title="Concrete Admixtures"
      description="Swaati Enterprises supplies high performance concrete admixtures from leading manufacturers. Our range of plasticizers, superplasticizers, accelerators and specialty additives help improve workability, compressive strength and durability of concrete mixes."
      products={products}
    />
  );
}
