import ProductCategoryPage from '@/components/ProductCategoryPage';

export const metadata = {
  title: 'Flooring & Coatings - Swaati Enterprises',
  description: 'Industrial floor coatings, protective layers and decorative flooring systems.',
};

export default function FlooringAndCoatingsPage() {
  const products = [
    {
      name: 'Fosroc',
      description: 'Fosroc flooring and coating systems provide durable surface protection for industrial and commercial environments exposed to heavy traffic and chemicals.',
      features: ['High durability flooring systems', 'Excellent chemical and abrasion resistance', 'Seamless protective surface coatings'],
      applications: ['Industrial floors', 'Warehouses and factories', 'Commercial buildings'],
    },
    {
      name: 'MYK Arment',
      description: 'MYK Arment flooring systems provide strong and durable protective coatings designed for industrial and infrastructure environments.',
      features: ['High strength flooring systems', 'Excellent adhesion to concrete', 'Durable surface protection'],
      applications: ['Industrial flooring', 'Manufacturing plants', 'Commercial facilities'],
    },
    {
      name: 'Sika',
      description: 'Sika flooring and coating systems provide high performance protection for concrete floors exposed to heavy loads, chemicals and continuous use.',
      features: ['High performance epoxy flooring', 'Strong bonding with concrete surfaces', 'Long lasting surface protection'],
      applications: ['Industrial facilities', 'Pharmaceutical and food plants', 'Parking structures'],
    },
  ];

  return (
    <ProductCategoryPage
      title="Flooring & Coatings"
      description="Swaati Enterprises supplies industrial flooring systems and protective coatings that protect concrete surfaces from wear, impact, chemicals and moisture."
      products={products}
    />
  );
}
