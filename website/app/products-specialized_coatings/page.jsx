import ProductCategoryPage from '@/components/ProductCategoryPage';

export const metadata = {
  title: 'Specialized Coatings - Swaati Enterprises',
  description: 'Protective and performance coatings for chemical resistance, waterproofing and durability.',
};

export default function SpecializedCoatingsPage() {
  const products = [
    {
      name: 'Fosroc',
      description: 'Fosroc specialized coating systems provide protective solutions for concrete and steel surfaces exposed to aggressive environments and chemical attack.',
      features: ['High performance protective coatings', 'Excellent resistance to chemicals and moisture', 'Durable protection for concrete and steel'],
      applications: ['Industrial structures', 'Water treatment plants', 'Concrete protection systems'],
    },
    {
      name: 'Dr. Fixit',
      description: 'Dr. Fixit protective coatings help safeguard building surfaces from moisture penetration, weather exposure and long term deterioration.',
      features: ['High quality protective coatings', 'Strong adhesion to concrete surfaces', 'Long lasting protection against moisture'],
      applications: ['Building exteriors', 'Terrace protection', 'Structural concrete surfaces'],
    },
    {
      name: 'Sunanda',
      description: 'Sunanda specialized coatings are designed to protect construction surfaces from leakage, corrosion and environmental damage.',
      features: ['Durable coating technology', 'Improves surface protection', 'Resistant to water and weather'],
      applications: ['Concrete surfaces', 'Terrace and roof slabs', 'Structural protection systems'],
    },
    {
      name: 'MYK Arment',
      description: 'MYK Arment specialized coating systems provide protective layers that improve durability and extend the service life of concrete structures.',
      features: ['Advanced coating technology', 'Strong bonding with concrete surfaces', 'Improves durability of structures'],
      applications: ['Concrete protection', 'Industrial structures', 'Infrastructure projects'],
    },
    {
      name: 'STP LTD',
      description: 'STP protective coating systems are used to protect concrete and steel surfaces from environmental exposure and structural deterioration.',
      features: ['High performance protective coatings', 'Long term structural protection', 'Resistant to moisture and chemicals'],
      applications: ['Concrete structures', 'Industrial facilities', 'Infrastructure protection'],
    },
  ];

  return (
    <ProductCategoryPage
      title="Specialized Coatings"
      description="Swaati Enterprises supplies specialized protective coating systems designed to defend concrete and steel surfaces against weather, chemicals, abrasion and environmental exposure."
      products={products}
    />
  );
}
