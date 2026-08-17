import ProductCategoryPage from '@/components/ProductCategoryPage';

export const metadata = {
  title: 'Epoxy Flooring - Swaati Enterprises',
  description: 'Self-leveling, anti-static, chemical resistant and decorative flooring systems.',
};

export default function EpoxySystemsPage() {
  const products = [
    {
      name: 'SWAATI EPOXY SL',
      description: 'Self-leveling epoxy floor coating',
      features: ['Seamless finish', 'High gloss', 'Easy clean'],
      applications: ['Pharma', 'Food', 'Electronics'],
    },
    {
      name: 'SWAATI EPOXY HD',
      description: 'Heavy-duty epoxy floor system',
      features: ['High abrasion resistance', 'Impact resistant', 'Chemical resistant'],
      applications: ['Warehouses', 'Loading docks', 'Manufacturing'],
    },
    {
      name: 'SWAATI EPOXY AS',
      description: 'Anti-static epoxy flooring',
      features: ['ESD control', 'Conductive', 'Seamless'],
      applications: ['Electronics', 'IT rooms', 'Clean rooms'],
    },
  ];

  return (
    <ProductCategoryPage
      title="Epoxy Flooring Systems"
      description="Industrial-grade epoxy flooring solutions for factories, warehouses, hospitals, laboratories and commercial spaces. These systems provide seamless finishes, high durability and strong chemical resistance."
      products={products}
    />
  );
}
